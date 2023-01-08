// network access has to be allowed with the --allow-net flag

// this small program will make a request to the passed url
// and print the body of the response.

// Deno.args contains the passed arguments
const url = Deno.args[0];

// make a request to the url
const res = await fetch(url);

// parse response body as ArrayBuffer
const body = new Uint8Array(await res.arrayBuffer());

// write to stdout
await Deno.stdout.write(body);
