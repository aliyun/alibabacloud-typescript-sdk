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
   * The statement to play when the turn limit is reached and the hang-up action is executed.
   * 
   * @example
   * Thank you for your time. Have a nice day. Goodbye!
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
   * - TurnLimit: maximum interaction turn limit check.
   * - IntelligentVoiceAssistant: voice assistant detection.
   * - InteractiveVoiceResponse: extension number transfer.
   * - KeyWords: custom keyword interception.
   * 
   * @example
   * TurnLimit
   */
  triggerType?: string;
  /**
   * @remarks
   * Executes the hang-up action when the number of interaction turns exceeds x. Valid values: 0 to 100. A value of 0 indicates that the turn-limit hang-up feature is disabled.
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
   * The number of seconds to wait after the hang-up statement finishes playing before executing the hang-up action. Valid values: 0 to 5.
   * 
   * @example
   * 1
   */
  delay?: number;
  /**
   * @remarks
   * The special case interception rules.
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
   * The number of consecutive silence rounds before hanging up. This parameter takes effect only when NluEngine is set to PROMPTS.
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
   * - Ensure natural context transition
   */
  prompt?: string;
  /**
   * @remarks
   * The silence timeout period, in milliseconds. When the user remains silent for longer than the specified value, the silence timeout script is played. Valid values: 2000 to 10000.
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
   * Based on the user\\"s latest reply in the following conversation record, generate a brief transition phrase for the customer service agent to naturally and smoothly continue the conversation. Requirements are as follows:
   * 1. Use colloquial expressions common in customer service scenarios, keeping the tone natural, polite, and neutral.....
   */
  aiPhrasePrompt?: string;
  /**
   * @remarks
   * The list of fixed transition phrases.
   */
  fixedPhraseList?: string[];
  /**
   * @remarks
   * The method for generating transition phrases. Valid values:
   * - aiGenerated: model-generated.
   * - fixedPhrase: fixed phrases.
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
   * The delay before playing the initial greeting after the call is connected.\\
   * Unit: milliseconds.
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
   * The function service ID.\\
   * This parameter is required when NluEngine is set to FUNCTION for the current scenario.
   * 
   * @example
   * 9b752bbb-805a-4d3e-9013-eab5555c3fef
   */
  functionId?: string;
  /**
   * @remarks
   * The function service name.\\
   * This parameter is required when NluEngine is set to FUNCTION for the current scenario.
   * 
   * @example
   * my_funciton
   */
  functionName?: string;
  /**
   * @remarks
   * The function trigger name.\\
   * This parameter is required when NluEngine is set to FUNCTION for the current scenario.
   * 
   * @example
   * defaultTrigger
   */
  httpTriggerName?: string;
  /**
   * @remarks
   * The function trigger URL.\\
   * This parameter is required when NluEngine is set to FUNCTION for the current scenario.
   * 
   * @example
   * http://chat-xxxxx-v-yewiundukb.cn-hangzhou-xxx.run
   */
  httpTriggerUrl?: string;
  /**
   * @remarks
   * The region where the function service resides.\\
   * This parameter is required when NluEngine is set to FUNCTION for the current scenario.
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
   * The AgentKey of the dialogue robot.\\
   * This parameter is required when NluEngine is set to BEEBOT for the current scenario.
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
   * The dialogue robot type.\\
   * This parameter is required when NluEngine is set to BEEBOT for the current scenario.
   * 
   * @example
   * LITE
   */
  builderType?: string;
  /**
   * @remarks
   * The dialogue robot ID.\\
   * This parameter is required when NluEngine is set to BEEBOT for the current scenario.
   * 
   * @example
   * chatbot-cn-MQuyjjb666
   */
  chatbotId?: string;
  /**
   * @remarks
   * The Function Compute configuration.
   */
  functionMeta?: UpdateScriptVersionRequestScriptProfileFunctionMeta;
  /**
   * @remarks
   * The dialogue model.\\
   * This parameter is required when NluEngine is set to PROMPTS for the current scenario.
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
   * The third-party speech configuration ID. This parameter is required when using third-party ASR services such as Doubao or iFLYTEK.
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
   * The commonly mispronounced word or phrase.
   * 
   * @example
   * 还钱
   */
  pattern?: string;
  /**
   * @remarks
   * The homophonic word or phrase for correct pronunciation.
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
   * The pitch rate.\\
   * Valid values: -500 to 500.\\
   * Default value: 0.
   * 
   * @example
   * 0
   */
  pitchRate?: number;
  /**
   * @remarks
   * The TTS pronunciation correction dictionary.
   */
  pronRules?: UpdateScriptVersionRequestSynthesizerConfigPronRules[];
  /**
   * @remarks
   * The speech rate.\\
   * Valid values: -500 to 500.\\
   * Default value: 0.
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
   * The volume.\\
   * Valid values: 0 to 100.\\
   * Default value: 50.
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

export class UpdateScriptVersionRequestTranscriberConfigNlsAccessProfile extends $dara.Model {
  /**
   * @remarks
   * The third-party speech configuration ID. This parameter is required when using third-party ASR services such as Doubao or iFLYTEK.
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
   * The silence detection threshold. When the silence interval between speech segments exceeds x milliseconds, sentence segmentation is triggered (Voice Activity Detection, or VAD).
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
   * A value closer to -100 increases the probability that noise is classified as speech.
   * 
   * A value closer to +100 increases the probability that speech is classified as noise.
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
   * The Text-to-Speech (TTS) configuration.
   */
  synthesizerConfig?: UpdateScriptVersionRequestSynthesizerConfig;
  /**
   * @remarks
   * The Automatic Speech Recognition (ASR) configuration.
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

