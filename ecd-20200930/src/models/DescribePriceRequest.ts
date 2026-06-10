// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of resources. Default value: 1.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The maximum public bandwidth. Unit: Mbit/s.
   * 
   * - Valid values if you set InternetChargeType to PayByBandwidth: 10 to 1000.
   * 
   * - Valid values if you set InternetChargeType to InternetChargeType: 10 to 200.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The type of hourly plan if you use the Monthly Subscription billing method. If you set `ResourceType` to `DesktopMonthPackage`, you must specify this parameter.
   * 
   * @example
   * 120
   */
  duration?: number;
  /**
   * @remarks
   * The number of cloud computer shares. Default value: 1.
   * 
   * > This parameter takes effect only if you set `ResourceType` to `DesktopGroup`.
   * 
   * @example
   * 1
   */
  groupDesktopCount?: number;
  /**
   * @remarks
   * The specifications of the resource.
   * 
   * - This parameter is required if you set `ResourceType` to `Desktop`. You can call the [DescribeDesktopTypes](~~DescribeDesktopTypes~~) to query the available cloud computer types that correspond to the value of `DesktopTypeId`.
   * 
   * - If you set `ResourceType` to `DesktopGroup`, set the value of this parameter to `large`.
   * 
   * - If you set `ResourceType` to `Bandwidth`, you can leave this parameter empty.
   * 
   * @example
   * eds.general.2c2g
   */
  instanceType?: string;
  /**
   * @remarks
   * The metering method for network traffic.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The OS type.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The subscription duration. The valid values of this parameter vary based on the value of `PeriodUnit`.
   * 
   * - If you set `PeriodUnit` to `Hour`, set the value of this parameter to 1.
   * 
   * - If you set `PeriodUnit` to `Month`, set the value of this parameter to 1, 2, 3, or 6.
   * 
   * - If you set `PeriodUnit` to `Year`, set the value of this parameter to 1, 2, or 3.
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
   * The region ID. You can call the [](t2167755.xdita#)operation to query the regions supported by EDS.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * User ID of the resource owner in resale mode. This parameter is not required in non-resale mode.
   * 
   * @example
   * 1422724566551XXX
   */
  resellerOwnerUid?: number;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * Desktop
   */
  resourceType?: string;
  /**
   * @remarks
   * The category of the system disk.
   * 
   * @example
   * 40
   */
  rootDiskCategory?: string;
  /**
   * @remarks
   * Performance level of the system disk. You can configure the disk performance level when the cloud desktop instance type is graphics-optimized or high clock speed. For differences among performance levels of disks, see [](t583241.xdita#).
   * 
   * @example
   * PL0
   */
  rootDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. If you set `ResourceType` to `Desktop`, you must specify this parameter.
   * 
   * @example
   * 80
   */
  rootDiskSizeGib?: number;
  /**
   * @remarks
   * The category of the data disk.
   * 
   * @example
   * 80
   */
  userDiskCategory?: string;
  /**
   * @remarks
   * Performance level of the data disk. You can specify the disk performance level when the WUYING Workspace instance type is set to graphics-optimized or high clock speed. For differences between performance levels of disks, see [](t583241.xdita#).
   * 
   * @example
   * PL0
   */
  userDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the data disk. Unit: GiB.
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

