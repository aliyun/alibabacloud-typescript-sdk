// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolarClawCronJobRequestDelivery extends $dara.Model {
  /**
   * @example
   * default
   */
  accountId?: string;
  /**
   * @example
   * false
   */
  bestEffort?: boolean;
  /**
   * @example
   * feishu
   */
  channel?: string;
  /**
   * @example
   * announce
   */
  mode?: string;
  /**
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
   * @example
   * default
   */
  accountId?: string;
  /**
   * @example
   * 3
   */
  after?: number;
  /**
   * @example
   * feishu
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
   * @example
   * false
   */
  bestEffortDeliver?: boolean;
  /**
   * @example
   * feishu
   */
  channel?: string;
  /**
   * @example
   * true
   */
  deliver?: boolean;
  fallbacks?: string[];
  /**
   * @example
   * systemEvent
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
   * bailian/qwen3.5-plus
   */
  model?: string;
  /**
   * @example
   * Generate the daily report.
   */
  text?: string;
  /**
   * @example
   * xhigh
   */
  thinking?: string;
  /**
   * @example
   * 10
   */
  timeoutSeconds?: number;
  /**
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

export class CreatePolarClawCronJobRequest extends $dara.Model {
  /**
   * @example
   * main
   */
  agentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * false
   */
  deleteAfterRun?: boolean;
  /**
   * @example
   * {"Mode":"announce","Channel":"telegram"}
   */
  delivery?: CreatePolarClawCronJobRequestDelivery;
  /**
   * @example
   * Daily report generation
   */
  description?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * {"After":3,"Channel":"telegram"}
   */
  failureAlert?: CreatePolarClawCronJobRequestFailureAlert;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * daily-report
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"Kind":"agentTurn","Message":"Generate the daily report."}
   */
  payload?: CreatePolarClawCronJobRequestPayload;
  /**
   * @example
   * true
   */
  restart?: boolean;
  /**
   * @example
   * false
   */
  runImmediately?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"Kind":"cron","Expr":"0 9 * * *","Tz":"Asia/Shanghai"}
   */
  schedule?: CreatePolarClawCronJobRequestSchedule;
  /**
   * @example
   * agent:main:feishu:direct:***
   */
  sessionKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * main
   */
  sessionTarget?: string;
  /**
   * @remarks
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

