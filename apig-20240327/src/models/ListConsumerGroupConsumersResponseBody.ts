// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumerGroupConsumersResponseBodyDataItems extends $dara.Model {
  /**
   * @example
   * cs-8c13d2b4f8a1
   */
  consumerId?: string;
  /**
   * @example
   * Success
   */
  deployStatus?: string;
  /**
   * @example
   * 线上 API 调用方
   */
  description?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 1715769600000
   */
  joinTimestamp?: number;
  /**
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
  items?: ListConsumerGroupConsumersResponseBodyDataItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
   * @example
   * Ok
   */
  code?: string;
  data?: ListConsumerGroupConsumersResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
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

