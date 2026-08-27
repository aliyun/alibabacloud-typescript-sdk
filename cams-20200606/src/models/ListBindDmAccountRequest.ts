// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBindDmAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The SpaceId of the ISV sub-customer or the instance ID of the direct customer.
   * 
   * This parameter is required.
   * 
   * @example
   * Sample value.
   */
  custSpaceId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
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

