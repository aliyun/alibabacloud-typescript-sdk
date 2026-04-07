// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScriptVersionRequestInteractionConfigEndConversationConfigTriggers extends $dara.Model {
  /**
   * @example
   * 感谢您的接听，祝您生活愉快，再见!
   */
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

export class CreateScriptVersionRequestInteractionConfigEndConversationConfig extends $dara.Model {
  /**
   * @example
   * 1
   */
  delay?: number;
  triggers?: CreateScriptVersionRequestInteractionConfigEndConversationConfigTriggers[];
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'number',
      triggers: { 'type': 'array', 'itemType': CreateScriptVersionRequestInteractionConfigEndConversationConfigTriggers },
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

export class CreateScriptVersionRequestInteractionConfigSilenceDetectionConfig extends $dara.Model {
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

export class CreateScriptVersionRequestInteractionConfig extends $dara.Model {
  /**
   * @example
   * office-ambience
   */
  backgroundMusicId?: string;
  endConversationConfig?: CreateScriptVersionRequestInteractionConfigEndConversationConfig;
  /**
   * @example
   * 2000
   */
  initialGreetingDelayMilliseconds?: number;
  silenceDetectionConfig?: CreateScriptVersionRequestInteractionConfigSilenceDetectionConfig;
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
      endConversationConfig: CreateScriptVersionRequestInteractionConfigEndConversationConfig,
      initialGreetingDelayMilliseconds: 'number',
      silenceDetectionConfig: CreateScriptVersionRequestInteractionConfigSilenceDetectionConfig,
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

export class CreateScriptVersionRequestLabelConfig extends $dara.Model {
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

export class CreateScriptVersionRequestScriptProfileAgentProfile extends $dara.Model {
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

export class CreateScriptVersionRequestScriptProfileFunctionMeta extends $dara.Model {
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

export class CreateScriptVersionRequestScriptProfileNluAccessProfile extends $dara.Model {
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

export class CreateScriptVersionRequestScriptProfile extends $dara.Model {
  /**
   * @example
   * 1309723684579735_p_beebot_public
   */
  agentKey?: string;
  agentProfile?: CreateScriptVersionRequestScriptProfileAgentProfile;
  /**
   * @example
   * chatbot-cn-MQuyjjb666
   */
  chatbotId?: string;
  functionMeta?: CreateScriptVersionRequestScriptProfileFunctionMeta;
  /**
   * @example
   * qwen-plus
   */
  model?: string;
  nluAccessProfile?: CreateScriptVersionRequestScriptProfileNluAccessProfile;
  /**
   * @example
   * MANAGED
   */
  nluAccessType?: string;
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
      omniModel: 'OmniModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      agentProfile: CreateScriptVersionRequestScriptProfileAgentProfile,
      chatbotId: 'string',
      functionMeta: CreateScriptVersionRequestScriptProfileFunctionMeta,
      model: 'string',
      nluAccessProfile: CreateScriptVersionRequestScriptProfileNluAccessProfile,
      nluAccessType: 'string',
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

export class CreateScriptVersionRequestSynthesizerConfigNlsAccessProfile extends $dara.Model {
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

export class CreateScriptVersionRequestSynthesizerConfigPronRules extends $dara.Model {
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

export class CreateScriptVersionRequestSynthesizerConfig extends $dara.Model {
  /**
   * @example
   * CosyVoice
   */
  model?: string;
  nlsAccessProfile?: CreateScriptVersionRequestSynthesizerConfigNlsAccessProfile;
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
  pronRules?: CreateScriptVersionRequestSynthesizerConfigPronRules[];
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
      nlsAccessProfile: CreateScriptVersionRequestSynthesizerConfigNlsAccessProfile,
      nlsAccessType: 'string',
      nlsEngine: 'string',
      pitchRate: 'number',
      pronRules: { 'type': 'array', 'itemType': CreateScriptVersionRequestSynthesizerConfigPronRules },
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

export class CreateScriptVersionRequestTranscriberConfigNlsAccessProfile extends $dara.Model {
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

export class CreateScriptVersionRequestTranscriberConfig extends $dara.Model {
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
  nlsAccessProfile?: CreateScriptVersionRequestTranscriberConfigNlsAccessProfile;
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
  speechNoiseThreshold?: number;
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
      nlsAccessProfile: CreateScriptVersionRequestTranscriberConfigNlsAccessProfile,
      nlsAccessType: 'string',
      nlsEngine: 'string',
      speechNoiseThreshold: 'number',
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

export class CreateScriptVersionRequest extends $dara.Model {
  /**
   * @example
   * abb4aa26-3a8e-43dd-82f8-0c3898c9c67f
   */
  instanceId?: string;
  interactionConfig?: CreateScriptVersionRequestInteractionConfig;
  labelConfig?: CreateScriptVersionRequestLabelConfig[];
  /**
   * @example
   * 64241e64-190c-45d1-af66-06f51c07b090
   */
  scriptId?: string;
  scriptProfile?: CreateScriptVersionRequestScriptProfile;
  sourceVersionId?: string;
  synthesizerConfig?: CreateScriptVersionRequestSynthesizerConfig;
  transcriberConfig?: CreateScriptVersionRequestTranscriberConfig;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      interactionConfig: 'InteractionConfig',
      labelConfig: 'LabelConfig',
      scriptId: 'ScriptId',
      scriptProfile: 'ScriptProfile',
      sourceVersionId: 'SourceVersionId',
      synthesizerConfig: 'SynthesizerConfig',
      transcriberConfig: 'TranscriberConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      interactionConfig: CreateScriptVersionRequestInteractionConfig,
      labelConfig: { 'type': 'array', 'itemType': CreateScriptVersionRequestLabelConfig },
      scriptId: 'string',
      scriptProfile: CreateScriptVersionRequestScriptProfile,
      sourceVersionId: 'string',
      synthesizerConfig: CreateScriptVersionRequestSynthesizerConfig,
      transcriberConfig: CreateScriptVersionRequestTranscriberConfig,
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

