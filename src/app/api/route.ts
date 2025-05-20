import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const ProcessedData = {
      time: new Date().toLocaleString(),
      name: data.name,
      message: data.message,
      userId: data.userId,
    };

    const endpoint =
      "https://webhook.site/61c028e5-3549-47d2-af27-286582d625e5";
    await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return NextResponse.json({
      success: true,
      data: ProcessedData,
    });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
  
}