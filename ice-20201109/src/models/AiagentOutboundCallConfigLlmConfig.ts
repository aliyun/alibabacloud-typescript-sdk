// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AIAgentOutboundCallConfigLlmConfigLlmHistory } from "./AiagentOutboundCallConfigLlmConfigLlmHistory";


export class AIAgentOutboundCallConfigLlmConfig extends $dara.Model {
  bailianAppParams?: string;
  llmHistory?: AIAgentOutboundCallConfigLlmConfigLlmHistory[];
  llmHistoryLimit?: number;
  llmSystemPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      bailianAppParams: 'BailianAppParams',
      llmHistory: 'LlmHistory',
      llmHistoryLimit: 'LlmHistoryLimit',
      llmSystemPrompt: 'LlmSystemPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bailianAppParams: 'string',
      llmHistory: { 'type': 'array', 'itemType': AIAgentOutboundCallConfigLlmConfigLlmHistory },
      llmHistoryLimit: 'number',
      llmSystemPrompt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.llmHistory)) {
      $dara.Model.validateArray(this.llmHistory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

