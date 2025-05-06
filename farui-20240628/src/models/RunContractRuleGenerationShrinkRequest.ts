// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunContractRuleGenerationShrinkRequest extends $dara.Model {
  /**
   * @example
   * farui
   */
  appId?: string;
  assistantShrink?: string;
  /**
   * @example
   * true
   */
  stream?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      assistantShrink: 'assistant',
      stream: 'stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      assistantShrink: 'string',
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

