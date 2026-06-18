// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupSetListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The backup mode. Valid values:
   * 
   * - **0**: automatic backup.
   * - **1**: manual backup.
   * 
   * @example
   * 0
   */
  backupModel?: number;
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 111
   */
  backupSetId?: string;
  /**
   * @remarks
   * The size of the backup set. Unit: bytes.
   * 
   * @example
   * 88803195
   */
  backupSetSize?: number;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * - **0**: fast backup.
   * - **1**: consistent backup.
   * 
   * @example
   * 1
   */
  backupType?: number;
  /**
   * @remarks
   * The time when the backup started.
   * 
   * @example
   * 1635706960956
   */
  beginTime?: number;
  /**
   * @remarks
   * The time when the backup ended.
   * 
   * @example
   * 1635706960956
   */
  endTime?: number;
  /**
   * @remarks
   * The status of the backup set. Valid values:
   * 
   * - **0**: Being backed up.
   * - **1**: Backup succeeded.
   * - **2**: Backup failed.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      backupModel: 'BackupModel',
      backupSetId: 'BackupSetId',
      backupSetSize: 'BackupSetSize',
      backupType: 'BackupType',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupModel: 'number',
      backupSetId: 'string',
      backupSetSize: 'number',
      backupType: 'number',
      beginTime: 'number',
      endTime: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data struct.
   */
  data?: DescribeBackupSetListResponseBodyData[];
  /**
   * @remarks
   * The response message. "success" is returned if the request is successful. Otherwise, an error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1A6D328C-84B8-40DC-BF49-6C73984D7494
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeBackupSetListResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

