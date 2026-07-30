// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumerGroupConsumersResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The consumer ID.
   * 
   * @example
   * cs-8c13d2b4f8a1
   */
  consumerId?: string;
  /**
   * @remarks
   * The consumer deployment status. Valid values: Processing, Failed, and Success.
   * 
   * @example
   * Success
   */
  deployStatus?: string;
  /**
   * @remarks
   * The consumer description.
   * 
   * @example
   * Online API caller.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the consumer is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The time when the consumer joined the consumer group, in Unix millisecond timestamp.
   * 
   * @example
   * 1715769600000
   */
  joinTimestamp?: number;
  /**
   * @remarks
   * The consumer name.
   * 
   * @example
   * api-consumer
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'consumerId',
      deployStatus: 'deployStatus',
      description: 'description',
      enable: 'enable',
      joinTimestamp: 'joinTimestamp',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      deployStatus: 'string',
      description: 'string',
      enable: 'boolean',
      joinTimestamp: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerGroupConsumersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The consumer group member list.
   */
  items?: ListConsumerGroupConsumersResponseBodyDataItems[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of consumers that match the filter conditions.
   * 
   * @example
   * 2
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListConsumerGroupConsumersResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerGroupConsumersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code. Ok is returned if the request is successful.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListConsumerGroupConsumersResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListConsumerGroupConsumersResponseBodyData,
      message: 'string',
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

