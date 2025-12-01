// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AIAgentConfigAmbientSoundConfig extends $dara.Model {
  resourceId?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      volume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigAsrConfig extends $dara.Model {
  asrHotWords?: string[];
  asrLanguageId?: string;
  asrMaxSilence?: number;
  customParams?: string;
  vadDuration?: number;
  vadLevel?: number;
  static names(): { [key: string]: string } {
    return {
      asrHotWords: 'AsrHotWords',
      asrLanguageId: 'AsrLanguageId',
      asrMaxSilence: 'AsrMaxSilence',
      customParams: 'CustomParams',
      vadDuration: 'VadDuration',
      vadLevel: 'VadLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrHotWords: { 'type': 'array', 'itemType': 'string' },
      asrLanguageId: 'string',
      asrMaxSilence: 'number',
      customParams: 'string',
      vadDuration: 'number',
      vadLevel: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.asrHotWords)) {
      $dara.Model.validateArray(this.asrHotWords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigAutoSpeechConfigLlmPendingMessages extends $dara.Model {
  probability?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      probability: 'Probability',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      probability: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigAutoSpeechConfigLlmPending extends $dara.Model {
  messages?: AIAgentConfigAutoSpeechConfigLlmPendingMessages[];
  waitTime?: number;
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
      waitTime: 'WaitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': AIAgentConfigAutoSpeechConfigLlmPendingMessages },
      waitTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigAutoSpeechConfigUserIdleMessages extends $dara.Model {
  probability?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      probability: 'Probability',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      probability: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigAutoSpeechConfigUserIdle extends $dara.Model {
  maxRepeats?: number;
  messages?: AIAgentConfigAutoSpeechConfigUserIdleMessages[];
  waitTime?: number;
  static names(): { [key: string]: string } {
    return {
      maxRepeats: 'MaxRepeats',
      messages: 'Messages',
      waitTime: 'WaitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRepeats: 'number',
      messages: { 'type': 'array', 'itemType': AIAgentConfigAutoSpeechConfigUserIdleMessages },
      waitTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigAutoSpeechConfig extends $dara.Model {
  llmPending?: AIAgentConfigAutoSpeechConfigLlmPending;
  userIdle?: AIAgentConfigAutoSpeechConfigUserIdle;
  static names(): { [key: string]: string } {
    return {
      llmPending: 'LlmPending',
      userIdle: 'UserIdle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmPending: AIAgentConfigAutoSpeechConfigLlmPending,
      userIdle: AIAgentConfigAutoSpeechConfigUserIdle,
    };
  }

  validate() {
    if(this.llmPending && typeof (this.llmPending as any).validate === 'function') {
      (this.llmPending as any).validate();
    }
    if(this.userIdle && typeof (this.userIdle as any).validate === 'function') {
      (this.userIdle as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigAvatarConfig extends $dara.Model {
  avatarId?: string;
  static names(): { [key: string]: string } {
    return {
      avatarId: 'AvatarId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigInterruptConfig extends $dara.Model {
  enableVoiceInterrupt?: boolean;
  interruptWords?: string[];
  static names(): { [key: string]: string } {
    return {
      enableVoiceInterrupt: 'EnableVoiceInterrupt',
      interruptWords: 'InterruptWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableVoiceInterrupt: 'boolean',
      interruptWords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.interruptWords)) {
      $dara.Model.validateArray(this.interruptWords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigLlmConfigFunctionMap extends $dara.Model {
  function?: string;
  matchFunction?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      matchFunction: 'MatchFunction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      matchFunction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigLlmConfigLlmHistory extends $dara.Model {
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

export class AIAgentConfigLlmConfig extends $dara.Model {
  bailianAppParams?: string;
  functionMap?: AIAgentConfigLlmConfigFunctionMap[];
  historySyncWithTTS?: boolean;
  llmCompleteReply?: boolean;
  llmHistory?: AIAgentConfigLlmConfigLlmHistory[];
  llmHistoryLimit?: number;
  llmSystemPrompt?: string;
  openAIExtraQuery?: string;
  outputMaxDelay?: number;
  outputMinLength?: number;
  static names(): { [key: string]: string } {
    return {
      bailianAppParams: 'BailianAppParams',
      functionMap: 'FunctionMap',
      historySyncWithTTS: 'HistorySyncWithTTS',
      llmCompleteReply: 'LlmCompleteReply',
      llmHistory: 'LlmHistory',
      llmHistoryLimit: 'LlmHistoryLimit',
      llmSystemPrompt: 'LlmSystemPrompt',
      openAIExtraQuery: 'OpenAIExtraQuery',
      outputMaxDelay: 'OutputMaxDelay',
      outputMinLength: 'OutputMinLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bailianAppParams: 'string',
      functionMap: { 'type': 'array', 'itemType': AIAgentConfigLlmConfigFunctionMap },
      historySyncWithTTS: 'boolean',
      llmCompleteReply: 'boolean',
      llmHistory: { 'type': 'array', 'itemType': AIAgentConfigLlmConfigLlmHistory },
      llmHistoryLimit: 'number',
      llmSystemPrompt: 'string',
      openAIExtraQuery: 'string',
      outputMaxDelay: 'number',
      outputMinLength: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.functionMap)) {
      $dara.Model.validateArray(this.functionMap);
    }
    if(Array.isArray(this.llmHistory)) {
      $dara.Model.validateArray(this.llmHistory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigTtsConfigPronunciationRules extends $dara.Model {
  pronunciation?: string;
  type?: string;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      pronunciation: 'Pronunciation',
      type: 'Type',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pronunciation: 'string',
      type: 'string',
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigTtsConfig extends $dara.Model {
  emotion?: string;
  languageId?: string;
  modelId?: string;
  pronunciationRules?: AIAgentConfigTtsConfigPronunciationRules[];
  speechRate?: number;
  voiceId?: string;
  voiceIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      emotion: 'Emotion',
      languageId: 'LanguageId',
      modelId: 'ModelId',
      pronunciationRules: 'PronunciationRules',
      speechRate: 'SpeechRate',
      voiceId: 'VoiceId',
      voiceIdList: 'VoiceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emotion: 'string',
      languageId: 'string',
      modelId: 'string',
      pronunciationRules: { 'type': 'array', 'itemType': AIAgentConfigTtsConfigPronunciationRules },
      speechRate: 'number',
      voiceId: 'string',
      voiceIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.pronunciationRules)) {
      $dara.Model.validateArray(this.pronunciationRules);
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

export class AIAgentConfigTurnDetectionConfig extends $dara.Model {
  mode?: string;
  semanticWaitDuration?: number;
  turnEndWords?: string[];
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      semanticWaitDuration: 'SemanticWaitDuration',
      turnEndWords: 'TurnEndWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      semanticWaitDuration: 'number',
      turnEndWords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.turnEndWords)) {
      $dara.Model.validateArray(this.turnEndWords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigVcrConfigEquipment extends $dara.Model {
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigVcrConfigHeadMotion extends $dara.Model {
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigVcrConfigInvalidFrameMotion extends $dara.Model {
  callbackDelay?: number;
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      callbackDelay: 'CallbackDelay',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackDelay: 'number',
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigVcrConfigLookAway extends $dara.Model {
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigVcrConfigPeopleCount extends $dara.Model {
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigVcrConfigStillFrameMotion extends $dara.Model {
  callbackDelay?: number;
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      callbackDelay: 'CallbackDelay',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackDelay: 'number',
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigVcrConfig extends $dara.Model {
  equipment?: AIAgentConfigVcrConfigEquipment;
  headMotion?: AIAgentConfigVcrConfigHeadMotion;
  invalidFrameMotion?: AIAgentConfigVcrConfigInvalidFrameMotion;
  lookAway?: AIAgentConfigVcrConfigLookAway;
  peopleCount?: AIAgentConfigVcrConfigPeopleCount;
  stillFrameMotion?: AIAgentConfigVcrConfigStillFrameMotion;
  static names(): { [key: string]: string } {
    return {
      equipment: 'Equipment',
      headMotion: 'HeadMotion',
      invalidFrameMotion: 'InvalidFrameMotion',
      lookAway: 'LookAway',
      peopleCount: 'PeopleCount',
      stillFrameMotion: 'StillFrameMotion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      equipment: AIAgentConfigVcrConfigEquipment,
      headMotion: AIAgentConfigVcrConfigHeadMotion,
      invalidFrameMotion: AIAgentConfigVcrConfigInvalidFrameMotion,
      lookAway: AIAgentConfigVcrConfigLookAway,
      peopleCount: AIAgentConfigVcrConfigPeopleCount,
      stillFrameMotion: AIAgentConfigVcrConfigStillFrameMotion,
    };
  }

  validate() {
    if(this.equipment && typeof (this.equipment as any).validate === 'function') {
      (this.equipment as any).validate();
    }
    if(this.headMotion && typeof (this.headMotion as any).validate === 'function') {
      (this.headMotion as any).validate();
    }
    if(this.invalidFrameMotion && typeof (this.invalidFrameMotion as any).validate === 'function') {
      (this.invalidFrameMotion as any).validate();
    }
    if(this.lookAway && typeof (this.lookAway as any).validate === 'function') {
      (this.lookAway as any).validate();
    }
    if(this.peopleCount && typeof (this.peopleCount as any).validate === 'function') {
      (this.peopleCount as any).validate();
    }
    if(this.stillFrameMotion && typeof (this.stillFrameMotion as any).validate === 'function') {
      (this.stillFrameMotion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigVoiceprintConfig extends $dara.Model {
  useVoiceprint?: boolean;
  voiceprintId?: string;
  static names(): { [key: string]: string } {
    return {
      useVoiceprint: 'UseVoiceprint',
      voiceprintId: 'VoiceprintId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      useVoiceprint: 'boolean',
      voiceprintId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfig extends $dara.Model {
  ambientSoundConfig?: AIAgentConfigAmbientSoundConfig;
  asrConfig?: AIAgentConfigAsrConfig;
  autoSpeechConfig?: AIAgentConfigAutoSpeechConfig;
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
  vcrConfig?: AIAgentConfigVcrConfig;
  voiceprintConfig?: AIAgentConfigVoiceprintConfig;
  volume?: number;
  wakeUpQuery?: string;
  workflowOverrideParams?: string;
  static names(): { [key: string]: string } {
    return {
      ambientSoundConfig: 'AmbientSoundConfig',
      asrConfig: 'AsrConfig',
      autoSpeechConfig: 'AutoSpeechConfig',
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
      vcrConfig: 'VcrConfig',
      voiceprintConfig: 'VoiceprintConfig',
      volume: 'Volume',
      wakeUpQuery: 'WakeUpQuery',
      workflowOverrideParams: 'WorkflowOverrideParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ambientSoundConfig: AIAgentConfigAmbientSoundConfig,
      asrConfig: AIAgentConfigAsrConfig,
      autoSpeechConfig: AIAgentConfigAutoSpeechConfig,
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
      vcrConfig: AIAgentConfigVcrConfig,
      voiceprintConfig: AIAgentConfigVoiceprintConfig,
      volume: 'number',
      wakeUpQuery: 'string',
      workflowOverrideParams: 'string',
    };
  }

  validate() {
    if(this.ambientSoundConfig && typeof (this.ambientSoundConfig as any).validate === 'function') {
      (this.ambientSoundConfig as any).validate();
    }
    if(this.asrConfig && typeof (this.asrConfig as any).validate === 'function') {
      (this.asrConfig as any).validate();
    }
    if(this.autoSpeechConfig && typeof (this.autoSpeechConfig as any).validate === 'function') {
      (this.autoSpeechConfig as any).validate();
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
    if(this.vcrConfig && typeof (this.vcrConfig as any).validate === 'function') {
      (this.vcrConfig as any).validate();
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

