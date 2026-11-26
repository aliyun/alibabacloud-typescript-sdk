// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessagesResponseBodyDataEvents extends $dara.Model {
  /**
   * @remarks
   * The tool invocation approval status.
   * 
   * @example
   * pending
   */
  approvalStatus?: string;
  /**
   * @remarks
   * The tool invocation ID.
   * 
   * @example
   * call-example
   */
  callId?: string;
  /**
   * @remarks
   * The conversation ID.
   * 
   * @example
   * conversation-example
   */
  conversationId?: string;
  /**
   * @remarks
   * The tool invocation description.
   * 
   * @example
   * Search ContextDB records
   */
  description?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * message-example
   */
  messageId?: string;
  /**
   * @remarks
   * The tool approval round ID.
   * 
   * @example
   * round-example
   */
  roundId?: string;
  /**
   * @remarks
   * The tool invocation parameters.
   */
  toolArguments?: { [key: string]: any };
  /**
   * @remarks
   * The tool name.
   * 
   * @example
   * contextdb.search
   */
  toolName?: string;
  /**
   * @example
   * 用户询问实例 pgm-example12345678（PostgreSQL，cn-hangzhou）的存储扩容方法。先检索相关文档，再查询实例配置。
   * 
   * 当前会话处于只读模式，仅提供操作说明，不执行变更。
   */
  answer?: string;
  /**
   * @example
   * thinking
   */
  event?: string;
  static names(): { [key: string]: string } {
    return {
      approvalStatus: 'ApprovalStatus',
      callId: 'CallId',
      conversationId: 'ConversationId',
      description: 'Description',
      messageId: 'MessageId',
      roundId: 'RoundId',
      toolArguments: 'ToolArguments',
      toolName: 'ToolName',
      answer: 'answer',
      event: 'event',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalStatus: 'string',
      callId: 'string',
      conversationId: 'string',
      description: 'string',
      messageId: 'string',
      roundId: 'string',
      toolArguments: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      toolName: 'string',
      answer: 'string',
      event: 'string',
    };
  }

  validate() {
    if(this.toolArguments) {
      $dara.Model.validateMap(this.toolArguments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessagesResponseBodyDataMessageFiles extends $dara.Model {
  /**
   * @example
   * ac6bff58-75b7-43b2-8149-7dcc1c57cf11
   */
  id?: string;
  /**
   * @example
   * https://example.com/3493759g.png?x-oss-date=20260102T030405Z&x-oss-expires=723&x-oss-signature-version=OSS4********A256&x-oss-credential=PC******zb&x-oss-signature=
   */
  previewUrl?: string;
  /**
   * @example
   * image
   */
  type?: string;
  /**
   * @remarks
   * The uploaded file ID.
   * 
   * @example
   * file-example
   */
  uploadFileId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      previewUrl: 'PreviewUrl',
      type: 'Type',
      uploadFileId: 'UploadFileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      previewUrl: 'string',
      type: 'string',
      uploadFileId: 'string',
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
   * The reply.
   * 
   * @example
   * The instance rm-bp14as9914vd3**** you inquired about has a disk usage of 23%, so no storage expansion is needed at the moment. If you need to view detailed configurations, check performance monitoring, or perform other operations on a specific instance, please let me know your specific requirements.
   */
  answer?: string;
  /**
   * @remarks
   * The conversation ID.
   * 
   * @example
   * 9cbbe885-b240-4803-9d15-6781a3fd****
   */
  conversationId?: string;
  /**
   * @remarks
   * The time when the message was created. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1763986004
   */
  createdAt?: string;
  /**
   * @remarks
   * The list of events.
   */
  events?: GetMessagesResponseBodyDataEvents[];
  /**
   * @remarks
   * The feedback.
   * 
   * @example
   * like
   */
  feedback?: string;
  /**
   * @example
   * 1767323076
   */
  generationFinishedAt?: string;
  /**
   * @example
   * 1767323045
   */
  generationStartedAt?: string;
  /**
   * @example
   * completed
   */
  generationStatus?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * 84dc9f9b-424a-404d-9c36-35e9d000****
   */
  id?: string;
  /**
   * @example
   * 5561345587003-4
   */
  lastSentEntryId?: string;
  messageFiles?: GetMessagesResponseBodyDataMessageFiles[];
  /**
   * @remarks
   * The query statement.
   * 
   * @example
   * Disk usage of instance rm-bp14as9914vd3**** and whether capacity expansion is required
   */
  query?: string;
  /**
   * @remarks
   * The retrieved resources.
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
      messageFiles: 'MessageFiles',
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
      messageFiles: { 'type': 'array', 'itemType': GetMessagesResponseBodyDataMessageFiles },
      query: 'string',
      retrieverResources: { 'type': 'array', 'itemType': 'any' },
      streamKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    if(Array.isArray(this.messageFiles)) {
      $dara.Model.validateArray(this.messageFiles);
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
   * The query results.
   */
  data?: GetMessagesResponseBodyData[];
  /**
   * @remarks
   * Indicates whether there is a next page.
   * 
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The maximum number of query results.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The request ID.
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

