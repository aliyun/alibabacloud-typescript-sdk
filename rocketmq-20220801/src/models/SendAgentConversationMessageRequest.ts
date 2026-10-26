// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAgentConversationMessageRequestAttachments extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * client.log
   */
  fileName?: string;
  /**
   * @example
   * 2
   */
  keptLines?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * client_log
   */
  kind?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * client-logs/0198c8a91f4d7f01a3c21e99/client.log
   */
  sandboxPath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 114
   */
  sizeBytes?: number;
  /**
   * @example
   * 2026-09-12T11:00:00+08:00
   */
  timeRangeEnd?: string;
  /**
   * @example
   * 2026-09-12T10:00:00+08:00
   */
  timeRangeStart?: string;
  /**
   * @example
   * 2
   */
  totalLines?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      keptLines: 'keptLines',
      kind: 'kind',
      sandboxPath: 'sandboxPath',
      sizeBytes: 'sizeBytes',
      timeRangeEnd: 'timeRangeEnd',
      timeRangeStart: 'timeRangeStart',
      totalLines: 'totalLines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      keptLines: 'number',
      kind: 'string',
      sandboxPath: 'string',
      sizeBytes: 'number',
      timeRangeEnd: 'string',
      timeRangeStart: 'string',
      totalLines: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendAgentConversationMessageRequestImages extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR4nGNgAAIAAAUAAXpeqz8AAAAASUVORK5CYII=
   */
  dataBase64?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * image/png
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      dataBase64: 'dataBase64',
      mediaType: 'mediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataBase64: 'string',
      mediaType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendAgentConversationMessageRequest extends $dara.Model {
  attachments?: SendAgentConversationMessageRequestAttachments[];
  /**
   * @example
   * 告警时间为 2026-08-19 19:30:00
   */
  clientContext?: string;
  images?: SendAgentConversationMessageRequestImages[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 实例 rmq-cn-example 的消息为什么持续堆积？
   */
  message?: string;
  /**
   * @example
   * ticket_request
   */
  messageType?: string;
  /**
   * @example
   * ticket-request-example-001
   */
  ticketRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      attachments: 'attachments',
      clientContext: 'clientContext',
      images: 'images',
      message: 'message',
      messageType: 'messageType',
      ticketRequestId: 'ticketRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': SendAgentConversationMessageRequestAttachments },
      clientContext: 'string',
      images: { 'type': 'array', 'itemType': SendAgentConversationMessageRequestImages },
      message: 'string',
      messageType: 'string',
      ticketRequestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachments)) {
      $dara.Model.validateArray(this.attachments);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

