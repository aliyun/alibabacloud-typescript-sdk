// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVirtualBorderRouterRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. This token must be unique across requests. The token can contain only ASCII characters and must not exceed 64 characters in length.
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the VBR is deployed. You can call the `DescribeRegions` operation to obtain the latest list of regions.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The client-side CIDR block. This parameter is required only when you delete a VBR that is part of a dual-tunnel connection.
   */
  userCidr?: string;
  /**
   * @remarks
   * The ID of the VBR to delete.
   * 
   * This parameter is required.
   */
  vbrId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userCidr: 'UserCidr',
      vbrId: 'VbrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userCidr: 'string',
      vbrId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

