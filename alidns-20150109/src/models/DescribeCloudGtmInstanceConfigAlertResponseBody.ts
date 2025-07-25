// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudGtmInstanceConfigAlertResponseBodyAlertConfigAlertConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether DingTalk notifications are configured. Valid values:
   * 
   * *   true: DingTalk notifications are configured. DingTalk notifications are sent after alerts are triggered.
   * *   false: DingTalk notifications are not configured.
   * 
   * @example
   * true
   */
  dingtalkNotice?: boolean;
  /**
   * @remarks
   * Indicates whether email notifications are configured. Valid values:
   * 
   * *   true: Email notifications are configured. Emails are sent after alerts are triggered.
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
   * *   true: Text message notifications are configured. Text messages are sent after alerts are triggered.
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

export class DescribeCloudGtmInstanceConfigAlertResponseBodyAlertConfig extends $dara.Model {
  alertConfig?: DescribeCloudGtmInstanceConfigAlertResponseBodyAlertConfigAlertConfig[];
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': DescribeCloudGtmInstanceConfigAlertResponseBodyAlertConfigAlertConfig },
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

export class DescribeCloudGtmInstanceConfigAlertResponseBodyAlertGroup extends $dara.Model {
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

export class DescribeCloudGtmInstanceConfigAlertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The alert configurations.
   */
  alertConfig?: DescribeCloudGtmInstanceConfigAlertResponseBodyAlertConfig;
  /**
   * @remarks
   * The alert contact groups.
   */
  alertGroup?: DescribeCloudGtmInstanceConfigAlertResponseBodyAlertGroup;
  /**
   * @remarks
   * The alert configuration mode of the instance. Valid values:
   * 
   * *   global: global alert configuration
   * *   instance_config: custom alert configuration
   * 
   * @example
   * global
   */
  alertMode?: string;
  /**
   * @remarks
   * The configuration ID of the access domain name. Two configuration IDs exist when the access domain name is bound to the same GTM instance but an A record and an AAAA record are configured for the access domain name. The configuration ID uniquely identifies a configuration.
   * 
   * @example
   * Config-000**11
   */
  configId?: string;
  /**
   * @remarks
   * The ID of the GTM 3.0 instance.
   * 
   * @example
   * gtm-cn-wwo3a3hbz**
   */
  instanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0F32959D-417B-4D66-8463-68606605E3E2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      alertGroup: 'AlertGroup',
      alertMode: 'AlertMode',
      configId: 'ConfigId',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: DescribeCloudGtmInstanceConfigAlertResponseBodyAlertConfig,
      alertGroup: DescribeCloudGtmInstanceConfigAlertResponseBodyAlertGroup,
      alertMode: 'string',
      configId: 'string',
      instanceId: 'string',
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

