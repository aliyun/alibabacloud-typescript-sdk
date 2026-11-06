// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTaskResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. The time is in the `yyyy-MM-ddTHH:mmZ` format (UTC).
   * 
   * @example
   * 2020-06-09T22:00:42Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The database engine type.
   * 
   * @example
   * polardb_mysql
   */
  dbType?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 8.0
   */
  dbVersion?: string;
  /**
   * @remarks
   * The latest deadline for adjusting the task execution time. The time is in the `yyyy-MM-ddTHH:mmZ` format (UTC).
   * 
   * @example
   * 2020-06-11T15:59:59Z
   */
  deadline?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 111111
   */
  id?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * pc-*****************
   */
  insName?: string;
  /**
   * @remarks
   * The modification time. The time is in the `yyyy-MM-ddTHH:mmZ` format (UTC).
   * 
   * @example
   * 2020-06-09T22:00:42Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The preparation time before the transient disconnection. The time is in the `HH:mm:ss` format.
   * 
   * @example
   * 04:00:00
   */
  prepareInterval?: string;
  /**
   * @remarks
   * The region where the task is located.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The task execution result.
   * 
   * @example
   * 1
   */
  resultInfo?: string;
  /**
   * @remarks
   * The time when the task is executed in the background. The time is in the `yyyy-MM-ddTHH:mmZ` format (UTC).
   * 
   * @example
   * 2020-06-09T18:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status.
   * * If you set `IsHistory` to **0**, the details of the pending task status are returned. Valid values:
   * 
   *     * **2**: waiting for the user to set the task start time
   *     * **3**: waiting to be processed
   *     * **4**: being processed
   * 
   * * If you set `IsHistory` to **1**, the details of the historical task status are returned. Valid values:
   *      * **5**: task completed and executed successfully
   *      * **6**: task completed but execution failed
   *      * **7**: task canceled
   * 
   * @example
   * 5
   */
  status?: number;
  /**
   * @remarks
   * The time of the transient disconnection. The time is in the `yyyy-MM-ddTHH:mmZ` format (UTC).
   * 
   * @example
   * 2020-06-09T22:00:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The task parameters.
   * 
   * @example
   * {\\"action\\": \\"UpgradeDBVersion\\", \\"check_method\\": \\"check_cpu_usage\\", \\"params\\": {\\"RelativeDbtype\\": \\"maxscale\\", \\"DBInstanceName\\": \\"pc-*************\\", \\"User_ID\\": \\"11111\\", \\"UID\\": \\"1406926474******\\", \\"UpgradePolicy\\": \\"hot\\"}}"
   */
  taskParams?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * rds_apsaradb_upgrade
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      dbType: 'DbType',
      dbVersion: 'DbVersion',
      deadline: 'Deadline',
      id: 'Id',
      insName: 'InsName',
      modifiedTime: 'ModifiedTime',
      prepareInterval: 'PrepareInterval',
      region: 'Region',
      resultInfo: 'ResultInfo',
      startTime: 'StartTime',
      status: 'Status',
      switchTime: 'SwitchTime',
      taskParams: 'TaskParams',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      dbType: 'string',
      dbVersion: 'string',
      deadline: 'string',
      id: 'number',
      insName: 'string',
      modifiedTime: 'string',
      prepareInterval: 'string',
      region: 'string',
      resultInfo: 'string',
      startTime: 'string',
      status: 'number',
      switchTime: 'string',
      taskParams: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeActiveOperationTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task list.
   */
  items?: DescribeActiveOperationTaskResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * ED2BD080-F9D9-4822-ACBB-AE5D87******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 4
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeActiveOperationTaskResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

