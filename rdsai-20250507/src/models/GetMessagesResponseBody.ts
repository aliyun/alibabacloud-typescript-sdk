// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessagesResponseBodyData extends $dara.Model {
  answer?: string;
  /**
   * @example
   * 9cbbe885-b240-4803-9d15-6781a3fd****
   */
  conversationId?: string;
  /**
   * @example
   * 1763986004
   */
  createdAt?: string;
  /**
   * @example
   * like
   */
  feedback?: string;
  /**
   * @example
   * 84dc9f9b-424a-404d-9c36-35e9d000****
   */
  id?: string;
  query?: string;
  retrieverResources?: any[];
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      conversationId: 'ConversationId',
      createdAt: 'CreatedAt',
      feedback: 'Feedback',
      id: 'Id',
      query: 'Query',
      retrieverResources: 'RetrieverResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      conversationId: 'string',
      createdAt: 'string',
      feedback: 'string',
      id: 'string',
      query: 'string',
      retrieverResources: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.retrieverResources)) {
      $dara.Model.validateArray(this.retrieverResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessagesResponseBody extends $dara.Model {
  data?: GetMessagesResponseBodyData[];
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @example
   * 100
   */
  limit?: number;
  /**
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      hasMore: 'HasMore',
      limit: 'Limit',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetMessagesResponseBodyData },
      hasMore: 'boolean',
      limit: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

