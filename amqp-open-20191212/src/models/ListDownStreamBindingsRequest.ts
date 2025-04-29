// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDownStreamBindingsRequest extends $dara.Model {
  /**
   * @remarks
   * The exchange name.
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
   * The maximum number of entries to return.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end position of the previous returned page. To obtain the next batch of data, call the operation again by using the value of NextToken returned by the previous request. If you call this operation for the first time or want to query all results, set NextToken to an empty string.
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

