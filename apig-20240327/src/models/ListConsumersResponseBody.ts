// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumersResponseBodyDataExpirationSummary extends $dara.Model {
  /**
   * @remarks
   * The number of unexpired consumers with a remaining validity period of seven days or less, including those that are manually disabled.
   * 
   * @example
   * 1
   */
  aboutToExpire?: number;
  /**
   * @remarks
   * The number of expired consumers, including those that are manually disabled.
   * 
   * @example
   * 2
   */
  expired?: number;
  static names(): { [key: string]: string } {
    return {
      aboutToExpire: 'aboutToExpire',
      expired: 'expired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aboutToExpire: 'number',
      expired: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * Test consumer
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the consumer is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The expiration time of the consumer, in UTC UNIX seconds. A null value indicates that the consumer is permanently valid.
   * 
   * @example
   * 1893456000
   */
  expireAt?: number;
  /**
   * @remarks
   * The expiration status. Valid values: Permanent, InEffect, AboutToExpire, and Expired. The status is accurate to the second. A remaining validity period of exactly seven days is classified as AboutToExpire, and an expired status is classified as Expired.
   * 
   * @example
   * InEffect
   */
  expireStatus?: string;
  /**
   * @remarks
   * The saved extended information of the consumer.
   * 
   * @example
   * partner-a
   */
  extInfo?: string;
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
      expireAt: 'expireAt',
      expireStatus: 'expireStatus',
      extInfo: 'extInfo',
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
      expireAt: 'number',
      expireStatus: 'string',
      extInfo: 'string',
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
   * The count of expiration reminders for all consumers under the same account and gateway type. This count is not affected by name, status filters, or pagination. This field is returned only when includeExpirationSummary is set to true.
   */
  expirationSummary?: ListConsumersResponseBodyDataExpirationSummary;
  /**
   * @remarks
   * The list of consumer information.
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
   * The number of entries per page.
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
      expirationSummary: 'expirationSummary',
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expirationSummary: ListConsumersResponseBodyDataExpirationSummary,
      items: { 'type': 'array', 'itemType': ListConsumersResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(this.expirationSummary && typeof (this.expirationSummary as any).validate === 'function') {
      (this.expirationSummary as any).validate();
    }
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

