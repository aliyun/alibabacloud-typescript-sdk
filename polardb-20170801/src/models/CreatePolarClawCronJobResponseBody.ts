// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolarClawCronJobResponseBodyJobDelivery extends $dara.Model {
  /**
   * @remarks
   * The channel account ID.
   * 
   * @example
   * default
   */
  accountId?: string;
  /**
   * @remarks
   * Specifies whether to ignore delivery failures.
   * 
   * @example
   * false
   */
  bestEffort?: boolean;
  /**
   * @remarks
   * The delivery channel.
   * 
   * @example
   * feishu
   */
  channel?: string;
  /**
   * @remarks
   * The delivery mode. Valid values: `none`, `announce`, and `webhook`.
   * 
   * @example
   * announce
   */
  mode?: string;
  /**
   * @remarks
   * The recipient.
   * 
   * @example
   * ou_***
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

export class CreatePolarClawCronJobResponseBodyJobPayload extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to ignore delivery failures.
   * 
   * @example
   * false
   */
  bestEffortDeliver?: boolean;
  /**
   * @remarks
   * The delivery channel ID.
   * 
   * @example
   * feishu
   */
  channel?: string;
  /**
   * @remarks
   * Indicates whether to deliver the output to the delivery channel.
   * 
   * @example
   * false
   */
  deliver?: boolean;
  /**
   * @remarks
   * The payload type. Valid values: `agentTurn` and `systemEvent`.
   * 
   * @example
   * agentTurn
   */
  kind?: string;
  /**
   * @remarks
   * Indicates whether to use a light context.
   * 
   * @example
   * false
   */
  lightContext?: boolean;
  /**
   * @remarks
   * The agent prompt.
   * 
   * @example
   * Generate the daily report.
   */
  message?: string;
  /**
   * @remarks
   * The overriding model.
   * 
   * @example
   * bailian/qwen3.5-plus
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
   * The execution timeout in seconds.
   * 
   * @example
   * 10
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * The recipient.
   * 
   * @example
   * ou_***
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

export class CreatePolarClawCronJobResponseBodyJobRunsUsage extends $dara.Model {
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

export class CreatePolarClawCronJobResponseBodyJobRuns extends $dara.Model {
  /**
   * @remarks
   * The action performed. Valid values: `finished`, `error`, and `skipped`.
   * 
   * @example
   * finished
   */
  action?: string;
  /**
   * @remarks
   * Specifies whether the results were delivered.
   * 
   * @example
   * false
   */
  delivered?: boolean;
  /**
   * @remarks
   * The delivery status.
   * 
   * @example
   * not-requested
   */
  deliveryStatus?: string;
  /**
   * @remarks
   * The execution duration in milliseconds.
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
   * f83f5278-1abe-40a6-b10e-ad3ecdc05de2
   */
  jobId?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * test
   */
  jobName?: string;
  /**
   * @remarks
   * The model used for the run.
   * 
   * @example
   * bailian/qwen3.5-plus
   */
  model?: string;
  /**
   * @remarks
   * The next run timestamp in milliseconds.
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
   * bailian
   */
  provider?: string;
  /**
   * @remarks
   * The actual execution timestamp in milliseconds.
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
   * ***
   */
  sessionId?: string;
  /**
   * @remarks
   * The status of the run. Valid values: `ok`, `error`, and `skipped`.
   * 
   * @example
   * ok
   */
  status?: string;
  /**
   * @remarks
   * The run summary.
   * 
   * @example
   * Generate the daily report.
   */
  summary?: string;
  /**
   * @remarks
   * The run timestamp in milliseconds.
   * 
   * @example
   * 1777370572518
   */
  ts?: number;
  /**
   * @remarks
   * The token usage details.
   */
  usage?: CreatePolarClawCronJobResponseBodyJobRunsUsage;
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
      usage: CreatePolarClawCronJobResponseBodyJobRunsUsage,
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

