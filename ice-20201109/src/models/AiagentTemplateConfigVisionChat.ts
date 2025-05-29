// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AIAgentTemplateConfigVisionChatLlmHistory } from "./AiagentTemplateConfigVisionChatLlmHistory";


export class AIAgentTemplateConfigVisionChat extends $dara.Model {
  asrHotWords?: string[];
  asrLanguageId?: string;
  asrMaxSilence?: number;
  bailianAppParams?: string;
  charBreak?: boolean;
  enableIntelligentSegment?: boolean;
  enablePushToTalk?: boolean;
  enableVoiceInterrupt?: boolean;
  gracefulShutdown?: boolean;
  greeting?: string;
  interruptWords?: string[];
  llmHistory?: AIAgentTemplateConfigVisionChatLlmHistory[];
  llmHistoryLimit?: number;
  llmSystemPrompt?: string;
  maxIdleTime?: number;
  useVoiceprint?: boolean;
  userOfflineTimeout?: number;
  userOnlineTimeout?: number;
  vadLevel?: number;
  voiceId?: string;
  voiceIdList?: string[];
  voiceprintId?: string;
  volume?: number;
  wakeUpQuery?: string;
  workflowOverrideParams?: string;
  static names(): { [key: string]: string } {
    return {
      asrHotWords: 'AsrHotWords',
      asrLanguageId: 'AsrLanguageId',
      asrMaxSilence: 'AsrMaxSilence',
      bailianAppParams: 'BailianAppParams',
      charBreak: 'CharBreak',
      enableIntelligentSegment: 'EnableIntelligentSegment',
      enablePushToTalk: 'EnablePushToTalk',
      enableVoiceInterrupt: 'EnableVoiceInterrupt',
      gracefulShutdown: 'GracefulShutdown',
      greeting: 'Greeting',
      interruptWords: 'InterruptWords',
      llmHistory: 'LlmHistory',
      llmHistoryLimit: 'LlmHistoryLimit',
      llmSystemPrompt: 'LlmSystemPrompt',
      maxIdleTime: 'MaxIdleTime',
      useVoiceprint: 'UseVoiceprint',
      userOfflineTimeout: 'UserOfflineTimeout',
      userOnlineTimeout: 'UserOnlineTimeout',
      vadLevel: 'VadLevel',
      voiceId: 'VoiceId',
      voiceIdList: 'VoiceIdList',
      voiceprintId: 'VoiceprintId',
      volume: 'Volume',
      wakeUpQuery: 'WakeUpQuery',
      workflowOverrideParams: 'WorkflowOverrideParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrHotWords: { 'type': 'array', 'itemType': 'string' },
      asrLanguageId: 'string',
      asrMaxSilence: 'number',
      bailianAppParams: 'string',
      charBreak: 'boolean',
      enableIntelligentSegment: 'boolean',
      enablePushToTalk: 'boolean',
      enableVoiceInterrupt: 'boolean',
      gracefulShutdown: 'boolean',
      greeting: 'string',
      interruptWords: { 'type': 'array', 'itemType': 'string' },
      llmHistory: { 'type': 'array', 'itemType': AIAgentTemplateConfigVisionChatLlmHistory },
      llmHistoryLimit: 'number',
      llmSystemPrompt: 'string',
      maxIdleTime: 'number',
      useVoiceprint: 'boolean',
      userOfflineTimeout: 'number',
      userOnlineTimeout: 'number',
      vadLevel: 'number',
      voiceId: 'string',
      voiceIdList: { 'type': 'array', 'itemType': 'string' },
      voiceprintId: 'string',
      volume: 'number',
      wakeUpQuery: 'string',
      workflowOverrideParams: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.asrHotWords)) {
      $dara.Model.validateArray(this.asrHotWords);
    }
    if(Array.isArray(this.interruptWords)) {
      $dara.Model.validateArray(this.interruptWords);
    }
    if(Array.isArray(this.llmHistory)) {
      $dara.Model.validateArray(this.llmHistory);
    }
    if(Array.isArray(this.voiceIdList)) {
      $dara.Model.validateArray(this.voiceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

