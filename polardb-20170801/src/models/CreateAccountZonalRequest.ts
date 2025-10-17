// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountZonalRequest extends $dara.Model {
  /**
   * @example
   * testdes
   */
  accountDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testacc
   */
  accountName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Test1111
   */
  accountPassword?: string;
  /**
   * @example
   * ReadWrite
   */
  accountPrivilege?: string;
  /**
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @example
   * 6000170000591aed949d0f54a343f1a4233c1e7d1c5c******
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @example
   * testdb
   */
  DBName?: string;
  /**
   * @example
   * Normal
   */
  nodeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * 0
   */
  privForAllDB?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountPrivilege: 'AccountPrivilege',
      accountType: 'AccountType',
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      nodeType: 'NodeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      privForAllDB: 'PrivForAllDB',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      accountPrivilege: 'string',
      accountType: 'string',
      clientToken: 'string',
      DBClusterId: 'string',
      DBName: 'string',
      nodeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      privForAllDB: 'string',
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

