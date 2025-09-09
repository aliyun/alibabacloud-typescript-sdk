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
   * *   Valid values if you set InternetChargeType to PayByBandwidth: 10 to 1000.
   * *   Valid values if you set InternetChargeType to InternetChargeType: 10 to 200.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The type of hourly plan if you use the Monthly Subscription billing method. If you set `ResourceType` to `DesktopMonthPackage`, you must specify this parameter.
   * 
   * Valid values:
   * 
   * *   120: the 120-hour computing plan.
   * *   250: the 250-hour computing plan.
   * 
   * @example
   * 120
   */
  duration?: number;
  /**
   * @remarks
   * The number of cloud computer shares. Default value: 1.
   * 
   * >  This parameter takes effect only if you set `ResourceType` to `DesktopGroup`.
   * 
   * @example
   * 1
   */
  groupDesktopCount?: number;
  /**
   * @remarks
   * The specifications of the resource.
   * 
   * *   This parameter is required if you set `ResourceType` to `Desktop`. You can call the [DescribeDesktopTypes](~~DescribeDesktopTypes~~) to query the available cloud computer types that correspond to the value of `DesktopTypeId`.
   * *   If you set `ResourceType` to `DesktopGroup`, set the value of this parameter to `large`.
   * *   If you set `ResourceType` to `Bandwidth`, you can leave this parameter empty.
   * 
   * @example
   * eds.general.2c2g
   */
  instanceType?: string;
  /**
   * @remarks
   * The metering method for network traffic.
   * 
   * Valid values:
   * 
   * *   PayByTraffic: You are charged for the actually consumed traffic.
   * *   PayByBandwidth: You are charged by a fixed bandwidth.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The OS type.
   * 
   * Valid values:
   * 
   * *   Linux
   * *   Windows (default)
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The subscription duration. The valid values of this parameter vary based on the value of `PeriodUnit`.
   * 
   * *   If you set `PeriodUnit` to `Hour`, set the value of this parameter to 1.
   * *   If you set `PeriodUnit` to `Month`, set the value of this parameter to 1, 2, 3, or 6.
   * *   If you set `PeriodUnit` to `Year`, set the value of this parameter to 1, 2, or 3.
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
   * Valid values:
   * 
   * *   Month
   * *   Year
   * *   Hour (default)
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
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the regions supported by EDS.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resellerOwnerUid?: number;
  /**
   * @remarks
   * The type of the resource.
   * 
   * Valid values:
   * 
   * *   DesktopMonthPackage: monthly subscription cloud computers that use hourly limit plans.
   * *   Desktop (default): pay-as-you-go cloud computers/monthly subscription cloud computers that use unlimited plans.
   * *   Bandwidth: premium bandwidth plans.
   * *   DesktopGroup: cloud computer shares.
   * 
   * @example
   * Desktop
   */
  resourceType?: string;
  /**
   * @remarks
   * The category of the system disk.
   * 
   * Valid values:
   * 
   * *   cloud_efficiency: the ultra disk
   * *   cloud_auto: the standard SSD.
   * *   cloud_essd: the Enterprise SSD (ESSD). Take note that only specific cloud computer types support ESSDs.
   * 
   * @example
   * 40
   */
  rootDiskCategory?: string;
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
   * Valid values:
   * 
   * *   cloud_efficiency: the ultra disk
   * *   cloud_auto: the standard SSD.
   * *   cloud_essd: the ESSD. Take note that only specific cloud computer types support ESSDs.
   * 
   * @example
   * 80
   */
  userDiskCategory?: string;
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

