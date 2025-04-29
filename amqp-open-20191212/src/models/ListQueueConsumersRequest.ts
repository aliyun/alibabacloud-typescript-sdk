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
   * 188077086902***
   */
  instanceId?: string;
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
   * The number of data entries to return. If you do not configure this parameter, the default value 1 is used.
   * 
   * Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  queryCount?: number;
  /**
   * @remarks
   * The name of the queue for which you want to query online consumers.
   * 
   * This parameter is required.
   * 
   * @example
   * queue-rabbit-springboot-advance5
   */
  queue?: string;
  /**
   * @remarks
   * The virtual host (vhost) name.
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

