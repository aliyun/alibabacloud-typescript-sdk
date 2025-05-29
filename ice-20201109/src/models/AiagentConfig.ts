// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AIAgentConfigAsrConfig } from "./AiagentConfigAsrConfig";
import { AIAgentConfigAvatarConfig } from "./AiagentConfigAvatarConfig";
import { AIAgentConfigInterruptConfig } from "./AiagentConfigInterruptConfig";
import { AIAgentConfigLlmConfig } from "./AiagentConfigLlmConfig";
import { AIAgentConfigTtsConfig } from "./AiagentConfigTtsConfig";
import { AIAgentConfigTurnDetectionConfig } from "./AiagentConfigTurnDetectionConfig";
import { AIAgentConfigVoiceprintConfig } from "./AiagentConfigVoiceprintConfig";


export class AIAgentConfig extends $dara.Model {
  asrConfig?: AIAgentConfigAsrConfig;
  avatarConfig?: AIAgentConfigAvatarConfig;
  avatarUrl?: string;
  avatarUrlType?: string;
  enableIntelligentSegment?: boolean;
  enablePushToTalk?: boolean;
  experimentalConfig?: string;
  gracefulShutdown?: boolean;
  greeting?: string;
  interruptConfig?: AIAgentConfigInterruptConfig;
  llmConfig?: AIAgentConfigLlmConfig;
  maxIdleTime?: number;
  ttsConfig?: AIAgentConfigTtsConfig;
  turnDetectionConfig?: AIAgentConfigTurnDetectionConfig;
  userOfflineTimeout?: number;
  userOnlineTimeout?: number;
  voiceprintConfig?: AIAgentConfigVoiceprintConfig;
  volume?: number;
  wakeUpQuery?: string;
  workflowOverrideParams?: string;
  static names(): { [key: string]: string } {
    return {
      asrConfig: 'AsrConfig',
      avatarConfig: 'AvatarConfig',
      avatarUrl: 'AvatarUrl',
      avatarUrlType: 'AvatarUrlType',
      enableIntelligentSegment: 'EnableIntelligentSegment',
      enablePushToTalk: 'EnablePushToTalk',
      experimentalConfig: 'ExperimentalConfig',
      gracefulShutdown: 'GracefulShutdown',
      greeting: 'Greeting',
      interruptConfig: 'InterruptConfig',
      llmConfig: 'LlmConfig',
      maxIdleTime: 'MaxIdleTime',
      ttsConfig: 'TtsConfig',
      turnDetectionConfig: 'TurnDetectionConfig',
      userOfflineTimeout: 'UserOfflineTimeout',
      userOnlineTimeout: 'UserOnlineTimeout',
      voiceprintConfig: 'VoiceprintConfig',
      volume: 'Volume',
      wakeUpQuery: 'WakeUpQuery',
      workflowOverrideParams: 'WorkflowOverrideParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrConfig: AIAgentConfigAsrConfig,
      avatarConfig: AIAgentConfigAvatarConfig,
      avatarUrl: 'string',
      avatarUrlType: 'string',
      enableIntelligentSegment: 'boolean',
      enablePushToTalk: 'boolean',
      experimentalConfig: 'string',
      gracefulShutdown: 'boolean',
      greeting: 'string',
      interruptConfig: AIAgentConfigInterruptConfig,
      llmConfig: AIAgentConfigLlmConfig,
      maxIdleTime: 'number',
      ttsConfig: AIAgentConfigTtsConfig,
      turnDetectionConfig: AIAgentConfigTurnDetectionConfig,
      userOfflineTimeout: 'number',
      userOnlineTimeout: 'number',
      voiceprintConfig: AIAgentConfigVoiceprintConfig,
      volume: 'number',
      wakeUpQuery: 'string',
      workflowOverrideParams: 'string',
    };
  }

  validate() {
    if(this.asrConfig && typeof (this.asrConfig as any).validate === 'function') {
      (this.asrConfig as any).validate();
    }
    if(this.avatarConfig && typeof (this.avatarConfig as any).validate === 'function') {
      (this.avatarConfig as any).validate();
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
    if(this.voiceprintConfig && typeof (this.voiceprintConfig as any).validate === 'function') {
      (this.voiceprintConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

