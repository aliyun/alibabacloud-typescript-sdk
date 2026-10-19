// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MessagesUserPropertiesValue } from "./MessagesUserPropertiesValue";


export class BatchSendMessageRequestMessages extends $dara.Model {
  /**
   * @remarks
   * The delay in seconds before the message becomes consumable.
   * 
   * @example
   * 60
   */
  delaySeconds?: number;
  /**
   * @remarks
   * The message body.
   * 
   * @example
   * This is test message 1.
   */
  messageBody?: string;
  /**
   * @remarks
   * The message group ID. Messages within the same group are delivered in order. This parameter is valid only for FIFO queues.
   * 
   * @example
   * group1
   */
  messageGroupId?: string;
  /**
   * @remarks
   * The priority. A smaller value indicates a higher priority. The value 1 represents the highest priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  userProperties?: { [key: string]: MessagesUserPropertiesValue };
  static names(): { [key: string]: string } {
    return {
      delaySeconds: 'DelaySeconds',
      messageBody: 'MessageBody',
      messageGroupId: 'MessageGroupId',
      priority: 'Priority',
      userProperties: 'UserProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delaySeconds: 'number',
      messageBody: 'string',
      messageGroupId: 'string',
      priority: 'number',
      userProperties: { 'type': 'map', 'keyType': 'string', 'valueType': MessagesUserPropertiesValue },
    };
  }

  validate() {
    if(this.userProperties) {
      $dara.Model.validateMap(this.userProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The message list.
   */
  messages?: BatchSendMessageRequestMessages[];
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': BatchSendMessageRequestMessages },
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

