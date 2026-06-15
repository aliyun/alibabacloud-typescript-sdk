// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRouterInterfaceRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated, case-sensitive token used to ensure request idempotency. You must ensure that the token is unique for each request. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the router interface is located.
   * 
   * You can call the [DescribeRegions](~~DescribeRegions~~) operation to get the latest list of regions.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the router interface that you want to delete.
   * 
   * This parameter is required.
   */
  routerInterfaceId?: string;
  /**
   * @remarks
   * This parameter is used for auditing and is required in specific scenarios, such as when deleting a router interface for a peer-to-peer connection.
   */
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routerInterfaceId: 'RouterInterfaceId',
      userCidr: 'UserCidr',
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
      routerInterfaceId: 'string',
      userCidr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

