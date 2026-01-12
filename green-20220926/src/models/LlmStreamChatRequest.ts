// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmStreamChatRequest extends $dara.Model {
  /**
   * @example
   * guardCustomTest
   */
  channel?: string;
  /**
   * @remarks
   * Conversation information
   * 
   * @example
   * [{\\"content\\":\\"你好\\",\\"role\\":\\"user\\"}]
   */
  messages?: any;
  /**
   * @remarks
   * Temperature value for the large model
   * 
   * @example
   * 0.5
   */
  temperature?: number;
  /**
   * @remarks
   * Top p parameter controlling the randomness of the large model\\"s output.
   * 
   * @example
   * 0.5
   */
  topP?: number;
  /**
   * @remarks
   * Type of conversation
   * 
   * @example
   * image
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      messages: 'Messages',
      temperature: 'Temperature',
      topP: 'TopP',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      messages: 'any',
      temperature: 'number',
      topP: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

