// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmInstanceResponseBodyConfigAlertConfigAlertConfig extends $dara.Model {
  dingtalkNotice?: boolean;
  /**
   * @remarks
   * Indicates whether email notification is configured. Valid values:
   * 
   * *   true: Email notification is configured.
   * *   false: Email notification is not configured. null: Email notification is not configured.
   * 
   * @example
   * true
   */
  emailNotice?: boolean;
  /**
   * @remarks
   * The type of the alert event. Valid values:
   * 
   * *   ADDR_ALERT: The address is unavailable.
   * *   ADDR_RESUME: The address is restored and becomes available.
   * *   ADDR_POOL_GROUP_UNAVAILABLE: The address pool group is unavailable.
   * *   ADDR_POOL_GROUP_AVAILABLE: The address pool group is restored and becomes available.
   * *   ACCESS_STRATEGY_POOL_GROUP_SWITCH: Switchover is triggered between the primary and secondary address pools.
   * *   MONITOR_NODE_IP_CHANGE: The IP address of the monitoring node has changed.
   * 
   * @example
   * ADDR_ALERT
   */
  noticeType?: string;
  /**
   * @remarks
   * Indicates whether SMS notification is configured. Valid values:
   * 
   * *   true: SMS notification is configured.
   * *   false: SMS notification is not configured. null: SMS notification is not configured.
   * 
   * @example
   * true
   */
  smsNotice?: boolean;
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
      dingtalkNotice: 'boolean',
      emailNotice: 'boolean',
      noticeType: 'string',
      smsNotice: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

