// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBenchmarkTaskResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The number of instances that are available for stress testing.
   * 
   * @example
   * 2
   */
  availableAgent?: number;
  /**
   * @remarks
   * The time when the stress testing task was created.
   * 
   * @example
   * 2020-12-04T02:43:15Z
   */
  createTime?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Benchmark task [benchmark-larec-test-1076] is Running
   */
  message?: string;
  /**
   * @remarks
   * The region ID of the stress testing task.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The name of the service on which you want to perform a stress testing.
   * 
   * @example
   * test_quota
   */
  serviceName?: string;
  /**
   * @remarks
   * The state of the stress testing task.
   * 
   * Valid values:
   * 
   * *   Creating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Starting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DeleteFailed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Running
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Stopping
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Error
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Updating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Deleting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CreateFailed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the stress testing task.
   * 
   * @example
   * eas-b-gv4y86uvgt****i
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the stress testing task.
   * 
   * @example
   * benchmark-larec-test-1076
   */
  taskName?: string;
  /**
   * @remarks
   * The time when the stress testing task was updated.
   * 
   * @example
   * 2020-06-24T03:11:30Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      availableAgent: 'AvailableAgent',
      createTime: 'CreateTime',
      message: 'Message',
      region: 'Region',
      serviceName: 'ServiceName',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAgent: 'number',
      createTime: 'string',
      message: 'string',
      region: 'string',
      serviceName: 'string',
      status: 'string',
      taskId: 'string',
      taskName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

