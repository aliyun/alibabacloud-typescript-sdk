// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CpuHighAgentStreamResponseRequest extends $dara.Model {
  /**
   * @remarks
   * Input parameter for interfacing with the high-CPU agent service. Refer to the standard LLM API input parameter dictionary, convert it into a string, and pass it in the `llmParamString` field.
   * 
   * @example
   * "llmParamString": "{\\"messages\\": [{\\"role\\": \\"user\\", \\"content\\": \\"用户12345的机器i-67890，最近2分钟CPU使用率高，请结合最近2分钟的火焰图信息，分析原因\\"}]}"
   */
  llmParamString?: string;
  static names(): { [key: string]: string } {
    return {
      llmParamString: 'llmParamString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmParamString: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

