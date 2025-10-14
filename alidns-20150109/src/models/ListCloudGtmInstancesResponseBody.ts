// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmInstancesResponseBodyInstancesInstance extends $dara.Model {
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
   * 1231298343343
   */
  createTimestamp?: number;
  /**
   * @remarks
   * Instance expiration time.
   * 
   * @example
   * 2024-03-15T01:46Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Instance expiration time (timestamp).
   * 
   * @example
   * 1231298343343
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * The ID of the GTM instance.
   * 
   * @example
   * gtm-cn-jmp3qnw**03
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance name.
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
   * 50
   */
  monthlyEmailUsed?: number;
  /**
   * @remarks
   * SMS quota, only supported on the China site as international sites do not support SMS.
   * 
   * @example
   * 1000
   */
  monthlySmsQuota?: number;
  /**
   * @remarks
   * Monthly SMS sending volume, only supported by the China site as international sites do not support SMS.
   * 
   * @example
   * 100
   */
  monthlySmsUsed?: number;
  /**
   * @remarks
   * Monthly webhook send volume.
   * 
   * @example
   * 80
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
   * The last time the instance was modified.
   * 
   * @example
   * 2024-03-15T01:46Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The last modification time of the instance (timestamp).
   * 
   * @example
   * 1231298343343
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * GTM instance version:
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
      expireTime: 'string',
      expireTimestamp: 'number',
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

export class ListCloudGtmInstancesResponseBodyInstances extends $dara.Model {
  instance?: ListCloudGtmInstancesResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': ListCloudGtmInstancesResponseBodyInstancesInstance },
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

export class ListCloudGtmInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instances.
   */
  instances?: ListCloudGtmInstancesResponseBodyInstances;
  /**
   * @remarks
   * Current page number, starting with **1**, default is **1**.
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
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of instance entries.
   * 
   * @example
   * 15
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
      instances: ListCloudGtmInstancesResponseBodyInstances,
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

