// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigRuleResponseBodyConfigRuleSourceSourceDetails extends $dara.Model {
  /**
   * @remarks
   * The event source.
   * 
   * >  Only aliyun.config is returned, which indicates that only events related to Cloud Config are supported.
   * 
   * @example
   * aliyun.config
   */
  eventSource?: string;
  /**
   * @remarks
   * The interval at which the rule is triggered. Valid values:
   * 
   * *   One_Hour
   * *   Three_Hours
   * *   Six_Hours
   * *   Twelve_Hours
   * *   TwentyFour_Hours
   * 
   * >  This parameter is returned if the rule is periodically triggered.
   * 
   * @example
   * One_Hour
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
      eventSource: 'EventSource',
      maximumExecutionFrequency: 'MaximumExecutionFrequency',
      messageType: 'MessageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSource: 'string',
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

