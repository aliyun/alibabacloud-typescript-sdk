// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTaskResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time when the O&M task was created. The format is `yyyy-MM-ddTHH:mm:ssZ` (UTC time).
   * 
   * @example
   * 2024-11-06T13:11:08Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The database type.
   * 
   * @example
   * mongodb
   */
  dbType?: string;
  /**
   * @remarks
   * The latest time within the adjustable range for the execution time of the O&M task. The format is `yyyy-MM-ddTHH:mm:ssZ` (UTC time).
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
   * The time when the O&M task was modified. The format is `yyyy-MM-ddTHH:mm:ssZ` (UTC time).
   * 
   * @example
   * 2023-02-24T08:18:53Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The preparation time required between the start time and the switchover time of the O&M task. The format is HH:mm:ss.
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
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The execution result information.
   * 
   * @example
   * ""
   */
  resultInfo?: string;
  /**
   * @remarks
   * The execution time of the O&M task. The format is `yyyy-MM-ddTHH:mm:ssZ` (UTC time).
   * 
   * @example
   * 2023-03-20T02:40:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - 2: Waiting for the user to specify a time.
   * - 3: Waiting to be processed.
   * - 4: Processing. After the task enters this state, the scheduled switchover time cannot be modified.
   * - 5: Succeeded.
   * - 6: Failed.
   * - 7: Canceled.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The switchover time of the O&M task. The format is `yyyy-MM-ddTHH:mm:ssZ` (UTC time).
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
   * The task type. Valid values:
   * 
   * - rds_apsaradb_ha: primary/secondary node switch.
   * - rds_apsaradb_transfer: instance migration.
   * - rds_apsaradb_upgrade: minor version update.
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
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: 30.
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
   * The total number of entries.
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

