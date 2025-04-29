// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteExchangeRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the exchange that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * DemoExchange
   */
  exchangeName?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance whose exchange you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-v0h1kb9nu***
   */
  instanceId?: string;
  /**
   * @remarks
   * The vhost to which the exchange that you want to delete belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      exchangeName: 'ExchangeName',
      instanceId: 'InstanceId',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exchangeName: 'string',
      instanceId: 'string',
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

