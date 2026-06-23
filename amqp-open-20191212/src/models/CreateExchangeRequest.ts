// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExchangeRequest extends $dara.Model {
  /**
   * @remarks
   * The alternate exchange. Configure an alternate exchange to receive messages that fail to be routed.
   * 
   * @example
   * DemoAE
   */
  alternateExchange?: string;
  /**
   * @remarks
   * Specifies whether to automatically delete the exchange. Valid values:
   * 
   * - **true**: Yes. The exchange is automatically deleted after the last queue is unbound from it.
   * 
   * - **false**: No. The exchange is not automatically deleted after the last queue is unbound from it.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  autoDeleteState?: boolean;
  /**
   * @remarks
   * The name of the exchange. Note:
   * 
   * - The name can contain only letters, digits, hyphens (-), underscores (_), periods (.), number signs (#), forward slashes (/), and at signs (@). The name must be 1 to 255 characters in length.
   * 
   * - The name of an exchange cannot be changed after the exchange is created. To change the name, delete the exchange and create a new one.
   * 
   * This parameter is required.
   * 
   * @example
   * DemoExchange
   */
  exchangeName?: string;
  /**
   * @remarks
   * The type of the exchange. Valid values:
   * 
   * - **DIRECT**: This routing rule type routes messages to a queue whose binding key exactly matches the routing key of the message.
   * 
   * - **TOPIC**: This type is similar to the DIRECT type. It routes messages to bound queues using routing key pattern matching and string comparison.
   * 
   * - **FANOUT**: This routing rule type is simple. It routes all messages sent to the exchange to all queues that are bound to the exchange. This works like a broadcast feature.
   * 
   * - **HEADERS**: This type is similar to the DIRECT type. It uses header properties instead of a routing key for routing. When a queue is bound to a headers exchange, key-value pairs are defined for the binding. When a message is sent to the exchange, key-value pairs are defined in the message header. The exchange routes the message by comparing the key-value pairs in the header with the key-value pairs of the binding.
   * 
   * This parameter is required.
   * 
   * @example
   * DIRECT
   */
  exchangeType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-v0h1kb9nu***
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether the exchange is an internal exchange. Valid values:
   * 
   * - **false**: No
   * 
   * - **true**: Yes
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  internal?: boolean;
  /**
   * @remarks
   * The name of the vhost to which the exchange belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  virtualHost?: string;
  /**
   * @remarks
   * An x-delayed-message exchange lets you use the x-delay header property to specify a delivery delay for a message in milliseconds. The routing rule for the delayed message is determined by the exchange type that you specify for the XDelayedType parameter. This parameter sets the actual exchange type to which the message is delivered after the delay. Valid values:
   * 
   * - **DIRECT**: Delivers the delayed message to the specified queue that is bound to a DIRECT exchange.
   * 
   * - **TOPIC**: Delivers the delayed message to queues that are bound to a TOPIC exchange.
   * 
   * - **FANOUT**: Delivers the delayed message to queues that are bound to a FANOUT exchange.
   * 
   * - **HEADERS**: Delivers the delayed message to queues that are bound to a HEADERS exchange.
   * 
   * - **X-JMS-TOPIC**: Delivers the delayed message to queues that are bound to an X-JMS-TOPIC exchange.
   * 
   * @example
   * DIRECT
   */
  XDelayedType?: string;
  static names(): { [key: string]: string } {
    return {
      alternateExchange: 'AlternateExchange',
      autoDeleteState: 'AutoDeleteState',
      exchangeName: 'ExchangeName',
      exchangeType: 'ExchangeType',
      instanceId: 'InstanceId',
      internal: 'Internal',
      virtualHost: 'VirtualHost',
      XDelayedType: 'XDelayedType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alternateExchange: 'string',
      autoDeleteState: 'boolean',
      exchangeName: 'string',
      exchangeType: 'string',
      instanceId: 'string',
      internal: 'boolean',
      virtualHost: 'string',
      XDelayedType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

