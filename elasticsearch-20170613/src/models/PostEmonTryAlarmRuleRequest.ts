// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PostEmonTryAlarmRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the test alert rule, notification method, and message recipients.
   * 
   * @example
   * {"alarmRuleName":"test_rule","AlarmChannel":{"phone":true,"sms":true,"dingWebHook":true},"receivers":[{"id":19,"contactGroup":false}]}
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

