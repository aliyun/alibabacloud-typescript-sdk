// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLLMConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the LLM configuration.
   * 
   * @example
   * llm_config1
   */
  LLMConfigId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD19A0E2-0DC8-5EAA-867D-00C813F553F9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      LLMConfigId: 'LLMConfigId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      LLMConfigId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

