// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TimerTriggerConfig extends $dara.Model {
  /**
   * @example
   * 0 0 4 * * *
   */
  cronExpression?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
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

