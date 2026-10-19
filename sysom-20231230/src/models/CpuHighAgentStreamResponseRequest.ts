// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CpuHighAgentStreamResponseRequest extends $dara.Model {
  /**
   * @remarks
   * The input parameter for the CPU high agent service. Refer to the standard LLM API input parameter dict. Convert it to a string and pass it in llmParamString.
   * 
   * @example
   * "llmParamString": "{\\"messages\\": [{\\"role\\": \\"user\\", \\"content\\": \\"The CPU utilization of instance i-67890 for user 12345 has been high in the last 2 minutes. Analyze the cause based on the flame graph information from the last 2 minutes.\\"}]}"
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

