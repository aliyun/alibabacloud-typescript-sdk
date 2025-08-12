// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventRuleAttributeRequest extends $dara.Model {
  regionId?: string;
  /**
   * @remarks
   * The name of the event-triggered alert rule.
   * 
   * For information about how to obtain the name of an event-triggered alert rule, see [DescribeEventRuleList](https://help.aliyun.com/document_detail/114996.html).
   * 
   * This parameter is required.
   * 
   * @example
   * testRule
   */
  ruleName?: string;
  /**
   * @remarks
   * The mute period during which new alert notifications are not sent even if the trigger conditions are met.
   * 
   * Unit: seconds. Default value: 86400, which indicates one day.
   * 
   * >  Only one alert notification is sent during each mute period even if the metric value exceeds the alert threshold several times.
   * 
   * @example
   * 86400
   */
  silenceTime?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleName: 'RuleName',
      silenceTime: 'SilenceTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleName: 'string',
      silenceTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

