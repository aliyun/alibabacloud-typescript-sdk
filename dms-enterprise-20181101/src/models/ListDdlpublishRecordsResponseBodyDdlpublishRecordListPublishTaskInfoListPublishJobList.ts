// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDDLPublishRecordsResponseBodyDDLPublishRecordListPublishTaskInfoListPublishJobList extends $dara.Model {
  /**
   * @remarks
   * The ID of the SQL task group.
   * 
   * @example
   * 423515
   */
  DBTaskGroupId?: number;
  /**
   * @remarks
   * The number of SQL statements that are executed.
   * 
   * @example
   * 0
   */
  executeCount?: number;
  /**
   * @remarks
   * The script for data changes.
   * 
   * @example
   * ALTER TABLE test_toolkit_rename_table_after_rename MODIFY COLUMN gmt_modified datetime NOT NULL
   */
  scripts?: string;
  /**
   * @remarks
   * The description of the state.
   * 
   * @example
   * NONE
   */
  statusDesc?: string;
  /**
   * @remarks
   * The name of the table after the change.
   * 
   * @example
   * test_toolkit_rename_table_after_rename
   */
  tableName?: string;
  /**
   * @remarks
   * The state of the publishing task. Valid values:
   * 
   * *   **NONE**: The state of the task is unknown.
   * *   **SUCCESS**: The task is successful.
   * *   **FAIL**: The task fails.
   * 
   * @example
   * NONE
   */
  taskJobStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBTaskGroupId: 'DBTaskGroupId',
      executeCount: 'ExecuteCount',
      scripts: 'Scripts',
      statusDesc: 'StatusDesc',
      tableName: 'TableName',
      taskJobStatus: 'TaskJobStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBTaskGroupId: 'number',
      executeCount: 'number',
      scripts: 'string',
      statusDesc: 'string',
      tableName: 'string',
      taskJobStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

