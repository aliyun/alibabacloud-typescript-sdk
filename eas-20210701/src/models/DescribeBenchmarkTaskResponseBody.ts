// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBenchmarkTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of instances that you can test.
   * 
   * @example
   * 4
   */
  availableAgent?: number;
  /**
   * @remarks
   * The ID of the operation caller.
   * 
   * @example
   * 1640133467****
   */
  callerUid?: string;
  /**
   * @remarks
   * The number of instances that you want to test.
   * 
   * @example
   * 4
   */
  desiredAgent?: number;
  /**
   * @remarks
   * The endpoint of the service gateway.
   * 
   * @example
   * 192342311234.pai-eas.cn-chengdu.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Benchmar task is Running
   */
  message?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to call the operation.
   * 
   * @example
   * 1029728669****
   */
  parentUid?: string;
  /**
   * @remarks
   * The event or reason that causes the current state of the stress testing task.
   * 
   * @example
   * RUNNING
   */
  reason?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the service that you want to test.
   * 
   * @example
   * foo
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
   * eas-b-gv4y86u****
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the stress testing task.
   * 
   * @example
   * benchmark-larec-test-ae70
   */
  taskName?: string;
  /**
   * @remarks
   * The token for authentication when a stress testing task is created.
   * 
   * @example
   * 6062787a-9301****
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      availableAgent: 'AvailableAgent',
      callerUid: 'CallerUid',
      desiredAgent: 'DesiredAgent',
      endpoint: 'Endpoint',
      message: 'Message',
      parentUid: 'ParentUid',
      reason: 'Reason',
      requestId: 'RequestId',
      serviceName: 'ServiceName',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAgent: 'number',
      callerUid: 'string',
      desiredAgent: 'number',
      endpoint: 'string',
      message: 'string',
      parentUid: 'string',
      reason: 'string',
      requestId: 'string',
      serviceName: 'string',
      status: 'string',
      taskId: 'string',
      taskName: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

