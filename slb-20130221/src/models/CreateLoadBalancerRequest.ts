// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerRequest extends $dara.Model {
  address?: string;
  clientToken?: string;
  isPublicAddress?: string;
  loadBalancerMode?: string;
  loadBalancerName?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      clientToken: 'ClientToken',
      isPublicAddress: 'IsPublicAddress',
      loadBalancerMode: 'LoadBalancerMode',
      loadBalancerName: 'LoadBalancerName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      clientToken: 'string',
      isPublicAddress: 'string',
      loadBalancerMode: 'string',
      loadBalancerName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

