// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScriptVersionRequestInteractionConfigEndConversationConfigTriggers extends $dara.Model {
  /**
   * @remarks
   * The closing statement played when the turn limit is reached and the hang-up action is executed.
   * 
   * @example
   * Thank you for your time. Have a nice day. Goodbye!
   */
  closingStatement?: string;
  /**
   * @remarks
   * The list of custom interception keywords.
   */
  keyWords?: string[];
  /**
   * @remarks
   * Valid values:\\
   * - TurnLimit: Maximum interaction turn check.\\
   * - IntelligentVoiceAssistant: Voice assistant.\\
   * - InteractiveVoiceResponse: Extension transfer.\\
   * - KeyWords: Custom interception.
   * 
   * @example
   * TurnLimit
   */
  triggerType?: string;
  /**
   * @remarks
   * The maximum number of interaction turns before the hang-up action is executed. Valid values: 0 to 100. A value of 0 indicates that the turn-limit hang-up feature is disabled.
   * 
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
   * @remarks
   * The number of seconds to wait after the hang-up script finishes playing before executing the hang-up action. Valid values: 0 to 5.
   * 
   * @example
   * 1
   */
  delay?: number;
  /**
   * @remarks
   * The special case interception rules.
   */
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
   * @remarks
   * The number of consecutive silence turns before the hang-up action is executed.\\
   * This parameter takes effect when NluEngine is set to PROMPTS for the current scenario.
   * 
   * @example
   * 3
   */
  maxRepeats?: number;
  /**
   * @remarks
   * The silence timeout period, in milliseconds.\\
   * When the user remains silent for longer than the specified value, the silence timeout script is played.\\
   * Valid values: 2000 to 10000.
   * 
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
   * @remarks
   * The background music ID.
   * 
   * @example
   * office-ambience
   */
  backgroundMusicId?: string;
  /**
   * @remarks
   * The hang-up configuration.
   */
  endConversationConfig?: CreateScriptVersionRequestInteractionConfigEndConversationConfig;
  /**
   * @remarks
   * The delay before playing the greeting after the call is connected. Unit: milliseconds.
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
  /**
   * @remarks
   * The list of candidate values for the label.
   */
  candidateValues?: string[];
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * Whether the user agrees to repay before the repayment deadline
   */
  description?: string;
  /**
   * @remarks
   * The label name.
   * 
   * @example
   * Agree to repay
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
   * The HTTP trigger name.\\
   * This parameter is required when NluEngine is set to FUNCTION for the current scenario.
   * 
   * @example
   * defaultTrigger
   */
  httpTriggerName?: string;
  /**
   * @remarks
   * The HTTP trigger URL.\\
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

export class CreateScriptVersionRequestScriptProfileNluAccessProfile extends $dara.Model {
  /**
   * @remarks
   * The third-party conversation model configuration ID.
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
   * The AgentKey of the chatbot.\\
   * This parameter is required when NluEngine is set to BEEBOT for the current scenario.
   * 
   * @example
   * 1309723684579735_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The conversation agent configuration.
   */
  agentProfile?: CreateScriptVersionRequestScriptProfileAgentProfile;
  /**
   * @remarks
   * The chatbot ID.\\
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
  functionMeta?: CreateScriptVersionRequestScriptProfileFunctionMeta;
  /**
   * @remarks
   * The conversation model.\\
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
  nluAccessProfile?: CreateScriptVersionRequestScriptProfileNluAccessProfile;
  /**
   * @remarks
   * The conversation model invocation method.
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
   * @remarks
   * The third-party voice configuration ID. This parameter is required when you use a third-party ASR service such as Doubao or iFLYTEK.
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
   * The commonly mispronounced word.
   * 
   * @example
   * 还钱
   */
  pattern?: string;
  /**
   * @remarks
   * The homophone replacement word.
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
   * The TTS pronunciation correction list.
   */
  pronRules?: CreateScriptVersionRequestSynthesizerConfigPronRules[];
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
   * The voice speaker.
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

export class CreateScriptVersionRequestTranscriberConfigNlsAccessProfile extends $dara.Model {
  /**
   * @remarks
   * The third-party voice configuration ID. This parameter is required when you use a third-party ASR service such as Doubao or iFLYTEK.
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
  correctionRules?: CreateScriptVersionRequestTranscriberConfigCorrectionRules[];
  /**
   * @remarks
   * The custom language model ID for ASR.
   * 
   * @example
   * cd97223f-42f2-4cd9-95af-e734e2fe1fe4
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
   * abb4aa26-3a8e-43dd-82f8-0c3898c9c67f
   */
  instanceId?: string;
  /**
   * @remarks
   * The interaction configuration.
   */
  interactionConfig?: CreateScriptVersionRequestInteractionConfig;
  /**
   * @remarks
   * The custom label configuration.
   */
  labelConfig?: CreateScriptVersionRequestLabelConfig[];
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * 64241e64-190c-45d1-af66-06f51c07b090
   */
  scriptId?: string;
  /**
   * @remarks
   * The conversation capability configuration.
   */
  scriptProfile?: CreateScriptVersionRequestScriptProfile;
  /**
   * @example
   * d7b8a210-1f2d-4c5b-8a63-01e4f3b7c9d2
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

