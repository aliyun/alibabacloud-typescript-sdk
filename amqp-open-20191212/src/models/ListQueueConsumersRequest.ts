// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueueConsumersRequest extends $dara.Model {
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
   * The token that marks the end of the current page of results. To retrieve the next page, include this token in the next request. If this is your first request or the last page is returned, the value is an empty string.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries to return. If you do not set this parameter, the default value is 1.
   * 
   * Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  queryCount?: number;
  /**
   * @remarks
   * The queue name.
   * 
   * This parameter is required.
   * 
   * @example
   * queue-rabbit-springboot-advance5
   */
  queue?: string;
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
      nextToken: 'NextToken',
      queryCount: 'QueryCount',
      queue: 'Queue',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nextToken: 'string',
      queryCount: 'number',
      queue: 'string',
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

