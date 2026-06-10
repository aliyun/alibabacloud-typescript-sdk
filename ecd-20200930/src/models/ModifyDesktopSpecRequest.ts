// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesktopSpecRequestResourceSpecs extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud desktop.
   * 
   * @example
   * ecd-4543qyik164a4****
   */
  desktopId?: string;
  /**
   * @remarks
   * The new size of the system disk, in GiB. The value must be a multiple of 10 in the range of 80 to 500.
   * 
   * @example
   * 80
   */
  rootDiskSizeGib?: number;
  /**
   * @remarks
   * The new size of the data disk, in GiB. The value must be a multiple of 10 in the range of 20 to 2,040.
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
   * Specifies whether to enable automatic payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The ID of the cloud desktop.
   * 
   * @example
   * ecd-4543qyik164a4****
   */
  desktopId?: string;
  /**
   * @remarks
   * The new desktop type. You can call the [DescribeDesktopTypes](~~DescribeDesktopTypes~~) operation to query the supported desktop types.
   * 
   * This parameter is required.
   * 
   * @example
   * eds.general.2c4g
   */
  desktopType?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 50003308011****
   */
  promotionId?: string;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](~~DescribeRegions~~) operation to obtain a list of regions that Elastic Desktop Service supports.
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
   * A list of resource specification templates.
   */
  resourceSpecs?: ModifyDesktopSpecRequestResourceSpecs[];
  /**
   * @remarks
   * The resource type.
   * 
   * > This parameter is required only for cloud desktops that use the subscription billing method.
   * 
   * @example
   * DesktopMonthPackage
   */
  resourceType?: string;
  /**
   * @remarks
   * The new size of the system disk, in GiB. The value must be a multiple of 10 in the range of 80 to 500.
   * 
   * @example
   * 80
   */
  rootDiskSizeGib?: number;
  /**
   * @remarks
   * The performance level of the data disk.
   * 
   * @example
   * PL0
   */
  userDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The new size of the data disk, in GiB.
   * 
   * - For non-graphics-accelerated desktop types, the value must be a multiple of 10 in the range of 20 to 1,020.
   * 
   * - For graphics-accelerated desktop types, the value must be a multiple of 10 in the range of 40 to 1,020.
   * 
   * @example
   * 40
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

