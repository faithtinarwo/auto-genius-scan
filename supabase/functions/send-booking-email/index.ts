import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BookingRequest {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  service: string;
  date: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const bookingData: BookingRequest = await req.json();
    console.log("Received booking request:", bookingData);

    // Send email to business owner
    const ownerEmailResponse = await resend.emails.send({
      from: "ZCE Motors <onboarding@resend.dev>",
      to: ["Josephtishashe@gmail.com"],
      subject: "New Booking Request - ZCE Motors",
      html: `
        <h1>New Booking Request</h1>
        <h2>Customer Details:</h2>
        <p><strong>Name:</strong> ${bookingData.name}</p>
        <p><strong>Phone:</strong> ${bookingData.phone}</p>
        <p><strong>Email:</strong> ${bookingData.email}</p>
        
        <h2>Service Details:</h2>
        <p><strong>Vehicle:</strong> ${bookingData.vehicle}</p>
        <p><strong>Service Needed:</strong> ${bookingData.service}</p>
        <p><strong>Preferred Date:</strong> ${bookingData.date}</p>
        
        ${bookingData.message ? `<h2>Additional Details:</h2><p>${bookingData.message}</p>` : ''}
      `,
    });

    console.log("Owner email sent:", ownerEmailResponse);

    // Send confirmation email to customer
    if (bookingData.email) {
      const customerEmailResponse = await resend.emails.send({
        from: "ZCE Motors <onboarding@resend.dev>",
        to: [bookingData.email],
        subject: "Booking Confirmation - ZCE Motors",
        html: `
          <h1>Thank you for your booking request, ${bookingData.name}!</h1>
          <p>We have received your request for car diagnostics service and will contact you shortly to confirm your appointment.</p>
          
          <h2>Your Booking Details:</h2>
          <p><strong>Vehicle:</strong> ${bookingData.vehicle}</p>
          <p><strong>Service:</strong> ${bookingData.service}</p>
          <p><strong>Preferred Date:</strong> ${bookingData.date}</p>
          
          <p>If you have any questions, please contact us at:</p>
          <p>Phone: +263 78 056 7523</p>
          <p>Email: Josephtishashe@gmail.com</p>
          
          <p><em>Revive. Restore. Revitalize.</em></p>
          <p><strong>ZCE Motors Team</strong></p>
        `,
      });

      console.log("Customer confirmation email sent:", customerEmailResponse);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Booking emails sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-booking-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
