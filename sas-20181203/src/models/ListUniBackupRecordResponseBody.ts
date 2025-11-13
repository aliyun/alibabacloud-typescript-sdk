// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUniBackupRecordResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of items displayed on the current page in a pagination query.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a pagination query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of items displayed per page in a pagination query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records in the query result.
   * 
   * @example
   * 10
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

export class ListUniBackupRecordResponseBodyUniBackupRecordList extends $dara.Model {
  /**
   * @remarks
   * The end time of the backup, in timestamp format (in milliseconds).
   * 
   * @example
   * 1729071307
   */
  backupEndTime?: number;
  /**
   * @remarks
   * The start time of the backup, in timestamp format (in milliseconds).
   * 
   * @example
   * 1729071306
   */
  backupStartTime?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test_MySQL11
   */
  databaseName?: string;
  /**
   * @remarks
   * Database type. Values:
   * 
   * - **MYSQL**
   * - **ORACLE**
   * - **MSSQL**
   * 
   * @example
   * MYSQL
   */
  databaseType?: string;
  /**
   * @remarks
   * List of backup error messages.
   */
  errorMessageList?: string[];
  /**
   * @remarks
   * The instance ID of the server.
   * 
   * @example
   * i-2zee6ru2t8xbzix6****
   */
  instanceId?: string;
  /**
   * @remarks
   * Server name.
   * 
   * @example
   * launch-advisor-20190410
   */
  instanceName?: string;
  /**
   * @remarks
   * The unique ID of the database instance on the server.
   * 
   * @example
   * 18d04f2a496811ef800000163e13****
   */
  instanceUuid?: string;
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
   * The IP of the server.
   * 
   * > If a public IP exists, this value is the public IP; if no public IP but a private IP exists, then it is the private IP.
   * 
   * @example
   * 1.1.1.1
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the region where the instance is located.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Backup status. Values:
   * - **completed**: Success
   * - **error**: Failure
   * - **canceled**: Closed
   * 
   * @example
   * completed
   */
  state?: string;
  /**
   * @remarks
   * Backup type. Values:
   * 
   * - *full*: Full backup
   * - *incremental*: Incremental backup
   * 
   * @example
   * full
   */
  subtype?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 5d13e7cf-8074-4ffe-ab3b-1046565a****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      backupEndTime: 'BackupEndTime',
      backupStartTime: 'BackupStartTime',
      databaseName: 'DatabaseName',
      databaseType: 'DatabaseType',
      errorMessageList: 'ErrorMessageList',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceUuid: 'InstanceUuid',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ip: 'Ip',
      regionId: 'RegionId',
      state: 'State',
      subtype: 'Subtype',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEndTime: 'number',
      backupStartTime: 'number',
      databaseName: 'string',
      databaseType: 'string',
      errorMessageList: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      instanceName: 'string',
      instanceUuid: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ip: 'string',
      regionId: 'string',
      state: 'string',
      subtype: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.errorMessageList)) {
      $dara.Model.validateArray(this.errorMessageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUniBackupRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * Page information for pagination queries.
   */
  pageInfo?: ListUniBackupRecordResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is a unique identifier generated by Alibaba Cloud for this request and can be used for troubleshooting and problem localization.
   * 
   * @example
   * 09969D2C-4FAD-429E-BFBF-9A60DEF8****
   */
  requestId?: string;
  /**
   * @remarks
   * List of database backup records.
   */
  uniBackupRecordList?: ListUniBackupRecordResponseBodyUniBackupRecordList[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      uniBackupRecordList: 'UniBackupRecordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListUniBackupRecordResponseBodyPageInfo,
      requestId: 'string',
      uniBackupRecordList: { 'type': 'array', 'itemType': ListUniBackupRecordResponseBodyUniBackupRecordList },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.uniBackupRecordList)) {
      $dara.Model.validateArray(this.uniBackupRecordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

