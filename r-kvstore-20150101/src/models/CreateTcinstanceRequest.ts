// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTCInstanceRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
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
  /**
   * @example
   * key1_test
   */
  key?: string;
  /**
   * @example
   * testvalue
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

export class CreateTCInstanceRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @example
   * 1
   */
  autoRenewPeriod?: string;
  /**
   * @example
   * false
   */
  autoUseCoupon?: string;
  /**
   * @example
   * 000000000
   */
  businessInfo?: string;
  /**
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dataDisk?: CreateTCInstanceRequestDataDisk[];
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ubuntu_20_04_64_20G_alibase_20210412
   */
  imageId?: string;
  /**
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @example
   * tair.kvcache.guis.8.gu60
   */
  instanceClass?: string;
  /**
   * @example
   * newinstancename
   */
  instanceName?: string;
  needEni?: boolean;
  /**
   * @example
   * VPC
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * 12
   */
  period?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmyiu4e******
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * sg-bpcfmyiu4ekp****
   */
  securityGroupId?: string;
  securityToken?: string;
  tag?: CreateTCInstanceRequestTag[];
  /**
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-bp1nme44gek34slfc****
   */
  vpcId?: string;
  /**
   * @example
   * cn-hangzhou-b
   */
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

