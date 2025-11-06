// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueueRequest extends $dara.Model {
  consoleSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  currentPage?: number;
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  queueNamePrefix?: string;
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
      queueNamePrefix: 'QueueNamePrefix',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleSessionId: 'string',
      currentPage: 'number',
      instanceId: 'string',
      pageSize: 'number',
      queueNamePrefix: 'string',
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

