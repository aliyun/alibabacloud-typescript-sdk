// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataCronClearTaskDetailListResponseBodyDataCronClearTaskDetailList extends $dara.Model {
  /**
   * @remarks
   * The number of rows affected by the SQL task.
   * 
   * @example
   * 1
   */
  actualAffectRows?: number;
  /**
   * @remarks
   * The time when the SQL task was created.
   * 
   * @example
   * 2021-01-14 10:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the SQL task group.
   * 
   * @example
   * 432523
   */
  DBTaskGroupId?: number;
  /**
   * @remarks
   * The state of the SQL task. Valid values:
   * 
   * *   **INIT**: The SQL task was initialized.
   * *   **PENDING**: The SQL task waited to be run.
   * *   **BE_SCHEDULED**: The SQL task waited to be scheduled.
   * *   **FAIL**: The SQL task failed.
   * *   **SUCCESS**: The SQL task was successful.
   * *   **PAUSE**: The SQL task was paused.
   * *   **DELETE**: The SQL task was deleted.
   * *   **RUNNING**: The SQL task was being run.
   * 
   * @example
   * SUCCESS
   */
  jobStatus?: string;
  static names(): { [key: string]: string } {
    return {
      actualAffectRows: 'ActualAffectRows',
      createTime: 'CreateTime',
      DBTaskGroupId: 'DBTaskGroupId',
      jobStatus: 'jobStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualAffectRows: 'number',
      createTime: 'string',
      DBTaskGroupId: 'number',
      jobStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCronClearTaskDetailListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The historical data cleansing tasks
   */
  dataCronClearTaskDetailList?: GetDataCronClearTaskDetailListResponseBodyDataCronClearTaskDetailList[];
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C1D39814-9808-47F8-AFE0-AF167239AC9B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of SQL tasks.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataCronClearTaskDetailList: 'DataCronClearTaskDetailList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCronClearTaskDetailList: { 'type': 'array', 'itemType': GetDataCronClearTaskDetailListResponseBodyDataCronClearTaskDetailList },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataCronClearTaskDetailList)) {
      $dara.Model.validateArray(this.dataCronClearTaskDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

