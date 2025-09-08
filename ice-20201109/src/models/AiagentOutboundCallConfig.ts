// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIAgentOutboundCallConfigAmbientSoundConfig extends $dara.Model {
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

export class AIAgentOutboundCallConfigAsrConfig extends $dara.Model {
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

export class AIAgentOutboundCallConfigInterruptConfig extends $dara.Model {
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

export class AIAgentOutboundCallConfigLlmConfigFunctionMap extends $dara.Model {
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

export class AIAgentOutboundCallConfigLlmConfigLlmHistory extends $dara.Model {
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

export class AIAgentOutboundCallConfigLlmConfig extends $dara.Model {
  bailianAppParams?: string;
  functionMap?: AIAgentOutboundCallConfigLlmConfigFunctionMap[];
  llmCompleteReply?: boolean;
  llmHistory?: AIAgentOutboundCallConfigLlmConfigLlmHistory[];
  llmHistoryLimit?: number;
  llmSystemPrompt?: string;
  openAIExtraQuery?: string;
  outputMaxDelay?: string;
  outputMinLength?: number;
  static names(): { [key: string]: string } {
    return {
      bailianAppParams: 'BailianAppParams',
      functionMap: 'FunctionMap',
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
      functionMap: { 'type': 'array', 'itemType': AIAgentOutboundCallConfigLlmConfigFunctionMap },
      llmCompleteReply: 'boolean',
      llmHistory: { 'type': 'array', 'itemType': AIAgentOutboundCallConfigLlmConfigLlmHistory },
      llmHistoryLimit: 'number',
      llmSystemPrompt: 'string',
      openAIExtraQuery: 'string',
      outputMaxDelay: 'string',
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

export class AIAgentOutboundCallConfigTtsConfigPronunciationRules extends $dara.Model {
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

export class AIAgentOutboundCallConfigTtsConfig extends $dara.Model {
  emotion?: string;
  languageId?: string;
  modelId?: string;
  pronunciationRules?: AIAgentOutboundCallConfigTtsConfigPronunciationRules[];
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
      pronunciationRules: { 'type': 'array', 'itemType': AIAgentOutboundCallConfigTtsConfigPronunciationRules },
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

export class AIAgentOutboundCallConfigTurnDetectionConfig extends $dara.Model {
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

export class AIAgentOutboundCallConfig extends $dara.Model {
  ambientSoundConfig?: AIAgentOutboundCallConfigAmbientSoundConfig;
  asrConfig?: AIAgentOutboundCallConfigAsrConfig;
  enableIntelligentSegment?: boolean;
  greeting?: string;
  greetingDelay?: number;
  interruptConfig?: AIAgentOutboundCallConfigInterruptConfig;
  llmConfig?: AIAgentOutboundCallConfigLlmConfig;
  ttsConfig?: AIAgentOutboundCallConfigTtsConfig;
  turnDetectionConfig?: AIAgentOutboundCallConfigTurnDetectionConfig;
  static names(): { [key: string]: string } {
    return {
      ambientSoundConfig: 'AmbientSoundConfig',
      asrConfig: 'AsrConfig',
      enableIntelligentSegment: 'EnableIntelligentSegment',
      greeting: 'Greeting',
      greetingDelay: 'GreetingDelay',
      interruptConfig: 'InterruptConfig',
      llmConfig: 'LlmConfig',
      ttsConfig: 'TtsConfig',
      turnDetectionConfig: 'TurnDetectionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ambientSoundConfig: AIAgentOutboundCallConfigAmbientSoundConfig,
      asrConfig: AIAgentOutboundCallConfigAsrConfig,
      enableIntelligentSegment: 'boolean',
      greeting: 'string',
      greetingDelay: 'number',
      interruptConfig: AIAgentOutboundCallConfigInterruptConfig,
      llmConfig: AIAgentOutboundCallConfigLlmConfig,
      ttsConfig: AIAgentOutboundCallConfigTtsConfig,
      turnDetectionConfig: AIAgentOutboundCallConfigTurnDetectionConfig,
    };
  }

  validate() {
    if(this.ambientSoundConfig && typeof (this.ambientSoundConfig as any).validate === 'function') {
      (this.ambientSoundConfig as any).validate();
    }
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

