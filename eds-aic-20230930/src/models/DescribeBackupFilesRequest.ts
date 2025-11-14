// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * acp-34pqe4r0kd9kn****
   */
  androidInstanceId?: string;
  /**
   * @remarks
   * The name of the instance. Fuzzy match is supported.
   * 
   * @example
   * acp-34pqe4r0kd9kn****
   */
  androidInstanceName?: string;
  /**
   * @remarks
   * Specifies whether the whole instance is backed up.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  backupAll?: boolean;
  /**
   * @remarks
   * The ID of the backup file.
   * 
   * @example
   * bf-dxrh5jrv0zpb8****
   */
  backupFileId?: string;
  /**
   * @remarks
   * The name of the backup file. Fuzzy match is supported.
   * 
   * @example
   * defaulBackupFile
   */
  backupFileName?: string;
  /**
   * @remarks
   * The description of the backup file. Fuzzy match is supported.
   * 
   * @example
   * default description.
   */
  description?: string;
  /**
   * @remarks
   * The end of the period for querying generated backup files.
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
   * The ID of the instance group.
   * 
   * @example
   * ag-fxdx91jsfyiy3****
   */
  instanceGroupId?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****
   */
  nextToken?: string;
  saleMode?: string;
  /**
   * @remarks
   * The beginning of the period for querying generated backup files.
   * 
   * @example
   * 2024-05-23 10:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the backup files.
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

