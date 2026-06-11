// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatContentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The category of the message, which helps parse the `content` field when it is a JSON object. For example,`PLAN` indicates that the message is an execution plan and conforms to the execution plan schema.
   * 
   * @example
   * PLAN
   */
  category?: string;
  /**
   * @remarks
   * The checkpoint value.
   * 
   * @example
   * 0
   */
  checkpoint?: number;
  /**
   * @remarks
   * The message content.
   * 
   * @example
   * Data understanding completed.
   */
  content?: string;
  /**
   * @remarks
   * The type of the content field. Valid values: `[str, json]`. If the value is `json`, the content field can be parsed as a JSON object.
   * 
   * @example
   * str
   */
  contentType?: string;
  /**
   * @remarks
   * The message type, which distinguishes control signals from message data. For example,`CHAT_START` indicates the start of an agent\\"s reply,`CHAT_FINISH` indicates the end of the reply,`DATA` indicates a message that contains content, and`DELTA` indicates a part of an incremental output.
   * 
   * @example
   * DATA
   */
  eventType?: string;
  /**
   * @remarks
   * The output level of the message. A higher value indicates greater importance.
   * 
   * @example
   * 20
   */
  level?: number;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      checkpoint: 'checkpoint',
      content: 'content',
      contentType: 'content_type',
      eventType: 'event_type',
      level: 'level',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      checkpoint: 'number',
      content: 'string',
      contentType: 'string',
      eventType: 'string',
      level: 'number',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

