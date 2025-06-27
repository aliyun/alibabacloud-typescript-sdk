// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudGtmGlobalAlertResponseBodyAlertConfigAlertConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether DingTalk notifications are configured. Valid values:
   * 
   * *   true: DingTalk notifications are configured. DingTalk notifications are sent when alerts are triggered.
   * *   false: DingTalk notifications are not configured.
   * 
   * @example
   * false
   */
  dingtalkNotice?: boolean;
  /**
   * @remarks
   * Indicates whether email notifications are configured. Valid values:
   * 
   * *   true: Email notifications are configured. Emails are sent when alerts are triggered.
   * *   false: Email notifications are not configured.
   * 
   * @example
   * true
   */
  emailNotice?: boolean;
  /**
   * @remarks
   * The type of the alert event. Valid values:
   * 
   * *   addr_alert: The address is unavailable.
   * *   addr_resume: The address becomes available.
   * *   addr_pool_unavailable: The address pool is unavailable.
   * *   addr_pool_available: The address pool becomes available.
   * 
   * @example
   * addr_alert
   */
  noticeType?: string;
  /**
   * @remarks
   * Indicates whether text message notifications are configured. Valid values:
   * 
   * *   true: Text message notifications are configured. Text messages are sent when alerts are triggered.
   * *   false: Text message notifications are not configured.
   * 
   * Only the China site (aliyun.com) supports text message notifications.
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

