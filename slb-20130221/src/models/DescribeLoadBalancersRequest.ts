// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancersRequest extends $dara.Model {
  address?: string;
  addressType?: string;
  internetChargeType?: string;
  loadBalancerId?: string;
  loadBalancerName?: string;
  masterZoneId?: string;
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  payType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  serverId?: string;
  serverIntranetAddress?: string;
  slaveZoneId?: string;
  tags?: string;
  vSwitchId?: string;
  vpcId?: string;
  accessKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressType: 'AddressType',
      internetChargeType: 'InternetChargeType',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      masterZoneId: 'MasterZoneId',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      payType: 'PayType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverId: 'ServerId',
      serverIntranetAddress: 'ServerIntranetAddress',
      slaveZoneId: 'SlaveZoneId',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      accessKeyId: 'access_key_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressType: 'string',
      internetChargeType: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      masterZoneId: 'string',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      payType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverId: 'string',
      serverIntranetAddress: 'string',
      slaveZoneId: 'string',
      tags: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      accessKeyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

