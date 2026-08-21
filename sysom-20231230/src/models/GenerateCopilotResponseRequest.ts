// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateCopilotResponseRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * Input parameters for the copilot LLM service. Refer to the standard LLM API input parameter dict, which needs to be converted to a string and passed into llmParamString
   * 
   * @example
   * "{\\"model\\":\\"Qwen-7B-Chat\\",\\"temperature\\":0.9,\\"max_tokens\\":1000,\\"top_p\\":1,\\"frequency_penalty\\":0.0,\\"presence_penalty\\":0.6,\\"messages\\":[{\\"role\\":\\"user\\",\\"content\\":\\"我是os工程师\\"},{\\"role\\":\\"assistant\\",\\"content\\":\\"您好。我是AI语言模型，很高兴为您服 务。有什么我能帮助您的呢\\"},{\\"role\\":\\"user\\",\\"content\\":\\"你知道什么是alinux吗\\"}]}"
   */
  llmParamString?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      llmParamString: 'llmParamString',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      llmParamString: 'string',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

