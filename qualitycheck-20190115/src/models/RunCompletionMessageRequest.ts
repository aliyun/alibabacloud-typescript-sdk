// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCompletionMessageRequestMessages extends $dara.Model {
  /**
   * @remarks
   * The prompt content.
   * 
   * @example
   * Summarize the conversation in 50 words
   */
  content?: string;
  /**
   * @remarks
   * The conversation role. Valid values: user (customer), assistant (customer service representative), system (system message), and function (function).
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
   * The list of messages in the model request.
   */
  messages?: RunCompletionMessageRequestMessages[];
  /**
   * @remarks
   * The model specification. Valid values: TYXM_PLUS and TYXM_TURBO.
   * 
   * @example
   * TYXM_PLUS
   */
  modelCode?: string;
  /**
   * @remarks
   * Specifies whether to enable Server-Sent Events (SSE) responses. Default value: false.
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

