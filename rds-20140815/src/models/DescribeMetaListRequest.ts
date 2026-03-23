// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetaListRequest extends $dara.Model {
  backupSetID?: number;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  getDbName?: string;
  ownerId?: number;
  pageIndex?: number;
  pageSize?: number;
  pattern?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  restoreTime?: string;
  restoreType?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetID: 'BackupSetID',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      getDbName: 'GetDbName',
      ownerId: 'OwnerId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      pattern: 'Pattern',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      restoreType: 'RestoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetID: 'number',
      clientToken: 'string',
      DBInstanceId: 'string',
      getDbName: 'string',
      ownerId: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      pattern: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      restoreType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

