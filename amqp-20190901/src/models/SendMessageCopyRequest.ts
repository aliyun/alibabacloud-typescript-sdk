// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendMessageCopyRequest extends $dara.Model {
  consoleSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  processToken?: string;
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
      instanceId: 'InstanceId',
      processToken: 'ProcessToken',
      queueName: 'QueueName',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleSessionId: 'string',
      instanceId: 'string',
      processToken: 'string',
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

