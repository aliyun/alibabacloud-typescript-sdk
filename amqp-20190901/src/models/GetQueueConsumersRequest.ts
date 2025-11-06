// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueueConsumersRequest extends $dara.Model {
  consoleSessionId?: string;
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
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
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      consoleSessionId: 'ConsoleSessionId',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      queueName: 'QueueName',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleSessionId: 'string',
      currentPage: 'number',
      instanceId: 'string',
      pageSize: 'number',
      queueName: 'string',
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

