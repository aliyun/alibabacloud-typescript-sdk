// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataCorrectTaskDetailResponseBodyDataCorrectTaskDetail extends $dara.Model {
  /**
   * @remarks
   * The number of rows affected by the SQL statement.
   * 
   * @example
   * 1
   */
  actualAffectRows?: number;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2021-03-05 15:08:55
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the SQL task group.
   * 
   * @example
   * 1234235
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

export class GetDataCorrectTaskDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the data change task.
   */
  dataCorrectTaskDetail?: GetDataCorrectTaskDetailResponseBodyDataCorrectTaskDetail;
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
   * B5FD0BC8-2D90-4478-B8EC-A0E92E0B1773
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
  static names(): { [key: string]: string } {
    return {
      dataCorrectTaskDetail: 'DataCorrectTaskDetail',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCorrectTaskDetail: GetDataCorrectTaskDetailResponseBodyDataCorrectTaskDetail,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dataCorrectTaskDetail && typeof (this.dataCorrectTaskDetail as any).validate === 'function') {
      (this.dataCorrectTaskDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

