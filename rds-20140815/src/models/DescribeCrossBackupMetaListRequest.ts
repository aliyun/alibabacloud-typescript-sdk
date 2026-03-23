// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrossBackupMetaListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  backupSetId?: string;
  getDbName?: string;
  ownerId?: number;
  pageIndex?: string;
  pageSize?: string;
  pattern?: string;
  region?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      getDbName: 'GetDbName',
      ownerId: 'OwnerId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      pattern: 'Pattern',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      getDbName: 'string',
      ownerId: 'number',
      pageIndex: 'string',
      pageSize: 'string',
      pattern: 'string',
      region: 'string',
      resourceGroupId: 'string',
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

