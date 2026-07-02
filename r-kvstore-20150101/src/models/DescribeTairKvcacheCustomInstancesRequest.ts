// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTairKVCacheCustomInstancesRequestTag extends $dara.Model {
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

export class DescribeTairKVCacheCustomInstancesRequest extends $dara.Model {
  chargeType?: string;
  expired?: string;
  instanceClass?: string;
  instanceIds?: string;
  instanceStatus?: string;
  instanceType?: string;
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  privateIp?: string;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  searchKey?: string;
  securityToken?: string;
  tag?: DescribeTairKVCacheCustomInstancesRequestTag[];
  vSwitchId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      expired: 'Expired',
      instanceClass: 'InstanceClass',
      instanceIds: 'InstanceIds',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      privateIp: 'PrivateIp',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      searchKey: 'SearchKey',
      securityToken: 'SecurityToken',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      expired: 'string',
      instanceClass: 'string',
      instanceIds: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      privateIp: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      searchKey: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': DescribeTairKVCacheCustomInstancesRequestTag },
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

