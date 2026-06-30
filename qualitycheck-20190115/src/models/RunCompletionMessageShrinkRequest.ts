// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCompletionMessageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of messages that form the conversation history and the current prompt.
   */
  messagesShrink?: string;
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
      messagesShrink: 'Messages',
      modelCode: 'ModelCode',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messagesShrink: 'string',
      modelCode: 'string',
      stream: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

