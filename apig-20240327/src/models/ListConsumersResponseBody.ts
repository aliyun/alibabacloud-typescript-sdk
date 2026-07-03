// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumersResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The consumer ID.
   * 
   * @example
   * cs-csheiftlhtgmp0j0hp4g
   */
  consumerId?: string;
  /**
   * @remarks
   * The creation timestamp.
   * 
   * @example
   * 1721097861050
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The publish status of the API in the current environment.
   * 
   * @example
   * {}
   */
  deployStatus?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 测试消费者
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
   * The consumer name.
   * 
   * @example
   * user-service
   */
  name?: string;
  /**
   * @remarks
   * The update timestamp.
   * 
   * @example
   * 1721123855214
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'consumerId',
      createTimestamp: 'createTimestamp',
      deployStatus: 'deployStatus',
      description: 'description',
      enable: 'enable',
      name: 'name',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      createTimestamp: 'number',
      deployStatus: 'string',
      description: 'string',
      enable: 'boolean',
      name: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of consumers.
   */
  items?: ListConsumersResponseBodyDataItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 18
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
      items: { 'type': 'array', 'itemType': ListConsumersResponseBodyDataItems },
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

export class ListConsumersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListConsumersResponseBodyData;
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
   * 9BDD6A7C-CBA7-504F-B8C5-51B9F16590F7
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
      data: ListConsumersResponseBodyData,
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

