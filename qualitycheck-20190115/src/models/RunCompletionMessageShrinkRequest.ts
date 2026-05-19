// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCompletionMessageShrinkRequest extends $dara.Model {
  messagesShrink?: string;
  /**
   * @example
   * TYXM_PLUS
   */
  modelCode?: string;
  /**
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

