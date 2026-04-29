// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolarClawCronJobShrinkRequest extends $dara.Model {
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
  deliveryShrink?: string;
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
  failureAlertShrink?: string;
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
  payloadShrink?: string;
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
  scheduleShrink?: string;
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

