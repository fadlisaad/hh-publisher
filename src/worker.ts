import handler, { createScheduledHandler, PluginBridge } from '@emdash-cms/cloudflare/worker';

export { PluginBridge };

type WorkerHandler = typeof handler & {
  scheduled: ReturnType<typeof createScheduledHandler>;
};

export default {
  ...handler,
  scheduled: createScheduledHandler(),
} satisfies WorkerHandler;
