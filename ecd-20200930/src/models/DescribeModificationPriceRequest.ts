// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModificationPriceRequestResourceSpecs extends $dara.Model {
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * @example
   * ecd-6ghhzivgmnzgeyXXX
   */
  desktopId?: string;
  /**
   * @remarks
   * The system cloud disk size. Unit: GiB.
   * 
   * @example
   * 80
   */
  rootDiskSizeGib?: number;
  /**
   * @remarks
   * The data cloud disk size. Unit: GiB.
   * 
   * @example
   * 100
   */
  userDiskSizeGib?: number;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      rootDiskSizeGib: 'RootDiskSizeGib',
      userDiskSizeGib: 'UserDiskSizeGib',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      rootDiskSizeGib: 'number',
      userDiskSizeGib: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModificationPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The peak Internet bandwidth. Unit: Mbit/s.
   * 
   * > If you use the pay-by-bandwidth billing method, the valid values range from 10 to 1000.
   * 
   * @example
   * 20
   */
  bandwidth?: number;
  /**
   * @remarks
   * The instance ID. The value can be the ID of a monthly-subscribed (unlimited-duration) cloud computer or the ID of a premium Internet bandwidth instance.
   * 
   * @example
   * ecd-0gfv2z3sf95zvt****
   */
  instanceId?: string;
  /**
   * @remarks
   * The resource specification.
   * 
   * - If `ResourceType` is set to `Desktop`, valid values include:
   *     - ecd.basic.small
   *     - ecd.basic.large
   *     - ecd.advanced.large
   *     - ecd.advanced.xlarge
   *     - ecd.performance.2xlarge
   *     - ecd.graphics.xlarge
   *     - ecd.graphics.2xlarge
   *     - ecd.advanced.xlarge_s8d2
   *     - ecd.advanced.xlarge_s8d7
   *     - ecd.graphics.1g72c
   *     - eds.general.2c2g
   *     - eds.general.2c4g
   *     - eds.general.2c8g
   *     - eds.general.4c8g
   *     - eds.general.4c16g
   *     - eds.general.8c16g
   *     - eds.general.8c32g
   *     - eds.general.16c32g
   * 
   * - If `ResourceType` is set to `NetworkPackage`, you do not need to specify this parameter.
   * 
   * @example
   * eds.enterprise_office.8c16g
   */
  instanceType?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID for resource ownership in the reseller pattern. You do not need to specify this parameter in non-reseller pattern.
   * 
   * @example
   * 1422724566551XXX
   */
  resellerOwnerUid?: number;
  /**
   * @remarks
   * The list of resource specification templates.
   */
  resourceSpecs?: DescribeModificationPriceRequestResourceSpecs[];
  /**
   * @remarks
   * The resource type. The required parameters vary based on the resource type for which you want to query the specification change price:
   * 
   * - If `ResourceType` is set to `Desktop`, you must specify the `InstanceType`, `RootDiskSizeGib`, and `UserDiskSizeGib` parameters.
   * - If `ResourceType` is set to `NetworkPackage`, you must specify the `Bandwidth` parameter.
   * 
   * @example
   * Desktop
   */
  resourceType?: string;
  /**
   * @remarks
   * The performance level of the system cloud disk. You can configure the disk performance level in Settings when the cloud computer specification is set to graphics-accelerated or high frequency. For more information about the differences between performance levels, see [ESSDs](https://help.aliyun.com/document_detail/122389.html). standard SSD does not support performance level configuration.
   * 
   * @example
   * PL0
   */
  rootDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The system cloud disk size. Unit: GiB.
   * 
   * @example
   * 80
   */
  rootDiskSizeGib?: number;
  /**
   * @remarks
   * The performance level of the data cloud disk. You can configure the disk performance level in Settings when the cloud computer specification is set to graphics-accelerated or high frequency. For more information about the differences between performance levels, see [ESSDs](https://help.aliyun.com/document_detail/122389.html). standard SSD does not support performance level configuration.
   * 
   * @example
   * PL0
   */
  userDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The data cloud disk size. Unit: GiB.
   * 
   * @example
   * 50
   */
  userDiskSizeGib?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
      resellerOwnerUid: 'ResellerOwnerUid',
      resourceSpecs: 'ResourceSpecs',
      resourceType: 'ResourceType',
      rootDiskPerformanceLevel: 'RootDiskPerformanceLevel',
      rootDiskSizeGib: 'RootDiskSizeGib',
      userDiskPerformanceLevel: 'UserDiskPerformanceLevel',
      userDiskSizeGib: 'UserDiskSizeGib',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      instanceId: 'string',
      instanceType: 'string',
      promotionId: 'string',
      regionId: 'string',
      resellerOwnerUid: 'number',
      resourceSpecs: { 'type': 'array', 'itemType': DescribeModificationPriceRequestResourceSpecs },
      resourceType: 'string',
      rootDiskPerformanceLevel: 'string',
      rootDiskSizeGib: 'number',
      userDiskPerformanceLevel: 'string',
      userDiskSizeGib: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceSpecs)) {
      $dara.Model.validateArray(this.resourceSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

