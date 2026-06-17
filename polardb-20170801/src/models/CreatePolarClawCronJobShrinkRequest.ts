// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolarClawCronJobShrinkRequest extends $dara.Model {
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
  deliveryShrink?: string;
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
  scheduleShrink?: string;
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

