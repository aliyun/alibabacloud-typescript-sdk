// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExchangeUpStreamBindingsRequest extends $dara.Model {
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
   * The ID of the ApsaraMQ for RabbitMQ instance.
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
   * The token that marks the end of the current query. Pass this token in the next call to query the next page. This parameter is an empty string for the first query or when the last page is returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
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

