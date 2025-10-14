// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchCloudGtmInstancesResponseBodyInstancesInstance extends $dara.Model {
  /**
   * @example
   * postpay / prepay
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code. Valid values:
   * 
   * *   dns_gtm_public_cn: commodity code on the China site (aliyun.com)
   * *   dns_gtm_public_intl: commodity code on the international site (alibabacloud.com)
   * 
   * @example
   * dns_gtm_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * Instance creation time.
   * 
   * @example
   * 2024-03-15T01:46Z
   */
  createTime?: string;
  /**
   * @remarks
   * Instance creation time (timestamp).
   * 
   * @example
   * 1710467214858
   */
  createTimestamp?: number;
  /**
   * @remarks
   * Instance expiration time.
   * 
   * @example
   * 2024-09-05T16:00Z
   */
  expireTime?: number;
  /**
   * @remarks
   * Instance expiration time (timestamp).
   * 
   * @example
   * 1725552000000
   */
  expireTimestamp?: string;
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
   * Schedule instance name.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * Monitor probe task quota.
   * 
   * @example
   * 100
   */
  monitorTaskQuota?: number;
  /**
   * @remarks
   * Monthly email sending volume.
   * 
   * @example
   * 200
   */
  monthlyEmailUsed?: number;
  /**
   * @remarks
   * SMS quota, only supported on the China site. International site does not support SMS.
   * 
   * @example
   * 2000
   */
  monthlySmsQuota?: number;
  /**
   * @remarks
   * Monthly SMS sending volume, only supported by the China site as international sites do not support SMS.
   * 
   * @example
   * 200
   */
  monthlySmsUsed?: number;
  /**
   * @remarks
   * Monthly webhook dispatch volume.
   * 
   * @example
   * 100
   */
  monthlyWebhookUsed?: number;
  /**
   * @remarks
   * The access domain name, which consists of a hostname and a zone or a subzone.
   * 
   * @example
   * www.example.com
   */
  scheduleDomainName?: string;
  /**
   * @remarks
   * The last modified time of the instance.
   * 
   * @example
   * 2024-03-15T01:46Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The last modified time of the instance (timestamp).
   * 
   * @example
   * 1710467214858
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * Global Traffic Management version 3.0 instance types:
   * - standard: Standard Edition
   * - ultimate: Ultimate Edition
   * 
   * @example
   * ultimate
   */
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      expireTime: 'ExpireTime',
      expireTimestamp: 'ExpireTimestamp',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      monitorTaskQuota: 'MonitorTaskQuota',
      monthlyEmailUsed: 'MonthlyEmailUsed',
      monthlySmsQuota: 'MonthlySmsQuota',
      monthlySmsUsed: 'MonthlySmsUsed',
      monthlyWebhookUsed: 'MonthlyWebhookUsed',
      scheduleDomainName: 'ScheduleDomainName',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      expireTime: 'number',
      expireTimestamp: 'string',
      instanceId: 'string',
      instanceName: 'string',
      monitorTaskQuota: 'number',
      monthlyEmailUsed: 'number',
      monthlySmsQuota: 'number',
      monthlySmsUsed: 'number',
      monthlyWebhookUsed: 'number',
      scheduleDomainName: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      versionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchCloudGtmInstancesResponseBodyInstances extends $dara.Model {
  instance?: SearchCloudGtmInstancesResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': SearchCloudGtmInstancesResponseBodyInstancesInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchCloudGtmInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instances.
   */
  instances?: SearchCloudGtmInstancesResponseBodyInstances;
  /**
   * @remarks
   * Current page number, starting at **1**, default is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows per page when paginating queries, with a maximum value of 100 and a default of 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Unique request identification code.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of instances found from the search.
   * 
   * @example
   * 10
   */
  totalItems?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: SearchCloudGtmInstancesResponseBodyInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.instances && typeof (this.instances as any).validate === 'function') {
      (this.instances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

