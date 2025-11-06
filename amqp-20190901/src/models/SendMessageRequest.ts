// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendMessageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: string;
  consoleSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  exchangeName?: string;
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
  props?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  routingKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      consoleSessionId: 'ConsoleSessionId',
      exchangeName: 'ExchangeName',
      instanceId: 'InstanceId',
      messageId: 'MessageId',
      props: 'Props',
      routingKey: 'RoutingKey',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      consoleSessionId: 'string',
      exchangeName: 'string',
      instanceId: 'string',
      messageId: 'string',
      props: 'string',
      routingKey: 'string',
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

