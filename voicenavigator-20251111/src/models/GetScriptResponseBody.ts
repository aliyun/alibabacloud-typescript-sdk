// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScriptResponseBodyDataDraftVersionInteractionConfigEndConversationConfigTriggers extends $dara.Model {
  closingStatement?: string;
  keyWords?: string[];
  /**
   * @example
   * TurnLimit
   */
  triggerType?: string;
  /**
   * @example
   * 20
   */
  turnLimit?: number;
  static names(): { [key: string]: string } {
    return {
      closingStatement: 'ClosingStatement',
      keyWords: 'KeyWords',
      triggerType: 'TriggerType',
      turnLimit: 'TurnLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      closingStatement: 'string',
      keyWords: { 'type': 'array', 'itemType': 'string' },
      triggerType: 'string',
      turnLimit: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.keyWords)) {
      $dara.Model.validateArray(this.keyWords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataDraftVersionInteractionConfigEndConversationConfig extends $dara.Model {
  /**
   * @example
   * 1
   */
  delay?: number;
  triggers?: GetScriptResponseBodyDataDraftVersionInteractionConfigEndConversationConfigTriggers[];
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'number',
      triggers: { 'type': 'array', 'itemType': GetScriptResponseBodyDataDraftVersionInteractionConfigEndConversationConfigTriggers },
    };
  }

  validate() {
    if(Array.isArray(this.triggers)) {
      $dara.Model.validateArray(this.triggers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataDraftVersionInteractionConfigSilenceDetectionConfig extends $dara.Model {
  /**
   * @example
   * 3
   */
  maxRepeats?: number;
  /**
   * @example
   * 5000
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      maxRepeats: 'MaxRepeats',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRepeats: 'number',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataDraftVersionInteractionConfig extends $dara.Model {
  /**
   * @example
   * office-ambience
   */
  backgroundMusicId?: string;
  endConversationConfig?: GetScriptResponseBodyDataDraftVersionInteractionConfigEndConversationConfig;
  /**
   * @example
   * 2000
   */
  initialGreetingDelayMilliseconds?: number;
  silenceDetectionConfig?: GetScriptResponseBodyDataDraftVersionInteractionConfigSilenceDetectionConfig;
  static names(): { [key: string]: string } {
    return {
      backgroundMusicId: 'BackgroundMusicId',
      endConversationConfig: 'EndConversationConfig',
      initialGreetingDelayMilliseconds: 'InitialGreetingDelayMilliseconds',
      silenceDetectionConfig: 'SilenceDetectionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundMusicId: 'string',
      endConversationConfig: GetScriptResponseBodyDataDraftVersionInteractionConfigEndConversationConfig,
      initialGreetingDelayMilliseconds: 'number',
      silenceDetectionConfig: GetScriptResponseBodyDataDraftVersionInteractionConfigSilenceDetectionConfig,
    };
  }

  validate() {
    if(this.endConversationConfig && typeof (this.endConversationConfig as any).validate === 'function') {
      (this.endConversationConfig as any).validate();
    }
    if(this.silenceDetectionConfig && typeof (this.silenceDetectionConfig as any).validate === 'function') {
      (this.silenceDetectionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataDraftVersionLabelConfig extends $dara.Model {
  candidateValues?: string[];
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      candidateValues: 'CandidateValues',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateValues: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.candidateValues)) {
      $dara.Model.validateArray(this.candidateValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataDraftVersionScriptProfileAgentProfile extends $dara.Model {
  promptsJson?: string;
  /**
   * @example
   * CCC_PROMPTS_DEFAULT
   */
  scriptProfileTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      promptsJson: 'PromptsJson',
      scriptProfileTemplateId: 'ScriptProfileTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promptsJson: 'string',
      scriptProfileTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataDraftVersionScriptProfileFunctionMeta extends $dara.Model {
  /**
   * @example
   * 9b752bbb-805a-4d3e-9013-eab5555c3fef
   */
  functionId?: string;
  /**
   * @example
   * my_funciton
   */
  functionName?: string;
  /**
   * @example
   * defaultTrigger
   */
  httpTriggerName?: string;
  /**
   * @example
   * http://chat-xxxxx-v-yewiundukb.cn-hangzhou-xxx.run
   */
  httpTriggerUrl?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      functionId: 'FunctionId',
      functionName: 'FunctionName',
      httpTriggerName: 'HttpTriggerName',
      httpTriggerUrl: 'HttpTriggerUrl',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionId: 'string',
      functionName: 'string',
      httpTriggerName: 'string',
      httpTriggerUrl: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataDraftVersionScriptProfileNluAccessProfile extends $dara.Model {
  /**
   * @example
   * c2c9baae-9351-4c49-a8cb-6f24a83a8718
   */
  accessProfileId?: string;
  static names(): { [key: string]: string } {
    return {
      accessProfileId: 'AccessProfileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessProfileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataDraftVersionScriptProfile extends $dara.Model {
  /**
   * @example
   * 1309723684579735_p_beebot_public
   */
  agentKey?: string;
  agentProfile?: GetScriptResponseBodyDataDraftVersionScriptProfileAgentProfile;
  /**
   * @example
   * chatbot-cn-MQuyjjb666
   */
  chatbotId?: string;
  functionMeta?: GetScriptResponseBodyDataDraftVersionScriptProfileFunctionMeta;
  /**
   * @example
   * qwen-plus
   */
  model?: string;
  nluAccessProfile?: GetScriptResponseBodyDataDraftVersionScriptProfileNluAccessProfile;
  /**
   * @example
   * MANAGED
   */
  nluAccessType?: string;
  /**
   * @example
   * BEEBOT
   */
  nluEngine?: string;
  /**
   * @example
   * true
   */
  omniModel?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      agentProfile: 'AgentProfile',
      chatbotId: 'ChatbotId',
      functionMeta: 'FunctionMeta',
      model: 'Model',
      nluAccessProfile: 'NluAccessProfile',
      nluAccessType: 'NluAccessType',
      nluEngine: 'NluEngine',
      omniModel: 'OmniModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      agentProfile: GetScriptResponseBodyDataDraftVersionScriptProfileAgentProfile,
      chatbotId: 'string',
      functionMeta: GetScriptResponseBodyDataDraftVersionScriptProfileFunctionMeta,
      model: 'string',
      nluAccessProfile: GetScriptResponseBodyDataDraftVersionScriptProfileNluAccessProfile,
      nluAccessType: 'string',
      nluEngine: 'string',
      omniModel: 'boolean',
    };
  }

  validate() {
    if(this.agentProfile && typeof (this.agentProfile as any).validate === 'function') {
      (this.agentProfile as any).validate();
    }
    if(this.functionMeta && typeof (this.functionMeta as any).validate === 'function') {
      (this.functionMeta as any).validate();
    }
    if(this.nluAccessProfile && typeof (this.nluAccessProfile as any).validate === 'function') {
      (this.nluAccessProfile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataDraftVersionSynthesizerConfigNlsAccessProfile extends $dara.Model {
  /**
   * @example
   * 0c4f978a-73bb-4841-bd84-75c0398edd4f
   */
  accessProfileId?: string;
  static names(): { [key: string]: string } {
    return {
      accessProfileId: 'AccessProfileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessProfileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataDraftVersionSynthesizerConfigPronRules extends $dara.Model {
  pattern?: string;
  replacement?: string;
  static names(): { [key: string]: string } {
    return {
      pattern: 'Pattern',
      replacement: 'Replacement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pattern: 'string',
      replacement: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataDraftVersionSynthesizerConfig extends $dara.Model {
  /**
   * @example
   * CosyVoice
   */
  model?: string;
  nlsAccessProfile?: GetScriptResponseBodyDataDraftVersionSynthesizerConfigNlsAccessProfile;
  /**
   * @example
   * MANAGED
   */
  nlsAccessType?: string;
  /**
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  /**
   * @example
   * 0
   */
  pitchRate?: number;
  pronRules?: GetScriptResponseBodyDataDraftVersionSynthesizerConfigPronRules[];
  /**
   * @example
   * 0
   */
  speechRate?: number;
  /**
   * @example
   * longanyang
   */
  voice?: string;
  /**
   * @example
   * 50
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      nlsAccessProfile: 'NlsAccessProfile',
      nlsAccessType: 'NlsAccessType',
      nlsEngine: 'NlsEngine',
      pitchRate: 'PitchRate',
      pronRules: 'PronRules',
      speechRate: 'SpeechRate',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      nlsAccessProfile: GetScriptResponseBodyDataDraftVersionSynthesizerConfigNlsAccessProfile,
      nlsAccessType: 'string',
      nlsEngine: 'string',
      pitchRate: 'number',
      pronRules: { 'type': 'array', 'itemType': GetScriptResponseBodyDataDraftVersionSynthesizerConfigPronRules },
      speechRate: 'number',
      voice: 'string',
      volume: 'number',
    };
  }

  validate() {
    if(this.nlsAccessProfile && typeof (this.nlsAccessProfile as any).validate === 'function') {
      (this.nlsAccessProfile as any).validate();
    }
    if(Array.isArray(this.pronRules)) {
      $dara.Model.validateArray(this.pronRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataDraftVersionTranscriberConfigNlsAccessProfile extends $dara.Model {
  /**
   * @example
   * 0c4f978a-73bb-4841-bd84-75c0398edd4f
   */
  accessProfileId?: string;
  static names(): { [key: string]: string } {
    return {
      accessProfileId: 'AccessProfileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessProfileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataDraftVersionTranscriberConfig extends $dara.Model {
  /**
   * @example
   * 0c4f978a-73bb-4841-bd84-75c0398edd6f
   */
  customizationId?: string;
  /**
   * @example
   * 500
   */
  endSilenceTimeout?: number;
  /**
   * @example
   * Paraformer
   */
  model?: string;
  nlsAccessProfile?: GetScriptResponseBodyDataDraftVersionTranscriberConfigNlsAccessProfile;
  /**
   * @example
   * MANAGED
   */
  nlsAccessType?: string;
  /**
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  /**
   * @example
   * 0
   */
  speechNoiseThreshold?: string;
  /**
   * @example
   * 0c4f978a-73bb-4841-bd84-75c0398edd5f
   */
  vocabularyId?: string;
  static names(): { [key: string]: string } {
    return {
      customizationId: 'CustomizationId',
      endSilenceTimeout: 'EndSilenceTimeout',
      model: 'Model',
      nlsAccessProfile: 'NlsAccessProfile',
      nlsAccessType: 'NlsAccessType',
      nlsEngine: 'NlsEngine',
      speechNoiseThreshold: 'SpeechNoiseThreshold',
      vocabularyId: 'VocabularyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizationId: 'string',
      endSilenceTimeout: 'number',
      model: 'string',
      nlsAccessProfile: GetScriptResponseBodyDataDraftVersionTranscriberConfigNlsAccessProfile,
      nlsAccessType: 'string',
      nlsEngine: 'string',
      speechNoiseThreshold: 'string',
      vocabularyId: 'string',
    };
  }

  validate() {
    if(this.nlsAccessProfile && typeof (this.nlsAccessProfile as any).validate === 'function') {
      (this.nlsAccessProfile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataDraftVersion extends $dara.Model {
  interactionConfig?: GetScriptResponseBodyDataDraftVersionInteractionConfig;
  labelConfig?: GetScriptResponseBodyDataDraftVersionLabelConfig[];
  scriptProfile?: GetScriptResponseBodyDataDraftVersionScriptProfile;
  synthesizerConfig?: GetScriptResponseBodyDataDraftVersionSynthesizerConfig;
  transcriberConfig?: GetScriptResponseBodyDataDraftVersionTranscriberConfig;
  /**
   * @example
   * 0c4f978a-73bb-4841-bd84-75c0398edd4e
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      interactionConfig: 'InteractionConfig',
      labelConfig: 'LabelConfig',
      scriptProfile: 'ScriptProfile',
      synthesizerConfig: 'SynthesizerConfig',
      transcriberConfig: 'TranscriberConfig',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interactionConfig: GetScriptResponseBodyDataDraftVersionInteractionConfig,
      labelConfig: { 'type': 'array', 'itemType': GetScriptResponseBodyDataDraftVersionLabelConfig },
      scriptProfile: GetScriptResponseBodyDataDraftVersionScriptProfile,
      synthesizerConfig: GetScriptResponseBodyDataDraftVersionSynthesizerConfig,
      transcriberConfig: GetScriptResponseBodyDataDraftVersionTranscriberConfig,
      versionId: 'string',
    };
  }

  validate() {
    if(this.interactionConfig && typeof (this.interactionConfig as any).validate === 'function') {
      (this.interactionConfig as any).validate();
    }
    if(Array.isArray(this.labelConfig)) {
      $dara.Model.validateArray(this.labelConfig);
    }
    if(this.scriptProfile && typeof (this.scriptProfile as any).validate === 'function') {
      (this.scriptProfile as any).validate();
    }
    if(this.synthesizerConfig && typeof (this.synthesizerConfig as any).validate === 'function') {
      (this.synthesizerConfig as any).validate();
    }
    if(this.transcriberConfig && typeof (this.transcriberConfig as any).validate === 'function') {
      (this.transcriberConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataPublishedVersionInteractionConfigEndConversationConfigTriggers extends $dara.Model {
  closingStatement?: string;
  keyWords?: string[];
  /**
   * @example
   * TurnLimit
   */
  triggerType?: string;
  /**
   * @example
   * 20
   */
  turnLimit?: number;
  static names(): { [key: string]: string } {
    return {
      closingStatement: 'ClosingStatement',
      keyWords: 'KeyWords',
      triggerType: 'TriggerType',
      turnLimit: 'TurnLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      closingStatement: 'string',
      keyWords: { 'type': 'array', 'itemType': 'string' },
      triggerType: 'string',
      turnLimit: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.keyWords)) {
      $dara.Model.validateArray(this.keyWords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataPublishedVersionInteractionConfigEndConversationConfig extends $dara.Model {
  /**
   * @example
   * 1
   */
  delay?: number;
  triggers?: GetScriptResponseBodyDataPublishedVersionInteractionConfigEndConversationConfigTriggers[];
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'number',
      triggers: { 'type': 'array', 'itemType': GetScriptResponseBodyDataPublishedVersionInteractionConfigEndConversationConfigTriggers },
    };
  }

  validate() {
    if(Array.isArray(this.triggers)) {
      $dara.Model.validateArray(this.triggers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataPublishedVersionInteractionConfigSilenceDetectionConfig extends $dara.Model {
  /**
   * @example
   * 3
   */
  maxRepeats?: number;
  /**
   * @example
   * 5000
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      maxRepeats: 'MaxRepeats',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRepeats: 'number',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataPublishedVersionInteractionConfig extends $dara.Model {
  /**
   * @example
   * office-ambience
   */
  backgroundMusicId?: string;
  endConversationConfig?: GetScriptResponseBodyDataPublishedVersionInteractionConfigEndConversationConfig;
  /**
   * @example
   * 2000
   */
  initialGreetingDelayMilliseconds?: number;
  silenceDetectionConfig?: GetScriptResponseBodyDataPublishedVersionInteractionConfigSilenceDetectionConfig;
  static names(): { [key: string]: string } {
    return {
      backgroundMusicId: 'BackgroundMusicId',
      endConversationConfig: 'EndConversationConfig',
      initialGreetingDelayMilliseconds: 'InitialGreetingDelayMilliseconds',
      silenceDetectionConfig: 'SilenceDetectionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundMusicId: 'string',
      endConversationConfig: GetScriptResponseBodyDataPublishedVersionInteractionConfigEndConversationConfig,
      initialGreetingDelayMilliseconds: 'number',
      silenceDetectionConfig: GetScriptResponseBodyDataPublishedVersionInteractionConfigSilenceDetectionConfig,
    };
  }

  validate() {
    if(this.endConversationConfig && typeof (this.endConversationConfig as any).validate === 'function') {
      (this.endConversationConfig as any).validate();
    }
    if(this.silenceDetectionConfig && typeof (this.silenceDetectionConfig as any).validate === 'function') {
      (this.silenceDetectionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataPublishedVersionLabelConfig extends $dara.Model {
  candidateValues?: string[];
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      candidateValues: 'CandidateValues',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      candidateValues: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.candidateValues)) {
      $dara.Model.validateArray(this.candidateValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataPublishedVersionScriptProfileAgentProfile extends $dara.Model {
  description?: string;
  /**
   * @example
   * test agent
   */
  name?: string;
  promptsJson?: string;
  /**
   * @example
   * CCC_PROMPTS_DEFAULT
   */
  scriptProfileTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      promptsJson: 'PromptsJson',
      scriptProfileTemplateId: 'ScriptProfileTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      promptsJson: 'string',
      scriptProfileTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataPublishedVersionScriptProfileFunctionMeta extends $dara.Model {
  /**
   * @example
   * 9b752bbb-805a-4d3e-9013-eab5555c3fef
   */
  functionId?: string;
  /**
   * @example
   * my_function
   */
  functionName?: string;
  /**
   * @example
   * defaultTrigger
   */
  httpTriggerName?: string;
  /**
   * @example
   * http://chat-xxxxx-v-yewiundukb.cn-hangzhou-xxx.run
   */
  httpTriggerUrl?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      functionId: 'FunctionId',
      functionName: 'FunctionName',
      httpTriggerName: 'HttpTriggerName',
      httpTriggerUrl: 'HttpTriggerUrl',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionId: 'string',
      functionName: 'string',
      httpTriggerName: 'string',
      httpTriggerUrl: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataPublishedVersionScriptProfileNluAccessProfile extends $dara.Model {
  /**
   * @example
   * c2c9baae-9351-4c49-a8cb-6f24a83a8718
   */
  accessProfileId?: string;
  static names(): { [key: string]: string } {
    return {
      accessProfileId: 'AccessProfileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessProfileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataPublishedVersionScriptProfile extends $dara.Model {
  /**
   * @example
   * 1309723684579735_p_beebot_public
   */
  agentKey?: string;
  agentProfile?: GetScriptResponseBodyDataPublishedVersionScriptProfileAgentProfile;
  /**
   * @example
   * chatbot-cn-MQuyjjb666
   */
  chatbotId?: string;
  functionMeta?: GetScriptResponseBodyDataPublishedVersionScriptProfileFunctionMeta;
  /**
   * @example
   * qwen-plus
   */
  model?: string;
  nluAccessProfile?: GetScriptResponseBodyDataPublishedVersionScriptProfileNluAccessProfile;
  /**
   * @example
   * MANAGED
   */
  nluAccessType?: string;
  /**
   * @example
   * BEEBOT
   */
  nluEngine?: string;
  /**
   * @example
   * true
   */
  omniModel?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      agentProfile: 'AgentProfile',
      chatbotId: 'ChatbotId',
      functionMeta: 'FunctionMeta',
      model: 'Model',
      nluAccessProfile: 'NluAccessProfile',
      nluAccessType: 'NluAccessType',
      nluEngine: 'NluEngine',
      omniModel: 'OmniModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      agentProfile: GetScriptResponseBodyDataPublishedVersionScriptProfileAgentProfile,
      chatbotId: 'string',
      functionMeta: GetScriptResponseBodyDataPublishedVersionScriptProfileFunctionMeta,
      model: 'string',
      nluAccessProfile: GetScriptResponseBodyDataPublishedVersionScriptProfileNluAccessProfile,
      nluAccessType: 'string',
      nluEngine: 'string',
      omniModel: 'boolean',
    };
  }

  validate() {
    if(this.agentProfile && typeof (this.agentProfile as any).validate === 'function') {
      (this.agentProfile as any).validate();
    }
    if(this.functionMeta && typeof (this.functionMeta as any).validate === 'function') {
      (this.functionMeta as any).validate();
    }
    if(this.nluAccessProfile && typeof (this.nluAccessProfile as any).validate === 'function') {
      (this.nluAccessProfile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataPublishedVersionSynthesizerConfigNlsAccessProfile extends $dara.Model {
  /**
   * @example
   * c2c9baae-9351-4c49-a8cb-6f24a83a8718
   */
  accessProfileId?: string;
  static names(): { [key: string]: string } {
    return {
      accessProfileId: 'AccessProfileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessProfileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataPublishedVersionSynthesizerConfigPronRules extends $dara.Model {
  pattern?: string;
  replacement?: string;
  static names(): { [key: string]: string } {
    return {
      pattern: 'Pattern',
      replacement: 'Replacement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pattern: 'string',
      replacement: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataPublishedVersionSynthesizerConfig extends $dara.Model {
  /**
   * @example
   * CosyVoice
   */
  model?: string;
  nlsAccessProfile?: GetScriptResponseBodyDataPublishedVersionSynthesizerConfigNlsAccessProfile;
  /**
   * @example
   * MANAGED
   */
  nlsAccessType?: string;
  /**
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  /**
   * @example
   * 0
   */
  pitchRate?: number;
  pronRules?: GetScriptResponseBodyDataPublishedVersionSynthesizerConfigPronRules[];
  /**
   * @example
   * 0
   */
  speechRate?: number;
  /**
   * @example
   * longanyang
   */
  voice?: string;
  /**
   * @example
   * 50
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      nlsAccessProfile: 'NlsAccessProfile',
      nlsAccessType: 'NlsAccessType',
      nlsEngine: 'NlsEngine',
      pitchRate: 'PitchRate',
      pronRules: 'PronRules',
      speechRate: 'SpeechRate',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: 'string',
      nlsAccessProfile: GetScriptResponseBodyDataPublishedVersionSynthesizerConfigNlsAccessProfile,
      nlsAccessType: 'string',
      nlsEngine: 'string',
      pitchRate: 'number',
      pronRules: { 'type': 'array', 'itemType': GetScriptResponseBodyDataPublishedVersionSynthesizerConfigPronRules },
      speechRate: 'number',
      voice: 'string',
      volume: 'number',
    };
  }

  validate() {
    if(this.nlsAccessProfile && typeof (this.nlsAccessProfile as any).validate === 'function') {
      (this.nlsAccessProfile as any).validate();
    }
    if(Array.isArray(this.pronRules)) {
      $dara.Model.validateArray(this.pronRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataPublishedVersionTranscriberConfigNlsAccessProfile extends $dara.Model {
  /**
   * @example
   * c2c9baae-9351-4c49-a8cb-6f24a83a8718
   */
  accessProfileId?: string;
  static names(): { [key: string]: string } {
    return {
      accessProfileId: 'AccessProfileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessProfileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataPublishedVersionTranscriberConfig extends $dara.Model {
  /**
   * @example
   * cd97223f-42f2-4cd9-95af-e734e2fe1fe4
   */
  customizationId?: string;
  /**
   * @example
   * 700
   */
  endSilenceTimeout?: number;
  /**
   * @example
   * Paraformer
   */
  model?: string;
  nlsAccessProfile?: GetScriptResponseBodyDataPublishedVersionTranscriberConfigNlsAccessProfile;
  /**
   * @example
   * MANAGED
   */
  nlsAccessType?: string;
  /**
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  /**
   * @example
   * 0
   */
  speechNoiseThreshold?: string;
  /**
   * @example
   * cd97223f-42f2-4cd9-95af-e734e2fe1fe3
   */
  vocabularyId?: string;
  static names(): { [key: string]: string } {
    return {
      customizationId: 'CustomizationId',
      endSilenceTimeout: 'EndSilenceTimeout',
      model: 'Model',
      nlsAccessProfile: 'NlsAccessProfile',
      nlsAccessType: 'NlsAccessType',
      nlsEngine: 'NlsEngine',
      speechNoiseThreshold: 'SpeechNoiseThreshold',
      vocabularyId: 'VocabularyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizationId: 'string',
      endSilenceTimeout: 'number',
      model: 'string',
      nlsAccessProfile: GetScriptResponseBodyDataPublishedVersionTranscriberConfigNlsAccessProfile,
      nlsAccessType: 'string',
      nlsEngine: 'string',
      speechNoiseThreshold: 'string',
      vocabularyId: 'string',
    };
  }

  validate() {
    if(this.nlsAccessProfile && typeof (this.nlsAccessProfile as any).validate === 'function') {
      (this.nlsAccessProfile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyDataPublishedVersion extends $dara.Model {
  interactionConfig?: GetScriptResponseBodyDataPublishedVersionInteractionConfig;
  labelConfig?: GetScriptResponseBodyDataPublishedVersionLabelConfig[];
  scriptProfile?: GetScriptResponseBodyDataPublishedVersionScriptProfile;
  synthesizerConfig?: GetScriptResponseBodyDataPublishedVersionSynthesizerConfig;
  transcriberConfig?: GetScriptResponseBodyDataPublishedVersionTranscriberConfig;
  /**
   * @example
   * 8b77ff09-6a90-4784-8560-fdc2b860dc68
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      interactionConfig: 'InteractionConfig',
      labelConfig: 'LabelConfig',
      scriptProfile: 'ScriptProfile',
      synthesizerConfig: 'SynthesizerConfig',
      transcriberConfig: 'TranscriberConfig',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interactionConfig: GetScriptResponseBodyDataPublishedVersionInteractionConfig,
      labelConfig: { 'type': 'array', 'itemType': GetScriptResponseBodyDataPublishedVersionLabelConfig },
      scriptProfile: GetScriptResponseBodyDataPublishedVersionScriptProfile,
      synthesizerConfig: GetScriptResponseBodyDataPublishedVersionSynthesizerConfig,
      transcriberConfig: GetScriptResponseBodyDataPublishedVersionTranscriberConfig,
      versionId: 'string',
    };
  }

  validate() {
    if(this.interactionConfig && typeof (this.interactionConfig as any).validate === 'function') {
      (this.interactionConfig as any).validate();
    }
    if(Array.isArray(this.labelConfig)) {
      $dara.Model.validateArray(this.labelConfig);
    }
    if(this.scriptProfile && typeof (this.scriptProfile as any).validate === 'function') {
      (this.scriptProfile as any).validate();
    }
    if(this.synthesizerConfig && typeof (this.synthesizerConfig as any).validate === 'function') {
      (this.synthesizerConfig as any).validate();
    }
    if(this.transcriberConfig && typeof (this.transcriberConfig as any).validate === 'function') {
      (this.transcriberConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBodyData extends $dara.Model {
  /**
   * @example
   * 10
   */
  concurrency?: number;
  /**
   * @example
   * 1773228988000
   */
  createdTime?: number;
  /**
   * @example
   * test script
   */
  description?: string;
  draftVersion?: GetScriptResponseBodyDataDraftVersion;
  name?: string;
  /**
   * @example
   * BEEBOT
   */
  nluEngine?: string;
  publishedVersion?: GetScriptResponseBodyDataPublishedVersion;
  /**
   * @example
   * 64241e64-190c-45d1-af66-06f51c07b090
   */
  scriptId?: string;
  /**
   * @example
   * DRAFT
   */
  status?: string;
  /**
   * @example
   * 1773228988000
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'Concurrency',
      createdTime: 'CreatedTime',
      description: 'Description',
      draftVersion: 'DraftVersion',
      name: 'Name',
      nluEngine: 'NluEngine',
      publishedVersion: 'PublishedVersion',
      scriptId: 'ScriptId',
      status: 'Status',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
      createdTime: 'number',
      description: 'string',
      draftVersion: GetScriptResponseBodyDataDraftVersion,
      name: 'string',
      nluEngine: 'string',
      publishedVersion: GetScriptResponseBodyDataPublishedVersion,
      scriptId: 'string',
      status: 'string',
      updatedTime: 'number',
    };
  }

  validate() {
    if(this.draftVersion && typeof (this.draftVersion as any).validate === 'function') {
      (this.draftVersion as any).validate();
    }
    if(this.publishedVersion && typeof (this.publishedVersion as any).validate === 'function') {
      (this.publishedVersion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetScriptResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Instance af81a389-91f0-4157-8d82-720edd02b66a
   *  does not exist.
   */
  message?: string;
  params?: string[];
  /**
   * @example
   * 51E08AA9-8D1F-55F8-84A3-40635E2F0806
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetScriptResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

