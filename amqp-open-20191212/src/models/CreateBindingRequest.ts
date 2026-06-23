// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBindingRequest extends $dara.Model {
  /**
   * @remarks
   * The key-value pairs for the message header attributes. The message header attributes consist of one or more key-value pairs. The x-match attribute is required. Other attributes are custom. The x-match attribute supports the following values:
   * 
   * - all: This is the default value. All key-value pairs in the message header must match.
   * 
   * - any: At least one key-value pair in the message header must match.
   * 
   * Separate attributes with semicolons (;) and separate keys from values with colons (:). Example: x-match:all;type:report;format:pdf
   * This parameter is valid only for headers exchanges. For other types of exchanges, this parameter is ignored.
   * 
   * @example
   * x-match:all;type:report;format:pdf
   */
  argument?: string;
  /**
   * @remarks
   * The binding key.
   * 
   * - If the source exchange is not a topic exchange:
   * 
   *   - It can contain letters, digits, hyphens (-), underscores (_), periods (.), forward slashes (/), and at signs (@).
   * 
   *   - The length must be 1 to 255 characters.
   * 
   * - If the source exchange is a topic exchange:
   * 
   *   - It can contain letters, digits, hyphens (-), underscores (_), asterisks (\\*), periods (.), number signs (#), forward slashes (/), and at signs (@).
   * 
   *   - The key cannot start or end with a period (.). If the key starts with a number sign (#) or an asterisk (\\*), a period (.) must immediately follow. If the key ends with a number sign (#) or an asterisk (\\*), a period (.) must immediately precede it. If a number sign (#) or an asterisk (\\*) is in the middle of the key, it must have a period (.) on both sides.
   * 
   *   - The length must be 1 to 255 characters.
   * 
   * @example
   * .test
   */
  bindingKey?: string;
  /**
   * @remarks
   * The type of the destination object. Valid values:
   * 
   * - 0: Queue
   * 
   * - 1: Exchange
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  bindingType?: string;
  /**
   * @remarks
   * The name of the binding destination. The destination must be created in the console. It must belong to the same vhost as `SourceExchange`. The `VirtualHost` parameter specifies the vhost.
   * 
   * This parameter is required.
   * 
   * @example
   * DemoQueue
   */
  destinationName?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-v0h1kb9nu***
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the source exchange. This exchange must be created in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * NormalEX
   */
  sourceExchange?: string;
  /**
   * @remarks
   * The name of the vhost. The vhost must be created in the console. Both `DestinationName` and `SourceExchange` must belong to this vhost.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      argument: 'Argument',
      bindingKey: 'BindingKey',
      bindingType: 'BindingType',
      destinationName: 'DestinationName',
      instanceId: 'InstanceId',
      sourceExchange: 'SourceExchange',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argument: 'string',
      bindingKey: 'string',
      bindingType: 'string',
      destinationName: 'string',
      instanceId: 'string',
      sourceExchange: 'string',
      virtualHost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

