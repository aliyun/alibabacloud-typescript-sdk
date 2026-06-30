// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCompletionMessageRequestMessages extends $dara.Model {
  /**
   * @remarks
   * The content of the message.
   * 
   * @example
   * 请用50字总结一下对话
   */
  content?: string;
  /**
   * @remarks
   * The role of the message sender. Valid values: `user`, `agent`, `system`, and `function`.
   * 
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCompletionMessageRequest extends $dara.Model {
  /**
   * @remarks
   * A list of messages that form the conversation history and the current prompt.
   */
  messages?: RunCompletionMessageRequestMessages[];
  /**
   * @remarks
   * The model specification to use. Valid values: `TYXM_PLUS` and `TYXM_TURBO`.
   * 
   * @example
   * TYXM_PLUS
   */
  modelCode?: string;
  /**
   * @remarks
   * Specifies whether to stream the response using Server-Sent Events (SSE). If `true`, the response is streamed. Defaults to `false`.
   * 
   * @example
   * true
   */
  stream?: boolean;
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
      modelCode: 'ModelCode',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': RunCompletionMessageRequestMessages },
      modelCode: 'string',
      stream: 'boolean',
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

