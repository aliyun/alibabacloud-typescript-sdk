// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TimerTriggerConfig extends $dara.Model {
  /**
   * @remarks
   * The trigger period expression. You can specify to trigger based on a time interval. For example, the expression @every 4m indicates that the triggering is performed every four minutes. You can also specify to trigger based on a cron expression, for example, 0 0 4 \\* \\* \\*.
   * 
   * @example
   * 0 0 4 * * *
   */
  cronExpression?: string;
  /**
   * @remarks
   * Specify whether to enable the trigger.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Enter custom parameters. The trigger message is used as the value of the payload in the event.
   * 
   * @example
   * {"workflowInstanceId":"39639"}
   */
  payload?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'cronExpression',
      enable: 'enable',
      payload: 'payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      enable: 'boolean',
      payload: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

