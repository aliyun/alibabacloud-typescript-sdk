// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TerminatePhysicalConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token to ensure the idempotency of the request. The token must be unique across requests and can contain only ASCII characters, with a maximum length of 64 characters.
   */
  clientToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the physical connection.
   * 
   * This parameter is required.
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The ID of the region where the physical connection is deployed.\\
   * You can call the `DescribeRegions` operation to get the most recent region list.\\
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is not used.
   */
  userCidr?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      physicalConnectionId: 'PhysicalConnectionId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userCidr: 'UserCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      physicalConnectionId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

