// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCompletionMessageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of messages in the model request.
   */
  messagesShrink?: string;
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

