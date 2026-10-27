// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScriptResponseBodyDataDraftVersionInteractionConfigEndConversationConfigTriggers extends $dara.Model {
  /**
   * @remarks
   * The message to play when hanging up after reaching the maximum number of rounds.
   * 
   * @example
   * 感谢您的接听，祝您生活愉快，再见!
   */
  closingStatement?: string;
  /**
   * @remarks
   * List of custom interception keywords
   */
  keyWords?: string[];
  /**
   * @remarks
   * TurnLimit: Maximum interaction rounds check. IntelligentVoiceAssistant: Voice assistant. InteractiveVoiceResponse: Extension transfer. KeyWords: Custom interception
   * 
   * @example
   * TurnLimit
   */
  triggerType?: string;
  /**
   * @remarks
   * Hangs up when the number of interaction rounds exceeds x. The range is 0 to 100. A value of 0 indicates that the hang-up feature for exceeding the round limit is disabled.
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

export class GetScriptResponseBodyDataDraftVersionInteractionConfigEndConversationConfig extends $dara.Model {
  /**
   * @remarks
   * The hang-up action is executed x seconds after the hang-up message is played. The range is 0 to 5.
   * 
   * @example
   * 1
   */
  delay?: number;
  /**
   * @remarks
   * List of special case interceptions
   */
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
   * @remarks
   * Hang up after consecutive rounds of silence. This takes effect when NluEngine is set to PROMPTS for the current scenario.
   * 
   * @example
   * 3
   */
  maxRepeats?: number;
  /**
   * @remarks
   * Silence timeout period in milliseconds. If the user remains silent for longer than the specified value, a silence timeout message is played. The range is 2000 to 10000.
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

export class GetScriptResponseBodyDataDraftVersionInteractionConfig extends $dara.Model {
  /**
   * @remarks
   * Background music ID
   * 
   * @example
   * office-ambience
   */
  backgroundMusicId?: string;
  /**
   * @remarks
   * Hang-up configuration
   */
  endConversationConfig?: GetScriptResponseBodyDataDraftVersionInteractionConfigEndConversationConfig;
  /**
   * @remarks
   * The delay before playing audio after the call is connected, in milliseconds.
   * 
   * @example
   * 2000
   */
  initialGreetingDelayMilliseconds?: number;
  /**
   * @remarks
   * Silence detection configuration
   */
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
  /**
   * @remarks
   * List of candidate values for the label
   */
  candidateValues?: string[];
  /**
   * @remarks
   * Label description
   * 
   * @example
   * 用户是否同意于还款截止日期前还款
   */
  description?: string;
  /**
   * @remarks
   * Label name
   * 
   * @example
   * 是否同意还款
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

export class GetScriptResponseBodyDataDraftVersionScriptProfileAgentProfile extends $dara.Model {
  /**
   * @remarks
   * Prompt JSON
   * 
   * @example
   * {\\"prompts\\":\\"我是一个聊天机器人。\\"}
   */
  promptsJson?: string;
  /**
   * @remarks
   * Scenario template ID
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

export class GetScriptResponseBodyDataDraftVersionScriptProfileFunctionMeta extends $dara.Model {
  /**
   * @remarks
   * Function service ID
   * 
   * @example
   * 9b752bbb-805a-4d3e-9013-eab5555c3fef
   */
  functionId?: string;
  /**
   * @remarks
   * Function service name
   * 
   * @example
   * my_funciton
   */
  functionName?: string;
  /**
   * @remarks
   * Function trigger name
   * 
   * @example
   * defaultTrigger
   */
  httpTriggerName?: string;
  /**
   * @remarks
   * Function trigger URL
   * 
   * @example
   * http://chat-xxxxx-v-yewiundukb.cn-hangzhou-xxx.run
   */
  httpTriggerUrl?: string;
  /**
   * @remarks
   * Region where the function service is located
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

export class GetScriptResponseBodyDataDraftVersionScriptProfileNluAccessProfile extends $dara.Model {
  /**
   * @remarks
   * Third-party dialogue model configuration ID
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

export class GetScriptResponseBodyDataDraftVersionScriptProfile extends $dara.Model {
  /**
   * @remarks
   * Chatbot AgentKey
   * 
   * @example
   * 1309723684579735_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * Dialogue agent configuration
   */
  agentProfile?: GetScriptResponseBodyDataDraftVersionScriptProfileAgentProfile;
  /**
   * @remarks
   * Chatbot ID
   * 
   * @example
   * chatbot-cn-MQuyjjb666
   */
  chatbotId?: string;
  /**
   * @remarks
   * Function Compute configuration
   */
  functionMeta?: GetScriptResponseBodyDataDraftVersionScriptProfileFunctionMeta;
  /**
   * @remarks
   * Dialogue model
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * Associated configuration
   */
  nluAccessProfile?: GetScriptResponseBodyDataDraftVersionScriptProfileNluAccessProfile;
  /**
   * @remarks
   * Dialogue model call method
   * 
   * @example
   * MANAGED
   */
  nluAccessType?: string;
  /**
   * @remarks
   * NLU engine
   * 
   * @example
   * BEEBOT
   */
  nluEngine?: string;
  /**
   * @remarks
   * Indicates whether the model is an Omni model.
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
   * @remarks
   * Third-party voice configuration
   * 
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
  /**
   * @remarks
   * Word prone to errors
   * 
   * @example
   * 还钱
   */
  pattern?: string;
  /**
   * @remarks
   * Replacement word
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

export class GetScriptResponseBodyDataDraftVersionSynthesizerConfig extends $dara.Model {
  /**
   * @remarks
   * TTS model
   * 
   * @example
   * CosyVoice
   */
  model?: string;
  /**
   * @remarks
   * Access account configuration
   */
  nlsAccessProfile?: GetScriptResponseBodyDataDraftVersionSynthesizerConfigNlsAccessProfile;
  /**
   * @remarks
   * TTS call method
   * 
   * @example
   * MANAGED
   */
  nlsAccessType?: string;
  /**
   * @remarks
   * TTS engine
   * 
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  /**
   * @remarks
   * The speech pitch.
   * 
   * @example
   * 0
   */
  pitchRate?: number;
  /**
   * @remarks
   * List of TTS intervention dictionaries
   */
  pronRules?: GetScriptResponseBodyDataDraftVersionSynthesizerConfigPronRules[];
  /**
   * @remarks
   * Speech rate
   * 
   * @example
   * 0
   */
  speechRate?: number;
  /**
   * @remarks
   * Voice
   * 
   * @example
   * longanyang
   */
  voice?: string;
  /**
   * @remarks
   * Volume
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

export class GetScriptResponseBodyDataDraftVersionTranscriberConfigCorrectionRules extends $dara.Model {
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

export class GetScriptResponseBodyDataDraftVersionTranscriberConfigNlsAccessProfile extends $dara.Model {
  /**
   * @remarks
   * Third-party voice configuration ID
   * 
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
  correctionRules?: GetScriptResponseBodyDataDraftVersionTranscriberConfigCorrectionRules[];
  /**
   * @remarks
   * Self-learning language model ID (not currently supported)
   * 
   * @example
   * 0c4f978a-73bb-4841-bd84-75c0398edd6f
   */
  customizationId?: string;
  /**
   * @remarks
   * Voice Activity Detection (VAD) sentence segmentation
   * 
   * @example
   * 500
   */
  endSilenceTimeout?: number;
  /**
   * @remarks
   * ASR model
   * 
   * @example
   * Paraformer
   */
  model?: string;
  /**
   * @remarks
   * Access account configuration
   */
  nlsAccessProfile?: GetScriptResponseBodyDataDraftVersionTranscriberConfigNlsAccessProfile;
  /**
   * @remarks
   * ASR call method
   * 
   * @example
   * MANAGED
   */
  nlsAccessType?: string;
  /**
   * @remarks
   * ASR engine
   * 
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  /**
   * @remarks
   * Noise threshold
   * 
   * @example
   * 0
   */
  speechNoiseThreshold?: string;
  /**
   * @remarks
   * Hotword ID
   * 
   * @example
   * 0c4f978a-73bb-4841-bd84-75c0398edd5f
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
      correctionRules: { 'type': 'array', 'itemType': GetScriptResponseBodyDataDraftVersionTranscriberConfigCorrectionRules },
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

export class GetScriptResponseBodyDataDraftVersion extends $dara.Model {
  /**
   * @remarks
   * Interaction configuration
   */
  interactionConfig?: GetScriptResponseBodyDataDraftVersionInteractionConfig;
  /**
   * @remarks
   * List of label objects
   */
  labelConfig?: GetScriptResponseBodyDataDraftVersionLabelConfig[];
  /**
   * @remarks
   * Dialogue capability configuration
   */
  scriptProfile?: GetScriptResponseBodyDataDraftVersionScriptProfile;
  /**
   * @remarks
   * TTS configuration
   */
  synthesizerConfig?: GetScriptResponseBodyDataDraftVersionSynthesizerConfig;
  /**
   * @remarks
   * ASR configuration
   */
  transcriberConfig?: GetScriptResponseBodyDataDraftVersionTranscriberConfig;
  /**
   * @remarks
   * Version ID
   * 
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
  /**
   * @remarks
   * - The message to play when hanging up after reaching the maximum number of rounds.
   * 
   * @example
   * 感谢您的接听，祝您生活愉快，再见!
   */
  closingStatement?: string;
  /**
   * @remarks
   * - List of custom interception keywords
   */
  keyWords?: string[];
  /**
   * @remarks
   * - **TurnLimit**: Maximum interaction rounds check.
   * 
   * - **IntelligentVoiceAssistant**: Voice assistant.
   * 
   * - **InteractiveVoiceResponse**: Extension transfer.
   * 
   * - **KeyWords**: Custom interception.
   * 
   * @example
   * TurnLimit
   */
  triggerType?: string;
  /**
   * @remarks
   * - Hangs up when the number of interaction rounds exceeds x.
   * 
   * - The range is 0 to 100.
   * 
   * - A value of 0 indicates that the hang-up feature for exceeding the round limit is disabled.
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

export class GetScriptResponseBodyDataPublishedVersionInteractionConfigEndConversationConfig extends $dara.Model {
  /**
   * @remarks
   * The hang-up action is executed x seconds after the hang-up message is played. The range is 0 to 5.
   * 
   * @example
   * 1
   */
  delay?: number;
  /**
   * @remarks
   * Special case interception
   */
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
   * @remarks
   * Hang up after consecutive rounds of silence.<br>
   * This takes effect when NluEngine is set to PROMPTS for the current scenario.<br>
   * 
   * @example
   * 3
   */
  maxRepeats?: number;
  /**
   * @remarks
   * Silence timeout period in milliseconds.<br>
   * If the user remains silent for longer than the specified value, a silence timeout message is played.<br>
   * The range is 2000 to 10000.<br><br>
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

export class GetScriptResponseBodyDataPublishedVersionInteractionConfig extends $dara.Model {
  /**
   * @remarks
   * Background music ID
   * 
   * @example
   * office-ambience
   */
  backgroundMusicId?: string;
  /**
   * @remarks
   * Hang-up configuration
   */
  endConversationConfig?: GetScriptResponseBodyDataPublishedVersionInteractionConfigEndConversationConfig;
  /**
   * @remarks
   * - The delay before playing audio after the call is connected.
   * 
   * - Unit: milliseconds.
   * 
   * @example
   * 2000
   */
  initialGreetingDelayMilliseconds?: number;
  /**
   * @remarks
   * Silence detection configuration
   */
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
  /**
   * @remarks
   * List of candidate values for the label
   */
  candidateValues?: string[];
  /**
   * @remarks
   * Label description
   * 
   * @example
   * 用户是否同意于还款截止日期前还款
   */
  description?: string;
  /**
   * @remarks
   * Label name
   * 
   * @example
   * 是否同意还款
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

export class GetScriptResponseBodyDataPublishedVersionScriptProfileAgentProfile extends $dara.Model {
  /**
   * @remarks
   * Dialogue agent description
   * 
   * @example
   * 用于测试
   */
  description?: string;
  /**
   * @remarks
   * Dialogue agent name
   * 
   * @example
   * test agent
   */
  name?: string;
  /**
   * @remarks
   * **Prompt JSON**
   * 
   * @example
   * {\\"prompts\\":\\"我是一个聊天机器人。\\"}
   */
  promptsJson?: string;
  /**
   * @remarks
   * **Scenario template ID**
   * 
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
   * @remarks
   * Function service ID. This is required when NluEngine is set to FUNCTION for the current scenario.
   * 
   * @example
   * 9b752bbb-805a-4d3e-9013-eab5555c3fef
   */
  functionId?: string;
  /**
   * @remarks
   * Function service name. This is required when NluEngine is set to FUNCTION for the current scenario.
   * 
   * @example
   * my_function
   */
  functionName?: string;
  /**
   * @remarks
   * Function trigger name. This is required when NluEngine is set to FUNCTION for the current scenario.
   * 
   * @example
   * defaultTrigger
   */
  httpTriggerName?: string;
  /**
   * @remarks
   * Function trigger URL. This is required when NluEngine is set to FUNCTION for the current scenario.
   * 
   * @example
   * http://chat-xxxxx-v-yewiundukb.cn-hangzhou-xxx.run
   */
  httpTriggerUrl?: string;
  /**
   * @remarks
   * Region where the function service is located. This is required when NluEngine is set to FUNCTION for the current scenario.
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

export class GetScriptResponseBodyDataPublishedVersionScriptProfileNluAccessProfile extends $dara.Model {
  /**
   * @remarks
   * Third-party dialogue model configuration ID
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

export class GetScriptResponseBodyDataPublishedVersionScriptProfile extends $dara.Model {
  /**
   * @remarks
   * Chatbot AgentKey. This is required when NluEngine is set to BEEBOT for the current scenario.
   * 
   * @example
   * 1309723684579735_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * Dialogue agent configuration
   */
  agentProfile?: GetScriptResponseBodyDataPublishedVersionScriptProfileAgentProfile;
  /**
   * @remarks
   * Chatbot ID. This is required when NluEngine is set to BEEBOT for the current scenario.
   * 
   * @example
   * chatbot-cn-MQuyjjb666
   */
  chatbotId?: string;
  /**
   * @remarks
   * Function Compute configuration
   */
  functionMeta?: GetScriptResponseBodyDataPublishedVersionScriptProfileFunctionMeta;
  /**
   * @remarks
   * Dialogue model. This is required when NluEngine is set to PROMPTS for the current scenario.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * **Associated configuration**
   */
  nluAccessProfile?: GetScriptResponseBodyDataPublishedVersionScriptProfileNluAccessProfile;
  /**
   * @remarks
   * Dialogue model call method
   * 
   * @example
   * MANAGED
   */
  nluAccessType?: string;
  /**
   * @remarks
   * NLU engine
   * 
   * @example
   * BEEBOT
   */
  nluEngine?: string;
  /**
   * @remarks
   * Indicates whether the model is an Omni model.
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
   * @remarks
   * Third-party voice configuration ID (required when using third-party ASR services such as Doubao or iFLYTEK).
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

export class GetScriptResponseBodyDataPublishedVersionSynthesizerConfigPronRules extends $dara.Model {
  /**
   * @remarks
   * Word prone to errors
   * 
   * @example
   * 还钱
   */
  pattern?: string;
  /**
   * @remarks
   * Homophone
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

export class GetScriptResponseBodyDataPublishedVersionSynthesizerConfig extends $dara.Model {
  /**
   * @remarks
   * **TTS model**
   * 
   * @example
   * CosyVoice
   */
  model?: string;
  /**
   * @remarks
   * Associated configuration
   */
  nlsAccessProfile?: GetScriptResponseBodyDataPublishedVersionSynthesizerConfigNlsAccessProfile;
  /**
   * @remarks
   * **TTS call method**
   * 
   * @example
   * MANAGED
   */
  nlsAccessType?: string;
  /**
   * @remarks
   * **TTS engine**
   * 
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  /**
   * @remarks
   * Pitch rate
   * The range is -500 to 500.
   * The default value is 0.
   * 
   * @example
   * 0
   */
  pitchRate?: number;
  /**
   * @remarks
   * List of TTS intervention entries
   */
  pronRules?: GetScriptResponseBodyDataPublishedVersionSynthesizerConfigPronRules[];
  /**
   * @remarks
   * **Speech rate**
   * The range is -500 to 500.
   * The default value is 0.
   * 
   * @example
   * 0
   */
  speechRate?: number;
  /**
   * @remarks
   * **Voice**
   * 
   * @example
   * longanyang
   */
  voice?: string;
  /**
   * @remarks
   * Volume
   * The range is 0 to 100.
   * The default value is 50.
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

export class GetScriptResponseBodyDataPublishedVersionTranscriberConfigCorrectionRules extends $dara.Model {
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

export class GetScriptResponseBodyDataPublishedVersionTranscriberConfigNlsAccessProfile extends $dara.Model {
  /**
   * @remarks
   * Third-party voice configuration ID (required when using third-party ASR services such as Doubao or iFLYTEK).
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

export class GetScriptResponseBodyDataPublishedVersionTranscriberConfig extends $dara.Model {
  correctionRules?: GetScriptResponseBodyDataPublishedVersionTranscriberConfigCorrectionRules[];
  /**
   * @remarks
   * Custom language model ID for ASR
   * 
   * @example
   * cd97223f-42f2-4cd9-95af-e734e2fe1fe4
   */
  customizationId?: string;
  /**
   * @remarks
   * Silence detection (sentence segmentation is triggered when the speaking interval exceeds x milliseconds, which is Voice Activity Detection (VAD)).
   * 
   * @example
   * 700
   */
  endSilenceTimeout?: number;
  /**
   * @remarks
   * ASR model
   * 
   * @example
   * Paraformer
   */
  model?: string;
  /**
   * @remarks
   * **Associated configuration**
   */
  nlsAccessProfile?: GetScriptResponseBodyDataPublishedVersionTranscriberConfigNlsAccessProfile;
  /**
   * @remarks
   * **ASR call method**
   * 
   * @example
   * MANAGED
   */
  nlsAccessType?: string;
  /**
   * @remarks
   * **ASR engine**
   * 
   * @example
   * BAILIAN
   */
  nlsEngine?: string;
  /**
   * @remarks
   * Noise parameter threshold. The range is -100 to 100. The following describes the values:
   * 
   * The closer the value is to -100, the more likely noise is identified as speech.
   * 
   * The closer the value is to 100, the more likely speech is identified as noise.
   * 
   * @example
   * 0
   */
  speechNoiseThreshold?: string;
  /**
   * @remarks
   * Hotword table ID (obtained from the hotword management page).
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
      correctionRules: { 'type': 'array', 'itemType': GetScriptResponseBodyDataPublishedVersionTranscriberConfigCorrectionRules },
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

export class GetScriptResponseBodyDataPublishedVersion extends $dara.Model {
  /**
   * @remarks
   * Interaction configuration
   */
  interactionConfig?: GetScriptResponseBodyDataPublishedVersionInteractionConfig;
  /**
   * @remarks
   * Custom tag configuration
   */
  labelConfig?: GetScriptResponseBodyDataPublishedVersionLabelConfig[];
  /**
   * @remarks
   * Dialogue capability configuration
   */
  scriptProfile?: GetScriptResponseBodyDataPublishedVersionScriptProfile;
  /**
   * @remarks
   * TTS configuration
   */
  synthesizerConfig?: GetScriptResponseBodyDataPublishedVersionSynthesizerConfig;
  /**
   * @remarks
   * ASR configuration
   */
  transcriberConfig?: GetScriptResponseBodyDataPublishedVersionTranscriberConfig;
  /**
   * @remarks
   * Version ID
   * 
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
   * @remarks
   * Concurrency
   * 
   * @example
   * 10
   */
  concurrency?: number;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 1773228988000
   */
  createdTime?: number;
  /**
   * @remarks
   * Description
   * 
   * @example
   * test script
   */
  description?: string;
  /**
   * @remarks
   * Draft version information
   */
  draftVersion?: GetScriptResponseBodyDataDraftVersion;
  /**
   * @remarks
   * Scenario name
   * 
   * @example
   * 测试场景
   */
  name?: string;
  /**
   * @remarks
   * Natural Language Understanding (NLU) engine
   * 
   * @example
   * BEEBOT
   */
  nluEngine?: string;
  /**
   * @remarks
   * Published version information
   */
  publishedVersion?: GetScriptResponseBodyDataPublishedVersion;
  /**
   * @remarks
   * Scenario ID
   * 
   * @example
   * 64241e64-190c-45d1-af66-06f51c07b090
   */
  scriptId?: string;
  /**
   * @remarks
   * Status
   * 
   * @example
   * DRAFT
   */
  status?: string;
  /**
   * @remarks
   * Update time
   * 
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
   * @remarks
   * Internal error code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Scenario object information
   */
  data?: GetScriptResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * Instance af81a389-91f0-4157-8d82-720edd02b66a
   *  does not exist.
   */
  message?: string;
  /**
   * @remarks
   * List of dynamic error parameters
   */
  params?: string[];
  /**
   * @remarks
   * Request ID
   * 
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

