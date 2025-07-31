// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTaskResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-11-06T13:11:08Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The database type of the instance.
   * 
   * @example
   * mongodb
   */
  dbType?: string;
  /**
   * @remarks
   * The deadline before which the time to preform the task can be modified. The time in UTC is displayed in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2023-03-29T13:59:59Z
   */
  deadline?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 50xx
   */
  id?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-bp12721xxxx9b914
   */
  insName?: string;
  /**
   * @remarks
   * The time when the task was modified. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-24T08:18:53Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The required preparation period between the task start time and the switchover time. The time is displayed in the HH:mm:ss format.
   * 
   * @example
   * 14:00:00
   */
  prepareInterval?: string;
  /**
   * @remarks
   * The region of the instance.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The result information.
   * 
   * @example
   * ""
   */
  resultInfo?: string;
  /**
   * @remarks
   * The time when the task was preformed. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-20T02:40:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the task. Valid values:
   * 
   * - 2: The task is waiting for users to specify a switchover time.
   * - 3: The task is waiting to be performed.
   * - 4: The task is being performed. If the task is in this state, the ModifyActiveOperationTask operation cannot be called to modify the scheduled switchover time.
   * - 5: The task is performed.
   * - 6: The task fails.
   * - 7: The task is canceled.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The time when the system performs the switchover operation. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-11-06T14:11:08Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The task parameters.
   * 
   * @example
   * ""
   */
  taskParams?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * - rds_apsaradb_ha: master-replica switchover
   * - rds_apsaradb_transfer: instance migration
   * - rds_apsaradb_upgrade: minor version update
   * - all: all types
   * 
   * @example
   * rds_apsaradb_ha
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
   * The list of tasks.
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
   * 6FD47DC4-0750-5524-A89E-E7D559Cxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 0
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

