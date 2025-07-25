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
  /**
   * @remarks
   * The alert notification method.
   */
  alertConfig?: DescribeDnsGtmInstanceResponseBodyConfigAlertConfig;
  /**
   * @remarks
   * The name of the alert group.
   * 
   * @example
   * alertgroup1
   */
  alertGroup?: string;
  /**
   * @remarks
   * The type of the CNAME domain name that is used to access the instance. Valid value:
   * 
   * *   PUBLIC: The CNAME domain name is used to access the instance over the Internet.
   * 
   * @example
   * public
   */
  cnameType?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * instancetest1
   */
  instanceName?: string;
  /**
   * @remarks
   * The domain name that is used to access the instance over the Internet.
   * 
   * @example
   * test.rr.gtm-003.com
   */
  pubicZoneName?: string;
  /**
   * @remarks
   * Indicates whether a custom CNAME domain name or a CNAME domain name assigned by the system is used to access the instance over the Internet. Valid values:
   * 
   * *   CUSTOM: A custom CNAME domain name is used.
   * *   SYSTEM_ASSIGN: A CNAME domain name assigned by the system is used.
   * 
   * @example
   * custom
   */
  publicCnameMode?: string;
  /**
   * @remarks
   * The hostname corresponding to the CNAME domain name that is used to access the instance over the Internet.
   * 
   * @example
   * test.rr
   */
  publicRr?: string;
  /**
   * @remarks
   * The service domain name that is used over the Internet.
   * 
   * @example
   * example.com
   */
  publicUserDomainName?: string;
  /**
   * @remarks
   * The type of the access policy. Valid values:
   * 
   * *   LATENCY: Latency-based
   * *   GEO: Geographical location-based
   * 
   * @example
   * GEO
   */
  strategyMode?: string;
  /**
   * @remarks
   * The global time to live (TTL).
   * 
   * @example
   * 1
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
  dingtalkUsedCount?: number;
  /**
   * @remarks
   * The total number of emails that were sent.
   * 
   * @example
   * 123
   */
  emailUsedCount?: number;
  /**
   * @remarks
   * The total number of short messages that were sent.
   * 
   * @example
   * 123
   */
  smsUsedCount?: number;
  /**
   * @remarks
   * The number of detection tasks that were created.
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
   * The configurations of the instance.
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
   * The UNIX timestamp that indicates when the instance was created.
   * 
   * @example
   * 1602656937000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 2020-10-14T06:58Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The UNIX timestamp that indicates when the instance expires.
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
   * instanceid1
   */
  instanceId?: string;
  /**
   * @remarks
   * The billing method. Valid value:
   * 
   * *   Subscription: You can pay in advance for the use of resources.
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 84314904-D047-4176-A0EC-256D7F68C7F5
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * resourcegroupid1
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The total number of SMS notifications.
   * 
   * @example
   * 100
   */
  smsQuota?: number;
  /**
   * @remarks
   * The total number of detection tasks.
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
   * versioncode1
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

