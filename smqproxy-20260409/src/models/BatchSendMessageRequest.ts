// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSendMessageRequestMessages extends $dara.Model {
  /**
   * @example
   * 60
   */
  delaySeconds?: number;
  /**
   * @example
   * This is test message 1.
   */
  messageBody?: string;
  /**
   * @example
   * group1
   */
  messageGroupId?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      delaySeconds: 'DelaySeconds',
      messageBody: 'MessageBody',
      messageGroupId: 'MessageGroupId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delaySeconds: 'number',
      messageBody: 'string',
      messageGroupId: 'string',
      priority: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSendMessageRequest extends $dara.Model {
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

