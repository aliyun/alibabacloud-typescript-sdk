// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmStreamChatRequest extends $dara.Model {
  messages?: any;
  /**
   * @example
   * 0.5
   */
  temperature?: number;
  /**
   * @example
   * 0.5
   */
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
      temperature: 'Temperature',
      topP: 'TopP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: 'any',
      temperature: 'number',
      topP: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

