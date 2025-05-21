// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMaintenanceActionResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The time when the O\\&M event was created. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-30T02:44:27Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The ID of the cluster that is involved in the O\\&M event.
   * 
   * @example
   * am-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database engine.
   * 
   * @example
   * analyticdb
   */
  DBType?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * @example
   * 3.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The deadline before which the event can be executed. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-07-04T15:59:59Z
   */
  deadline?: string;
  /**
   * @remarks
   * The ID of the O\\&M event.
   * 
   * @example
   * 11111
   */
  id?: number;
  /**
   * @remarks
   * The point in time at which the switchover time of the O\\&M event was modified. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-07-03T06:33:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The preparation time that is required before the pending O\\&M event can be switched. The time is in the `HH:mm:ss` format.
   * 
   * @example
   * 02:00:00
   */
  prepareInterval?: string;
  /**
   * @remarks
   * The ID of the region where the O\\&M event occurs.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The execution result of the O\\&M event.
   * 
   * > This parameter is returned only when the value of `Status` is **FAILED** or **CANCEL**.
   * 
   * @example
   * autoCancel
   */
  resultInfo?: string;
  /**
   * @remarks
   * The time when the task was executed in the backend. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-07-03T04:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the event.
   * 
   * *   If you set `IsHistory` to **0**, the state of the pending O\\&M event is returned. Valid values:
   * 
   *     *   **WAITING_MODIFY**: The start time of the O\\&M event is waiting to be set.
   *     *   **WAITING**: The O\\&M event is waiting to be processed.
   *     *   **PROCESSING**: The O\\&M event is being processed. The switchover time of an event in this state cannot be changed.
   * 
   * *   If you set `IsHistory` to **1**, the state of the historical O\\&M event is returned. Valid values:
   * 
   *     *   **SUCCESS**: The event ended and the execution succeeded.
   *     *   **FAILED**: The event ended but the execution failed.
   *     *   **CANCEL**: The event was canceled.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The time when the pending O\\&M event is switched. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-07-03T06:00:00Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The type of the O\\&M event.
   * 
   * @example
   * rds_apsaradb_upgrade
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      DBClusterId: 'DBClusterId',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      deadline: 'Deadline',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      prepareInterval: 'PrepareInterval',
      region: 'Region',
      resultInfo: 'ResultInfo',
      startTime: 'StartTime',
      status: 'Status',
      switchTime: 'SwitchTime',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      DBClusterId: 'string',
      DBType: 'string',
      DBVersion: 'string',
      deadline: 'string',
      id: 'number',
      modifiedTime: 'string',
      prepareInterval: 'string',
      region: 'string',
      resultInfo: 'string',
      startTime: 'string',
      status: 'string',
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

