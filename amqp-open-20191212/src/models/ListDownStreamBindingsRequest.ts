// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDownStreamBindingsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the exchange.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  exchangeName?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance to which the exchange belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1880770869023***
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. If this is your first call, or if you have retrieved all results, leave this parameter empty.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
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
  static names(): { [key: string]: string } {
    return {
      exchangeName: 'ExchangeName',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exchangeName: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

