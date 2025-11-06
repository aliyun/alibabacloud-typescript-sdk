// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSendTraceByQueueRequest extends $dara.Model {
  clientToken?: string;
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
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      consoleSessionId: 'ConsoleSessionId',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      queueName: 'QueueName',
      startTime: 'StartTime',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      consoleSessionId: 'string',
      currentPage: 'number',
      endTime: 'number',
      instanceId: 'string',
      pageSize: 'number',
      queueName: 'string',
      startTime: 'number',
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

