// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunLegalAdviceConsultationShrinkRequest extends $dara.Model {
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
  threadShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      assistantShrink: 'assistant',
      stream: 'stream',
      threadShrink: 'thread',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      assistantShrink: 'string',
      stream: 'boolean',
      threadShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

