// run with --allow-net

// test it with netcat:
// nc localhost 8080

const listener = Deno.listen({ port: 8080 });
console.log("listening on 0.0.0.0:8080");

for await (const conn of listener) {
  console.log(conn);
  Deno.copy(conn, conn);
}
