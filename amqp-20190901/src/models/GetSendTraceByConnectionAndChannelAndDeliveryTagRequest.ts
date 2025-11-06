// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSendTraceByConnectionAndChannelAndDeliveryTagRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  channelId?: string;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  connectionId?: string;
  consoleSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deliveryTag?: number;
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
  startTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      clientToken: 'ClientToken',
      connectionId: 'ConnectionId',
      consoleSessionId: 'ConsoleSessionId',
      deliveryTag: 'DeliveryTag',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      clientToken: 'string',
      connectionId: 'string',
      consoleSessionId: 'string',
      deliveryTag: 'number',
      endTime: 'number',
      instanceId: 'string',
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

