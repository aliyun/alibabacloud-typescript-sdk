// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolarClawCronJobRequestDelivery extends $dara.Model {
  /**
   * @remarks
   * The account ID for the channel.
   * 
   * @example
   * accountId123
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
   * telegram
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
   * The delivery target. This parameter is required and must be a URL if `Delivery.Mode` is `webhook`.
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

export class UpdatePolarClawCronJobRequestFailureAlert extends $dara.Model {
  /**
   * @remarks
   * The account ID for the channel.
   * 
   * @example
   * accountId123
   */
  accountId?: string;
  /**
   * @remarks
   * The number of consecutive failures after which to send an alert.
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
   * email
   */
  channel?: string;
  /**
   * @remarks
   * The minimum interval between two alerts, in milliseconds.
   * 
   * @example
   * 5000
   */
  cooldownMs?: number;
  /**
   * @remarks
   * The alert mode. Valid values: `announce` and `webhook`.
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
   * user@example.com
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

export class UpdatePolarClawCronJobRequestPayload extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to ignore delivery failures.
   */
  bestEffortDeliver?: boolean;
  /**
   * @remarks
   * The ID of the delivery channel.
   * 
   * @example
   * telegram
   */
  channel?: string;
  /**
   * @remarks
   * Specifies whether to deliver the output to a channel.
   * 
   * @example
   * false
   */
  deliver?: boolean;
  /**
   * @remarks
   * A list of fallback models.
   */
  fallbacks?: string[];
  /**
   * @remarks
   * The payload type. Valid values are `agentTurn` (for an Agent conversation) or `systemEvent` (for a system event).
   * 
   * @example
   * agentTurn
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
   * The prompt for the Agent conversation. This parameter is required if `Payload.Kind` is `agentTurn`.
   * 
   * @example
   * Generate the daily report and send it to the team.
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
   * The text for the system event. This parameter is required if `Payload.Kind` is `systemEvent`.
   * 
   * @example
   * Send a reminder to the user.
   */
  text?: string;
  /**
   * @remarks
   * The thinking level. Valid values: `off`, `minimal`, `low`, `medium`, `high`, and `xhigh`.
   * 
   * @example
   * medium
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
   * team
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

export class UpdatePolarClawCronJobRequestSchedule extends $dara.Model {
  /**
   * @remarks
   * The anchor timestamp for interval alignment, in milliseconds.
   * 
   * @example
   * 1777370572518
   */
  anchorMs?: number;
  /**
   * @remarks
   * An ISO 8601 timestamp. This parameter is required if `Schedule.Kind` is `at`. For example: `2026-04-10T09:00:00+08:00`.
   * 
   * @example
   * 2026-04-10T09:00:00+08:00
   */
  at?: string;
  /**
   * @remarks
   * The interval in milliseconds. This parameter is required if `Schedule.Kind` is `every`.
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
   * The schedule type.
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
   * The time zone.
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

export class UpdatePolarClawCronJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Agent that runs the task.
   * 
   * @example
   * work
   */
  agentId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-xxx
   */
  applicationId?: string;
  /**
   * @remarks
   * Specifies whether to delete the task after its first execution.
   * 
   * @example
   * true
   */
  deleteAfterRun?: boolean;
  /**
   * @remarks
   * The result delivery configuration.
   * 
   * @example
   * {"Mode":"announce","Channel":"telegram"}
   */
  delivery?: UpdatePolarClawCronJobRequestDelivery;
  /**
   * @remarks
   * The new description for the task.
   * 
   * @example
   * Daily report generation
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the task is enabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The configuration for failure alerts. Set this to `false` to disable alerts.
   * 
   * @example
   * {"After":3,"Channel":"telegram"}
   */
  failureAlert?: UpdatePolarClawCronJobRequestFailureAlert;
  /**
   * @remarks
   * The ID of the scheduled task to update.
   * 
   * This parameter is required.
   * 
   * @example
   * 0ee00f56-f467-4d41-858c-ca4ede2c770e
   */
  jobId?: string;
  /**
   * @remarks
   * The new name for the task.
   * 
   * @example
   * afternoon-report
   */
  name?: string;
  /**
   * @remarks
   * The new payload configuration.
   * 
   * @example
   * {"Kind":"agentTurn","Message":"Updated: Generate afternoon report."}
   */
  payload?: UpdatePolarClawCronJobRequestPayload;
  /**
   * @remarks
   * Specifies whether to restart the gateway after the update. Default value: `true`.
   * 
   * @example
   * true
   */
  restart?: boolean;
  /**
   * @remarks
   * The scheduling configuration.
   * 
   * @example
   * {"Kind":"cron","Expr":"0 12 * * *","Tz":"America/New_York"}
   */
  schedule?: UpdatePolarClawCronJobRequestSchedule;
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
   * The new session target.
   * 
   * @example
   * isolated
   */
  sessionTarget?: string;
  /**
   * @remarks
   * The new wake mode.
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
      jobId: 'JobId',
      name: 'Name',
      payload: 'Payload',
      restart: 'Restart',
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
      delivery: UpdatePolarClawCronJobRequestDelivery,
      description: 'string',
      enabled: 'boolean',
      failureAlert: UpdatePolarClawCronJobRequestFailureAlert,
      jobId: 'string',
      name: 'string',
      payload: UpdatePolarClawCronJobRequestPayload,
      restart: 'boolean',
      schedule: UpdatePolarClawCronJobRequestSchedule,
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

