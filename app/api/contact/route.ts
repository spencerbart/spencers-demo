import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const data = await request.json();

    // Print the data to the server console (command line)
    console.log('Received contact form submission:', data);

    // Return a success response
    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing submission:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}

