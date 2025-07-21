// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueuesResponseBodyDataQueues extends $dara.Model {
  /**
   * @remarks
   * The attributes.
   * 
   * @example
   * test
   */
  attributes?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether the queue was automatically deleted.
   * 
   * @example
   * false
   */
  autoDeleteState?: boolean;
  /**
   * @remarks
   * The time when the queue was created.
   * 
   * @example
   * 1580887085240
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether the queue is an exclusive queue.
   * 
   * @example
   * false
   */
  exclusiveState?: boolean;
  /**
   * @remarks
   * The time when messages in the queue were last consumed.
   * 
   * @example
   * 1680887085240
   */
  lastConsumeTime?: number;
  /**
   * @remarks
   * The queue name.
   * 
   * @example
   * QueueTest
   */
  name?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RabbitMQ instance to which the queue belongs.
   * 
   * @example
   * 1880770869023***
   */
  ownerId?: string;
  /**
   * @remarks
   * The vhost name.
   * 
   * @example
   * test
   */
  VHostName?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      autoDeleteState: 'AutoDeleteState',
      createTime: 'CreateTime',
      exclusiveState: 'ExclusiveState',
      lastConsumeTime: 'LastConsumeTime',
      name: 'Name',
      ownerId: 'OwnerId',
      VHostName: 'VHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      autoDeleteState: 'boolean',
      createTime: 'number',
      exclusiveState: 'boolean',
      lastConsumeTime: 'number',
      name: 'string',
      ownerId: 'string',
      VHostName: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end of the current returned page. If this parameter is empty, all data is retrieved.
   * 
   * @example
   * caebacccb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The queues.
   */
  queues?: ListQueuesResponseBodyDataQueues[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      queues: 'Queues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      queues: { 'type': 'array', 'itemType': ListQueuesResponseBodyDataQueues },
    };
  }

  validate() {
    if(Array.isArray(this.queues)) {
      $dara.Model.validateArray(this.queues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListQueuesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CE811989-9F02-42CE-97A6-2239CB5C2***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListQueuesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

