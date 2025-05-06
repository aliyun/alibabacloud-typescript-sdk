// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateConfigRuleResponseBodyConfigRuleSourceSourceDetails extends $dara.Model {
  /**
   * @remarks
   * The event source of the managed rule.
   * 
   * >  Only events related to Cloud Config are supported. The value is fixed to aliyun.config.
   * 
   * @example
   * aliyun.config
   */
  eventSource?: string;
  /**
   * @remarks
   * The intervals at which the managed rule is triggered. Valid values:
   * 
   * *   One_Hour: 1 hour.
   * *   Three_Hours: 3 hours.
   * *   Six_Hours: 6 hours.
   * *   Twelve_Hours: 12 hours
   * *   TwentyFour_Hours: 24 hours
   * 
   * @example
   * One_Hour
   */
  maximumExecutionFrequency?: string;
  /**
   * @remarks
   * The trigger type of the rule. Valid values:
   * 
   * *   ConfigurationItemChangeNotification: The managed rule is triggered by configuration changes.
   * *   ScheduledNotification: The managed rule is periodically triggered.
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

