// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmGlobalAlertRequestAlertConfig extends $dara.Model {
  /**
   * @remarks
   * Whether to send a DingTalk notification when an alert is triggered. Valid values:
   * 
   * - `true`: A DingTalk notification is sent.
   * 
   * - `false`: Do not send a DingTalk notification.
   * 
   * @example
   * false
   */
  dingtalkNotice?: boolean;
  /**
   * @remarks
   * Whether to send an email notification when an alert is triggered. Valid values:
   * 
   * - `true`: An email notification is sent.
   * 
   * - `false` or `null`: Do not send an email notification.
   * 
   * @example
   * true
   */
  emailNotice?: boolean;
  /**
   * @remarks
   * The alert event type. Valid values:
   * 
   * - `addr_alert`: An address becomes unavailable.
   * 
   * - `addr_resume`: An address becomes available.
   * 
   * - `addr_pool_unavailable`: An address pool becomes unavailable.
   * 
   * - `addr_pool_available`: An address pool becomes available.
   * 
   * @example
   * addr_alert
   */
  noticeType?: string;
  /**
   * @remarks
   * The alert threshold for queries per second (QPS).
   * 
   * @example
   * 10
   */
  qpsThreshold?: number;
  /**
   * @remarks
   * Whether to send a text message notification when an alert is triggered. Valid values:
   * 
   * - `true`: A text message notification is sent.
   * 
   * - `false` or `null`: Do not send a text message notification.
   * 
   * Text message notifications are available only on the China site.
   * 
   * @example
   * true
   */
  smsNotice?: boolean;
  /**
   * @remarks
   * The alert threshold.
   * 
   * @example
   * 100
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      dingtalkNotice: 'DingtalkNotice',
      emailNotice: 'EmailNotice',
      noticeType: 'NoticeType',
      qpsThreshold: 'QpsThreshold',
      smsNotice: 'SmsNotice',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingtalkNotice: 'boolean',
      emailNotice: 'boolean',
      noticeType: 'string',
      qpsThreshold: 'number',
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
   * - `zh-CN`: Chinese
   * 
   * - `en-US`: English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * A list of alert configurations.
   */
  alertConfig?: UpdateCloudGtmGlobalAlertRequestAlertConfig[];
  /**
   * @remarks
   * A list of alert notification groups.
   */
  alertGroup?: string[];
  /**
   * @remarks
   * A client-generated token to ensure request idempotence. This token must be unique for each request, contain only ASCII characters, and be no more than 64 characters in length.
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

