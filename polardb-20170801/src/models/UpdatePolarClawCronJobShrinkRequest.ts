// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePolarClawCronJobShrinkRequest extends $dara.Model {
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
  deliveryShrink?: string;
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
  failureAlertShrink?: string;
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
  payloadShrink?: string;
  /**
   * @example
   * true
   */
  restart?: boolean;
  /**
   * @example
   * {"Kind":"cron","Expr":"0 12 * * *","Tz":"America/New_York"}
   */
  scheduleShrink?: string;
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

