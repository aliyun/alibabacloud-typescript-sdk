// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBDescriptionZonalRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. The client generates this token. It must be unique across requests, case-sensitive, and up to 64 ASCII characters in length.
   * 
   * @example
   * 6000170000591aed949d0f54a343f1a4233c1e7d1c5******
   */
  clientToken?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The description of the database. The description must meet the following requirements:
   * 
   * - It cannot start with `http://` or `https://`.
   * 
   * - It must be 2 to 256 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testdesc
   */
  DBDescription?: string;
  /**
   * @remarks
   * The database name.
   * 
   * This parameter is required.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      DBDescription: 'DBDescription',
      DBName: 'DBName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      DBDescription: 'string',
      DBName: 'string',
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

