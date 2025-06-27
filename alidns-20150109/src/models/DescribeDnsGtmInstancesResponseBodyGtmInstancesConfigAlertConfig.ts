// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmInstancesResponseBodyGtmInstancesConfigAlertConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether DingTalk alert notifications are configured. Valid values:
   * 
   * *   true
   * *   false | null
   * 
   * @example
   * true
   */
  dingtalkNotice?: string;
  /**
   * @remarks
   * Indicates whether email notifications are configured. Valid values:
   * 
   * *   true
   * *   false | null
   * 
   * @example
   * true
   */
  emailNotice?: string;
  /**
   * @remarks
   * The type of the alert event. Valid values:
   * 
   * *   ADDR_ALERT: The address is unavailable.
   * *   ADDR_RESUME: The address becomes available.
   * *   ADDR_POOL_GROUP_UNAVAILABLE: The address pool set is unavailable.
   * *   ADDR_POOL_GROUP_AVAILABLE: The address pool set becomes available.
   * *   ACCESS_STRATEGY_POOL_GROUP_SWITCH: Switchover is triggered between the primary and secondary address pools.
   * 
   * @example
   * ADDR_ALERT
   */
  noticeType?: string;
  /**
   * @remarks
   * Indicates whether SMS notifications are configured. Valid values:
   * 
   * *   true
   * *   false | null
   * 
   * @example
   * true
   */
  smsNotice?: string;
  static names(): { [key: string]: string } {
    return {
      dingtalkNotice: 'DingtalkNotice',
      emailNotice: 'EmailNotice',
      noticeType: 'NoticeType',
      smsNotice: 'SmsNotice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingtalkNotice: 'string',
      emailNotice: 'string',
      noticeType: 'string',
      smsNotice: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

