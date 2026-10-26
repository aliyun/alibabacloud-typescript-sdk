// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolarClawCronJobRequestDelivery extends $dara.Model {
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
   * The delivery mode. Valid values: none, announce, webhook.
   * 
   * @example
   * announce
   */
  mode?: string;
  /**
   * @remarks
   * The delivery target.
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
   * The channel account ID.
   * 
   * @example
   * default
   */
  accountId?: string;
  /**
   * @remarks
   * The number of consecutive failures before an alert is triggered.
   * 
   * @example
   * 3
   */
  after?: number;
  /**
   * @remarks
   * The alert channel.
   * 
   * @example
   * feishu
   */
  channel?: string;
  /**
   * @remarks
   * The minimum interval between two alerts in milliseconds.
   * 
   * @example
   * 5000
   */
  cooldownMs?: number;
  /**
   * @remarks
   * The alert mode. Valid values: announce, webhook.
   * 
   * @example
   * announce
   */
  mode?: string;
  /**
   * @remarks
   * The alert target.
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
   * Specifies whether to ignore delivery failures.
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
   * Specifies whether to deliver the output to a channel.
   * 
   * @example
   * true
   */
  deliver?: boolean;
  /**
   * @remarks
   * The list of fallback models.
   */
  fallbacks?: string[];
  /**
   * @remarks
   * The payload type. Valid values: agentTurn, systemEvent.
   * 
   * @example
   * systemEvent
   */
  kind?: string;
  /**
   * @remarks
   * Specifies whether to use a lightweight context.
   * 
   * @example
   * false
   */
  lightContext?: boolean;
  /**
   * @remarks
   * The agent conversation prompt.
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
   * The thinking level. Valid values: off, minimal, low, medium, high, xhigh.
   * 
   * @example
   * xhigh
   */
  thinking?: string;
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
   * The delivery target.
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
   * The base timestamp for interval alignment.
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
   * 100000
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
   * The schedule type. Valid values: cron, every, at.
   * 
   * @example
   * cron
   */
  kind?: string;
  /**
   * @remarks
   * The deterministic jitter window in milliseconds.
   * 
   * @example
   * 0
   */
  staggerMs?: number;
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
   * The ID of the specified execution agent.
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
   * Specifies whether to automatically delete the task after the first execution. Default value: false.
   * 
   * @example
   * false
   */
  deleteAfterRun?: boolean;
  /**
   * @remarks
   * The result delivery configuration.
   * 
   * @example
   * {"Mode":"announce","Channel":"telegram"}
   */
  delivery?: CreatePolarClawCronJobRequestDelivery;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * Daily report generation
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the task is enabled. Default value: true.
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
   * Specifies whether to restart the gateway after creation. Default value: true.
   * 
   * @example
   * true
   */
  restart?: boolean;
  /**
   * @remarks
   * Specifies whether to run it once immediately after creation. Default value: false.
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
   * The session routing key.
   * 
   * @example
   * agent:main:feishu:direct:***
   */
  sessionKey?: string;
  /**
   * @remarks
   * The session target. Valid values: main, isolated, current.
   * 
   * This parameter is required.
   * 
   * @example
   * main
   */
  sessionTarget?: string;
  /**
   * @remarks
   * The wake mode. Valid values: now, next-heartbeat.
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

