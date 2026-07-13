// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmInstanceConfigAlertRequestAlertConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable DingTalk notifications. Valid values:
   * 
   * - true: Enabled. When an alert is triggered, a DingTalk message is sent.
   * 
   * - false: Disabled.
   * 
   * @example
   * true
   */
  dingtalkNotice?: boolean;
  /**
   * @remarks
   * Specifies whether to enable email notifications. Valid values:
   * 
   * - true: Enabled. When an alert is triggered, an email is sent.
   * 
   * - false: Disabled.
   * 
   * @example
   * true
   */
  emailNotice?: boolean;
  /**
   * @remarks
   * The type of alert event. Valid values:
   * 
   * - addr_alert: The address is unavailable.
   * 
   * - addr_resume: The address has recovered.
   * 
   * - addr_pool_unavailable: The address pool is unavailable.
   * 
   * - addr_pool_available: The address pool has recovered.
   * 
   * @example
   * addr_alert
   */
  noticeType?: string;
  /**
   * @remarks
   * Specifies whether to enable text message notifications. Valid values:
   * 
   * - true: Enabled. When an alert is triggered, a text message is sent.
   * 
   * - false: Disabled.
   * 
   * Note: Text message notifications are supported only on the China site (aliyun.com).
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

export class UpdateCloudGtmInstanceConfigAlertRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh-CN: Chinese
   * 
   * - en-US: English
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * A list of alert configurations.
   */
  alertConfig?: UpdateCloudGtmInstanceConfigAlertRequestAlertConfig[];
  /**
   * @remarks
   * A list of alert notification groups.
   */
  alertGroup?: string[];
  /**
   * @remarks
   * The alert configuration mode for the instance. Valid values:
   * 
   * - global: The instance inherits the global alert configuration.
   * 
   * - instance_config: The instance uses a custom alert configuration.
   * 
   * @example
   * global
   */
  alertMode?: string;
  /**
   * @remarks
   * A client-generated token that ensures the idempotence of the request. The client must generate a unique value for this parameter. The token can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the domain name instance configuration. A GTM instance can have two configurations for the same access domain name if you configure both A and AAAA records. The ConfigId uniquely identifies a configuration.
   * 
   * @example
   * Config-000**11
   */
  configId?: string;
  /**
   * @remarks
   * The ID of the Global Traffic Manager (GTM) 3.0 instance.
   * 
   * @example
   * gtm-cn-zz11t58**0s
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      alertConfig: 'AlertConfig',
      alertGroup: 'AlertGroup',
      alertMode: 'AlertMode',
      clientToken: 'ClientToken',
      configId: 'ConfigId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      alertConfig: { 'type': 'array', 'itemType': UpdateCloudGtmInstanceConfigAlertRequestAlertConfig },
      alertGroup: { 'type': 'array', 'itemType': 'string' },
      alertMode: 'string',
      clientToken: 'string',
      configId: 'string',
      instanceId: 'string',
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