export class CreatePolarClawCronJobResponseBodyJobSchedule extends $dara.Model {
  /**
   * @remarks
   * The anchor timestamp for interval alignment.
   * 
   * @example
   * 1777370572518
   */
  anchorMs?: number;
  /**
   * @remarks
   * The ISO 8601 timestamp.
   * 
   * @example
   * 2026-04-10T09:00:00+08:00
   */
  at?: string;
  /**
   * @remarks
   * The interval in milliseconds.
   * 
   * @example
   * 1000
   */
  everyMs?: number;
  /**
   * @remarks
   * The cron expression.
   * 
   * @example
   * 0 9 * * *
   */
  expr?: string;
  /**
   * @remarks
   * The schedule type. Valid values: `cron`, `every`, and `at`.
   * 
   * @example
   * cron
   */
  kind?: string;
  /**
   * @remarks
   * The IANA time zone.
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

export class CreatePolarClawCronJobResponseBodyJobState extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive execution failures.
   * 
   * @example
   * 0
   */
  consecutiveErrors?: number;
  /**
   * @remarks
   * The last run timestamp in milliseconds.
   * 
   * @example
   * 1777370544931
   */
  lastRunAtMs?: number;
  /**
   * @remarks
   * The last run status.
   * 
   * @example
   * ok
   */
  lastRunStatus?: string;
  /**
   * @remarks
   * The next run timestamp in milliseconds.
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

export class CreatePolarClawCronJobResponseBodyJob extends $dara.Model {
  /**
   * @remarks
   * The ID of the executing agent.
   * 
   * @example
   * main
   */
  agentId?: string;
  /**
   * @remarks
   * The creation timestamp in milliseconds.
   * 
   * @example
   * 1777368967284
   */
  createdAtMs?: number;
  /**
   * @remarks
   * Indicates whether the cron job is deleted after its first run.
   * 
   * @example
   * false
   */
  deleteAfterRun?: boolean;
  /**
   * @remarks
   * The delivery configuration.
   */
  delivery?: CreatePolarClawCronJobResponseBodyJobDelivery;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the cron job is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The job ID (UUID).
   * 
   * @example
   * e2c57423-12f0-45cc-a387-6155168b3201
   */
  id?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The execution payload.
   */
  payload?: CreatePolarClawCronJobResponseBodyJobPayload;
  /**
   * @remarks
   * The run history.
   */
  runs?: CreatePolarClawCronJobResponseBodyJobRuns[];
  /**
   * @remarks
   * The schedule configuration.
   */
  schedule?: CreatePolarClawCronJobResponseBodyJobSchedule;
  /**
   * @remarks
   * The session key.
   * 
   * @example
   * agent:main:feishu:direct:***
   */
  sessionKey?: string;
  /**
   * @remarks
   * The session target. Valid values: `main`, `isolated`, and `current`.
   * 
   * @example
   * main
   */
  sessionTarget?: string;
  /**
   * @remarks
   * The current state of the job.
   */
  state?: CreatePolarClawCronJobResponseBodyJobState;
  /**
   * @remarks
   * The update timestamp in milliseconds.
   * 
   * @example
   * 1777370572517
   */
  updatedAtMs?: number;
  /**
   * @remarks
   * The wake mode. Valid values: `now` and `next-heartbeat`.
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
      delivery: CreatePolarClawCronJobResponseBodyJobDelivery,
      description: 'string',
      enabled: 'boolean',
      id: 'string',
      name: 'string',
      payload: CreatePolarClawCronJobResponseBodyJobPayload,
      runs: { 'type': 'array', 'itemType': CreatePolarClawCronJobResponseBodyJobRuns },
      schedule: CreatePolarClawCronJobResponseBodyJobSchedule,
      sessionKey: 'string',
      sessionTarget: 'string',
      state: CreatePolarClawCronJobResponseBodyJobState,
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

export class CreatePolarClawCronJobResponseBody extends $dara.Model {
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
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Details of the created cron job.
   */
  job?: CreatePolarClawCronJobResponseBodyJob;
  /**
   * @remarks
   * The response message.
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
   * Indicates whether the job ran immediately after creation.
   * 
   * @example
   * false
   */
  ranImmediately?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      code: 'Code',
      job: 'Job',
      message: 'Message',
      ok: 'Ok',
      ranImmediately: 'RanImmediately',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      code: 'number',
      job: CreatePolarClawCronJobResponseBodyJob,
      message: 'string',
      ok: 'boolean',
      ranImmediately: 'boolean',
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

