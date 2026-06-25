// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * acp-34pqe4r0kd9kn****
   */
  androidInstanceId?: string;
  /**
   * @remarks
   * The instance name. Fuzzy match is supported.
   * 
   * @example
   * acp-34pqe4r0kd9kn****
   */
  androidInstanceName?: string;
  /**
   * @remarks
   * Specifies whether to perform a full device backup.
   * 
   * @example
   * false
   */
  backupAll?: boolean;
  /**
   * @remarks
   * The backup file ID.
   * 
   * @example
   * bf-dxrh5jrv0zpb8****
   */
  backupFileId?: string;
  /**
   * @remarks
   * The backup file name. Fuzzy match is supported.
   * 
   * @example
   * abc
   */
  backupFileName?: string;
  /**
   * @remarks
   * The description. Fuzzy match is supported.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * Queries backup files created before the specified time.
   * 
   * @example
   * 2024-05-20 10:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The owner of the backup file.
   * 
   * @example
   * test1
   */
  endUserId?: string;
  /**
   * @remarks
   * The instance group ID.
   * 
   * @example
   * ag-fxdx91jsfyiy3****
   */
  instanceGroupId?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that indicates the position from which to start reading. Leave this parameter empty to start reading from the beginning.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  saleMode?: string;
  /**
   * @remarks
   * Queries backup files created after the specified time.
   * 
   * @example
   * 2024-05-23 10:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The list of backup file statuses.
   */
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      androidInstanceName: 'AndroidInstanceName',
      backupAll: 'BackupAll',
      backupFileId: 'BackupFileId',
      backupFileName: 'BackupFileName',
      description: 'Description',
      endTime: 'EndTime',
      endUserId: 'EndUserId',
      instanceGroupId: 'InstanceGroupId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      saleMode: 'SaleMode',
      startTime: 'StartTime',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
      androidInstanceName: 'string',
      backupAll: 'boolean',
      backupFileId: 'string',
      backupFileName: 'string',
      description: 'string',
      endTime: 'string',
      endUserId: 'string',
      instanceGroupId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      saleMode: 'string',
      startTime: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

