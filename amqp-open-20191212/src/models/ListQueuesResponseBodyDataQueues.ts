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

