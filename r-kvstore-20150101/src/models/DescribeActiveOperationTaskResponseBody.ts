// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTaskResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time when the O&M task was created. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-24T06:00:11Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The database type. Valid value: **redis**.
   * 
   * @example
   * redis
   */
  dbType?: string;
  /**
   * @remarks
   * The latest time to which the execution time of the O&M task can be adjusted. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-29T13:59:59Z
   */
  deadline?: string;
  /**
   * @remarks
   * The O&M task ID.
   * 
   * @example
   * 1****1
   */
  id?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * r-bp1lgal1sdvxrz****
   */
  insName?: string;
  /**
   * @remarks
   * The time when the O&M task was modified. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-24T08:18:53Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The preparation time required between the start time and the switchover time of the O&M task. The time is in the <i>HH:mm:ss</i> format.
   * 
   * @example
   * 14:00:00
   */
  prepareInterval?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hanghzou
   */
  region?: string;
  /**
   * @remarks
   * The execution time of the O&M task. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-20T02:40:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * * **2**: waiting for the user to specify a time.
   * * **3**: waiting to be processed.
   * * **4**: processing. After the task enters this state, you cannot call **ModifyActiveOperationTask** to modify the scheduled switchover time.
   * * **5**: successful.
   * * **6**: failed.
   * * **7**: canceled.
   * 
   * @example
   * 5
   */
  status?: number;
  /**
   * @remarks
   * The time when the system initiates the switchover. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-20T03:10:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - **rds_apsaradb_ha**: switch of primary and secondary nodes.
   * - **rds_apsaradb_transfer**: instance migration.
   * - **rds_apsaradb_upgrade**: minor version update.
   * - **all**: all task types.
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
   * The list of O&M tasks.
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
   * The maximum number of entries returned on each page.
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
   * 2E1FF0CC-F42A-4B6F-A1F4-A17B1451****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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

