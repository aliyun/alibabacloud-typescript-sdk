// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmGlobalAlertRequestAlertConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to configure DingTalk notifications. Valid values:
   * 
   * *   true: configures DingTalk notifications. DingTalk notifications are sent when alerts are triggered.
   * *   false: does not configure DingTalk notifications.
   * 
   * @example
   * false
   */
  dingtalkNotice?: boolean;
  /**
   * @remarks
   * Specifies whether to configure email notifications. Valid values:
   * 
   * *   true: configures email notifications. Emails are sent when alerts are triggered.
   * *   false｜null: does not configure email notifications.
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
   * *   false｜null: does not configure text message notifications.
   * 
   * Only the China site (aliyun.com) supports text message notifications.
   * 
   * @example
   * true
   */
  smsNotice?: boolean;
  /**
   * @example
   * 100
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      dingtalkNotice: 'DingtalkNotice',
      emailNotice: 'EmailNotice',
      noticeType: 'NoticeType',
      smsNotice: 'SmsNotice',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingtalkNotice: 'boolean',
      emailNotice: 'boolean',
      noticeType: 'string',
      smsNotice: 'boolean',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudGtmGlobalAlertRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US: English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The alert configurations.
   */
  alertConfig?: UpdateCloudGtmGlobalAlertRequestAlertConfig[];
  /**
   * @remarks
   * The alert contact groups.
   */
  alertGroup?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can specify a custom value for this parameter, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      alertConfig: 'AlertConfig',
      alertGroup: 'AlertGroup',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      alertConfig: { 'type': 'array', 'itemType': UpdateCloudGtmGlobalAlertRequestAlertConfig },
      alertGroup: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertConfig)) {
      $dara.Model.validateArray(this.alertConfig);
    }
    if(Array.isArray(this.alertGroup)) {
      $dara.Model.validateArray(this.alertGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

