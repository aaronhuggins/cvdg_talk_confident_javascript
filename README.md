# cvdg_talk_confident_javascript

## 1. Install Deno

[Get Deno for Windows, Linux, or Mac!](https://deno.land/#installation)

## 2. Profit!

### GUI Hello world

Just-in-time:

```shell
deno run --unstable --allow-net --allow-read --allow-write --allow-env --allow-ffi hello_world.ts
```

Ahead-of-time compiled:

```shell
deno compile --unstable --allow-net --allow-read --allow-write --allow-env --allow-ffi hello_world.ts
./hello_world
```

### Static file server

Run an HTTP server in less than 30 lines of code. Use CTRL+C to quit.

```shell
deno run --allow-net --allow-read serve_todomvc.ts
```

### Benchmarking

Use Deno for benchmarking your code!

```shell
deno bench --unstable benchmark_for.ts
```
