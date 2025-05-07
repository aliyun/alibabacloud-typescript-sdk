// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * rm-uf6wjk5******
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The destination database name.
   * 
   * @example
   * db2***
   */
  dstDBName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The reserved account.
   * 
   * @example
   * 1
   */
  reserveAccount?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source database name.
   * 
   * @example
   * db1***
   */
  srcDBName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      dstDBName: 'DstDBName',
      ownerId: 'OwnerId',
      reserveAccount: 'ReserveAccount',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      srcDBName: 'SrcDBName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      dstDBName: 'string',
      ownerId: 'number',
      reserveAccount: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      srcDBName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

