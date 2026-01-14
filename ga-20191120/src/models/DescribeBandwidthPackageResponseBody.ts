// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBandwidthPackageResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag N that is added to the bandwidth plan.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N that is added to the bandwidth plan.
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

export class DescribeBandwidthPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance that is associated with the bandwidth plan.
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
   * *   **Basic**: basic bandwidth
   * *   **Enhanced**: enhanced bandwidth
   * *   **Advanced**: premium bandwidth
   * 
   * @example
   * Basic
   */
  bandwidthType?: string;
  /**
   * @remarks
   * The metering method that is used when you use the pay-as-you-go billing method. Valid values:
   * 
   * *   **PayByTraffic**: pay-by-data-transfer
   * *   **PayBY95**: pay-by-95th-percentile
   * 
   * @example
   * PayByTraffic
   */
  billingType?: string;
  /**
   * @remarks
   * Area A specified in the cross-region acceleration bandwidth plan. Only **China-mainland** (the Chinese mainland) is returned.
   * 
   * This parameter is returned only if you call this operation on the International site (alibabacloud.com).
   * 
   * @example
   * China-mainland
   */
  cbnGeographicRegionIdA?: string;
  /**
   * @remarks
   * Area B specified in the cross-region acceleration bandwidth plan. Only **Global** (global) is returned.
   * 
   * This parameter is returned only if you call this operation on the International site (alibabacloud.com).
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
   * The timestamp that indicates when the bandwidth plan was created.
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
   * The timestamp that indicates when the bandwidth plan expires.
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
   * The percentage of the minimum bandwidth guaranteed if the pay-by-95th-percentile-bandwidth metering method is used. Valid values: **30** to **100**.
   * 
   * @example
   * 30
   */
  ratio?: number;
  /**
   * @remarks
   * The ID of the region where GA instance is deployed. **cn-hangzhou** is returned.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * The ID of the resource group.
   * 
   * @example
   * rg-acfnvueepcihjiq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The state of the bandwidth plan. Valid values:
   * 
   * *   **init**: The bandwidth plan is being initialized.
   * *   **active**: The bandwidth plan is available.
   * *   **binded**: The bandwidth plan is associated with a GA instance.
   * *   **binding**: The bandwidth plan is being associated.
   * *   **unbinding**: The bandwidth plan is being disassociated.
   * *   **updating**: The bandwidth plan is being updated.
   * *   **finacialLocked**: The bandwidth plan is locked due to overdue payments.
   * *   **Locked**: The bandwidth plan is locked.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * Tag objects.
   */
  tags?: DescribeBandwidthPackageResponseBodyTags[];
  /**
   * @remarks
   * The type of the bandwidth plan. Valid values:
   * 
   * *   **Basic**: a basic bandwidth plan
   * *   **CrossDomain**: a cross-region acceleration bandwidth plan
   * 
   * If you call this operation on the Alibaba Cloud China Site (aliyun.com), only **Basic** is returned.
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
      requestId: 'RequestId',
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
      requestId: 'string',
      resourceGroupId: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': DescribeBandwidthPackageResponseBodyTags },
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

