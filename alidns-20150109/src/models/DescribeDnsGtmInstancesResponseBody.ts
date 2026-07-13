// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmInstancesResponseBodyGtmInstancesConfigAlertConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether DingTalk notifications are configured. Valid values:
   * 
   * - true: configured
   * 
   * - false or null: not configured
   * 
   * @example
   * true
   */
  dingtalkNotice?: string;
  /**
   * @remarks
   * Indicates whether email notifications are configured. Valid values:
   * 
   * - true: configured
   * 
   * - false or null: not configured
   * 
   * @example
   * true
   */
  emailNotice?: string;
  /**
   * @remarks
   * The type of the alert event. Valid values:
   * 
   * - ADDR_ALERT: The address is unavailable.
   * 
   * - ADDR_RESUME: The address is restored.
   * 
   * - ADDR_POOL_GROUP_UNAVAILABLE: The address pool collection is unavailable.
   * 
   * - ADDR_POOL_GROUP_AVAILABLE: The address pool collection is restored.
   * 
   * - ACCESS_STRATEGY_POOL_GROUP_SWITCH: A switchover occurs between the primary and secondary address pools.
   * 
   * @example
   * ADDR_ALERT
   */
  noticeType?: string;
  /**
   * @remarks
   * Indicates whether text message notifications are configured. Valid values:
   * 
   * - true: configured
   * 
   * - false or null: not configured
   * 
   * @example
   * true
   */
  smsNotice?: string;
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
      dingtalkNotice: 'string',
      emailNotice: 'string',
      noticeType: 'string',
      smsNotice: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmInstancesResponseBodyGtmInstancesConfig extends $dara.Model {
  /**
   * @remarks
   * The alert notification methods.
   */
  alertConfig?: DescribeDnsGtmInstancesResponseBodyGtmInstancesConfigAlertConfig[];
  /**
   * @remarks
   * The alert contact group. The value is a JSON-formatted list of strings.
   * 
   * @example
   * ["test1","test2"]
   */
  alertGroup?: string;
  /**
   * @remarks
   * The type of the CNAME domain name used for access. Valid value:
   * 
   * - PUBLIC: for Internet access
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
   * instanceTest
   */
  instanceName?: string;
  /**
   * @remarks
   * The method to access the instance over the Internet using a CNAME record. Valid values:
   * 
   * - CUSTOM: custom
   * 
   * - SYSTEM_ASSIGN: system-assigned (This feature is disabled.)
   * 
   * @example
   * CUSTOM
   */
  publicCnameMode?: string;
  /**
   * @remarks
   * The hostname for Internet access.
   * 
   * @example
   * test.rr
   */
  publicRr?: string;
  /**
   * @remarks
   * The user\\"s service domain name that is accessible over the Internet.
   * 
   * @example
   * dns-example.top
   */
  publicUserDomainName?: string;
  /**
   * @remarks
   * The domain name used for Internet access.
   * 
   * @example
   * gtm-cn-wwo3a3hbz**.dns-example.top
   */
  publicZoneName?: string;
  /**
   * @remarks
   * The mode of the access policy. Valid values:
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
      publicCnameMode: 'PublicCnameMode',
      publicRr: 'PublicRr',
      publicUserDomainName: 'PublicUserDomainName',
      publicZoneName: 'PublicZoneName',
      strategyMode: 'StrategyMode',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': DescribeDnsGtmInstancesResponseBodyGtmInstancesConfigAlertConfig },
      alertGroup: 'string',
      cnameType: 'string',
      instanceName: 'string',
      publicCnameMode: 'string',
      publicRr: 'string',
      publicUserDomainName: 'string',
      publicZoneName: 'string',
      strategyMode: 'string',
      ttl: 'number',
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

export class DescribeDnsGtmInstancesResponseBodyGtmInstancesUsedQuota extends $dara.Model {
  /**
   * @remarks
   * The total number of DingTalk messages that were sent.
   * 
   * @example
   * 100
   */
  dingtalkUsedCount?: number;
  /**
   * @remarks
   * The total number of emails that were sent.
   * 
   * @example
   * 100
   */
  emailUsedCount?: number;
  /**
   * @remarks
   * The total number of text messages that were sent.
   * 
   * @example
   * 100
   */
  smsUsedCount?: number;
  /**
   * @remarks
   * The number of health check tasks that were created.
   * 
   * @example
   * 100
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

export class DescribeDnsGtmInstancesResponseBodyGtmInstances extends $dara.Model {
  /**
   * @remarks
   * The configuration of the instance.
   */
  config?: DescribeDnsGtmInstancesResponseBodyGtmInstancesConfig;
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
   * The timestamp that indicates when the instance was created.
   * 
   * @example
   * 1602658709000
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
   * The timestamp that indicates when the instance expires.
   * 
   * @example
   * 1602658709000
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
   * The billing method. Valid value:
   * 
   * - Subscription
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * resourceGroupid123
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The total quota of text message notifications.
   * 
   * @example
   * 1
   */
  smsQuota?: number;
  /**
   * @remarks
   * The total number of health check tasks.
   * 
   * @example
   * 1
   */
  taskQuota?: number;
  /**
   * @remarks
   * The used quota.
   */
  usedQuota?: DescribeDnsGtmInstancesResponseBodyGtmInstancesUsedQuota;
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
      resourceGroupId: 'ResourceGroupId',
      smsQuota: 'SmsQuota',
      taskQuota: 'TaskQuota',
      usedQuota: 'UsedQuota',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: DescribeDnsGtmInstancesResponseBodyGtmInstancesConfig,
      createTime: 'string',
      createTimestamp: 'number',
      expireTime: 'string',
      expireTimestamp: 'number',
      instanceId: 'string',
      paymentType: 'string',
      resourceGroupId: 'string',
      smsQuota: 'number',
      taskQuota: 'number',
      usedQuota: DescribeDnsGtmInstancesResponseBodyGtmInstancesUsedQuota,
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

export class DescribeDnsGtmInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of Global Traffic Manager (GTM) instances.
   */
  gtmInstances?: DescribeDnsGtmInstancesResponseBodyGtmInstances[];
  /**
   * @remarks
   * The number of the page returned. The value starts from **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 1
   */
  pageSize?: number;
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
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 123
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      gtmInstances: 'GtmInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gtmInstances: { 'type': 'array', 'itemType': DescribeDnsGtmInstancesResponseBodyGtmInstances },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.gtmInstances)) {
      $dara.Model.validateArray(this.gtmInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

