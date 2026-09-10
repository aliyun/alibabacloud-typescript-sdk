// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditTaskPopRequest extends $dara.Model {
  /**
   * @remarks
   * The concurrency for controlling the number of concurrent conversion executions.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  concurrency?: number;
  /**
   * @remarks
   * The name of the test data source associated with a DQL task.
   * 
   * This parameter is required.
   * 
   * @example
   * hive_test_ds
   */
  dqlTestDatasourceName?: string;
  /**
   * @remarks
   * The source SQL dialect.
   * 
   * This parameter is required.
   * 
   * @example
   * hive
   */
  sourceDialect?: string;
  /**
   * @remarks
   * The target SQL dialect.
   * 
   * This parameter is required.
   * 
   * @example
   * hive
   */
  targetDialect?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  taskId?: number;
  /**
   * @remarks
   * The task name.
   * 
   * This parameter is required.
   * 
   * @example
   * data_check_task_demo
   */
  taskName?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * - 1: DDL
   * - 2: DQL
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'concurrency',
      dqlTestDatasourceName: 'dqlTestDatasourceName',
      sourceDialect: 'sourceDialect',
      targetDialect: 'targetDialect',
      taskId: 'taskId',
      taskName: 'taskName',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
      dqlTestDatasourceName: 'string',
      sourceDialect: 'string',
      targetDialect: 'string',
      taskId: 'number',
      taskName: 'string',
      taskType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

