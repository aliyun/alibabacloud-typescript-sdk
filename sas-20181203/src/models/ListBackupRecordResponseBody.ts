// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBackupRecordResponseBodyBackupRecordList extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the backup task ended. Unit: milliseconds.
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
   * The timestamp when the backup task started. Unit: milliseconds.
   * 
   * @example
   * 1699514211000
   */
  backupStartTime?: number;
  /**
   * @remarks
   * The backup task status. Valid value:
   * 
   * *   **BACKUP_COMPLETE**: The backup task is successful.
   * *   **BACKUP_FAILED**: The backup task failed.
   * *   **PARTIAL_COMPLETE**: The backup task is partially successful.
   * 
   * @example
   * BACKUP_COMPLETE
   */
  backupStatus?: string;
  /**
   * @remarks
   * The ID of the anti-ransomware agent.
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
   * The error message of the backup task.
   * 
   * @example
   * FILE_CACHE_NO_SPACE
   */
  errorMessage?: string;
  /**
   * @remarks
   * The instance ID of the server.
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
   * The ID of the region in which the backup is stored.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The UUID of the server whose data is backed up based on the anti-ransomware policy.
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
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * The details of the backup record.
   */
  backupRecordList?: ListBackupRecordResponseBodyBackupRecordList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListBackupRecordResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
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

