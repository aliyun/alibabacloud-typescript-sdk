// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupSetDownloadTaskListResponseBodyItemsBackupSetDownloadTaskDetail extends $dara.Model {
  /**
   * @remarks
   * The backup gateway that is used to download the backup set. This parameter is available only if the value of the BackupSetDownloadWay parameter is auto.
   * 
   * @example
   * N/A
   */
  backupGatewayId?: number;
  /**
   * @remarks
   * The ID of the backup schedule.
   * 
   * @example
   * qhnuhyw3****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The code of the backup set.
   * 
   * @example
   * mysql-bin.00XXXX
   */
  backupSetCode?: string;
  /**
   * @remarks
   * The format in which the backup set is downloaded. Valid values:
   * 
   * *   **Native**
   * *   **SQL**
   * *   **CSV**
   * *   **JSON**
   * 
   * @example
   * Native
   */
  backupSetDataFormat?: string;
  /**
   * @remarks
   * The size of the data in the backup set.
   * 
   * @example
   * 237837
   */
  backupSetDataSize?: number;
  /**
   * @remarks
   * The type of the database.
   * 
   * @example
   * MySQL
   */
  backupSetDbType?: string;
  /**
   * @remarks
   * The timestamp that indicates when the backup set download task was created.
   * 
   * @example
   * 1642044001000
   */
  backupSetDownloadCreateTime?: number;
  /**
   * @remarks
   * The server directory to which the backup set is downloaded.
   * 
   * > This parameter is available only if the value of the BackupSetDownloadWay parameter is auto.
   * 
   * @example
   * N/A
   */
  backupSetDownloadDir?: string;
  /**
   * @remarks
   * The timestamp that indicates when the backup set download task is complete.
   * 
   * @example
   * 1642044013000
   */
  backupSetDownloadFinishTime?: number;
  /**
   * @remarks
   * The public download URL of the backup set.
   * 
   * > This parameter is available only if the value of the BackupSetDownloadWay parameter is manual and the conversion is complete.
   * 
   * @example
   * "//dbs-137XXXX-cn-hangzhou-1hr5cpbtmXXXX.oss-cn-hangzhou.example"
   */
  backupSetDownloadInternetUrl?: string;
  /**
   * @remarks
   * The internal download URL of the backup set.
   * 
   * > This parameter is available only if the value of the BackupSetDownloadWay parameter is manual and the conversion is complete.
   * 
   * @example
   * "//dbs-13XXXX-cn-hangzhou-1hr5cpbtmXXXX.oss-cn-hangzhou-internal.example"
   */
  backupSetDownloadIntranetUrl?: string;
  /**
   * @remarks
   * The status of the backup set download task. Valid values:
   * 
   * *   **checking**: The backup set download task is being prechecked.
   * *   **init**: The backup set download task is not started and fails to pass the precheck.
   * *   **check_pass**: The backup set download task passes the precheck.
   * *   **pause**: The backup set download task is paused.
   * *   **schedule**: The backup set download task is waiting to be scheduled
   * *   **running**: The backup set download task is running.
   * *   **stop**: The backup set download task fails.
   * *   **finish**: The backup set download task is complete.
   * 
   * @example
   * finish
   */
  backupSetDownloadStatus?: string;
  /**
   * @remarks
   * The type of the destination server to which the backup set is downloaded.
   * 
   * > This parameter is available only if the value of the BackupSetDownloadWay parameter is auto. A value of agent indicates a server on which a backup gateway is installed.
   * 
   * @example
   * N/A
   */
  backupSetDownloadTargetType?: string;
  /**
   * @remarks
   * The ID of the backup set download task.
   * 
   * @example
   * urxgrxt7****
   */
  backupSetDownloadTaskId?: string;
  /**
   * @remarks
   * The name of the backup set download task.
   * 
   * @example
   * 1h7za2yws****-ManualCont
   */
  backupSetDownloadTaskName?: string;
  /**
   * @remarks
   * The method in which the backup set is downloaded. Valid values:
   * 
   * *   **manual**: The backup set is manually downloaded.
   * *   **auto**: The backup set is automatically downloaded.
   * 
   * @example
   * manual
   */
  backupSetDownloadWay?: string;
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 1h7za2yws****
   */
  backupSetId?: string;
  /**
   * @remarks
   * The type of the backup set task. Valid values:
   * 
   * *   **cbs_backup_sub_full**: logical full backup set download task
   * *   **cbs_backup_sub_cont**: logical incremental backup set download task
   * 
   * @example
   * cbs_backup_sub_cont
   */
  backupSetJobType?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * java.lang.IndexOutOfBoundsException.
   */
  errMessage?: string;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      backupPlanId: 'BackupPlanId',
      backupSetCode: 'BackupSetCode',
      backupSetDataFormat: 'BackupSetDataFormat',
      backupSetDataSize: 'BackupSetDataSize',
      backupSetDbType: 'BackupSetDbType',
      backupSetDownloadCreateTime: 'BackupSetDownloadCreateTime',
      backupSetDownloadDir: 'BackupSetDownloadDir',
      backupSetDownloadFinishTime: 'BackupSetDownloadFinishTime',
      backupSetDownloadInternetUrl: 'BackupSetDownloadInternetUrl',
      backupSetDownloadIntranetUrl: 'BackupSetDownloadIntranetUrl',
      backupSetDownloadStatus: 'BackupSetDownloadStatus',
      backupSetDownloadTargetType: 'BackupSetDownloadTargetType',
      backupSetDownloadTaskId: 'BackupSetDownloadTaskId',
      backupSetDownloadTaskName: 'BackupSetDownloadTaskName',
      backupSetDownloadWay: 'BackupSetDownloadWay',
      backupSetId: 'BackupSetId',
      backupSetJobType: 'BackupSetJobType',
      errMessage: 'ErrMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayId: 'number',
      backupPlanId: 'string',
      backupSetCode: 'string',
      backupSetDataFormat: 'string',
      backupSetDataSize: 'number',
      backupSetDbType: 'string',
      backupSetDownloadCreateTime: 'number',
      backupSetDownloadDir: 'string',
      backupSetDownloadFinishTime: 'number',
      backupSetDownloadInternetUrl: 'string',
      backupSetDownloadIntranetUrl: 'string',
      backupSetDownloadStatus: 'string',
      backupSetDownloadTargetType: 'string',
      backupSetDownloadTaskId: 'string',
      backupSetDownloadTaskName: 'string',
      backupSetDownloadWay: 'string',
      backupSetId: 'string',
      backupSetJobType: 'string',
      errMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetDownloadTaskListResponseBodyItems extends $dara.Model {
  backupSetDownloadTaskDetail?: DescribeBackupSetDownloadTaskListResponseBodyItemsBackupSetDownloadTaskDetail[];
  static names(): { [key: string]: string } {
    return {
      backupSetDownloadTaskDetail: 'BackupSetDownloadTaskDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetDownloadTaskDetail: { 'type': 'array', 'itemType': DescribeBackupSetDownloadTaskListResponseBodyItemsBackupSetDownloadTaskDetail },
    };
  }

  validate() {
    if(Array.isArray(this.backupSetDownloadTaskDetail)) {
      $dara.Model.validateArray(this.backupSetDownloadTaskDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetDownloadTaskListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Param.NotFound
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameter %s value is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the backup schedules.
   */
  items?: DescribeBackupSetDownloadTaskListResponseBodyItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 0
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6DC3D286-E0E6-5988-A558-2184984B****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of backup set download tasks.
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
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      items: DescribeBackupSetDownloadTaskListResponseBodyItems,
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

