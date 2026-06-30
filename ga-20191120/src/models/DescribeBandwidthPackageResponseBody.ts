// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBandwidthPackageResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * The instance ID of the Alibaba Cloud Global Accelerator (GA) instance attached to the bandwidth plan.
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
   * The bandwidth plan ID.
   * 
   * @example
   * gbwp-bp1sgzldyj6b4q7cx****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The bandwidth type. Valid values:
   * 
   * - **Basic**: standard acceleration bandwidth.
   * 
   * - **Enhanced**: enhanced acceleration bandwidth.
   * 
   * - **Advanced**: premium acceleration bandwidth.
   * 
   * @example
   * Basic
   */
  bandwidthType?: string;
  /**
   * @remarks
   * The billable methods for the pay-as-you-go billing method. Valid values:
   * - **PayByTraffic**: pay-by-data-transfer.
   * - **PayBY95**: pay-by-95th-percentile.
   * 
   * @example
   * PayByTraffic
   */
  billingType?: string;
  /**
   * @remarks
   * The interconnected area A of the cross-border acceleration bandwidth plan. The value is returned only as **China-mainland** (the Chinese mainland).
   * 
   * This parameter is returned only on the Alibaba Cloud International Website (www.alibabacloud.com).
   * 
   * @example
   * China-mainland
   */
  cbnGeographicRegionIdA?: string;
  /**
   * @remarks
   * The interconnected area B of the cross-border acceleration bandwidth plan. The value is returned only as **Global**.
   * 
   * This parameter is returned only on the Chinese site (Chinese mainland).
   * 
   * @example
   * Global
   */
  cbnGeographicRegionIdB?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * - **PREPAY** (default): subscription.
   * - **POSTPAY**: pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The timestamp when the bandwidth plan was created.
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
   * The timestamp when the bandwidth plan expires.
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
   * The minimum percentage for the pay-by-95th-percentile metering method. Valid values: **30** to **100**.
   * 
   * @example
   * 30
   */
  ratio?: number;
  /**
   * @remarks
   * The region ID of the Alibaba Cloud Global Accelerator (GA) instance. Set the value to **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4B6DBBB0-2D01-4C6A-A384-4129266E6B78
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfnvueepcihjiq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the bandwidth plan. Valid values:
   * 
   * - **init**: initialization.
   * 
   * - **active**: active.
   * 
   * - **binded**: attached.
   * 
   * - **binding**: being attached.
   * 
   * - **unbinding**: being disassociated.
   * 
   * - **updating**: being updated.
   * 
   * - **finacialLocked**: locked due to overdue payment.
   * 
   * - **locked**: locked.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The resource tags.
   */
  tags?: DescribeBandwidthPackageResponseBodyTags[];
  /**
   * @remarks
   * The type of the bandwidth plan. Valid values:
   * 
   * - **Basic**: basic bandwidth plan.
   * 
   * - **CrossDomain**: cross-border acceleration bandwidth plan.
   * 
   * Only **Basic** is returned on the Alibaba Cloud China Website (www.aliyun.com).
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

