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

export class DescribeCloudGtmGlobalAlertResponseBodyAlertConfig extends $dara.Model {
  alertConfig?: DescribeCloudGtmGlobalAlertResponseBodyAlertConfigAlertConfig[];
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': DescribeCloudGtmGlobalAlertResponseBodyAlertConfigAlertConfig },
    };
  }

  validate() {
    if(Array.isArray(this.alertConfig)) {
      $dara.Model.validateArray(this.alertConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudGtmGlobalAlertResponseBodyAlertGroup extends $dara.Model {
  alertGroup?: string[];
  static names(): { [key: string]: string } {
    return {
      alertGroup: 'AlertGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertGroup: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.alertGroup)) {
      $dara.Model.validateArray(this.alertGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudGtmGlobalAlertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The alert configurations.
   */
  alertConfig?: DescribeCloudGtmGlobalAlertResponseBodyAlertConfig;
  /**
   * @remarks
   * The alert contact groups.
   */
  alertGroup?: DescribeCloudGtmGlobalAlertResponseBodyAlertGroup;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B57C121B-A45F-44D8-A9B2-13E5A5044195
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      alertGroup: 'AlertGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: DescribeCloudGtmGlobalAlertResponseBodyAlertConfig,
      alertGroup: DescribeCloudGtmGlobalAlertResponseBodyAlertGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.alertConfig && typeof (this.alertConfig as any).validate === 'function') {
      (this.alertConfig as any).validate();
    }
    if(this.alertGroup && typeof (this.alertGroup as any).validate === 'function') {
      (this.alertGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

