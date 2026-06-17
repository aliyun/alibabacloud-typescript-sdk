// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolarClawCronJobRequestDelivery extends $dara.Model {
  /**
   * @remarks
   * The account ID for the delivery channel.
   * 
   * @example
   * default
   */
  accountId?: string;
  /**
   * @remarks
   * Specifies whether to use best-effort delivery. If `true`, delivery failures are ignored.
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
   * The delivery mode. Valid values are `none`, `announce`, and `webhook`.
   * 
   * @example
   * announce
   */
  mode?: string;
  /**
   * @remarks
   * The recipient for the delivery.
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

export class CreatePolarClawCronJobRequestFailureAlert extends $dara.Model {
  /**
   * @remarks
   * The account ID for the alert channel.
   * 
   * @example
   * default
   */
  accountId?: string;
  /**
   * @remarks
   * The number of consecutive failures required to trigger an alert.
   * 
   * @example
   * 3
   */
  after?: number;
  /**
   * @remarks
   * The channel for sending failure alerts.
   * 
   * @example
   * feishu
   */
  channel?: string;
  /**
   * @remarks
   * The cooldown period, in milliseconds, between alerts for the same job.
   * 
   * @example
   * 5000
   */
  cooldownMs?: number;
  /**
   * @remarks
   * The mode for sending alerts. Valid values are `announce` and `webhook`.
   * 
   * @example
   * announce
   */
  mode?: string;
  /**
   * @remarks
   * The recipient for the failure alert.
   * 
   * @example
   * ou_***
   */
  to?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      after: 'After',
      channel: 'Channel',
      cooldownMs: 'CooldownMs',
      mode: 'Mode',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      after: 'number',
      channel: 'string',
      cooldownMs: 'number',
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

