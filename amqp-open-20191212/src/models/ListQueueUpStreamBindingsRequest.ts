// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueueUpStreamBindingsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance.
   * 
   * This parameter is required.
   * 
   * @example
   * amqp-cn-5yd3aw******
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
   * The token that marks the end of the current query. To retrieve the next page of results, pass this token in the next request. For the first request or when the last page is returned, this parameter is an empty string.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The queue name.
   * 
   * This parameter is required.
   * 
   * @example
   * QueueTest
   */
  queueName?: string;
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
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      queueName: 'QueueName',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      queueName: 'string',
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

