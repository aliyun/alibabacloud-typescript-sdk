// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolarClawCronJobRequestDelivery extends $dara.Model {
  /**
   * @example
   * accountId123
   */
  accountId?: string;
  /**
   * @example
   * false
   */
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

export class UpdatePolarClawCronJobRequestFailureAlert extends $dara.Model {
  /**
   * @example
   * accountId123
   */
  accountId?: string;
  /**
   * @example
   * 3
   */
  after?: number;
  /**
   * @example
   * email
   */
  channel?: string;
  /**
   * @example
   * 5000
   */
  cooldownMs?: number;
  /**
   * @example
   * announce
   */
  mode?: string;
  /**
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
  fallbacks?: string[];
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
   * Generate the daily report and send it to the team.
   */
  message?: string;
  /**
   * @example
   * anthropic/sonnet-4.6
   */
  model?: string;
  /**
   * @example
   * Send a reminder to the user.
   */
  text?: string;
  /**
   * @example
   * medium
   */
  thinking?: string;
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
   * 0
   */
  staggerMs?: number;
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
   * @example
   * work
   */
  agentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-xxx
   */
  applicationId?: string;
  /**
   * @example
   * true
   */
  deleteAfterRun?: boolean;
  /**
   * @example
   * {"Mode":"announce","Channel":"telegram"}
   */
  delivery?: UpdatePolarClawCronJobRequestDelivery;
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
   * {"After":3,"Channel":"telegram"}
   */
  failureAlert?: UpdatePolarClawCronJobRequestFailureAlert;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0ee00f56-f467-4d41-858c-ca4ede2c770e
   */
  jobId?: string;
  /**
   * @example
   * afternoon-report
   */
  name?: string;
  /**
   * @example
   * {"Kind":"agentTurn","Message":"Updated: Generate afternoon report."}
   */
  payload?: UpdatePolarClawCronJobRequestPayload;
  /**
   * @example
   * true
   */
  restart?: boolean;
  /**
   * @example
   * {"Kind":"cron","Expr":"0 12 * * *","Tz":"America/New_York"}
   */
  schedule?: UpdatePolarClawCronJobRequestSchedule;
  /**
   * @example
   * agent:main:feishu:direct:***
   */
  sessionKey?: string;
  /**
   * @example
   * isolated
   */
  sessionTarget?: string;
  /**
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

