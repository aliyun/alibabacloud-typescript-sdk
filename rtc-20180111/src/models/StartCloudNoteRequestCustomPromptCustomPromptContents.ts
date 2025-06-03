// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartCloudNoteRequestCustomPromptCustomPromptContents extends $dara.Model {
  /**
   * @example
   * tingwu-turbo
   */
  model?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * split-summary-demo
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 请帮我将下面的对话进行总结，根据发言人来总结:\n {Transcription}
   */
  prompt?: string;
  /**
   * @example
   * chat
   */
  transType?: string;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      name: 'Name',
      prompt: 'Prompt',
      transType: 'TransType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      name: 'string',
      prompt: 'string',
      transType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

