// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumerGroupsResponseBodyDataItems extends $dara.Model {
  /**
   * @example
   * 3
   */
  consumerCount?: number;
  /**
   * @example
   * csg-8c13d2b4f8a1
   */
  consumerGroupId?: string;
  /**
   * @example
   * 1715769600000
   */
  createTimestamp?: number;
  /**
   * @example
   * 用于线上 API 调用方分组
   */
  description?: string;
  /**
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @example
   * api-consumer-group
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      consumerCount: 'consumerCount',
      consumerGroupId: 'consumerGroupId',
      createTimestamp: 'createTimestamp',
      description: 'description',
      gatewayType: 'gatewayType',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerCount: 'number',
      consumerGroupId: 'string',
      createTimestamp: 'number',
      description: 'string',
      gatewayType: 'string',
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

export class ListConsumerGroupsResponseBodyData extends $dara.Model {
  items?: ListConsumerGroupsResponseBodyDataItems[];
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
      items: { 'type': 'array', 'itemType': ListConsumerGroupsResponseBodyDataItems },
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

export class ListConsumerGroupsResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: ListConsumerGroupsResponseBodyData;
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
      data: ListConsumerGroupsResponseBodyData,
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

