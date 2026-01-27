// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDownloadTaskResponseBodyDataContentList extends $dara.Model {
  /**
   * @remarks
   * The point in time of the backup set if the task is used to download a backup set at a specific point in time. The value is a timestamp of the LONG type. Unit: millisecond.
   * 
   * @example
   * 1663162216000
   */
  backupSetTime?: string;
  /**
   * @remarks
   * The ID of the full backup set.
   * 
   * @example
   * 148261****
   */
  bakSetId?: string;
  /**
   * @remarks
   * The details of the databases.
   * 
   * @example
   * [dbtest]
   */
  dbList?: string;
  /**
   * @remarks
   * The status of the download task. Valid values:
   * 
   * *   **Initializing**: The download task is being initialized.
   * *   **queuing**: The download task is queuing.
   * *   **running**: The download task is running.
   * *   **failed**: The download task fails.
   * *   **finished**: The download task is complete.
   * *   **expired**: The download task expires.
   * 
   * @example
   * queueing
   */
  downloadStatus?: string;
  /**
   * @remarks
   * The amount of output data. Unit: bytes.
   * 
   * @example
   * 0
   */
  exportDataSize?: string;
  /**
   * @remarks
   * The format to which the downloaded backup set is converted. Valid values:
   * 
   * *   **csv**
   * *   **SQL**
   * *   **Parquet**
   * 
   * @example
   * csv
   */
  format?: string;
  /**
   * @remarks
   * The time when the download task was created. The value is a timestamp.
   * 
   * @example
   * 1663321957000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The amount of data that is processed. Unit: bytes.
   * 
   * @example
   * 0
   */
  importDataSize?: string;
  /**
   * @remarks
   * The number of tables that have been downloaded and the total number of tables to be downloaded.
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
   * cn-hangzhou
   */
  regionCode?: string;
  /**
   * @remarks
   * The destination path to which the data is downloaded if the value of **TargetType is OSS**.
   * 
   * @example
   * test_db/path
   */
  targetPath?: string;
  /**
   * @remarks
   * The type of the method in which the backup set is downloaded. Valid values:
   * 
   * *   **OSS**
   * *   **URL**
   * 
   * @example
   * URL
   */
  targetType?: string;
  /**
   * @remarks
   * The download task ID.
   * 
   * @example
   * dt-qxntlvgu****
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
      backupSetTime: 'string',
      bakSetId: 'string',
      dbList: 'string',
      downloadStatus: 'string',
      exportDataSize: 'string',
      format: 'string',
      gmtCreate: 'string',
      importDataSize: 'string',
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

export class DescribeDownloadTaskResponseBodyDataContent extends $dara.Model {
  list?: DescribeDownloadTaskResponseBodyDataContentList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeDownloadTaskResponseBodyDataContentList },
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the task.
   */
  content?: DescribeDownloadTaskResponseBodyDataContent;
  /**
   * @remarks
   * The extra description of the download tasks.
   * 
   * @example
   * dbtest
   */
  extra?: string;
  /**
   * @remarks
   * The page number of the returned page. The value must be an integer that is greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of full backup tasks.
   * 
   * @example
   * 1
   */
  totalElements?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 2
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      extra: 'Extra',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: DescribeDownloadTaskResponseBodyDataContent,
      extra: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * DBS.InternalError
   */
  code?: string;
  /**
   * @remarks
   * The details of the tasks.
   */
  data?: DescribeDownloadTaskResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * DBS.InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * instanceName can not be empty
   */
  errMessage?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * instanceName can not be empty
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5D285EB9-A443-592D-9F3D-A888FAC3****
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
      data: DescribeDownloadTaskResponseBodyData,
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

