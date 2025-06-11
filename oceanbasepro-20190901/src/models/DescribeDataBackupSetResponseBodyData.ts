// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataBackupSetResponseBodyDataBackupObjects } from "./DescribeDataBackupSetResponseBodyDataBackupObjects";
import { DescribeDataBackupSetResponseBodyDataBackupResults } from "./DescribeDataBackupSetResponseBodyDataBackupResults";


export class DescribeDataBackupSetResponseBodyData extends $dara.Model {
  /**
   * @example
   * cluster
   */
  backupObjectType?: string;
  backupObjects?: DescribeDataBackupSetResponseBodyDataBackupObjects[];
  backupResults?: DescribeDataBackupSetResponseBodyDataBackupResults[];
  /**
   * @example
   * 2023-05-15T07:11:08Z
   */
  checkpoint?: string;
  /**
   * @example
   * 31457280
   */
  dataSize?: number;
  /**
   * @example
   * 1678847020352
   */
  dataVersion?: number;
  /**
   * @example
   * 100***012
   */
  downloadTaskId?: number;
  /**
   * @example
   * not_exist
   */
  downloadTaskStatus?: string;
  /**
   * @example
   * 2023-04-13T03:38:10Z
   */
  endTime?: string;
  /**
   * @example
   * logical
   */
  method?: string;
  /**
   * @example
   * automated
   */
  policy?: string;
  /**
   * @example
   * 52
   */
  progress?: string;
  /**
   * @example
   * imm-test-set-cb****ee-b7d7-11ed-956f-****3e10bd70
   */
  setId?: string;
  /**
   * @example
   * 2020-05-22T17:04:18
   */
  startTime?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * standard
   */
  storageClass?: string;
  /**
   * @example
   * manual
   */
  type?: string;
  /**
   * @example
   * VALID
   */
  validity?: string;
  static names(): { [key: string]: string } {
    return {
      backupObjectType: 'BackupObjectType',
      backupObjects: 'BackupObjects',
      backupResults: 'BackupResults',
      checkpoint: 'Checkpoint',
      dataSize: 'DataSize',
      dataVersion: 'DataVersion',
      downloadTaskId: 'DownloadTaskId',
      downloadTaskStatus: 'DownloadTaskStatus',
      endTime: 'EndTime',
      method: 'Method',
      policy: 'Policy',
      progress: 'Progress',
      setId: 'SetId',
      startTime: 'StartTime',
      status: 'Status',
      storageClass: 'StorageClass',
      type: 'Type',
      validity: 'Validity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupObjectType: 'string',
      backupObjects: { 'type': 'array', 'itemType': DescribeDataBackupSetResponseBodyDataBackupObjects },
      backupResults: { 'type': 'array', 'itemType': DescribeDataBackupSetResponseBodyDataBackupResults },
      checkpoint: 'string',
      dataSize: 'number',
      dataVersion: 'number',
      downloadTaskId: 'number',
      downloadTaskStatus: 'string',
      endTime: 'string',
      method: 'string',
      policy: 'string',
      progress: 'string',
      setId: 'string',
      startTime: 'string',
      status: 'string',
      storageClass: 'string',
      type: 'string',
      validity: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.backupObjects)) {
      $dara.Model.validateArray(this.backupObjects);
    }
    if(Array.isArray(this.backupResults)) {
      $dara.Model.validateArray(this.backupResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

