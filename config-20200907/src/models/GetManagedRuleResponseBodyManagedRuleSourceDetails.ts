// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetManagedRuleResponseBodyManagedRuleSourceDetails extends $dara.Model {
  /**
   * @remarks
   * The interval at which the rule is triggered. Valid values: Valid values:
   * 
   * *   One_Hour
   * *   Three_Hours
   * *   Six_Hours
   * *   Twelve_Hours
   * *   TwentyFour_Hours
   * 
   * @example
   * TwentyFour_Hours
   */
  maximumExecutionFrequency?: string;
  /**
   * @remarks
   * The trigger type of the rule. Valid values:
   * 
   * *   ConfigurationItemChangeNotification: The rule is triggered by configuration changes.
   * *   ScheduledNotification: The rule is periodically triggered.
   * 
   * @example
   * ConfigurationItemChangeNotification
   */
  messageType?: string;
  static names(): { [key: string]: string } {
    return {
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      messageType: 'MessageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maximumExecutionFrequency: 'string',
      messageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

