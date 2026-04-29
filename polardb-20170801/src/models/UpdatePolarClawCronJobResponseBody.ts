// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolarClawCronJobResponseBodyJobDelivery extends $dara.Model {
  /**
   * @example
   * default
   */
  accountId?: string;
  bestEffort?: boolean;
  /**
   * @example
   * telegram
   */
  channel?: string;
  /**
   * @example
   * announce
   */
  mode?: string;
  /**
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
   * @example
   * false
   */
  bestEffortDeliver?: boolean;
  /**
   * @example
   * telegram
   */
  channel?: string;
  /**
   * @example
   * false
   */
  deliver?: boolean;
  /**
   * @example
   * agentTurn
   */
  kind?: string;
  /**
   * @example
   * false
   */
  lightContext?: boolean;
  /**
   * @example
   * Generate the daily report.
   */
  message?: string;
  /**
   * @example
   * anthropic/sonnet-4.6
   */
  model?: string;
  /**
   * @example
   * Generate the daily report.
   */
  text?: string;
  /**
   * @example
   * 10
   */
  timeoutSeconds?: number;
  /**
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
   * @example
   * 30250
   */
  inputTokens?: number;
  /**
   * @example
   * 30250
   */
  outputTokens?: number;
  /**
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
   * @example
   * finished
   */
  action?: string;
  /**
   * @example
   * true
   */
  delivered?: boolean;
  /**
   * @example
   * delivered
   */
  deliveryStatus?: string;
  /**
   * @example
   * 27586
   */
  durationMs?: number;
  /**
   * @example
   * 0ee00f56-f467-4d41-858c-ca4ede2c770e
   */
  jobId?: string;
  /**
   * @example
   * daily-report
   */
  jobName?: string;
  /**
   * @example
   * anthropic/sonnet-4.6
   */
  model?: string;
  /**
   * @example
   * 1777424400000
   */
  nextRunAtMs?: number;
  /**
   * @example
   * anthropic
   */
  provider?: string;
  /**
   * @example
   * 1777370544931
   */
  runAtMs?: number;
  /**
   * @example
   * abc123
   */
  sessionId?: string;
  /**
   * @example
   * ok
   */
  status?: string;
  /**
   * @example
   * Report generated successfully.
   */
  summary?: string;
  /**
   * @example
   * 1777370572518
   */
  ts?: number;
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
   * @example
   * 1777370572518
   */
  anchorMs?: number;
  /**
   * @example
   * 2026-04-10T09:00:00+08:00
   */
  at?: string;
  /**
   * @example
   * 100000
   */
  everyMs?: number;
  /**
   * @example
   * 0 9 * * *
   */
  expr?: string;
  /**
   * @example
   * cron
   */
  kind?: string;
  /**
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
   * @example
   * 0
   */
  consecutiveErrors?: number;
  /**
   * @example
   * 1777370544931
   */
  lastRunAtMs?: number;
  /**
   * @example
   * ok
   */
  lastRunStatus?: string;
  /**
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
   * @example
   * work
   */
  agentId?: string;
  /**
   * @example
   * 1777368967284
   */
  createdAtMs?: number;
  /**
   * @example
   * false
   */
  deleteAfterRun?: boolean;
  delivery?: UpdatePolarClawCronJobResponseBodyJobDelivery;
  /**
   * @example
   * Daily report generation
   */
  description?: string;
  /**
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @example
   * 0ee00f56-f467-4d41-858c-ca4ede2c770e
   */
  id?: string;
  /**
   * @example
   * daily-report
   */
  name?: string;
  payload?: UpdatePolarClawCronJobResponseBodyJobPayload;
  runs?: UpdatePolarClawCronJobResponseBodyJobRuns[];
  schedule?: UpdatePolarClawCronJobResponseBodyJobSchedule;
  /**
   * @example
   * abc123
   */
  sessionKey?: string;
  /**
   * @example
   * main
   */
  sessionTarget?: string;
  state?: UpdatePolarClawCronJobResponseBodyJobState;
  /**
   * @example
   * 1777370572517
   */
  updatedAtMs?: number;
  /**
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
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * 200
   */
  code?: number;
  job?: UpdatePolarClawCronJobResponseBodyJob;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * true
   */
  ok?: boolean;
  /**
   * @remarks
   * Id of the request
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

