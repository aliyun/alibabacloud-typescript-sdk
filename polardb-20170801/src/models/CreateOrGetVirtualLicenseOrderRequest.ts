// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrGetVirtualLicenseOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the engine. Valid values: PG, Oracle, and MySQL.
   * 
   * This parameter is required.
   * 
   * @example
   * PG
   */
  engine?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
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

