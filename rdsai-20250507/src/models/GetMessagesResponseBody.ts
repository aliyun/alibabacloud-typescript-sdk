// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessagesResponseBodyDataEvents extends $dara.Model {
  /**
   * @remarks
   * The approval status of the tool calling.
   * 
   * @example
   * pending
   */
  approvalStatus?: string;
  /**
   * @remarks
   * The tool calling ID.
   * 
   * @example
   * call-example
   */
  callId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * conversation-example
   */
  conversationId?: string;
  /**
   * @remarks
   * The description of the tool calling.
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
   * The parameters of the tool calling.
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
  answer?: string;
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
  id?: string;
  previewUrl?: string;
  type?: string;
  /**
   * @remarks
   * The upload file ID.
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
   * The answer.
   * 
   * @example
   * The disk usage of the instance rm-bp14as9914vd3**** you queried is 23%, and no capacity expansion is needed at this time. If you need to view the detailed configurations or performance monitoring of a specific instance, or perform other operations, let me know your specific requirements!
   */
  answer?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 9cbbe885-b240-4803-9d15-6781a3fd****
   */
  conversationId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1763986004
   */
  createdAt?: string;
  events?: GetMessagesResponseBodyDataEvents[];
  /**
   * @remarks
   * The feedback.
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
   * The message ID.
   * 
   * @example
   * 84dc9f9b-424a-404d-9c36-35e9d000****
   */
  id?: string;
  lastSentEntryId?: string;
  messageFiles?: GetMessagesResponseBodyDataMessageFiles[];
  /**
   * @remarks
   * The query statement.
   * 
   * @example
   * Disk usage of instance rm-bp14as9914vd3****, is capacity expansion needed
   */
  query?: string;
  /**
   * @remarks
   * The retrieval resources.
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
   * The query result.
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
   * The maximum number of entries returned.
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

