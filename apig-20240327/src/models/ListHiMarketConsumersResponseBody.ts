// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHiMarketConsumersResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The consumer ID. You can use this ID to locate the consumer in API operations such as GetHiMarketConsumer, DeleteHiMarketConsumer, GetHiMarketConsumerCredential, and ListHiMarketConsumerSubscriptions.
   * 
   * @example
   * cs-xxxxxxxxxxxx
   */
  consumerId?: string;
  /**
   * @remarks
   * The consumer description.
   * 
   * @example
   * Test consumer
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the consumer is a primary consumer.
   */
  isPrimary?: boolean;
  /**
   * @remarks
   * The consumer name.
   * 
   * @example
   * consumer-1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'consumerId',
      description: 'description',
      isPrimary: 'isPrimary',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      description: 'string',
      isPrimary: 'boolean',
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

export class ListHiMarketConsumersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of consumers. The list element is named consumer, and each element represents a HiMarket consumer.
   */
  content?: ListHiMarketConsumersResponseBodyDataContent[];
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
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListHiMarketConsumersResponseBodyDataContent },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHiMarketConsumersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListHiMarketConsumersResponseBodyData;
  /**
   * @remarks
   * The maximum number of entries on the current page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
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
   * The pagination token for the next page. An empty value indicates that the last page is reached.
   * 
   * @example
   * token-xxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListHiMarketConsumersResponseBodyData,
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
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

