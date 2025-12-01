// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreTaskListResponseBodyItemsRestoreTaskDetail extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup gateway.
   * 
   * @example
   * 324234332
   */
  backupGatewayId?: number;
  /**
   * @remarks
   * The ID of the backup schedule.
   * 
   * @example
   * dbs1hvb0wXXXX
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The ID of the full backup set that is used in the restore task.
   * 
   * @example
   * 1ibh2f5uXXX
   */
  backupSetId?: string;
  /**
   * @remarks
   * The restore progress of the incremental log files.
   * 
   * @example
   * 100
   */
  continuousRestoreProgress?: number;
  /**
   * @remarks
   * The unique ID (UID) of the Alibaba Cloud account to which the backup schedule belongs.
   * 
   * @example
   * 2xxx7778xxxxxxxxxx
   */
  crossAliyunId?: string;
  /**
   * @remarks
   * The name of the RAM role that can be used to perform backups across Alibaba Cloud accounts.
   * 
   * @example
   * test123
   */
  crossRoleName?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test
   */
  destinationEndpointDatabaseName?: string;
  /**
   * @remarks
   * The ID of the database instance.
   * 
   * @example
   * rm-bp1p8c2947XXX
   */
  destinationEndpointInstanceID?: string;
  /**
   * @remarks
   * The location of the database. Valid values:
   * 
   * *   RDS
   * *   ECS
   * *   Express: The database is connected to DBS by using Express Connect, VPN Gateway, or Smart Access Gateway.
   * *   Agent: The database is connected to DBS over a DBS backup gateway.
   * *   DDS: The database is an ApsaraDB for MongoDB database.
   * *   Other: The database is connected to DBS by using the IP address and port of the database.
   * 
   * @example
   * RDS
   */
  destinationEndpointInstanceType?: string;
  /**
   * @remarks
   * The endpoint that is used to connect to the database.
   * 
   * @example
   * 100.X.X.10:33204
   */
  destinationEndpointIpPort?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * 
   * @example
   * test
   */
  destinationEndpointOracleSID?: string;
  /**
   * @remarks
   * The region in which the database is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  destinationEndpointRegion?: string;
  /**
   * @remarks
   * The username of the account that is used to connect to the database.
   * 
   * @example
   * test
   */
  destinationEndpointUserName?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * NULL
   */
  errMessage?: string;
  /**
   * @remarks
   * The restore progress of the full backup data.
   * 
   * @example
   * 100
   */
  fullDataRestoreProgress?: number;
  /**
   * @remarks
   * The progress of schema restore after full data restore.
   * 
   * @example
   * 100
   */
  fullStruAfterRestoreProgress?: number;
  /**
   * @remarks
   * The progress of schema restore before full data restore.
   * 
   * @example
   * 0
   */
  fullStruforeRestoreProgress?: number;
  /**
   * @remarks
   * The directory of the destination database to which the objects were restored.
   * 
   * @example
   * 100.X.X.10:33204
   */
  restoreDir?: string;
  /**
   * @remarks
   * The objects to be restored.
   * 
   * @example
   * [     {         \\"DBName\\":\\"test\\"       } ]
   */
  restoreObjects?: string;
  /**
   * @remarks
   * The status of the restore task. Valid values:
   * 
   * *   init: The restore task is not started or does not pass the precheck.
   * *   running: The restore task is running.
   * *   stop: The restore task failed.
   * *   pause: The restore task is stopped.
   * *   check_pass: The restore task passed the precheck.
   * 
   * @example
   * running
   */
  restoreStatus?: string;
  /**
   * @remarks
   * The time when the restore task was created, such as 1554560477000.
   * 
   * @example
   * 1554560477000
   */
  restoreTaskCreateTime?: number;
  /**
   * @remarks
   * The time when the restore task was complete, such as 1554560477000.
   * 
   * @example
   * 1554560477000
   */
  restoreTaskFinishTime?: number;
  /**
   * @remarks
   * The ID of the restore task.
   * 
   * @example
   * s1XXXXXX
   */
  restoreTaskId?: string;
  /**
   * @remarks
   * The name of the restore task.
   * 
   * @example
   * test
   */
  restoreTaskName?: string;
  /**
   * @remarks
   * The time to run the restore task, such as 1554560477000.
   * 
   * @example
   * 1554560477000
   */
  restoreTime?: number;
  static names(): { [key: string]: string } {
    return {
      backupGatewayId: 'BackupGatewayId',
      backupPlanId: 'BackupPlanId',
      backupSetId: 'BackupSetId',
      continuousRestoreProgress: 'ContinuousRestoreProgress',
      crossAliyunId: 'CrossAliyunId',
      crossRoleName: 'CrossRoleName',
      destinationEndpointDatabaseName: 'DestinationEndpointDatabaseName',
      destinationEndpointInstanceID: 'DestinationEndpointInstanceID',
      destinationEndpointInstanceType: 'DestinationEndpointInstanceType',
      destinationEndpointIpPort: 'DestinationEndpointIpPort',
      destinationEndpointOracleSID: 'DestinationEndpointOracleSID',
      destinationEndpointRegion: 'DestinationEndpointRegion',
      destinationEndpointUserName: 'DestinationEndpointUserName',
      errMessage: 'ErrMessage',
      fullDataRestoreProgress: 'FullDataRestoreProgress',
      fullStruAfterRestoreProgress: 'FullStruAfterRestoreProgress',
      fullStruforeRestoreProgress: 'FullStruforeRestoreProgress',
      restoreDir: 'RestoreDir',
      restoreObjects: 'RestoreObjects',
      restoreStatus: 'RestoreStatus',
      restoreTaskCreateTime: 'RestoreTaskCreateTime',
      restoreTaskFinishTime: 'RestoreTaskFinishTime',
      restoreTaskId: 'RestoreTaskId',
      restoreTaskName: 'RestoreTaskName',
      restoreTime: 'RestoreTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupGatewayId: 'number',
      backupPlanId: 'string',
      backupSetId: 'string',
      continuousRestoreProgress: 'number',
      crossAliyunId: 'string',
      crossRoleName: 'string',
      destinationEndpointDatabaseName: 'string',
      destinationEndpointInstanceID: 'string',
      destinationEndpointInstanceType: 'string',
      destinationEndpointIpPort: 'string',
      destinationEndpointOracleSID: 'string',
      destinationEndpointRegion: 'string',
      destinationEndpointUserName: 'string',
      errMessage: 'string',
      fullDataRestoreProgress: 'number',
      fullStruAfterRestoreProgress: 'number',
      fullStruforeRestoreProgress: 'number',
      restoreDir: 'string',
      restoreObjects: 'string',
      restoreStatus: 'string',
      restoreTaskCreateTime: 'number',
      restoreTaskFinishTime: 'number',
      restoreTaskId: 'string',
      restoreTaskName: 'string',
      restoreTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTaskListResponseBodyItems extends $dara.Model {
  restoreTaskDetail?: DescribeRestoreTaskListResponseBodyItemsRestoreTaskDetail[];
  static names(): { [key: string]: string } {
    return {
      restoreTaskDetail: 'RestoreTaskDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreTaskDetail: { 'type': 'array', 'itemType': DescribeRestoreTaskListResponseBodyItemsRestoreTaskDetail },
    };
  }

  validate() {
    if(Array.isArray(this.restoreTaskDetail)) {
      $dara.Model.validateArray(this.restoreTaskDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRestoreTaskListResponseBody extends $dara.Model {
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
   * The details of the backup schedule.
   */
  items?: DescribeRestoreTaskListResponseBodyItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
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
   * 9C397502-B4F2-4E22-AD97-C81F0049F3F3
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
  /**
   * @remarks
   * The total number of restore tasks.
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
      items: DescribeRestoreTaskListResponseBodyItems,
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

