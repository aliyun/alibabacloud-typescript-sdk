// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePhysicalConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated, case-sensitive token used to ensure request idempotency. This token must be unique across all requests and contain a maximum of 64 ASCII characters.
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
   * The region ID of the physical connection.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      physicalConnectionId: 'PhysicalConnectionId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

