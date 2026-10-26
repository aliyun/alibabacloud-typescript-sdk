// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolarClawCronJobShrinkRequest extends $dara.Model {
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
  deliveryShrink?: string;
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
  failureAlertShrink?: string;
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
  payloadShrink?: string;
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
  scheduleShrink?: string;
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
      deliveryShrink: 'Delivery',
      description: 'Description',
      enabled: 'Enabled',
      failureAlertShrink: 'FailureAlert',
      name: 'Name',
      payloadShrink: 'Payload',
      restart: 'Restart',
      runImmediately: 'RunImmediately',
      scheduleShrink: 'Schedule',
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
      deliveryShrink: 'string',
      description: 'string',
      enabled: 'boolean',
      failureAlertShrink: 'string',
      name: 'string',
      payloadShrink: 'string',
      restart: 'boolean',
      runImmediately: 'boolean',
      scheduleShrink: 'string',
      sessionKey: 'string',
      sessionTarget: 'string',
      wakeMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

