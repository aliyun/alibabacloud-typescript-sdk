// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSharedBackupsRequest extends $dara.Model {
  /**
   * @remarks
   * The backup set ID.
   * 
   * @example
   * 111111111
   */
  backupId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database type. Valid values:
   * 
   * - **MySQL**
   * 
   * - **PostgreSQL**
   * 
   * - **Oracle**
   * 
   * To specify multiple types, separate them with a comma.
   * 
   * @example
   * MySQL,PostgreSQL,Oracle
   */
  DBType?: string;
  /**
   * @remarks
   * The database version.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 30 to 100. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the available regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The share type. Valid values:
   * 
   * - **ShareIncoming**: backups shared with you.
   * 
   * - **ShareOutgoing**: backups you shared.
   * 
   * This parameter is required.
   * 
   * @example
   * ShareIncoming
   */
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      DBClusterId: 'DBClusterId',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      DBClusterId: 'string',
      DBType: 'string',
      DBVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      shareType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

