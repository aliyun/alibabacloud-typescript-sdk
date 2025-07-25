// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmInstancesResponseBodyGtmInstancesConfigAlertConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether DingTalk alert notifications are configured. Valid values:
   * 
   * *   true
   * *   false | null
   * 
   * @example
   * true
   */
  dingtalkNotice?: string;
  /**
   * @remarks
   * Indicates whether email notifications are configured. Valid values:
   * 
   * *   true
   * *   false | null
   * 
   * @example
   * true
   */
  emailNotice?: string;
  /**
   * @remarks
   * The type of the alert event. Valid values:
   * 
   * *   ADDR_ALERT: The address is unavailable.
   * *   ADDR_RESUME: The address becomes available.
   * *   ADDR_POOL_GROUP_UNAVAILABLE: The address pool set is unavailable.
   * *   ADDR_POOL_GROUP_AVAILABLE: The address pool set becomes available.
   * *   ACCESS_STRATEGY_POOL_GROUP_SWITCH: Switchover is triggered between the primary and secondary address pools.
   * 
   * @example
   * ADDR_ALERT
   */
  noticeType?: string;
  /**
   * @remarks
   * Indicates whether SMS notifications are configured. Valid values:
   * 
   * *   true
   * *   false | null
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
   * The alert notification method.
   */
  alertConfig?: DescribeDnsGtmInstancesResponseBodyGtmInstancesConfigAlertConfig[];
  /**
   * @remarks
   * The alert contact groups. The value is in the JSON format.
   * 
   * @example
   * testgroup
   */
  alertGroup?: string;
  /**
   * @remarks
   * The type of the CNAME. Valid value:
   * 
   * *   PUBLIC
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
   * instanceTest
   */
  instanceName?: string;
  /**
   * @remarks
   * Specifies whether to use a custom CNAME or a system-assigned CNAME to access GTM over the Internet. Valid values:
   * 
   * *   CUSTOM: a custom CNAME
   * *   SYSTEM_ASSIGN: a system-assigned CNAME. You cannot set PublicCnameMode to this value.
   * 
   * @example
   * custom
   */
  publicCnameMode?: string;
  /**
   * @remarks
   * The hostname of the domain name that is used to access GTM over the Internet.
   * 
   * @example
   * test.rr
   */
  publicRr?: string;
  /**
   * @remarks
   * The domain name that is used to access GTM over the Internet.
   * 
   * @example
   * example.com
   */
  publicUserDomainName?: string;
  /**
   * @remarks
   * The canonical name (CNAME) that is used to access GTM over the Internet.
   * 
   * @example
   * test.rr.gtm-003.com
   */
  publicZoneName?: string;
  /**
   * @remarks
   * The type of the access policy. Valid values:
   * 
   * *   LATENCY: latency-based access policy
   * *   GEO: geographical location-based access policy
   * 
   * @example
   * geo
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
   * The total number of sent DingTalk notifications.
   * 
   * @example
   * 100
   */
  dingtalkUsedCount?: number;
  /**
   * @remarks
   * The total number of sent email notifications.
   * 
   * @example
   * 100
   */
  emailUsedCount?: number;
  /**
   * @remarks
   * The total number of sent SMS notifications.
   * 
   * @example
   * 100
   */
  smsUsedCount?: number;
  /**
   * @remarks
   * The number of created detection tasks.
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
   * The configurations of the instance.
   */
  config?: DescribeDnsGtmInstancesResponseBodyGtmInstancesConfig;
  /**
   * @remarks
   * The time when the instance was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-10-14T06:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the instance was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1602658709000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The time when the instance expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-10-14T06:58Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The time when the instance expires. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1602658709000
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * instance1
   */
  instanceId?: string;
  /**
   * @remarks
   * The billing method of the GTM instance. Valid value:
   * 
   * *   Subscription.
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
   * The total number of Short Message Service (SMS) notifications.
   * 
   * @example
   * 1
   */
  smsQuota?: number;
  /**
   * @remarks
   * The total number of detection tasks.
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
   * testVersion1
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
   * The Global Traffic Manager (GTM) instances.
   */
  gtmInstances?: DescribeDnsGtmInstancesResponseBodyGtmInstances[];
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
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
   * The request ID.
   * 
   * @example
   * 84314904-D047-4176-A0EC-256D7F68C7F5
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
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

