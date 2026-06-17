// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolarClawCronJobShrinkRequest extends $dara.Model {
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
  deliveryShrink?: string;
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
  failureAlertShrink?: string;
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
  payloadShrink?: string;
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
      deliveryShrink: 'Delivery',
      description: 'Description',
      enabled: 'Enabled',
      failureAlertShrink: 'FailureAlert',
      jobId: 'JobId',
      name: 'Name',
      payloadShrink: 'Payload',
      restart: 'Restart',
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
      jobId: 'string',
      name: 'string',
      payloadShrink: 'string',
      restart: 'boolean',
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

