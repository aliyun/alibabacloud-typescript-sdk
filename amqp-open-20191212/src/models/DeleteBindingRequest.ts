// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBindingRequest extends $dara.Model {
  /**
   * @remarks
   * The binding key.
   * 
   * @example
   * .test.
   */
  bindingKey?: string;
  /**
   * @remarks
   * The type of the object that you want to unbind from the source exchange. Valid values:
   * 
   * *   **QUEUE**
   * *   **EXCHANGE**
   * 
   * This parameter is required.
   * 
   * @example
   * QUEUE
   */
  bindingType?: string;
  /**
   * @remarks
   * The name of the object that you want to unbind from the source exchange.
   * 
   * This parameter is required.
   * 
   * @example
   * DemoQueue
   */
  destinationName?: string;
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
   * The name of the source exchange.
   * 
   * This parameter is required.
   * 
   * @example
   * NormalEX
   */
  sourceExchange?: string;
  /**
   * @remarks
   * The vhost name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
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

