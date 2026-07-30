// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumerGroupsResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The number of consumers in the consumer group.
   * 
   * @example
   * 3
   */
  consumerCount?: number;
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * csg-8c13d2b4f8a1
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The creation time of the consumer group, in Unix millisecond timestamp.
   * 
   * @example
   * 1715769600000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The consumer group description.
   * 
   * @example
   * Used for online API caller grouping.
   */
  description?: string;
  /**
   * @remarks
   * The gateway type. Valid values: API or AI.
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * The consumer group name.
   * 
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
  /**
   * @remarks
   * The list of consumer groups.
   */
  items?: ListConsumerGroupsResponseBodyDataItems[];
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
   * The total number of consumer groups that match the conditions.
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
  data?: ListConsumerGroupsResponseBodyData;
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

