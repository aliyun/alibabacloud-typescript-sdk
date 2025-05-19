// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLLMConfigResponseBody extends $dara.Model {
  /**
   * @example
   * llm_config1
   */
  LLMConfigId?: string;
  /**
   * @remarks
   * Id of the request
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

