// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AIAgentOutboundCallConfigAsrConfig } from "./AiagentOutboundCallConfigAsrConfig";
import { AIAgentOutboundCallConfigInterruptConfig } from "./AiagentOutboundCallConfigInterruptConfig";
import { AIAgentOutboundCallConfigLlmConfig } from "./AiagentOutboundCallConfigLlmConfig";
import { AIAgentOutboundCallConfigTtsConfig } from "./AiagentOutboundCallConfigTtsConfig";
import { AIAgentOutboundCallConfigTurnDetectionConfig } from "./AiagentOutboundCallConfigTurnDetectionConfig";


export class AIAgentOutboundCallConfig extends $dara.Model {
  asrConfig?: AIAgentOutboundCallConfigAsrConfig;
  enableIntelligentSegment?: boolean;
  greeting?: string;
  interruptConfig?: AIAgentOutboundCallConfigInterruptConfig;
  llmConfig?: AIAgentOutboundCallConfigLlmConfig;
  ttsConfig?: AIAgentOutboundCallConfigTtsConfig;
  turnDetectionConfig?: AIAgentOutboundCallConfigTurnDetectionConfig;
  static names(): { [key: string]: string } {
    return {
      asrConfig: 'AsrConfig',
      enableIntelligentSegment: 'EnableIntelligentSegment',
      greeting: 'Greeting',
      interruptConfig: 'InterruptConfig',
      llmConfig: 'LlmConfig',
      ttsConfig: 'TtsConfig',
      turnDetectionConfig: 'TurnDetectionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrConfig: AIAgentOutboundCallConfigAsrConfig,
      enableIntelligentSegment: 'boolean',
      greeting: 'string',
      interruptConfig: AIAgentOutboundCallConfigInterruptConfig,
      llmConfig: AIAgentOutboundCallConfigLlmConfig,
      ttsConfig: AIAgentOutboundCallConfigTtsConfig,
      turnDetectionConfig: AIAgentOutboundCallConfigTurnDetectionConfig,
    };
  }

  validate() {
    if(this.asrConfig && typeof (this.asrConfig as any).validate === 'function') {
      (this.asrConfig as any).validate();
    }
    if(this.interruptConfig && typeof (this.interruptConfig as any).validate === 'function') {
      (this.interruptConfig as any).validate();
    }
    if(this.llmConfig && typeof (this.llmConfig as any).validate === 'function') {
      (this.llmConfig as any).validate();
    }
    if(this.ttsConfig && typeof (this.ttsConfig as any).validate === 'function') {
      (this.ttsConfig as any).validate();
    }
    if(this.turnDetectionConfig && typeof (this.turnDetectionConfig as any).validate === 'function') {
      (this.turnDetectionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

