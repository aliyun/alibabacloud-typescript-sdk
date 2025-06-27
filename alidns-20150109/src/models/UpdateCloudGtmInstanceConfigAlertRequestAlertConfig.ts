// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmInstanceConfigAlertRequestAlertConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to configure DingTalk notifications. Valid values:
   * 
   * *   true: configures DingTalk notifications. DingTalk notifications are sent when alerts are triggered.
   * *   false: does not configure DingTalk notifications.
   * 
   * @example
   * true
   */
  dingtalkNotice?: boolean;
  /**
   * @remarks
   * Specifies whether to configure email notifications. Valid values:
   * 
   * *   true: configures email notifications. Emails are sent when alerts are triggered.
   * *   false: does not configure email notifications.
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
   * Specifies whether to configure text message notifications. Valid values:
   * 
   * *   true: configures text message notifications. Text messages are sent when alerts are triggered.
   * *   false: does not configure text message notifications.
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

