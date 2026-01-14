// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBandwidthPackagesResponseBodyBandwidthPackagesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the bandwidth plan.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the bandwidth plan.
   * 
   * @example
   * tag-value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBandwidthPackagesResponseBodyBandwidthPackages extends $dara.Model {
  /**
   * @remarks
   * The IDs of the GA instances that are associated with the bandwidth plans.
   */
  accelerators?: string[];
  /**
   * @remarks
   * The bandwidth value of the bandwidth plan. Unit: Mbit/s.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of the bandwidth plan.
   * 
   * @example
   * gbwp-bp1sgzldyj6b4q7cx****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The type of the bandwidth. Valid values:
   * 
   * *   **Basic**
   * *   **Enhanced**
   * *   **Advanced**
   * 
   * @example
   * Basic
   */
  bandwidthType?: string;
  /**
   * @remarks
   * The metering method that is used when you use the pay-as-you-go billing method.
   * 
   * *   **PayByTraffic**: pay-by-data-transfer.
   * *   **PayBY95**: pay-by-95th-percentile.
   * 
   * @example
   * PayByTraffic
   */
  billingType?: string;
  /**
   * @remarks
   * Area A of the cross-region acceleration bandwidth plan. **China-mainland** is returned.
   * 
   * This parameter is returned only if you call the operation on the international site (alibabacloud.com).
   * 
   * @example
   * China-mainland
   */
  cbnGeographicRegionIdA?: string;
  /**
   * @remarks
   * Area B of the cross-region acceleration bandwidth plan. **Global** is returned.
   * 
   * This parameter is returned only if you call the operation on the international site (alibabacloud.com).
   * 
   * @example
   * Global
   */
  cbnGeographicRegionIdB?: string;
  /**
   * @remarks
   * The billing method of the bandwidth plan.
   * 
   * *   **PREPAY**: subscription. This is the default value.
   * *   **POSTPAY**: pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the bandwidth plan was created.
   * 
   * @example
   * 1578966918000
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the bandwidth plan.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The expiration time of the bandwidth plan.
   * 
   * @example
   * 1578966918000
   */
  expiredTime?: string;
  /**
   * @remarks
   * The name of the bandwidth plan.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The percentage of the guaranteed minimum bandwidth if the pay-by-95th-percentile metering method is used.
   * 
   * @example
   * 30
   */
  ratio?: number;
  /**
   * @remarks
   * The ID of the region where the GA instance is deployed. **cn-hangzhou** is returned.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2ry6mp2c****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the bandwidth plan. Valid values:
   * 
   * *   **init:** The bandwidth plan is being initialized.
   * *   **active:** The bandwidth plan is available.
   * *   **binded:** The bandwidth plan is associated with a GA instance.
   * *   **binding:** The bandwidth plan is being associated with a GA instance.
   * *   **unbinding:** The bandwidth plan is being disassociated from a GA instance.
   * *   **updating:** The bandwidth plan is being updated.
   * *   **finacialLocked:** The bandwidth plan is locked due to overdue payments.
   * *   **locked**: The bandwidth plan is locked.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The tag of the bandwidth plan.
   */
  tags?: ListBandwidthPackagesResponseBodyBandwidthPackagesTags[];
  /**
   * @remarks
   * The type of the bandwidth plan. Valid values:
   * 
   * *   **Basic:** a basic bandwidth plan.
   * *   **CrossDomain:** a cross-region acceleration bandwidth plan.
   * 
   * If you call the operation on the China site (aliyun.com), **Basic** is returned.
   * 
   * @example
   * Basic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accelerators: 'Accelerators',
      bandwidth: 'Bandwidth',
      bandwidthPackageId: 'BandwidthPackageId',
      bandwidthType: 'BandwidthType',
      billingType: 'BillingType',
      cbnGeographicRegionIdA: 'CbnGeographicRegionIdA',
      cbnGeographicRegionIdB: 'CbnGeographicRegionIdB',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      name: 'Name',
      ratio: 'Ratio',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerators: { 'type': 'array', 'itemType': 'string' },
      bandwidth: 'number',
      bandwidthPackageId: 'string',
      bandwidthType: 'string',
      billingType: 'string',
      cbnGeographicRegionIdA: 'string',
      cbnGeographicRegionIdB: 'string',
      chargeType: 'string',
      createTime: 'string',
      description: 'string',
      expiredTime: 'string',
      name: 'string',
      ratio: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': ListBandwidthPackagesResponseBodyBandwidthPackagesTags },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accelerators)) {
      $dara.Model.validateArray(this.accelerators);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBandwidthPackagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the bandwidth plans.
   */
  bandwidthPackages?: ListBandwidthPackagesResponseBodyBandwidthPackages[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4B6DBBB0-2D01-4C6A-A384-4129266E6B78
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackages: 'BandwidthPackages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackages: { 'type': 'array', 'itemType': ListBandwidthPackagesResponseBodyBandwidthPackages },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bandwidthPackages)) {
      $dara.Model.validateArray(this.bandwidthPackages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

