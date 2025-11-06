// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMessageByQueueNameRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  beginTime?: number;
  consoleSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  queueName?: string;
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      consoleSessionId: 'ConsoleSessionId',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      queueName: 'QueueName',
      taskId: 'TaskId',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      consoleSessionId: 'string',
      currentPage: 'number',
      endTime: 'number',
      instanceId: 'string',
      pageSize: 'number',
      queueName: 'string',
      taskId: 'string',
      vhostName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

