// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateLlmTemplateConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON string of the LLM configuration to be validated.
   * 
   * This parameter is required.
   * 
   * @example
   * {"id":"qwen3-max-2026-01-23","name":"Qwen3 Max","contextWindow":200000,"maxTokens":32768}
   */
  config?: string;
  /**
   * @remarks
   * The ID of the provider template.
   * 
   * This parameter is required.
   * 
   * @example
   * pt-xxx-001
   */
  providerTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      providerTemplateId: 'ProviderTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      providerTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

