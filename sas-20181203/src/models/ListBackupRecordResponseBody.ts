// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBackupRecordResponseBodyBackupRecordList extends $dara.Model {
  /**
   * @remarks
   * The backup end time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1699600611000
   */
  backupEndTime?: number;
  /**
   * @remarks
   * The backup task ID.
   * 
   * @example
   * a006f24d069843c88688672d74ee****
   */
  backupJobId?: string;
  /**
   * @remarks
   * The backup plan ID.
   * 
   * @example
   * plan-000c4tt43nolmx96****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The backup start time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1699514211000
   */
  backupStartTime?: number;
  /**
   * @remarks
   * The backup task status. Valid values:
   * - **BACKUP_COMPLETE**: backup succeeded
   * - **BACKUP_FAILED**: backup failed
   * - **PARTIAL_COMPLETE**: partial backup succeeded.
   * 
   * @example
   * BACKUP_COMPLETE
   */
  backupStatus?: string;
  /**
   * @remarks
   * The anti-ransomware client ID.
   * 
   * @example
   * c-0002bgagelj3d2sc****
   */
  clientId?: string;
  /**
   * @remarks
   * The error code of the backup task.
   * 
   * @example
   * FILE_CACHE_NO_SPACE
   */
  errorCode?: string;
  /**
   * @remarks
   * The error details of the backup task.
   * 
   * @example
   * FILE_CACHE_NO_SPACE
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the server instance.
   * 
   * @example
   * i-wz9ikn44p46krnic****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name of the asset.
   * 
   * @example
   * openapi
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 1.1.1.1
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 192.168.1.1
   */
  intranetIp?: string;
  /**
   * @remarks
   * The IP address of the server.
   * 
   * @example
   * 1.1.1.1
   */
  ip?: string;
  /**
   * @remarks
   * The region ID of the backup service.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The UUID of the server backed up by database anti-ransomware.
   * 
   * @example
   * b93cccb9-f19f-4886-97fe-47df26ba****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      backupEndTime: 'BackupEndTime',
      backupJobId: 'BackupJobId',
      backupPlanId: 'BackupPlanId',
      backupStartTime: 'BackupStartTime',
      backupStatus: 'BackupStatus',
      clientId: 'ClientId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ip: 'Ip',
      regionId: 'RegionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEndTime: 'number',
      backupJobId: 'string',
      backupPlanId: 'string',
      backupStartTime: 'number',
      backupStatus: 'string',
      clientId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ip: 'string',
      regionId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBackupRecordResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page in a paged query.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 2
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBackupRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of backup records.
   */
  backupRecordList?: ListBackupRecordResponseBodyBackupRecordList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListBackupRecordResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 3956048F-9D73-5EDB-834B-4827BB48****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupRecordList: 'BackupRecordList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRecordList: { 'type': 'array', 'itemType': ListBackupRecordResponseBodyBackupRecordList },
      pageInfo: ListBackupRecordResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.backupRecordList)) {
      $dara.Model.validateArray(this.backupRecordList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

