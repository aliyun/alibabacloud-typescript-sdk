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

