// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueuesRequest extends $dara.Model {
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
   * This parameter is required.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end of the current query. Pass this token in the next call to retrieve the next page of results. The value is an empty string for the first call or when the last page is returned.
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
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

