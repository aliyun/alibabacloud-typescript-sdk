// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CpuHighAgentStreamResponseRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The input parameter for the CPU high agent service. Refer to the standard LLM API input parameter dict. Convert it to a string and pass it in the llmParamString field.
   * 
   * @example
   * "llmParamString": "{\\"messages\\": [{\\"role\\": \\"user\\", \\"content\\": \\"The CPU utilization of instance i-67890 for user 12345 has been high in the last 2 minutes. Analyze the cause based on the flame graph information from the last 2 minutes.\\"}]}"
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

