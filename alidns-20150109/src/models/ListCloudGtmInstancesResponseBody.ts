// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmInstancesResponseBodyInstancesInstance extends $dara.Model {
  /**
   * @example
   * postpay / prepay
   */
  chargeType?: string;
  commodityCode?: string;
  createTime?: string;
  createTimestamp?: number;
  expireTime?: string;
  expireTimestamp?: number;
  instanceId?: string;
  instanceName?: string;
  monitorTaskQuota?: number;
  monthlyEmailUsed?: number;
  monthlySmsQuota?: number;
  monthlySmsUsed?: number;
  monthlyWebhookUsed?: number;
  scheduleDomainName?: string;
  updateTime?: string;
  updateTimestamp?: number;
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
  instances?: ListCloudGtmInstancesResponseBodyInstances;
  /**
   * @remarks
   * The page number. The value starts from **1**. The default value is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page. The maximum value is 100. The default value is 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 15
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages.
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

