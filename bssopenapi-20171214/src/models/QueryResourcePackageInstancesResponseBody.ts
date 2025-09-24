// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryResourcePackageInstancesResponseBodyDataInstancesInstanceApplicableProducts extends $dara.Model {
  product?: string[];
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.product)) {
      $dara.Model.validateArray(this.product);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourcePackageInstancesResponseBodyDataInstancesInstance extends $dara.Model {
  /**
   * @remarks
   * The services to which the resource plan is applicable.
   */
  applicableProducts?: QueryResourcePackageInstancesResponseBodyDataInstancesInstanceApplicableProducts;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @remarks
   * The deduction type. Example: Absolute.
   * 
   * @example
   * Absolute
   */
  deductType?: string;
  /**
   * @remarks
   * The time when the resource plan took effect.
   * 
   * @example
   * 2018-09-12T09:51:56Z
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The time when the resource plan expired.
   * 
   * @example
   * 2019-03-12T16:00:00Z
   */
  expiryTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * OSSBAG-cn-v0h1s4hma01
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the resource plan.
   * 
   * @example
   * FPT_ossbag_absolute_Storage_sh
   */
  packageType?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The remaining quota.
   * 
   * @example
   * 40.000
   */
  remainingAmount?: string;
  /**
   * @remarks
   * The unit of the remaining quota.
   * 
   * @example
   * GB
   */
  remainingAmountUnit?: string;
  /**
   * @remarks
   * The remarks on the resource plan. The remarks must be made in Chinese.
   */
  remark?: string;
  /**
   * @remarks
   * The status of the resource plan. Valid values:
   * 
   * *   Available
   * *   Expired
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The total quota of the resource plan.
   * 
   * @example
   * 40.000
   */
  totalAmount?: string;
  /**
   * @remarks
   * The unit of the total quota.
   * 
   * @example
   * GB
   */
  totalAmountUnit?: string;
  static names(): { [key: string]: string } {
    return {
      applicableProducts: 'ApplicableProducts',
      commodityCode: 'CommodityCode',
      deductType: 'DeductType',
      effectiveTime: 'EffectiveTime',
      expiryTime: 'ExpiryTime',
      instanceId: 'InstanceId',
      packageType: 'PackageType',
      region: 'Region',
      remainingAmount: 'RemainingAmount',
      remainingAmountUnit: 'RemainingAmountUnit',
      remark: 'Remark',
      status: 'Status',
      totalAmount: 'TotalAmount',
      totalAmountUnit: 'TotalAmountUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicableProducts: QueryResourcePackageInstancesResponseBodyDataInstancesInstanceApplicableProducts,
      commodityCode: 'string',
      deductType: 'string',
      effectiveTime: 'string',
      expiryTime: 'string',
      instanceId: 'string',
      packageType: 'string',
      region: 'string',
      remainingAmount: 'string',
      remainingAmountUnit: 'string',
      remark: 'string',
      status: 'string',
      totalAmount: 'string',
      totalAmountUnit: 'string',
    };
  }

  validate() {
    if(this.applicableProducts && typeof (this.applicableProducts as any).validate === 'function') {
      (this.applicableProducts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResourcePackageInstancesResponseBodyDataInstances extends $dara.Model {
  instance?: QueryResourcePackageInstancesResponseBodyDataInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': QueryResourcePackageInstancesResponseBodyDataInstancesInstance },
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

export class QueryResourcePackageInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the host.
   * 
   * @example
   * cn
   */
  hostId?: string;
  /**
   * @remarks
   * The details of the instances.
   */
  instances?: QueryResourcePackageInstancesResponseBodyDataInstances;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 12
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      instances: 'Instances',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      instances: QueryResourcePackageInstancesResponseBodyDataInstances,
      pageNum: 'string',
      pageSize: 'string',
      totalCount: 'string',
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

export class QueryResourcePackageInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryResourcePackageInstancesResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 12
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      page: 'Page',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryResourcePackageInstancesResponseBodyData,
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

