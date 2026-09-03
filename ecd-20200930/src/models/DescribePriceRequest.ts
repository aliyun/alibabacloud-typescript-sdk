// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceRequest extends $dara.Model {
  /**
   * @remarks
   * The resource count. Default value: 1.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The peak Internet bandwidth. Unit: Mbit/s.
   * 
   * - For pay-by-bandwidth, valid values are 10 to 1000.
   * - For pay-by-traffic, valid values are 10 to 200.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The duration package type for monthly cloud desktop purchases. If ResourceType is set to DesktopMonthPackage, this parameter is required.
   * 
   * @example
   * 120
   */
  duration?: number;
  /**
   * @remarks
   * The number of shared cloud desktops. Default value: 1.
   * 
   * > This parameter takes effect only when ResourceType is set to DesktopGroup.
   * 
   * @example
   * 1
   */
  groupDesktopCount?: number;
  /**
   * @remarks
   * The resource specification.
   * 
   * - If ResourceType is set to Desktop, this parameter is required. You can call [DescribeDesktopTypes](~~DescribeDesktopTypes~~) to query available values (corresponding to the DesktopTypeId value).
   * 
   * - If ResourceType is set to DesktopGroup, set this parameter to `large`.
   * 
   * - If ResourceType is set to Bandwidth, you do not need to specify this parameter.
   * 
   * @example
   * eds.general.2c2g
   */
  instanceType?: string;
  /**
   * @remarks
   * The billing method of the Internet access package.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The subscription duration. Valid values are determined by the PeriodUnit parameter.
   * 
   * - If PeriodUnit is set to Hour, the valid value is 1.
   * - If PeriodUnit is set to Month, valid values are 1, 2, 3, and 6.
   * - If PeriodUnit is set to Year, valid values are 1, 2, and 3.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The billing cycle.
   * 
   * @example
   * Hour
   */
  periodUnit?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 123456
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
   * The user ID for resource ownership in reseller mode. You do not need to specify this parameter in non-reseller mode.
   * 
   * @example
   * 1422724566551XXX
   */
  resellerOwnerUid?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Desktop
   */
  resourceType?: string;
  /**
   * @remarks
   * The system cloud disk type.
   * 
   * @example
   * 40
   */
  rootDiskCategory?: string;
  /**
   * @remarks
   * The performance level (PL) of the system cloud disk. You can set the disk performance level when the cloud desktop specification is set to Graphics or High Frequency. For more information about the differences between performance levels, see [ESSD cloud disks](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL0
   */
  rootDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The system cloud disk size. Unit: GiB. If ResourceType is set to Desktop, this parameter is required.
   * 
   * @example
   * 80
   */
  rootDiskSizeGib?: number;
  /**
   * @remarks
   * The data cloud disk type.
   * 
   * @example
   * 80
   */
  userDiskCategory?: string;
  /**
   * @remarks
   * The performance level (PL) of the data cloud disk. You can set the disk performance level when the cloud desktop specification is set to Graphics or High Frequency. For more information about the differences between performance levels, see [ESSD cloud disks](https://help.aliyun.com/document_detail/122389.html).
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
   * 100
   */
  userDiskSizeGib?: number;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      bandwidth: 'Bandwidth',
      duration: 'Duration',
      groupDesktopCount: 'GroupDesktopCount',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      osType: 'OsType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
      resellerOwnerUid: 'ResellerOwnerUid',
      resourceType: 'ResourceType',
      rootDiskCategory: 'RootDiskCategory',
      rootDiskPerformanceLevel: 'RootDiskPerformanceLevel',
      rootDiskSizeGib: 'RootDiskSizeGib',
      userDiskCategory: 'UserDiskCategory',
      userDiskPerformanceLevel: 'UserDiskPerformanceLevel',
      userDiskSizeGib: 'UserDiskSizeGib',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      bandwidth: 'number',
      duration: 'number',
      groupDesktopCount: 'number',
      instanceType: 'string',
      internetChargeType: 'string',
      osType: 'string',
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      regionId: 'string',
      resellerOwnerUid: 'number',
      resourceType: 'string',
      rootDiskCategory: 'string',
      rootDiskPerformanceLevel: 'string',
      rootDiskSizeGib: 'number',
      userDiskCategory: 'string',
      userDiskPerformanceLevel: 'string',
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

