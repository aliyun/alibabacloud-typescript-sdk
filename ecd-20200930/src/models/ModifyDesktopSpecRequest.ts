// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesktopSpecRequestResourceSpecs extends $dara.Model {
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * @example
   * ecd-4543qyik164a4****
   */
  desktopId?: string;
  /**
   * @remarks
   * The target system cloud disk size. Valid values: 80 to 500 GiB. The value must be a multiple of 10.
   * 
   * @example
   * 80
   */
  rootDiskSizeGib?: number;
  /**
   * @remarks
   * The target data cloud disk size. Valid values: 80 to 500 GiB. The value must be a multiple of 10.
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
   * Default value: true. Valid values:
   * 
   * - true: Automatic payment is enabled. Make sure that your Alibaba Cloud account balance is sufficient. Otherwise, abnormal orders may be generated.
   * - false: Only an order is generated. Automatic payment is not enabled.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * @example
   * ecd-4543qyik164a4****
   */
  desktopId?: string;
  /**
   * @remarks
   * The target instance type. You can call [DescribeDesktopTypes](https://help.aliyun.com/document_detail/188882.html) to query the instance types supported by cloud computers.
   * 
   * This parameter is required.
   * 
   * @example
   * eds.general.2c8g
   */
  desktopType?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * @example
   * 500033080110596
   */
  promotionId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the resource ownership in the reseller pattern. This parameter is not required in the non-reseller pattern.
   * 
   * @example
   * 1422724566551XXX
   */
  resellerOwnerUid?: number;
  /**
   * @remarks
   * The resource specification templates.
   */
  resourceSpecs?: ModifyDesktopSpecRequestResourceSpecs[];
  /**
   * @remarks
   * The resource type.
   * 
   * > This parameter is not required for non-subscription cloud computers.
   * 
   * @example
   * DesktopMonthPackage
   */
  resourceType?: string;
  /**
   * @remarks
   * The system cloud disk size after the change. Unit: GiB. Valid values: 80 to 500. The value must be a multiple of 10.
   * 
   * @example
   * 80
   */
  rootDiskSizeGib?: number;
  /**
   * @remarks
   * The performance level (PL) of the data cloud disk. Default value: PL0.
   * 
   * Valid values:
   * 
   * - PL0
   * - PL1
   * - PL2
   * - PL3
   * 
   * @example
   * PL0
   */
  userDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The data cloud disk size after the change. Unit: GiB.
   * 
   * - For non-graphics cloud computers, valid values: 20 to 1020. The value must be a multiple of 10.
   * - For graphics cloud computers, valid values: 40 to 1020. The value must be a multiple of 10.
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

