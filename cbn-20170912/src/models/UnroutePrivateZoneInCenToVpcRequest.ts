// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnroutePrivateZoneInCenToVpcRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region that accesses the PrivateZone service.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to obtain region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  accessRegionId?: string;
  /**
   * @remarks
   * The instance ID of the Cloud Enterprise Network (CEN).
   * 
   * This parameter is required.
   * 
   * @example
   * cen-7qthudw0ll6jmc****
   */
  cenId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessRegionId: 'AccessRegionId',
      cenId: 'CenId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessRegionId: 'string',
      cenId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

