// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupSetDownloadTaskListResponseBodyItemsBackupSetDownloadTaskDetail extends $dara.Model {
  backupGatewayId?: number;
  backupPlanId?: string;
  backupSetCode?: string;
  backupSetDataFormat?: string;
  backupSetDataSize?: number;
  backupSetDbType?: string;
  backupSetDownloadCreateTime?: number;
  backupSetDownloadDir?: string;
  backupSetDownloadFinishTime?: number;
  backupSetDownloadInternetUrl?: string;
  backupSetDownloadIntranetUrl?: string;
  backupSetDownloadStatus?: string;
  backupSetDownloadTargetType?: string;
  backupSetDownloadTaskId?: string;
  backupSetDownloadTaskName?: string;
  backupSetDownloadWay?: string;
  backupSetId?: string;
  backupSetJobType?: string;
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
  items?: DescribeBackupSetDownloadTaskListResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 0
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6DC3D286-E0E6-5988-A558-2184984B****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of download records for backup sets.
   * 
   * @example
   * 1
   */
  totalElements?: number;
  /**
   * @remarks
   * The total number of pages.
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

