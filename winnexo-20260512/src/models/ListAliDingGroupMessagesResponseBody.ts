// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAliDingGroupMessagesResponseBodyItemsAttachments extends $dara.Model {
  /**
   * @remarks
   * The attachment ID.
   * 
   * @example
   * attachment-example
   */
  attachmentId?: string;
  /**
   * @remarks
   * The attachment type.
   * 
   * @example
   * FILE
   */
  attachmentType?: string;
  /**
   * @remarks
   * The execution duration of the asynchronous task.
   * 
   * @example
   * 1000
   */
  durationMs?: number;
  /**
   * @remarks
   * The new file name. This parameter is optional. If you do not specify this parameter or set it to an empty string, the original file name is retained.
   * 
   * @example
   * Plan.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The file size, in **bytes**.
   * 
   * @example
   * 102400
   */
  fileSize?: number;
  /**
   * @remarks
   * The thumbnail height, in pixels.
   * 
   * @example
   * 1080
   */
  height?: number;
  /**
   * @remarks
   * The media type. The file name extension is in uppercase, such as XLS, DOC, DOCX, PDF, or XLSX.
   * 
   * @example
   * application/pdf
   */
  mimeType?: string;
  /**
   * @remarks
   * The image width, in pixels.
   * 
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentId: 'attachmentId',
      attachmentType: 'attachmentType',
      durationMs: 'durationMs',
      fileName: 'fileName',
      fileSize: 'fileSize',
      height: 'height',
      mimeType: 'mimeType',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentId: 'string',
      attachmentType: 'string',
      durationMs: 'number',
      fileName: 'string',
      fileSize: 'number',
      height: 'number',
      mimeType: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliDingGroupMessagesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The comment attachments.
   */
  attachments?: ListAliDingGroupMessagesResponseBodyItemsAttachments[];
  /**
   * @remarks
   * The returned content.
   * 
   * @example
   * See the attachment
   */
  content?: string;
  /**
   * @remarks
   * The creation time in ISO 8601 format.
   * 
   * @example
   * 2026-09-08 09:01:00
   */
  createTime?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * msg-example
   */
  messageId?: string;
  /**
   * @remarks
   * The message type. Valid values:
   * - **MARKDOWN**: Markdown message.
   * - **ACTIONCARD**: card message.
   * 
   * > Markdown messages do not support message buttons.
   * 
   * @example
   * FILE
   */
  messageType?: string;
  /**
   * @remarks
   * The DingTalk ID of the business-side customer service representative.
   * 
   * @example
   * user-example
   */
  senderId?: string;
  /**
   * @remarks
   * The name of the message sender.
   * 
   * @example
   * John
   */
  senderName?: string;
  static names(): { [key: string]: string } {
    return {
      attachments: 'attachments',
      content: 'content',
      createTime: 'createTime',
      messageId: 'messageId',
      messageType: 'messageType',
      senderId: 'senderId',
      senderName: 'senderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': ListAliDingGroupMessagesResponseBodyItemsAttachments },
      content: 'string',
      createTime: 'string',
      messageId: 'string',
      messageType: 'string',
      senderId: 'string',
      senderName: 'string',
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

export class ListAliDingGroupMessagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether more pages are available.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The file information.
   */
  items?: ListAliDingGroupMessagesResponseBodyItems[];
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The time when the next plan is scheduled.
   * 
   * @example
   * 2026-09-08T09:01:00+08:00
   */
  nextTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-id
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      hasMore: 'hasMore',
      items: 'items',
      message: 'message',
      nextTime: 'nextTime',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': ListAliDingGroupMessagesResponseBodyItems },
      message: 'string',
      nextTime: 'string',
      requestId: 'string',
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

