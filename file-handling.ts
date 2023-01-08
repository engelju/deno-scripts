// run with --allow-read

// this small program will print the content of the passed file

let filename = Deno.args[0];

let file = await Deno.open(filename);

// The copy() function here actually makes no more than the necessary kernel→userspace→kernel copies. That is, the same memory from which data is read from the file, is written to stdout.
await Deno.copy(file, Deno.stdout);
file.close();
