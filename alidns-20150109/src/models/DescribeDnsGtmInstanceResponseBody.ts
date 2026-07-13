// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmInstanceResponseBodyConfigAlertConfigAlertConfig extends $dara.Model {
  dingtalkNotice?: boolean;
  emailNotice?: boolean;
  noticeType?: string;
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

export class DescribeDnsGtmInstanceResponseBodyConfigAlertConfig extends $dara.Model {
  alertConfig?: DescribeDnsGtmInstanceResponseBodyConfigAlertConfigAlertConfig[];
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': DescribeDnsGtmInstanceResponseBodyConfigAlertConfigAlertConfig },
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

export class DescribeDnsGtmInstanceResponseBodyConfig extends $dara.Model {
  alertConfig?: DescribeDnsGtmInstanceResponseBodyConfigAlertConfig;
  /**
   * @remarks
   * The alert contact group. The value is a \\`List\\<string>\\` in JSON format.
   * 
   * @example
   * ["test1","test2"]
   */
  alertGroup?: string;
  /**
   * @remarks
   * The type of the CNAME domain name used for access.
   * 
   * - PUBLIC: Internet-facing
   * 
   * @example
   * PUBLIC
   */
  cnameType?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The public access domain name.
   * 
   * @example
   * gtm-cn-wwo3a3hbz**.example.com
   */
  pubicZoneName?: string;
  /**
   * @remarks
   * The access method for the public CNAME.
   * 
   * - CUSTOM: custom
   * 
   * - SYSTEM_ASSIGN: system-assigned. This feature is disabled.
   * 
   * @example
   * CUSTOM
   */
  publicCnameMode?: string;
  /**
   * @remarks
   * The hostname for public access.
   * 
   * @example
   * test.rr
   */
  publicRr?: string;
  /**
   * @remarks
   * The user\\"s public service domain name.
   * 
   * @example
   * example.com
   */
  publicUserDomainName?: string;
  /**
   * @remarks
   * The access policy mode.
   * 
   * - LATENCY: latency-based
   * 
   * - GEO: geography-based
   * 
   * @example
   * GEO
   */
  strategyMode?: string;
  /**
   * @remarks
   * The global TTL.
   * 
   * @example
   * 60
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      alertGroup: 'AlertGroup',
      cnameType: 'CnameType',
      instanceName: 'InstanceName',
      pubicZoneName: 'PubicZoneName',
      publicCnameMode: 'PublicCnameMode',
      publicRr: 'PublicRr',
      publicUserDomainName: 'PublicUserDomainName',
      strategyMode: 'StrategyMode',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: DescribeDnsGtmInstanceResponseBodyConfigAlertConfig,
      alertGroup: 'string',
      cnameType: 'string',
      instanceName: 'string',
      pubicZoneName: 'string',
      publicCnameMode: 'string',
      publicRr: 'string',
      publicUserDomainName: 'string',
      strategyMode: 'string',
      ttl: 'number',
    };
  }

  validate() {
    if(this.alertConfig && typeof (this.alertConfig as any).validate === 'function') {
      (this.alertConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceResponseBodyUsedQuota extends $dara.Model {
  /**
   * @remarks
   * The number of DingTalk notifications that were sent.
   * 
   * @example
   * 123
   */
  dingtalkUsedCount?: number;
  /**
   * @remarks
   * The number of email notifications that were sent.
   * 
   * @example
   * 123
   */
  emailUsedCount?: number;
  /**
   * @remarks
   * The number of text messages that were sent.
   * 
   * @example
   * 123
   */
  smsUsedCount?: number;
  /**
   * @remarks
   * The number of health check tasks that were created.
   * 
   * @example
   * 123
   */
  taskUsedCount?: number;
  static names(): { [key: string]: string } {
    return {
      dingtalkUsedCount: 'DingtalkUsedCount',
      emailUsedCount: 'EmailUsedCount',
      smsUsedCount: 'SmsUsedCount',
      taskUsedCount: 'TaskUsedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingtalkUsedCount: 'number',
      emailUsedCount: 'number',
      smsUsedCount: 'number',
      taskUsedCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance configuration.
   */
  config?: DescribeDnsGtmInstanceResponseBodyConfig;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2020-10-14T06:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The UNIX timestamp when the instance was created.
   * 
   * @example
   * 1602656937000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The expiration date.
   * 
   * @example
   * 2020-10-14T06:58Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The UNIX timestamp when the instance expires.
   * 
   * @example
   * 1602656937000
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * gtm-cn-wwo3a3hbz**
   */
  instanceId?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * - Subscription: subscription
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 84314904-D047-4176-A0EC-256D7F68C7F5
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * resourc*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The quota on the number of text message notifications.
   * 
   * @example
   * 100
   */
  smsQuota?: number;
  /**
   * @remarks
   * The quota on the number of health check tasks.
   * 
   * @example
   * 100
   */
  taskQuota?: number;
  /**
   * @remarks
   * The used quota.
   */
  usedQuota?: DescribeDnsGtmInstanceResponseBodyUsedQuota;
  /**
   * @remarks
   * The version of the instance.
   * 
   * @example
   * standard
   */
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      expireTime: 'ExpireTime',
      expireTimestamp: 'ExpireTimestamp',
      instanceId: 'InstanceId',
      paymentType: 'PaymentType',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      smsQuota: 'SmsQuota',
      taskQuota: 'TaskQuota',
      usedQuota: 'UsedQuota',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: DescribeDnsGtmInstanceResponseBodyConfig,
      createTime: 'string',
      createTimestamp: 'number',
      expireTime: 'string',
      expireTimestamp: 'number',
      instanceId: 'string',
      paymentType: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      smsQuota: 'number',
      taskQuota: 'number',
      usedQuota: DescribeDnsGtmInstanceResponseBodyUsedQuota,
      versionCode: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.usedQuota && typeof (this.usedQuota as any).validate === 'function') {
      (this.usedQuota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

