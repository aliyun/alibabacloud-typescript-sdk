// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMessageByMessageIdRequest extends $dara.Model {
  beginTime?: number;
  consoleSessionId?: string;
  currentPage?: number;
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
  messageId?: string;
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
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      consoleSessionId: 'ConsoleSessionId',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      messageId: 'MessageId',
      pageSize: 'PageSize',
      queueName: 'QueueName',
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
      messageId: 'string',
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

