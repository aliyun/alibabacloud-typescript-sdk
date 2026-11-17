// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScriptVersionRequestInteractionConfigBargeInConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether barge-in is supported for the closing remark.
   * 
   * @example
   * true
   */
  closingBargeInEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether barge-in is supported during the conversation.
   * 
   * @example
   * true
   */
  globalBargeInEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether barge-in is supported for the opening remark.
   * 
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
   * @remarks
   * The closing statement played when the conversation is ended due to reaching the turn limit.
   * 
   * @example
   * Thank you for taking my call. Have a great day. Goodbye!
   */
  closingStatement?: string;
  /**
   * @remarks
   * The list of custom interception keywords.
   */
  keywords?: string[];
  /**
   * @remarks
   * The trigger type. Valid values:\\
   * - TurnLimit: Maximum interaction turns.\\
   * - IntelligentVoiceAssistant: Intelligent voice assistant.\\
   * - InteractiveVoiceResponse: Extension transfer.\\
   * - KeyWords: Custom interception.
   * 
   * @example
   * TurnLimit
   */
  triggerType?: string;
  /**
   * @remarks
   * The maximum number of interaction turns before hanging up. Valid values: 0 to 100. A value of 0 indicates that the turn limit is disabled.
   * 
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
   * @remarks
   * Specifies whether barge-in is supported during the delay before hanging up.
   * 
   * @example
   * true
   */
  bargeInEnabled?: boolean;
  /**
   * @remarks
   * The delay in seconds before hanging up after the hang-up prompt is played. Valid values: 0 to 5.
   * 
   * @example
   * 1
   */
  delay?: number;
  /**
   * @remarks
   * The special case interception configuration.
   */
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
   * @remarks
   * The action to perform during consecutive silences.
   * 
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
  /**
   * @remarks
   * The list of actions to perform during consecutive silences.
   */
  fallbackControlParamsList?: CreateScriptVersionRequestInteractionConfigSilenceDetectionConfigFallbackControlParamsList[];
  /**
   * @remarks
   * The maximum number of consecutive silence turns before hanging up. This parameter takes effect only when NluEngine is set to PROMPTS.
   * 
   * @example
   * 3
   */
  maxRepeats?: number;
  /**
   * @remarks
   * The silence prompt.
   * 
   * @example
   * - Repeat the content of the previous turn.
   * - Ensure natural context transition
   */
  prompt?: string;
  /**
   * @remarks
   * The silence timeout in milliseconds.\\
   * If the user remains silent beyond this value, the silence timeout prompt is played.\\
   * Valid values: 2000 to 10000.
   * 
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
   * @remarks
   * The prompt for AI-generated transition phrases.
   * 
   * @example
   * Based on the user\\"s latest reply in the conversation record below, generate a short transition phrase to help the agent continue the conversation naturally and smoothly. Requirements:
   * 1. Use colloquial expressions common in customer service scenarios, keeping the tone natural, polite, and neutral..
   */
  aiPhrasePrompt?: string;
  /**
   * @remarks
   * The list of fixed transition phrases.
   */
  fixedPhraseList?: string[];
  /**
   * @remarks
   * The method for generating transition phrases. Valid values:\\
   * - aiGenerated: AI-generated.\\
   * - fixedPhrase: Fixed phrase.
   * 
   * @example
   * aiGenerated
   */
  phraseSource?: string;
  /**
   * @remarks
   * Specifies whether to enable transition phrases.
   * 
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
   * @remarks
   * The background music ID.
   * 
   * @example
   * office-ambience
   */
  backgroundMusicId?: string;
  /**
   * @remarks
   * The barge-in configuration.
   */
  bargeInConfig?: CreateScriptVersionRequestInteractionConfigBargeInConfig;
  /**
   * @remarks
   * The end conversation configuration.
   */
  endConversationConfig?: CreateScriptVersionRequestInteractionConfigEndConversationConfig;
  /**
   * @remarks
   * The delay in milliseconds before playing the initial greeting after the call is connected.
   * 
   * @example
   * 2000
   */
  initialGreetingDelayMilliseconds?: number;
  /**
   * @remarks
   * The silence detection configuration.
   */
  silenceDetectionConfig?: CreateScriptVersionRequestInteractionConfigSilenceDetectionConfig;
  /**
   * @remarks
   * The transition phrase model configuration.
   */
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
  /**
   * @remarks
   * The candidate values for the label.
   */
  candidateValues?: string[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Describes whether the user is satisfied with the service
   */
  description?: string;
  /**
   * @remarks
   * The label name.
   * 
   * @example
   * Satisfaction
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
   * @remarks
   * The prompt JSON.
   * 
   * @example
   * {"prompts":"I am a chatbot."}
   */
  promptsJson?: string;
  /**
   * @remarks
   * The script template ID.
   * 
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
   * @remarks
   * The function service ID. This parameter is required when NluEngine is set to FUNCTION for the current script.
   * 
   * @example
   * 9b752bbb-805a-4d3e-9013-eab5555c3fef
   */
  functionId?: string;
  /**
   * @remarks
   * The function service name. This parameter is required when NluEngine is set to FUNCTION for the current script.
   * 
   * @example
   * my_funciton
   */
  functionName?: string;
  /**
   * @remarks
   * The function trigger name. This parameter is required when NluEngine is set to FUNCTION for the current script.
   * 
   * @example
   * defaultTrigger
   */
  httpTriggerName?: string;
  /**
   * @remarks
   * The function trigger URL. This parameter is required when NluEngine is set to FUNCTION for the current script.
   * 
   * @example
   * http://chat-xxxxx-v-yewiundukb.cn-hangzhou-xxx.run
   */
  httpTriggerUrl?: string;
  /**
   * @remarks
   * The region where the function service resides. This parameter is required when NluEngine is set to FUNCTION for the current script.
   * 
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
   * @remarks
   * The ID of the third-party dialog model configuration.
   * 
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
   * @remarks
   * The AgentKey of the chatbot. This parameter is required when NluEngine is set to BEEBOT for the current script.
   * 
   * @example
   * 1309723684579735_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The dialog agent configuration.
   */
  agentProfile?: CreateScriptVersionRequestScriptProfileAgentProfile;
  /**
   * @remarks
   * The chatbot type. This parameter is required when NluEngine is set to BEEBOT for the current script.
   * 
   * @example
   * LITE
   */
  builderType?: string;
  /**
   * @remarks
   * The chatbot ID. This parameter is required when NluEngine is set to BEEBOT for the current script.
   * 
   * @example
   * chatbot-cn-MQuyjjb666
   */
  chatbotId?: string;
  /**
   * @remarks
   * The Function Compute configuration.
   */
  functionMeta?: CreateScriptVersionRequestScriptProfileFunctionMeta;
  /**
   * @remarks
   * The dialog model. This parameter is required when NluEngine is set to PROMPTS for the current script.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * The associated configuration.
   */
  nluAccessProfile?: CreateScriptVersionRequestScriptProfileNluAccessProfile;
  /**
   * @remarks
   * The dialog model invocation method.
   * 
   * @example
   * MANAGED
   */
  nluAccessType?: string;
  /**
   * @remarks
   * Specifies whether the model is an Omni model.
   * 
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
   * @remarks
   * The ID of the third-party speech configuration. This is required when you use third-party ASR services such as Doubao or iFlytek.
   * 
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
   * @remarks
   * The easily confused character or word.
   * 
   * @example
   * 还钱
   */
  pattern?: string;
  /**
   * @remarks
   * The homophone character or word.
   * 
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
   * @remarks
   * The TTS model.
   * 
   * @example
   * CosyVoice
   */
  model?: string;
  /**
   * @remarks
   * The associated configuration.
   */
  nlsAccessProfile?: CreateScriptVersionRequestSynthesizerConfigNlsAccessProfile;
  /**
   * @remarks
   * The TTS invocation method.
   * 
   * @example
   * MANAGED
   */
  nlsAccessType?: string;
  /**
   * @remarks
   * The TTS engine.
   * 
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  /**
   * @remarks
   * The pitch. Valid values: -500 to 500. Default value: 0.
   * 
   * @example
   * 0
   */
  pitchRate?: number;
  /**
   * @remarks
   * The TTS correction dictionary.
   */
  pronRules?: CreateScriptVersionRequestSynthesizerConfigPronRules[];
  /**
   * @remarks
   * The speech rate. Valid values: -500 to 500. Default value: 0.
   * 
   * @example
   * 0
   */
  speechRate?: number;
  /**
   * @remarks
   * The voice.
   * 
   * @example
   * longanyang
   */
  voice?: string;
  /**
   * @remarks
   * The volume. Valid values: 0 to 100. Default value: 50.
   * 
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
   * @remarks
   * The incorrectly recognized text.
   * 
   * @example
   * 啊里巴巴
   */
  pattern?: string;
  /**
   * @remarks
   * The corrected text.
   * 
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
   * @remarks
   * The ID of the third-party speech configuration. This is required when you use third-party ASR services such as Doubao or iFlytek.
   * 
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
   * @remarks
   * The ASR correction dictionary.
   */
  correctionRules?: CreateScriptVersionRequestTranscriberConfigCorrectionRules[];
  /**
   * @remarks
   * The ID of the custom language model for ASR.
   * 
   * @example
   * 700
   */
  customizationId?: string;
  /**
   * @remarks
   * The silence detection timeout. A sentence break is triggered when the pause exceeds the specified number of milliseconds. This is also known as voice activity detection (VAD).
   * 
   * @example
   * 700
   */
  endSilenceTimeout?: number;
  /**
   * @remarks
   * The ASR model.
   * 
   * @example
   * Paraformer
   */
  model?: string;
  /**
   * @remarks
   * The associated configuration.
   */
  nlsAccessProfile?: CreateScriptVersionRequestTranscriberConfigNlsAccessProfile;
  /**
   * @remarks
   * The ASR invocation method.
   * 
   * @example
   * MANAGED
   */
  nlsAccessType?: string;
  /**
   * @remarks
   * The ASR engine.
   * 
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  /**
   * @remarks
   * The noise threshold. Valid values: -100 to 100. A value closer to -100 indicates a higher probability that noise is recognized as speech. A value closer to 100 indicates a higher probability that speech is recognized as noise.
   * 
   * @example
   * 0
   */
  speechNoiseThreshold?: number;
  /**
   * @remarks
   * The ID of the hot word table. You can obtain the ID from the hot word management page.
   * 
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
   * The instance ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * The interaction configuration.
   */
  interactionConfig?: CreateScriptVersionRequestInteractionConfig;
  /**
   * @remarks
   * The label configurations.
   */
  labelConfigs?: CreateScriptVersionRequestLabelConfigs[];
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b15
   */
  scriptId?: string;
  /**
   * @remarks
   * The dialog capability configuration.
   */
  scriptProfile?: CreateScriptVersionRequestScriptProfile;
  /**
   * @remarks
   * The source version ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b26
   */
  sourceVersionId?: string;
  /**
   * @remarks
   * The TTS configuration.
   */
  synthesizerConfig?: CreateScriptVersionRequestSynthesizerConfig;
  /**
   * @remarks
   * The ASR configuration.
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

