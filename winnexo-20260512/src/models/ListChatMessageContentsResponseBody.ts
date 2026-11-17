// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatMessageContentsResponseBodyItemsAttachments extends $dara.Model {
  /**
   * @remarks
   * The ID of the attachment.
   * 
   * @example
   * file-1
   */
  attachmentId?: string;
  /**
   * @remarks
   * The total number of characters in the content.
   * 
   * @example
   * 4
   */
  charCount?: number;
  /**
   * @remarks
   * The number of chunks.
   * 
   * @example
   * 1
   */
  chunkCount?: number;
  /**
   * @remarks
   * The content of the user message.
   * 
   * @example
   * Attachment content
   */
  content?: string;
  /**
   * @remarks
   * The reason why the content is empty.
   * 
   * @example
   * None
   */
  emptyReason?: string;
  /**
   * @remarks
   * The failure code of the batch. Valid values:
   * - ARREARAGE: The account has an overdue payment.
   * - NO_TARGET: No valid inspection instance is available.
   * - TIMEOUT: The batch execution timed out.
   * - SYSTEM_ERROR: A system error occurred.
   * - ALL_INSTANCE_FAILED: All instance inspections failed.
   * 
   * This parameter is empty if the batch does not fail.
   * 
   * @example
   * ARREARAGE
   */
  failureCode?: string;
  /**
   * @remarks
   * The failure summary of the asynchronous task. This parameter is not returned if no failure information is available. You can use the taskId and requestId to troubleshoot the issue.
   * 
   * @example
   * Scheduling failed
   */
  failureReason?: string;
  /**
   * @remarks
   * The new file name. This parameter is optional. If you do not specify this parameter or specify an empty string, the original file name is retained.
   * 
   * @example
   * Weekly_Report.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * Specifies whether the standard package instance is found.
   * 
   * @example
   * true
   */
  found?: boolean;
  /**
   * @remarks
   * The ID of the message.
   * 
   * @example
   * msg-1
   */
  messageId?: string;
  /**
   * @remarks
   * The type of the attachment.
   * 
   * @example
   * doc
   */
  modality?: string;
  /**
   * @remarks
   * The status of the data source. Valid values:
   * - **1**: Online.
   * - **0**: Offline.
   * 
   * @example
   * PARSED
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether the scan result is truncated.
   * 
   * @example
   * false
   */
  truncated?: boolean;
  static names(): { [key: string]: string } {
    return {
      attachmentId: 'attachmentId',
      charCount: 'charCount',
      chunkCount: 'chunkCount',
      content: 'content',
      emptyReason: 'emptyReason',
      failureCode: 'failureCode',
      failureReason: 'failureReason',
      fileName: 'fileName',
      found: 'found',
      messageId: 'messageId',
      modality: 'modality',
      status: 'status',
      truncated: 'truncated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentId: 'string',
      charCount: 'number',
      chunkCount: 'number',
      content: 'string',
      emptyReason: 'string',
      failureCode: 'string',
      failureReason: 'string',
      fileName: 'string',
      found: 'boolean',
      messageId: 'string',
      modality: 'string',
      status: 'string',
      truncated: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatMessageContentsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The content type. Valid values:
   * - 0: Text.
   * - 1: Image material.
   * - 2: Handwritten text.
   * 
   * @example
   * []
   */
  attachments?: ListChatMessageContentsResponseBodyItemsAttachments[];
  /**
   * @remarks
   * The ID of the message.
   * 
   * @example
   * msg-1
   */
  messageId?: string;
  /**
   * @remarks
   * The message type. Valid values:
   * - **MARKDOWN**: Markdown message.
   * - **ACTIONCARD**: Card message.
   * 
   * > Message buttons cannot be used in Markdown messages.
   * 
   * @example
   * POST
   */
  messageType?: string;
  /**
   * @remarks
   * The ID of the service record.
   * 
   * @example
   * 123
   */
  recordId?: number;
  /**
   * @remarks
   * The DingTalk ID of the customer service representative.
   * 
   * @example
   * sender-1
   */
  senderId?: string;
  /**
   * @remarks
   * The name of the message sender.
   * 
   * @example
   * Zhang San
   */
  senderName?: string;
  /**
   * @remarks
   * The time when the message was sent.
   * 
   * @example
   * 2026-11-09T10:00:00+08:00
   */
  sentAt?: string;
  /**
   * @remarks
   * The batch text to be translated.
   * 
   * @example
   * Please check the attachment
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      attachments: 'attachments',
      messageId: 'messageId',
      messageType: 'messageType',
      recordId: 'recordId',
      senderId: 'senderId',
      senderName: 'senderName',
      sentAt: 'sentAt',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': ListChatMessageContentsResponseBodyItemsAttachments },
      messageId: 'string',
      messageType: 'string',
      recordId: 'number',
      senderId: 'string',
      senderName: 'string',
      sentAt: 'string',
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachments)) {
      $dara.Model.validateArray(this.attachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatMessageContentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Specifies whether there is a next page.
   * 
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The list of MCP cards.
   */
  items?: ListChatMessageContentsResponseBodyItems[];
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * The current zone list is illegal.
   */
  message?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The maximum number of data records returned in this request.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * trace-chat-1
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the original project.
   * 
   * @example
   * source-chat-1
   */
  sourceId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      hasMore: 'hasMore',
      items: 'items',
      message: 'message',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      sourceId: 'sourceId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': ListChatMessageContentsResponseBodyItems },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      sourceId: 'string',
      total: 'number',
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

