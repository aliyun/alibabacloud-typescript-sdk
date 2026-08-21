// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateCopilotStreamResponseRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The input parameter for the Copilot LLM service. Refer to the standard LLM interface input parameter dict. Convert it to a string and pass it to llmParamString.
   * 
   * @example
   * "{\\"model\\":\\"Qwen-7B-Chat\\",\\"temperature\\":0.9,\\"max_tokens\\":1000,\\"top_p\\":1,\\"frequency_penalty\\":0.0,\\"presence_penalty\\":0.6,\\"messages\\":[{\\"role\\":\\"user\\",\\"content\\":\\"I am an OS engineer\\"},{\\"role\\":\\"assistant\\",\\"content\\":\\"Hello. I am an AI language model, happy to help you. What can I do for you?\\"},{\\"role\\":\\"user\\",\\"content\\":\\"Do you know what Alinux is?\\"}]}"
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

