// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDetachedBackupsRequest extends $dara.Model {
  backupId?: string;
  backupMode?: string;
  backupStatus?: string;
  DBInstanceId?: string;
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  region?: string;
  resourceGroupId?: string;
  resourceOwnerId?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      backupMode: 'BackupMode',
      backupStatus: 'BackupStatus',
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      backupMode: 'string',
      backupStatus: 'string',
      DBInstanceId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

