// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunContractResultGenerationRequestAssistant } from "./RunContractResultGenerationRequestAssistant";


export class RunContractResultGenerationRequest extends $dara.Model {
  /**
   * @example
   * farui
   */
  appId?: string;
  assistant?: RunContractResultGenerationRequestAssistant;
  /**
   * @example
   * true
   */
  stream?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      assistant: 'assistant',
      stream: 'stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      assistant: RunContractResultGenerationRequestAssistant,
      stream: 'boolean',
    };
  }

  validate() {
    if(this.assistant && typeof (this.assistant as any).validate === 'function') {
      (this.assistant as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

