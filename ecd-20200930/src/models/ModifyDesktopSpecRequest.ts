// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesktopSpecRequestResourceSpecs extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud computer.
   * 
   * @example
   * ecd-4543qyik164a4****
   */
  desktopId?: string;
  /**
   * @remarks
   * The target size of the system disk. Valid values: 80-500 GiB. The value must be a multiple of 10.
   * 
   * @example
   * 80
   */
  rootDiskSizeGib?: number;
  /**
   * @remarks
   * The target size of the data disk. Valid values: 80-500 GiB. The value must be a multiple of 10.
   * 
   * @example
   * 20
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

export class ModifyDesktopSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the auto-payment feature.
   * 
   * Default value: true. Valid values:
   * 
   * *   true: enables the auto-payment feature.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     Make sure that you have sufficient balance in your Alibaba Cloud account. Otherwise, an exception occurs on your order.
   * 
   *     <!-- -->
   * 
   * *   false: disables the auto-payment feature. In this case, an order is generated, and no payment is automatically made.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     You can log on to the Elastic Desktop Service console and complete the payment based on the order ID on the Orders page.
   * 
   *     <!-- -->
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The ID of a cloud computer.
   * 
   * @example
   * ecd-4543qyik164a4****
   */
  desktopId?: string;
  /**
   * @remarks
   * The destination instance type. You can call the [DescribeDesktopTypes](https://help.aliyun.com/document_detail/188882.html) operation to query the instance types supported by cloud computers.
   * 
   * This parameter is required.
   * 
   * @example
   * eds.general.2c8g
   */
  desktopType?: string;
  /**
   * @remarks
   * The ID of the promotional activity.
   * 
   * @example
   * 500033080110596
   */
  promotionId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
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
   * The array of resource specification templates.
   */
  resourceSpecs?: ModifyDesktopSpecRequestResourceSpecs[];
  /**
   * @remarks
   * The resource type.
   * 
   * > This parameter is optional for non-subscribed cloud computers.
   * 
   * @example
   * DesktopMonthPackage
   */
  resourceType?: string;
  /**
   * @remarks
   * The size of the new system disk. Unit: GiB. Valid values: 80 to 500 GiB. The value must be a multiple of 10.
   * 
   * @example
   * 80
   */
  rootDiskSizeGib?: number;
  /**
   * @remarks
   * The performance level (PL) of the data disk. Default value: PL0.
   * 
   * Valid values:
   * 
   * *   PL1
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   PL0
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   PL3
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   PL2
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * PL0
   */
  userDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The destination data disk size. Unit: GiB.
   * 
   * *   The data disk size of a non-graphical cloud computer ranges from 20 to 1020 GiB and must be a multiple of 10.
   * *   The data disk size of a graphical cloud computer ranges from 40 to 1020 GiB and must be a multiple of 10.
   * 
   * @example
   * 100
   */
  userDiskSizeGib?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      desktopId: 'DesktopId',
      desktopType: 'DesktopType',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
      resellerOwnerUid: 'ResellerOwnerUid',
      resourceSpecs: 'ResourceSpecs',
      resourceType: 'ResourceType',
      rootDiskSizeGib: 'RootDiskSizeGib',
      userDiskPerformanceLevel: 'UserDiskPerformanceLevel',
      userDiskSizeGib: 'UserDiskSizeGib',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      desktopId: 'string',
      desktopType: 'string',
      promotionId: 'string',
      regionId: 'string',
      resellerOwnerUid: 'number',
      resourceSpecs: { 'type': 'array', 'itemType': ModifyDesktopSpecRequestResourceSpecs },
      resourceType: 'string',
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

