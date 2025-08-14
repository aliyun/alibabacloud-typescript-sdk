// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIAgentTemplateConfigAvatarChat3DLlmHistory extends $dara.Model {
  content?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentTemplateConfigAvatarChat3D extends $dara.Model {
  asrHotWords?: string[];
  asrLanguageId?: string;
  asrMaxSilence?: number;
  avatarId?: string;
  bailianAppParams?: string;
  charBreak?: boolean;
  enableIntelligentSegment?: boolean;
  enablePushToTalk?: boolean;
  enableVoiceInterrupt?: boolean;
  gracefulShutdown?: boolean;
  greeting?: string;
  interruptWords?: string[];
  llmHistory?: AIAgentTemplateConfigAvatarChat3DLlmHistory[];
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
      avatarId: 'AvatarId',
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
      avatarId: 'string',
      bailianAppParams: 'string',
      charBreak: 'boolean',
      enableIntelligentSegment: 'boolean',
      enablePushToTalk: 'boolean',
      enableVoiceInterrupt: 'boolean',
      gracefulShutdown: 'boolean',
      greeting: 'string',
      interruptWords: { 'type': 'array', 'itemType': 'string' },
      llmHistory: { 'type': 'array', 'itemType': AIAgentTemplateConfigAvatarChat3DLlmHistory },
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

export class AIAgentTemplateConfigVisionChatLlmHistory extends $dara.Model {
  content?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class AIAgentTemplateConfigVoiceChatLlmHistory extends $dara.Model {
  content?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentTemplateConfigVoiceChat extends $dara.Model {
  asrHotWords?: string[];
  asrLanguageId?: string;
  asrMaxSilence?: number;
  avatarUrl?: string;
  avatarUrlType?: string;
  bailianAppParams?: string;
  charBreak?: boolean;
  enableIntelligentSegment?: boolean;
  enablePushToTalk?: boolean;
  enableVoiceInterrupt?: boolean;
  gracefulShutdown?: boolean;
  greeting?: string;
  interruptWords?: string[];
  llmHistory?: AIAgentTemplateConfigVoiceChatLlmHistory[];
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
      avatarUrl: 'AvatarUrl',
      avatarUrlType: 'AvatarUrlType',
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
      avatarUrl: 'string',
      avatarUrlType: 'string',
      bailianAppParams: 'string',
      charBreak: 'boolean',
      enableIntelligentSegment: 'boolean',
      enablePushToTalk: 'boolean',
      enableVoiceInterrupt: 'boolean',
      gracefulShutdown: 'boolean',
      greeting: 'string',
      interruptWords: { 'type': 'array', 'itemType': 'string' },
      llmHistory: { 'type': 'array', 'itemType': AIAgentTemplateConfigVoiceChatLlmHistory },
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

export class AIAgentTemplateConfig extends $dara.Model {
  avatarChat3D?: AIAgentTemplateConfigAvatarChat3D;
  visionChat?: AIAgentTemplateConfigVisionChat;
  voiceChat?: AIAgentTemplateConfigVoiceChat;
  static names(): { [key: string]: string } {
    return {
      avatarChat3D: 'AvatarChat3D',
      visionChat: 'VisionChat',
      voiceChat: 'VoiceChat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarChat3D: AIAgentTemplateConfigAvatarChat3D,
      visionChat: AIAgentTemplateConfigVisionChat,
      voiceChat: AIAgentTemplateConfigVoiceChat,
    };
  }

  validate() {
    if(this.avatarChat3D && typeof (this.avatarChat3D as any).validate === 'function') {
      (this.avatarChat3D as any).validate();
    }
    if(this.visionChat && typeof (this.visionChat as any).validate === 'function') {
      (this.visionChat as any).validate();
    }
    if(this.voiceChat && typeof (this.voiceChat as any).validate === 'function') {
      (this.voiceChat as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

