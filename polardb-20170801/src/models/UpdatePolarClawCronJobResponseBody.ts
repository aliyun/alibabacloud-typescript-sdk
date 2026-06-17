// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolarClawCronJobResponseBodyJobDelivery extends $dara.Model {
  /**
   * @remarks
   * The optional channel account ID.
   * 
   * @example
   * default
   */
  accountId?: string;
  /**
   * @remarks
   * Indicates whether to ignore delivery failures.
   */
  bestEffort?: boolean;
  /**
   * @remarks
   * The delivery channel.
   * 
   * @example
   * telegram
   */
  channel?: string;
  /**
   * @remarks
   * The delivery mode. Valid values: `none`, `announce`, or `webhook`.
   * 
   * @example
   * announce
   */
  mode?: string;
  /**
   * @remarks
   * The delivery target. Required and must be a URL if `Mode` is `webhook`.
   * 
   * @example
   * https://example.com/webhook
   */
  to?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      bestEffort: 'BestEffort',
      channel: 'Channel',
      mode: 'Mode',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      bestEffort: 'boolean',
      channel: 'string',
      mode: 'string',
      to: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolarClawCronJobResponseBodyJobPayload extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to ignore delivery failures.
   * 
   * @example
   * false
   */
  bestEffortDeliver?: boolean;
  /**
   * @remarks
   * The optional delivery channel ID.
   * 
   * @example
   * telegram
   */
  channel?: string;
  /**
   * @remarks
   * Indicates whether to deliver the output to a channel.
   * 
   * @example
   * false
   */
  deliver?: boolean;
  /**
   * @remarks
   * The payload type. Valid values: `agentTurn` (Agent conversation) or `systemEvent` (system event).
   * 
   * @example
   * agentTurn
   */
  kind?: string;
  /**
   * @remarks
   * Indicates whether to use a lightweight context.
   * 
   * @example
   * false
   */
  lightContext?: boolean;
  /**
   * @remarks
   * The Agent conversation prompt.
   * 
   * @example
   * Generate the daily report.
   */
  message?: string;
  /**
   * @remarks
   * The model override.
   * 
   * @example
   * anthropic/sonnet-4.6
   */
  model?: string;
  /**
   * @remarks
   * The system event text.
   * 
   * @example
   * Generate the daily report.
   */
  text?: string;
  /**
   * @remarks
   * The optional execution timeout in seconds.
   * 
   * @example
   * 10
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * The optional delivery target.
   * 
   * @example
   * team
   */
  to?: string;
  static names(): { [key: string]: string } {
    return {
      bestEffortDeliver: 'BestEffortDeliver',
      channel: 'Channel',
      deliver: 'Deliver',
      kind: 'Kind',
      lightContext: 'LightContext',
      message: 'Message',
      model: 'Model',
      text: 'Text',
      timeoutSeconds: 'TimeoutSeconds',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bestEffortDeliver: 'boolean',
      channel: 'string',
      deliver: 'boolean',
      kind: 'string',
      lightContext: 'boolean',
      message: 'string',
      model: 'string',
      text: 'string',
      timeoutSeconds: 'number',
      to: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolarClawCronJobResponseBodyJobRunsUsage extends $dara.Model {
  /**
   * @remarks
   * The number of input tokens.
   * 
   * @example
   * 30250
   */
  inputTokens?: number;
  /**
   * @remarks
   * The number of output tokens.
   * 
   * @example
   * 30250
   */
  outputTokens?: number;
  /**
   * @remarks
   * The total number of tokens.
   * 
   * @example
   * 60500
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolarClawCronJobResponseBodyJobRuns extends $dara.Model {
  /**
   * @remarks
   * The action performed. Valid values: `finished`, `error`, or `skipped`.
   * 
   * @example
   * finished
   */
  action?: string;
  /**
   * @remarks
   * Indicates whether the result was delivered.
   * 
   * @example
   * true
   */
  delivered?: boolean;
  /**
   * @remarks
   * The delivery status.
   * 
   * @example
   * delivered
   */
  deliveryStatus?: string;
  /**
   * @remarks
   * The execution duration, in milliseconds.
   * 
   * @example
   * 27586
   */
  durationMs?: number;
  /**
   * @remarks
   * The associated job ID.
   * 
   * @example
   * 0ee00f56-f467-4d41-858c-ca4ede2c770e
   */
  jobId?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * daily-report
   */
  jobName?: string;
  /**
   * @remarks
   * The model used for the run.
   * 
   * @example
   * anthropic/sonnet-4.6
   */
  model?: string;
  /**
   * @remarks
   * The timestamp of the next scheduled run, in milliseconds.
   * 
   * @example
   * 1777424400000
   */
  nextRunAtMs?: number;
  /**
   * @remarks
   * The model provider.
   * 
   * @example
   * anthropic
   */
  provider?: string;
  /**
   * @remarks
   * The actual execution timestamp, in milliseconds.
   * 
   * @example
   * 1777370544931
   */
  runAtMs?: number;
  /**
   * @remarks
   * The associated session ID.
   * 
   * @example
   * abc123
   */
  sessionId?: string;
  /**
   * @remarks
   * The status of the run. Valid values: `ok`, `error`, or `skipped`.
   * 
   * @example
   * ok
   */
  status?: string;
  /**
   * @remarks
   * The run summary text.
   * 
   * @example
   * Report generated successfully.
   */
  summary?: string;
  /**
   * @remarks
   * The run timestamp, in milliseconds.
   * 
   * @example
   * 1777370572518
   */
  ts?: number;
  /**
   * @remarks
   * Optional token usage details.
   */
  usage?: UpdatePolarClawCronJobResponseBodyJobRunsUsage;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      delivered: 'Delivered',
      deliveryStatus: 'DeliveryStatus',
      durationMs: 'DurationMs',
      jobId: 'JobId',
      jobName: 'JobName',
      model: 'Model',
      nextRunAtMs: 'NextRunAtMs',
      provider: 'Provider',
      runAtMs: 'RunAtMs',
      sessionId: 'SessionId',
      status: 'Status',
      summary: 'Summary',
      ts: 'Ts',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      delivered: 'boolean',
      deliveryStatus: 'string',
      durationMs: 'number',
      jobId: 'string',
      jobName: 'string',
      model: 'string',
      nextRunAtMs: 'number',
      provider: 'string',
      runAtMs: 'number',
      sessionId: 'string',
      status: 'string',
      summary: 'string',
      ts: 'number',
      usage: UpdatePolarClawCronJobResponseBodyJobRunsUsage,
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolarClawCronJobResponseBodyJobSchedule extends $dara.Model {
  /**
   * @remarks
   * The base timestamp for interval alignment, in milliseconds.
   * 
   * @example
   * 1777370572518
   */
  anchorMs?: number;
  /**
   * @remarks
   * The ISO 8601 timestamp. Required if `Kind` is `at`.
   * 
   * @example
   * 2026-04-10T09:00:00+08:00
   */
  at?: string;
  /**
   * @remarks
   * The interval in milliseconds. Required if `Kind` is `every`.
   * 
   * @example
   * 100000
   */
  everyMs?: number;
  /**
   * @remarks
   * The cron expression. Required if `Kind` is `cron`.
   * 
   * @example
   * 0 9 * * *
   */
  expr?: string;
  /**
   * @remarks
   * The schedule type. Valid values: `cron` (cron expression), `every` (fixed interval), or `at` (one-time).
   * 
   * @example
   * cron
   */
  kind?: string;
  /**
   * @remarks
   * The IANA time zone, such as `Asia/Shanghai`.
   * 
   * @example
   * Asia/Shanghai
   */
  tz?: string;
  static names(): { [key: string]: string } {
    return {
      anchorMs: 'AnchorMs',
      at: 'At',
      everyMs: 'EveryMs',
      expr: 'Expr',
      kind: 'Kind',
      tz: 'Tz',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorMs: 'number',
      at: 'string',
      everyMs: 'number',
      expr: 'string',
      kind: 'string',
      tz: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolarClawCronJobResponseBodyJobState extends $dara.Model {
  /**
   * @remarks
   * **The number of consecutive failures.**
   * 
   * @example
   * 0
   */
  consecutiveErrors?: number;
  /**
   * @remarks
   * **The optional timestamp of the last run, in milliseconds.**
   * 
   * @example
   * 1777370544931
   */
  lastRunAtMs?: number;
  /**
   * @remarks
   * **The optional status of the last run.**
   * 
   * @example
   * ok
   */
  lastRunStatus?: string;
  /**
   * @remarks
   * **The timestamp for the next run, in milliseconds.**
   * 
   * @example
   * 1777424400000
   */
  nextRunAtMs?: number;
  static names(): { [key: string]: string } {
    return {
      consecutiveErrors: 'ConsecutiveErrors',
      lastRunAtMs: 'LastRunAtMs',
      lastRunStatus: 'LastRunStatus',
      nextRunAtMs: 'NextRunAtMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consecutiveErrors: 'number',
      lastRunAtMs: 'number',
      lastRunStatus: 'string',
      nextRunAtMs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolarClawCronJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * The optional ID of the Agent that runs the job.
   * 
   * @example
   * work
   */
  agentId?: string;
  /**
   * @remarks
   * The creation timestamp, in milliseconds.
   * 
   * @example
   * 1777368967284
   */
  createdAtMs?: number;
  /**
   * @remarks
   * Indicates whether the job is deleted after its first run.
   * 
   * @example
   * false
   */
  deleteAfterRun?: boolean;
  /**
   * @remarks
   * The optional result delivery configuration.
   */
  delivery?: UpdatePolarClawCronJobResponseBodyJobDelivery;
  /**
   * @remarks
   * The optional job description.
   * 
   * @example
   * Daily report generation
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the job is enabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The job ID (UUID).
   * 
   * @example
   * 0ee00f56-f467-4d41-858c-ca4ede2c770e
   */
  id?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * daily-report
   */
  name?: string;
  /**
   * @remarks
   * The execution payload configuration.
   */
  payload?: UpdatePolarClawCronJobResponseBodyJobPayload;
  /**
   * @remarks
   * **The run history. Returned only if `IncludeRuns` is `true`.**
   */
  runs?: UpdatePolarClawCronJobResponseBodyJobRuns[];
  /**
   * @remarks
   * The schedule configuration.
   */
  schedule?: UpdatePolarClawCronJobResponseBodyJobSchedule;
  /**
   * @remarks
   * The optional session routing key.
   * 
   * @example
   * abc123
   */
  sessionKey?: string;
  /**
   * @remarks
   * The session target. Valid values: `main`, `isolated`, or `current`.
   * 
   * @example
   * main
   */
  sessionTarget?: string;
  /**
   * @remarks
   * **The running state of the job.**
   */
  state?: UpdatePolarClawCronJobResponseBodyJobState;
  /**
   * @remarks
   * The last update timestamp, in milliseconds.
   * 
   * @example
   * 1777370572517
   */
  updatedAtMs?: number;
  /**
   * @remarks
   * The wake mode. Valid values: `now` or `next-heartbeat`.
   * 
   * @example
   * now
   */
  wakeMode?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      createdAtMs: 'CreatedAtMs',
      deleteAfterRun: 'DeleteAfterRun',
      delivery: 'Delivery',
      description: 'Description',
      enabled: 'Enabled',
      id: 'Id',
      name: 'Name',
      payload: 'Payload',
      runs: 'Runs',
      schedule: 'Schedule',
      sessionKey: 'SessionKey',
      sessionTarget: 'SessionTarget',
      state: 'State',
      updatedAtMs: 'UpdatedAtMs',
      wakeMode: 'WakeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      createdAtMs: 'number',
      deleteAfterRun: 'boolean',
      delivery: UpdatePolarClawCronJobResponseBodyJobDelivery,
      description: 'string',
      enabled: 'boolean',
      id: 'string',
      name: 'string',
      payload: UpdatePolarClawCronJobResponseBodyJobPayload,
      runs: { 'type': 'array', 'itemType': UpdatePolarClawCronJobResponseBodyJobRuns },
      schedule: UpdatePolarClawCronJobResponseBodyJobSchedule,
      sessionKey: 'string',
      sessionTarget: 'string',
      state: UpdatePolarClawCronJobResponseBodyJobState,
      updatedAtMs: 'number',
      wakeMode: 'string',
    };
  }

  validate() {
    if(this.delivery && typeof (this.delivery as any).validate === 'function') {
      (this.delivery as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    if(Array.isArray(this.runs)) {
      $dara.Model.validateArray(this.runs);
    }
    if(this.schedule && typeof (this.schedule as any).validate === 'function') {
      (this.schedule as any).validate();
    }
    if(this.state && typeof (this.state as any).validate === 'function') {
      (this.state as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolarClawCronJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Details of the updated job.
   */
  job?: UpdatePolarClawCronJobResponseBodyJob;
  /**
   * @remarks
   * The success message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  ok?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2281C6C9-CBAB-1AFD-8400-670750CF6025_2212
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      code: 'Code',
      job: 'Job',
      message: 'Message',
      ok: 'Ok',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      code: 'number',
      job: UpdatePolarClawCronJobResponseBodyJob,
      message: 'string',
      ok: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    if(this.job && typeof (this.job as any).validate === 'function') {
      (this.job as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

