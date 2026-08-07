// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScriptVersionRequestInteractionConfigBargeInConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  closingBargeInEnabled?: boolean;
  /**
   * @example
   * true
   */
  globalBargeInEnabled?: boolean;
  /**
   * @example
   * true
   */
  openingBargeInEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      closingBargeInEnabled: 'ClosingBargeInEnabled',
      globalBargeInEnabled: 'GlobalBargeInEnabled',
      openingBargeInEnabled: 'OpeningBargeInEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      closingBargeInEnabled: 'boolean',
      globalBargeInEnabled: 'boolean',
      openingBargeInEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScriptVersionRequestInteractionConfigEndConversationConfigTriggers extends $dara.Model {
  /**
   * @example
   * 感谢您的接听，祝您生活愉快，再见!
   */
  closingStatement?: string;
  keywords?: string[];
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
      keywords: 'Keywords',
      triggerType: 'TriggerType',
      turnLimit: 'TurnLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      closingStatement: 'string',
      keywords: { 'type': 'array', 'itemType': 'string' },
      triggerType: 'string',
      turnLimit: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
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
   * true
   */
  bargeInEnabled?: boolean;
  /**
   * @example
   * 1
   */
  delay?: number;
  triggers?: CreateScriptVersionRequestInteractionConfigEndConversationConfigTriggers[];
  static names(): { [key: string]: string } {
    return {
      bargeInEnabled: 'BargeInEnabled',
      delay: 'Delay',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bargeInEnabled: 'boolean',
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

export class CreateScriptVersionRequestInteractionConfigSilenceDetectionConfigFallbackControlParamsList extends $dara.Model {
  /**
   * @example
   * HangUp
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScriptVersionRequestInteractionConfigSilenceDetectionConfig extends $dara.Model {
  fallbackControlParamsList?: CreateScriptVersionRequestInteractionConfigSilenceDetectionConfigFallbackControlParamsList[];
  /**
   * @example
   * 3
   */
  maxRepeats?: number;
  /**
   * @example
   * - 复述上一轮对话的内容
   * - 保证上下文自然衔接
   */
  prompt?: string;
  /**
   * @example
   * 5000
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      fallbackControlParamsList: 'FallbackControlParamsList',
      maxRepeats: 'MaxRepeats',
      prompt: 'Prompt',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fallbackControlParamsList: { 'type': 'array', 'itemType': CreateScriptVersionRequestInteractionConfigSilenceDetectionConfigFallbackControlParamsList },
      maxRepeats: 'number',
      prompt: 'string',
      timeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.fallbackControlParamsList)) {
      $dara.Model.validateArray(this.fallbackControlParamsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScriptVersionRequestInteractionConfigTransitionConfig extends $dara.Model {
  /**
   * @example
   * 请根据下面对话记录中用户的最新回复，生成一句简短承接语，用于客服自然、顺畅地衔接对话，要求如下：
   * 1. 使用客服场景常用的口语化表达，保持语气自然、礼貌且中立......
   */
  aiPhrasePrompt?: string;
  fixedPhraseList?: string[];
  /**
   * @example
   * aiGenerated
   */
  phraseSource?: string;
  /**
   * @example
   * true
   */
  transitionSwitch?: boolean;
  static names(): { [key: string]: string } {
    return {
      aiPhrasePrompt: 'AiPhrasePrompt',
      fixedPhraseList: 'FixedPhraseList',
      phraseSource: 'PhraseSource',
      transitionSwitch: 'TransitionSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiPhrasePrompt: 'string',
      fixedPhraseList: { 'type': 'array', 'itemType': 'string' },
      phraseSource: 'string',
      transitionSwitch: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.fixedPhraseList)) {
      $dara.Model.validateArray(this.fixedPhraseList);
    }
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
  bargeInConfig?: CreateScriptVersionRequestInteractionConfigBargeInConfig;
  endConversationConfig?: CreateScriptVersionRequestInteractionConfigEndConversationConfig;
  /**
   * @example
   * 2000
   */
  initialGreetingDelayMilliseconds?: number;
  silenceDetectionConfig?: CreateScriptVersionRequestInteractionConfigSilenceDetectionConfig;
  transitionConfig?: CreateScriptVersionRequestInteractionConfigTransitionConfig;
  static names(): { [key: string]: string } {
    return {
      backgroundMusicId: 'BackgroundMusicId',
      bargeInConfig: 'BargeInConfig',
      endConversationConfig: 'EndConversationConfig',
      initialGreetingDelayMilliseconds: 'InitialGreetingDelayMilliseconds',
      silenceDetectionConfig: 'SilenceDetectionConfig',
      transitionConfig: 'TransitionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundMusicId: 'string',
      bargeInConfig: CreateScriptVersionRequestInteractionConfigBargeInConfig,
      endConversationConfig: CreateScriptVersionRequestInteractionConfigEndConversationConfig,
      initialGreetingDelayMilliseconds: 'number',
      silenceDetectionConfig: CreateScriptVersionRequestInteractionConfigSilenceDetectionConfig,
      transitionConfig: CreateScriptVersionRequestInteractionConfigTransitionConfig,
    };
  }

  validate() {
    if(this.bargeInConfig && typeof (this.bargeInConfig as any).validate === 'function') {
      (this.bargeInConfig as any).validate();
    }
    if(this.endConversationConfig && typeof (this.endConversationConfig as any).validate === 'function') {
      (this.endConversationConfig as any).validate();
    }
    if(this.silenceDetectionConfig && typeof (this.silenceDetectionConfig as any).validate === 'function') {
      (this.silenceDetectionConfig as any).validate();
    }
    if(this.transitionConfig && typeof (this.transitionConfig as any).validate === 'function') {
      (this.transitionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScriptVersionRequestLabelConfigs extends $dara.Model {
  candidateValues?: string[];
  /**
   * @example
   * 描述用户对本次服务是否满意
   */
  description?: string;
  /**
   * @example
   * 满意度
   */
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
  /**
   * @example
   * {\\"prompts\\":\\"我是一个聊天机器人。\\"}
   */
  promptsJson?: string;
  /**
   * @example
   * OUTBOUND_BOT_PROMPTS_DEFAULT
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
   * LITE
   */
  builderType?: string;
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
      builderType: 'BuilderType',
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
      builderType: 'string',
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
  /**
   * @example
   * 还钱
   */
  pattern?: string;
  /**
   * @example
   * 环钱
   */
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

export class CreateScriptVersionRequestTranscriberConfigCorrectionRules extends $dara.Model {
  /**
   * @example
   * 啊里巴巴
   */
  pattern?: string;
  /**
   * @example
   * 阿里巴巴
   */
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
  correctionRules?: CreateScriptVersionRequestTranscriberConfigCorrectionRules[];
  /**
   * @example
   * 700
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
      correctionRules: 'CorrectionRules',
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
      correctionRules: { 'type': 'array', 'itemType': CreateScriptVersionRequestTranscriberConfigCorrectionRules },
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
    if(Array.isArray(this.correctionRules)) {
      $dara.Model.validateArray(this.correctionRules);
    }
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
   * @remarks
   * 实例ID
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * 交互配置
   */
  interactionConfig?: CreateScriptVersionRequestInteractionConfig;
  /**
   * @remarks
   * 草稿版本的标签配置（JSON字符串）
   */
  labelConfigs?: CreateScriptVersionRequestLabelConfigs[];
  /**
   * @remarks
   * 场景ID
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b15
   */
  scriptId?: string;
  /**
   * @remarks
   * 话术配置
   */
  scriptProfile?: CreateScriptVersionRequestScriptProfile;
  /**
   * @remarks
   * 源版本ID
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b26
   */
  sourceVersionId?: string;
  /**
   * @remarks
   * 语音合成配置
   */
  synthesizerConfig?: CreateScriptVersionRequestSynthesizerConfig;
  /**
   * @remarks
   * 语音识别配置
   */
  transcriberConfig?: CreateScriptVersionRequestTranscriberConfig;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      interactionConfig: 'InteractionConfig',
      labelConfigs: 'LabelConfigs',
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
      labelConfigs: { 'type': 'array', 'itemType': CreateScriptVersionRequestLabelConfigs },
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
    if(Array.isArray(this.labelConfigs)) {
      $dara.Model.validateArray(this.labelConfigs);
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