export class CreatePolarClawCronJobRequestPayload extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use best-effort delivery. If `true`, delivery failures are ignored.
   * 
   * @example
   * false
   */
  bestEffortDeliver?: boolean;
  /**
   * @remarks
   * The ID of the delivery channel.
   * 
   * @example
   * feishu
   */
  channel?: string;
  /**
   * @remarks
   * Specifies whether to deliver the agent\\"s output to a channel.
   * 
   * @example
   * true
   */
  deliver?: boolean;
  /**
   * @remarks
   * A list of fallback models to use if the primary model fails.
   */
  fallbacks?: string[];
  /**
   * @remarks
   * The payload type. Valid values are `agentTurn` and `systemEvent`.
   * 
   * @example
   * systemEvent
   */
  kind?: string;
  /**
   * @remarks
   * Specifies whether to use a light context for the agent conversation.
   * 
   * @example
   * false
   */
  lightContext?: boolean;
  /**
   * @remarks
   * The prompt for an agent conversation, used when `Kind` is `agentTurn`.
   * 
   * @example
   * Generate the daily report.
   */
  message?: string;
  /**
   * @remarks
   * Specifies a model that overrides the agent\\"s default model.
   * 
   * @example
   * bailian/qwen3.5-plus
   */
  model?: string;
  /**
   * @remarks
   * The text for the system event, used when `Kind` is `systemEvent`.
   * 
   * @example
   * Generate the daily report.
   */
  text?: string;
  /**
   * @remarks
   * The thinking level for the agent\\"s response generation. Valid values are `off`, `minimal`, `low`, `medium`, `high`, and `xhigh`.
   * 
   * @example
   * xhigh
   */
  thinking?: string;
  /**
   * @remarks
   * The execution timeout, in seconds.
   * 
   * @example
   * 10
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * The specific target or recipient within the channel.
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
      fallbacks: 'Fallbacks',
      kind: 'Kind',
      lightContext: 'LightContext',
      message: 'Message',
      model: 'Model',
      text: 'Text',
      thinking: 'Thinking',
      timeoutSeconds: 'TimeoutSeconds',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bestEffortDeliver: 'boolean',
      channel: 'string',
      deliver: 'boolean',
      fallbacks: { 'type': 'array', 'itemType': 'string' },
      kind: 'string',
      lightContext: 'boolean',
      message: 'string',
      model: 'string',
      text: 'string',
      thinking: 'string',
      timeoutSeconds: 'number',
      to: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fallbacks)) {
      $dara.Model.validateArray(this.fallbacks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolarClawCronJobRequestSchedule extends $dara.Model {
  /**
   * @remarks
   * The anchor timestamp for aligning interval-based schedules, in milliseconds.
   * 
   * @example
   * 1777370572518
   */
  anchorMs?: number;
  /**
   * @remarks
   * The specific time for a one-time execution, specified as an ISO 8601 timestamp.
   * 
   * @example
   * 2026-04-10T09:00:00+08:00
   */
  at?: string;
  /**
   * @remarks
   * The task execution interval, in milliseconds.
   * 
   * @example
   * 100000
   */
  everyMs?: number;
  /**
   * @remarks
   * The cron expression that specifies when the task runs.
   * 
   * @example
   * 0 9 * * *
   */
  expr?: string;
  /**
   * @remarks
   * The type of schedule.
   * 
   * @example
   * cron
   */
  kind?: string;
  /**
   * @remarks
   * The deterministic jitter window, in milliseconds.
   * 
   * @example
   * 0
   */
  staggerMs?: number;
  /**
   * @remarks
   * The time zone for the schedule.
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
      staggerMs: 'StaggerMs',
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
      staggerMs: 'number',
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

export class CreatePolarClawCronJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent that executes the task.
   * 
   * @example
   * main
   */
  agentId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * Specifies whether to automatically delete the job after its first execution. This is useful for one-time tasks. Default: `false`.
   * 
   * @example
   * false
   */
  deleteAfterRun?: boolean;
  /**
   * @remarks
   * The configuration for delivering task execution results.
   * 
   * @example
   * {"Mode":"announce","Channel":"telegram"}
   */
  delivery?: CreatePolarClawCronJobRequestDelivery;
  /**
   * @remarks
   * A description of the task.
   * 
   * @example
   * Daily report generation
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the cron job is enabled. Default: `true`.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The failure alert configuration.
   * 
   * @example
   * {"After":3,"Channel":"telegram"}
   */
  failureAlert?: CreatePolarClawCronJobRequestFailureAlert;
  /**
   * @remarks
   * The unique name of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * daily-report
   */
  name?: string;
  /**
   * @remarks
   * The execution payload configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Kind":"agentTurn","Message":"Generate the daily report."}
   */
  payload?: CreatePolarClawCronJobRequestPayload;
  /**
   * @remarks
   * Specifies whether to restart the gateway upon job creation. Default: `true`.
   * 
   * @example
   * true
   */
  restart?: boolean;
  /**
   * @remarks
   * Specifies whether to run the job once immediately upon creation. Default: `false`.
   * 
   * @example
   * false
   */
  runImmediately?: boolean;
  /**
   * @remarks
   * The schedule configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Kind":"cron","Expr":"0 9 * * *","Tz":"Asia/Shanghai"}
   */
  schedule?: CreatePolarClawCronJobRequestSchedule;
  /**
   * @remarks
   * The session routing key, which determines the conversation session for the task.
   * 
   * @example
   * agent:main:feishu:direct:***
   */
  sessionKey?: string;
  /**
   * @remarks
   * The session target. Valid values are `main`, `isolated`, and `current`.
   * 
   * This parameter is required.
   * 
   * @example
   * main
   */
  sessionTarget?: string;
  /**
   * @remarks
   * The wake mode for the agent. Valid values are `now` and `next-heartbeat`.
   * 
   * This parameter is required.
   * 
   * @example
   * now
   */
  wakeMode?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      applicationId: 'ApplicationId',
      deleteAfterRun: 'DeleteAfterRun',
      delivery: 'Delivery',
      description: 'Description',
      enabled: 'Enabled',
      failureAlert: 'FailureAlert',
      name: 'Name',
      payload: 'Payload',
      restart: 'Restart',
      runImmediately: 'RunImmediately',
      schedule: 'Schedule',
      sessionKey: 'SessionKey',
      sessionTarget: 'SessionTarget',
      wakeMode: 'WakeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      applicationId: 'string',
      deleteAfterRun: 'boolean',
      delivery: CreatePolarClawCronJobRequestDelivery,
      description: 'string',
      enabled: 'boolean',
      failureAlert: CreatePolarClawCronJobRequestFailureAlert,
      name: 'string',
      payload: CreatePolarClawCronJobRequestPayload,
      restart: 'boolean',
      runImmediately: 'boolean',
      schedule: CreatePolarClawCronJobRequestSchedule,
      sessionKey: 'string',
      sessionTarget: 'string',
      wakeMode: 'string',
    };
  }

  validate() {
    if(this.delivery && typeof (this.delivery as any).validate === 'function') {
      (this.delivery as any).validate();
    }
    if(this.failureAlert && typeof (this.failureAlert as any).validate === 'function') {
      (this.failureAlert as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    if(this.schedule && typeof (this.schedule as any).validate === 'function') {
      (this.schedule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

