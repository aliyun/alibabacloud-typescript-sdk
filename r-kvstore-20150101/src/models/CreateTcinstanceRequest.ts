// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTCInstanceRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  performanceLevel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      performanceLevel: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTCInstanceRequestTag extends $dara.Model {
  key?: string;
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

export class CreateTCInstanceRequest extends $dara.Model {
  autoRenew?: string;
  autoRenewPeriod?: string;
  autoUseCoupon?: string;
  businessInfo?: string;
  clientToken?: string;
  couponNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dataDisk?: CreateTCInstanceRequestDataDisk[];
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  imageId?: string;
  instanceChargeType?: string;
  instanceClass?: string;
  instanceName?: string;
  needEni?: boolean;
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityGroupId?: string;
  securityToken?: string;
  tag?: CreateTCInstanceRequestTag[];
  vSwitchId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      autoUseCoupon: 'AutoUseCoupon',
      businessInfo: 'BusinessInfo',
      clientToken: 'ClientToken',
      couponNo: 'CouponNo',
      dataDisk: 'DataDisk',
      dryRun: 'DryRun',
      imageId: 'ImageId',
      instanceChargeType: 'InstanceChargeType',
      instanceClass: 'InstanceClass',
      instanceName: 'InstanceName',
      needEni: 'NeedEni',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupId: 'SecurityGroupId',
      securityToken: 'SecurityToken',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      autoRenewPeriod: 'string',
      autoUseCoupon: 'string',
      businessInfo: 'string',
      clientToken: 'string',
      couponNo: 'string',
      dataDisk: { 'type': 'array', 'itemType': CreateTCInstanceRequestDataDisk },
      dryRun: 'boolean',
      imageId: 'string',
      instanceChargeType: 'string',
      instanceClass: 'string',
      instanceName: 'string',
      needEni: 'boolean',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupId: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': CreateTCInstanceRequestTag },
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

