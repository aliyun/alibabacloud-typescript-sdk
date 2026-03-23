// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyDatabaseRequest extends $dara.Model {
  DBInstanceName?: string;
  dstDBName?: string;
  ownerId?: number;
  reserveAccount?: number;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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

