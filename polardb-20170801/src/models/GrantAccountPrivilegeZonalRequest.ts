// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantAccountPrivilegeZonalRequest extends $dara.Model {
  /**
   * @remarks
   * The account name.
   * 
   * This parameter is required.
   * 
   * @example
   * testacc
   */
  accountName?: string;
  /**
   * @remarks
   * The account permissions. Valid values:
   * 
   * - ReadWrite: Read and write permissions.
   * 
   * - ReadOnly: Read-only permissions.
   * 
   * - DMLOnly: DML-only permissions.
   * 
   * - DDLOnly: DDL-only permissions.
   * 
   * - ReadIndex: Read-only and index permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * ReadWrite,ReadOnly
   */
  accountPrivilege?: string;
  /**
   * @remarks
   * A client-generated token that ensures the idempotence of the request. Make sure that the token is unique among different requests. The token is case-sensitive and can be up to 64 ASCII characters in length.
   * 
   * @example
   * 6000170000591aed949d0f5********************
   */
  clientToken?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database for which to grant permissions. To grant permissions for multiple databases, separate the database names with a comma (,).
   * 
   * This parameter is required.
   * 
   * @example
   * testdb_1,testdb_2
   */
  DBName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivilege: 'AccountPrivilege',
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivilege: 'string',
      clientToken: 'string',
      DBClusterId: 'string',
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

