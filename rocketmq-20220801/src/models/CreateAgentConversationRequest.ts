// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentConversationRequestInitialMessageImages extends $dara.Model {
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

export class CreateAgentConversationRequestInitialMessage extends $dara.Model {
  /**
   * @example
   * 告警发生于 10:00
   */
  clientContext?: string;
  images?: CreateAgentConversationRequestInitialMessageImages[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 请排查实例消息堆积原因
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
      clientContext: 'clientContext',
      images: 'images',
      message: 'message',
      messageType: 'messageType',
      ticketRequestId: 'ticketRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientContext: 'string',
      images: { 'type': 'array', 'itemType': CreateAgentConversationRequestInitialMessageImages },
      message: 'string',
      messageType: 'string',
      ticketRequestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentConversationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * conversation-request-001
   */
  clientToken?: string;
  initialMessage?: CreateAgentConversationRequestInitialMessage;
  /**
   * @example
   * 消息堆积排查
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      initialMessage: 'initialMessage',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      initialMessage: CreateAgentConversationRequestInitialMessage,
      title: 'string',
    };
  }

  validate() {
    if(this.initialMessage && typeof (this.initialMessage as any).validate === 'function') {
      (this.initialMessage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

