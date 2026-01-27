// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDownloadResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The point in time of the backup set if the task is used to download a backup set at a specific point in time. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1661373070000
   */
  backupSetTime?: number;
  /**
   * @remarks
   * The ID of the full backup set.
   * 
   * @example
   * 146005****
   */
  bakSetId?: string;
  /**
   * @remarks
   * The database and table information that is returned if databases and tables are filtered by the download task.
   * 
   * @example
   * testdb
   */
  dbList?: string;
  /**
   * @remarks
   * The state of the download task. Valid values:
   * 
   * *   initializing: The download task was being initialized.
   * *   queuing: The download task was queuing.
   * *   running: The download task was running.
   * *   failed: The download task failed.
   * *   finished: The download task was complete.
   * *   expired: The download task expired.
   * 
   * > If the TargetType parameter is set to URL, the download task expires in three days after the task is complete.
   * 
   * @example
   * initializing
   */
  downloadStatus?: string;
  /**
   * @remarks
   * The size of the downloaded data. Unit: bytes.
   * 
   * @example
   * 0
   */
  exportDataSize?: number;
  /**
   * @remarks
   * The format to which the downloaded data is converted.
   * 
   * @example
   * CSV
   */
  format?: string;
  /**
   * @remarks
   * The time when the download task was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1661940917570
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The size of the processed data. Unit: bytes.
   * 
   * @example
   * 0
   */
  importDataSize?: number;
  /**
   * @remarks
   * The number of tables that have been downloaded and the total number of tables to be downloaded.
   * 
   * > If the task is in the preparation stage, 0/0 is returned.
   * 
   * @example
   * 0/0
   */
  progress?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-beijing
   */
  regionCode?: string;
  /**
   * @remarks
   * The destination path to which the backup set is downloaded.
   * 
   * >  This parameter is returned if the value of **TargetType is OSS**.
   * 
   * @example
   * test_db/path
   */
  targetPath?: string;
  /**
   * @remarks
   * The type of the destination to which the backup set is downloaded.
   * 
   * @example
   * URL
   */
  targetType?: string;
  /**
   * @remarks
   * The ID of the download task.
   * 
   * @example
   * dt-qxnsfq5s****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetTime: 'BackupSetTime',
      bakSetId: 'BakSetId',
      dbList: 'DbList',
      downloadStatus: 'DownloadStatus',
      exportDataSize: 'ExportDataSize',
      format: 'Format',
      gmtCreate: 'GmtCreate',
      importDataSize: 'ImportDataSize',
      progress: 'Progress',
      regionCode: 'RegionCode',
      targetPath: 'TargetPath',
      targetType: 'TargetType',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetTime: 'number',
      bakSetId: 'string',
      dbList: 'string',
      downloadStatus: 'string',
      exportDataSize: 'number',
      format: 'string',
      gmtCreate: 'number',
      importDataSize: 'number',
      progress: 'string',
      regionCode: 'string',
      targetPath: 'string',
      targetType: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDownloadResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * DBS.ParamIsInValid
   */
  code?: string;
  /**
   * @remarks
   * The information about the download task.
   */
  data?: CreateDownloadResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * DBS.ParamIsInValid
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * formatType can not be empty
   */
  errMessage?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * formatType can not be empty
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A08F908D-2C35-583F-93C1-ED80753F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateDownloadResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

