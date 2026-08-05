// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmStreamChatRequest extends $dara.Model {
  /**
   * @remarks
   * channel
   * 
   * @example
   * guardCustomTest
   */
  channel?: string;
  /**
   * @remarks
   * The conversation messages.
   * 
   * @example
   * [{"content":"Hello","role":"user"}]
   */
  messages?: any;
  /**
   * @remarks
   * The temperature value of the large language model.
   * 
   * @example
   * 0.5
   */
  temperature?: number;
  /**
   * @remarks
   * The top_p parameter that controls the randomness of the large language model output.
   * 
   * @example
   * 0.5
   */
  topP?: number;
  /**
   * @remarks
   * The conversation type.
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

