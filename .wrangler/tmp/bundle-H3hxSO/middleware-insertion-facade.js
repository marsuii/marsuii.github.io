				import worker, * as OTHER_EXPORTS from "C:\\Users\\marsh\\Downloads\\portfolio-master\\portfolio-master\\.wrangler\\tmp\\pages-UsZy5m\\functionsWorker-0.012730036790153498.mjs";
				import * as __MIDDLEWARE_0__ from "C:\\Users\\marsh\\Downloads\\portfolio-master\\portfolio-master\\node_modules\\wrangler\\templates\\middleware\\middleware-miniflare3-json-error.ts";
				const envWrappers = [__MIDDLEWARE_0__.wrap].filter(Boolean);
				const facade = {
					...worker,
					envWrappers,
					middleware: [
						__MIDDLEWARE_0__.default,
            ...(worker.middleware ? worker.middleware : []),
					].filter(Boolean)
				}
				export * from "C:\\Users\\marsh\\Downloads\\portfolio-master\\portfolio-master\\.wrangler\\tmp\\pages-UsZy5m\\functionsWorker-0.012730036790153498.mjs";

				const maskDurableObjectDefinition = (cls) =>
					class extends cls {
						constructor(state, env) {
							let wrappedEnv = env
							for (const wrapFn of envWrappers) {
								wrappedEnv = wrapFn(wrappedEnv)
							}
							super(state, wrappedEnv);
						}
					};
				

				export default facade;