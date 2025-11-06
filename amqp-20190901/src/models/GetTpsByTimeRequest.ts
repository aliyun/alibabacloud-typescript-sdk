// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTpsByTimeRequest extends $dara.Model {
  api?: string;
  clientToken?: string;
  consoleSessionId?: string;
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
  queueName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      clientToken: 'ClientToken',
      consoleSessionId: 'ConsoleSessionId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      queueName: 'QueueName',
      startTime: 'StartTime',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      clientToken: 'string',
      consoleSessionId: 'string',
      endTime: 'number',
      instanceId: 'string',
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

