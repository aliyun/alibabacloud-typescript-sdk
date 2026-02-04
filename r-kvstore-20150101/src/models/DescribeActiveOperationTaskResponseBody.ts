// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTaskResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time when the O\\&M task was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-07-15 23:59:59
   */
  createdTime?: string;
  /**
   * @remarks
   * The database type of the instance. The return value is **Redis**.
   * 
   * @example
   * redis
   */
  dbType?: string;
  /**
   * @remarks
   * The deadline before which the time to preform the O&M task can be modified. The time in UTC is displayed in the *yyyy-MM-dd*T*HH:mm:ss*Z format.
   * 
   * @example
   * 2018-07-19 23:59:59
   */
  deadline?: string;
  /**
   * @remarks
   * The ID of the O&M task.
   * 
   * @example
   * 114111
   */
  id?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * r-bp1lgal1sdvxrz****
   */
  insName?: string;
  /**
   * @remarks
   * The time when the O\\&M task was modified. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-07-19 14:00:00
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The required preparation period between the task start time and the switchover time. The time is displayed in the *HH:mm:ss* format.
   * 
   * @example
   * 14:00:00
   */
  prepareInterval?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hanghzou
   */
  region?: string;
  /**
   * @remarks
   * The time when the O\\&M task was preformed. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-07-19 10:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the O&M task. Valid values:
   * 
   * *   **2**: The task is waiting for users to specify a switchover time.
   * *   **3**: The task is waiting to be performed.
   * *   **4**: The task is being performed. If the task is in this state, the **ModifyActiveOperationTask** operation cannot be called to modify the scheduled switchover time.
   * *   **5**: The task is performed.
   * *   **6**: The task fails.
   * *   **7**: The task is canceled.
   * 
   * @example
   * 5
   */
  status?: number;
  /**
   * @remarks
   * The time when the system performs the switchover operation. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-07-19 14:00:00
   */
  switchTime?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **rds_apsaradb_ha**: master-replica switchover
   * *   **rds_apsaradb_transfer**: instance migration
   * *   **rds_apsaradb_upgrade**: minor version update
   * *   **all**: all types
   * 
   * @example
   * rds_apsaradb_upgrade
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      dbType: 'DbType',
      deadline: 'Deadline',
      id: 'Id',
      insName: 'InsName',
      modifiedTime: 'ModifiedTime',
      prepareInterval: 'PrepareInterval',
      region: 'Region',
      startTime: 'StartTime',
      status: 'Status',
      switchTime: 'SwitchTime',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      dbType: 'string',
      deadline: 'string',
      id: 'number',
      insName: 'string',
      modifiedTime: 'string',
      prepareInterval: 'string',
      region: 'string',
      startTime: 'string',
      status: 'number',
      switchTime: 'string',
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
   * The list of O\\&M tasks.
   */
  items?: DescribeActiveOperationTaskResponseBodyItems[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries returned per page.
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
   * 2E1FF0CC-F42A-4B6F-A1F4-A17B1451****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
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

