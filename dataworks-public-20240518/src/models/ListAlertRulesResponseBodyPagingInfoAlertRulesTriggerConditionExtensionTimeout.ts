// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionTimeout extends $dara.Model {
  /**
   * @remarks
   * The timeout period. Unit: minutes.
   * 
   * @example
   * 10
   */
  timeoutInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      timeoutInMinutes: 'TimeoutInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeoutInMinutes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

