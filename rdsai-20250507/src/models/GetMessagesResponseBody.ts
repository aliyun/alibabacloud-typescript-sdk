// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessagesResponseBodyDataEvents extends $dara.Model {
  answer?: string;
  event?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'answer',
      event: 'event',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      event: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessagesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AI-generated response to the query.
   * 
   * @example
   * 您询问的实例rm-bp14as9914vd3**** 磁盘使用率为23%，暂时不需要进行扩容。如果您需要进一步查看某个实例的详细配置、性能监控或进行其他操作，请告诉我具体需求！
   */
  answer?: string;
  /**
   * @remarks
   * The unique identifier for the conversation.
   * 
   * @example
   * 9cbbe885-b240-4803-9d15-6781a3fd****
   */
  conversationId?: string;
  /**
   * @remarks
   * The Unix timestamp (in seconds) when the message was created.
   * 
   * @example
   * 1763986004
   */
  createdAt?: string;
  events?: GetMessagesResponseBodyDataEvents[];
  /**
   * @remarks
   * The user\\"s feedback on the answer, such as "like" or "dislike".
   * 
   * @example
   * like
   */
  feedback?: string;
  generationFinishedAt?: string;
  generationStartedAt?: string;
  generationStatus?: string;
  /**
   * @remarks
   * The unique identifier for the message.
   * 
   * @example
   * 84dc9f9b-424a-404d-9c36-35e9d000****
   */
  id?: string;
  lastSentEntryId?: string;
  /**
   * @remarks
   * The user\\"s query.
   * 
   * @example
   * 实例rm-bp14as9914vd3**** 磁盘使用率，是否需要扩容
   */
  query?: string;
  /**
   * @remarks
   * The resources that were retrieved to generate the answer.
   */
  retrieverResources?: any[];
  streamKey?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      conversationId: 'ConversationId',
      createdAt: 'CreatedAt',
      events: 'Events',
      feedback: 'Feedback',
      generationFinishedAt: 'GenerationFinishedAt',
      generationStartedAt: 'GenerationStartedAt',
      generationStatus: 'GenerationStatus',
      id: 'Id',
      lastSentEntryId: 'LastSentEntryId',
      query: 'Query',
      retrieverResources: 'RetrieverResources',
      streamKey: 'StreamKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      conversationId: 'string',
      createdAt: 'string',
      events: { 'type': 'array', 'itemType': GetMessagesResponseBodyDataEvents },
      feedback: 'string',
      generationFinishedAt: 'string',
      generationStartedAt: 'string',
      generationStatus: 'string',
      id: 'string',
      lastSentEntryId: 'string',
      query: 'string',
      retrieverResources: { 'type': 'array', 'itemType': 'any' },
      streamKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
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
  /**
   * @remarks
   * A list of message objects.
   */
  data?: GetMessagesResponseBodyData[];
  /**
   * @remarks
   * Indicates whether there are more messages to retrieve.
   * 
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The value of the Limit parameter used for this request.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The unique identifier for the request.
   * 
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

