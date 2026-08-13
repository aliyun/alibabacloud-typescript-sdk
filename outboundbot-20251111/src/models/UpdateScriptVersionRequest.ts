// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScriptVersionRequestInteractionConfigBargeInConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether barge-in is supported during the closing statement.
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
   * Specifies whether barge-in is supported during the opening greeting.
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

export class UpdateScriptVersionRequestInteractionConfigEndConversationConfigTriggers extends $dara.Model {
  /**
   * @remarks
   * The closing script to play when the turn limit is reached and hang-up is executed.
   * 
   * @example
   * Thank you for answering the call. Have a nice day. Goodbye!
   */
  closingStatement?: string;
  /**
   * @remarks
   * The list of custom interception keywords.
   */
  keywords?: string[];
  /**
   * @remarks
   * Valid values:
   * 
   * - TurnLimit: maximum interaction turn limit check.
   * 
   * @example
   * TurnLimit
   */
  triggerType?: string;
  /**
   * @remarks
   * The maximum number of interaction turns before executing hang-up. Valid values: 0 to 100. A value of 0 indicates that the turn-limit hang-up is not enabled.
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

export class UpdateScriptVersionRequestInteractionConfigEndConversationConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether barge-in is supported during the delayed hang-up waiting period.
   * 
   * @example
   * true
   */
  bargeInEnabled?: boolean;
  /**
   * @remarks
   * The number of seconds to wait after the hang-up script finishes playing before executing the hang-up action. Valid values: 0 to 5.
   * 
   * @example
   * 1
   */
  delay?: number;
  /**
   * @remarks
   * The special condition interception configuration.
   */
  triggers?: UpdateScriptVersionRequestInteractionConfigEndConversationConfigTriggers[];
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
      triggers: { 'type': 'array', 'itemType': UpdateScriptVersionRequestInteractionConfigEndConversationConfigTriggers },
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

export class UpdateScriptVersionRequestInteractionConfigSilenceDetectionConfigFallbackControlParamsList extends $dara.Model {
  /**
   * @remarks
   * The action to perform during consecutive silence.
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

export class UpdateScriptVersionRequestInteractionConfigSilenceDetectionConfig extends $dara.Model {
  /**
   * @remarks
   * The list of actions to perform during consecutive silence.
   */
  fallbackControlParamsList?: UpdateScriptVersionRequestInteractionConfigSilenceDetectionConfigFallbackControlParamsList[];
  /**
   * @remarks
   * The number of consecutive silence rounds before hanging up.
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
   * - Repeat the content of the previous conversation round
   */
  prompt?: string;
  /**
   * @remarks
   * The silence timeout period, in milliseconds. When the user remains silent for longer than the specified value, the silence timeout prompt is played. Valid range: 2000 to 10000.
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
      fallbackControlParamsList: { 'type': 'array', 'itemType': UpdateScriptVersionRequestInteractionConfigSilenceDetectionConfigFallbackControlParamsList },
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

export class UpdateScriptVersionRequestInteractionConfigTransitionConfig extends $dara.Model {
  /**
   * @remarks
   * The prompt for model-generated transition phrases.
   * 
   * @example
   * Based on the user\\"s latest reply in the conversation history below, generate a brief transitional phrase for the customer service agent to naturally and smoothly connect the conversation. Requirements are as follows:
   * 1. Use colloquial expressions common in customer service scenarios, maintaining a natural, polite, and neutral tone......
   */
  aiPhrasePrompt?: string;
  /**
   * @remarks
   * The list of fixed transition phrases.
   */
  fixedPhraseList?: string[];
  /**
   * @remarks
   * The method for generating transition phrases.
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

export class UpdateScriptVersionRequestInteractionConfig extends $dara.Model {
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
  bargeInConfig?: UpdateScriptVersionRequestInteractionConfigBargeInConfig;
  /**
   * @remarks
   * The hang-up configuration.
   */
  endConversationConfig?: UpdateScriptVersionRequestInteractionConfigEndConversationConfig;
  /**
   * @remarks
   * The delay in milliseconds before playing audio after the call is connected.
   * 
   * @example
   * 2000
   */
  initialGreetingDelayMilliseconds?: number;
  /**
   * @remarks
   * The silence detection configuration.
   */
  silenceDetectionConfig?: UpdateScriptVersionRequestInteractionConfigSilenceDetectionConfig;
  /**
   * @remarks
   * The transition phrase model configuration.
   */
  transitionConfig?: UpdateScriptVersionRequestInteractionConfigTransitionConfig;
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
      bargeInConfig: UpdateScriptVersionRequestInteractionConfigBargeInConfig,
      endConversationConfig: UpdateScriptVersionRequestInteractionConfigEndConversationConfig,
      initialGreetingDelayMilliseconds: 'number',
      silenceDetectionConfig: UpdateScriptVersionRequestInteractionConfigSilenceDetectionConfig,
      transitionConfig: UpdateScriptVersionRequestInteractionConfigTransitionConfig,
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

export class UpdateScriptVersionRequestLabelConfigs extends $dara.Model {
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
   * Describes whether the user is satisfied with this service
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

export class UpdateScriptVersionRequestScriptProfileAgentProfile extends $dara.Model {
  /**
   * @remarks
   * The prompt in JSON format.
   * 
   * @example
   * {\\"prompts\\":\\"I am a chatbot.\\"}
   */
  promptsJson?: string;
  /**
   * @remarks
   * The scenario template ID.
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

export class UpdateScriptVersionRequestScriptProfileFunctionMeta extends $dara.Model {
  /**
   * @remarks
   * The function service ID.
   * 
   * @example
   * 9b752bbb-805a-4d3e-9013-eab5555c3fef
   */
  functionId?: string;
  /**
   * @remarks
   * The function service name.
   * 
   * @example
   * my_funciton
   */
  functionName?: string;
  /**
   * @remarks
   * The function trigger name.
   * 
   * @example
   * defaultTrigger
   */
  httpTriggerName?: string;
  /**
   * @remarks
   * The function trigger URL.
   * 
   * @example
   * http://chat-xxxxx-v-yewiundukb.cn-hangzhou-xxx.run
   */
  httpTriggerUrl?: string;
  /**
   * @remarks
   * The region where the function service resides.
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

export class UpdateScriptVersionRequestScriptProfileNluAccessProfile extends $dara.Model {
  /**
   * @remarks
   * The third-party dialogue model configuration ID.
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

export class UpdateScriptVersionRequestScriptProfile extends $dara.Model {
  /**
   * @remarks
   * The chatbot AgentKey.
   * 
   * @example
   * 1309723684579735_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The dialogue agent configuration.
   */
  agentProfile?: UpdateScriptVersionRequestScriptProfileAgentProfile;
  /**
   * @remarks
   * The chatbot type.
   * 
   * @example
   * LITE
   */
  builderType?: string;
  /**
   * @remarks
   * The chatbot ID.
   * 
   * @example
   * chatbot-cn-MQuyjjb666
   */
  chatbotId?: string;
  /**
   * @remarks
   * The function compute configuration.
   */
  functionMeta?: UpdateScriptVersionRequestScriptProfileFunctionMeta;
  /**
   * @remarks
   * The dialogue model.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * The associated configuration.
   */
  nluAccessProfile?: UpdateScriptVersionRequestScriptProfileNluAccessProfile;
  /**
   * @remarks
   * The dialogue model invocation method.
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
      agentProfile: UpdateScriptVersionRequestScriptProfileAgentProfile,
      builderType: 'string',
      chatbotId: 'string',
      functionMeta: UpdateScriptVersionRequestScriptProfileFunctionMeta,
      model: 'string',
      nluAccessProfile: UpdateScriptVersionRequestScriptProfileNluAccessProfile,
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

export class UpdateScriptVersionRequestSynthesizerConfigNlsAccessProfile extends $dara.Model {
  /**
   * @remarks
   * The third-party speech configuration ID. This parameter is required when you use a third-party ASR service such as Doubao or iFLYTEK.
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

export class UpdateScriptVersionRequestSynthesizerConfigPronRules extends $dara.Model {
  /**
   * @remarks
   * The easily mispronounced word or phrase.
   * 
   * @example
   * 还钱
   */
  pattern?: string;
  /**
   * @remarks
   * The homophonic word or phrase.
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

export class UpdateScriptVersionRequestSynthesizerConfig extends $dara.Model {
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
  nlsAccessProfile?: UpdateScriptVersionRequestSynthesizerConfigNlsAccessProfile;
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
   * The pitch rate.
   * 
   * @example
   * 0
   */
  pitchRate?: number;
  /**
   * @remarks
   * The TTS correction dictionary.
   */
  pronRules?: UpdateScriptVersionRequestSynthesizerConfigPronRules[];
  /**
   * @remarks
   * The speech rate.
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
   * The volume.
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
      nlsAccessProfile: UpdateScriptVersionRequestSynthesizerConfigNlsAccessProfile,
      nlsAccessType: 'string',
      nlsEngine: 'string',
      pitchRate: 'number',
      pronRules: { 'type': 'array', 'itemType': UpdateScriptVersionRequestSynthesizerConfigPronRules },
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

export class UpdateScriptVersionRequestTranscriberConfigCorrectionRules extends $dara.Model {
  /**
   * @remarks
   * The incorrectly recognized text.
   * 
   * @example
   * Aliabba
   */
  pattern?: string;
  /**
   * @remarks
   * The corrected text.
   * 
   * @example
   * Alibaba
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

export class UpdateScriptVersionRequestTranscriberConfigNlsAccessProfile extends $dara.Model {
  /**
   * @remarks
   * The third-party speech configuration ID. This parameter is required when you use a third-party ASR service such as Doubao or iFLYTEK.
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

export class UpdateScriptVersionRequestTranscriberConfig extends $dara.Model {
  /**
   * @remarks
   * The ASR correction dictionary.
   */
  correctionRules?: UpdateScriptVersionRequestTranscriberConfigCorrectionRules[];
  /**
   * @remarks
   * The custom language model ID for ASR.
   * 
   * @example
   * cd97223f-42f2-4cd9-95af-e734e2fe1472
   */
  customizationId?: string;
  /**
   * @remarks
   * The silence detection threshold. Sentence segmentation is triggered when the speaking interval exceeds x milliseconds, also known as Voice Activity Detection (VAD).
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
  nlsAccessProfile?: UpdateScriptVersionRequestTranscriberConfigNlsAccessProfile;
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
   * The noise threshold. Valid values: -100 to 100.
   * 
   * A value closer to -100 increases the probability that noise is recognized as speech.
   * 
   * A value closer to +100 increases the probability that speech is recognized as noise.
   * 
   * @example
   * 0
   */
  speechNoiseThreshold?: number;
  /**
   * @remarks
   * The hot word list ID. You can obtain this ID from the hot word management page.
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
      correctionRules: { 'type': 'array', 'itemType': UpdateScriptVersionRequestTranscriberConfigCorrectionRules },
      customizationId: 'string',
      endSilenceTimeout: 'number',
      model: 'string',
      nlsAccessProfile: UpdateScriptVersionRequestTranscriberConfigNlsAccessProfile,
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

export class UpdateScriptVersionRequest extends $dara.Model {
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
  interactionConfig?: UpdateScriptVersionRequestInteractionConfig;
  /**
   * @remarks
   * The label configurations.
   */
  labelConfigs?: UpdateScriptVersionRequestLabelConfigs[];
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b15
   */
  scriptId?: string;
  /**
   * @remarks
   * The dialogue capability configuration.
   */
  scriptProfile?: UpdateScriptVersionRequestScriptProfile;
  /**
   * @remarks
   * The TTS configuration.
   */
  synthesizerConfig?: UpdateScriptVersionRequestSynthesizerConfig;
  /**
   * @remarks
   * The ASR configuration.
   */
  transcriberConfig?: UpdateScriptVersionRequestTranscriberConfig;
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b26
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      interactionConfig: 'InteractionConfig',
      labelConfigs: 'LabelConfigs',
      scriptId: 'ScriptId',
      scriptProfile: 'ScriptProfile',
      synthesizerConfig: 'SynthesizerConfig',
      transcriberConfig: 'TranscriberConfig',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      interactionConfig: UpdateScriptVersionRequestInteractionConfig,
      labelConfigs: { 'type': 'array', 'itemType': UpdateScriptVersionRequestLabelConfigs },
      scriptId: 'string',
      scriptProfile: UpdateScriptVersionRequestScriptProfile,
      synthesizerConfig: UpdateScriptVersionRequestSynthesizerConfig,
      transcriberConfig: UpdateScriptVersionRequestTranscriberConfig,
      versionId: 'string',
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

