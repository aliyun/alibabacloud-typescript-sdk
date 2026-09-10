// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationResponseBodyDataDraftVersionInteractionConfigEndConversationConfigTriggers extends $dara.Model {
  closingStatement?: string;
  keyWords?: string[];
  triggerType?: string;
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

export class GetApplicationResponseBodyDataDraftVersionInteractionConfigEndConversationConfig extends $dara.Model {
  delay?: number;
  triggers?: GetApplicationResponseBodyDataDraftVersionInteractionConfigEndConversationConfigTriggers[];
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'number',
      triggers: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataDraftVersionInteractionConfigEndConversationConfigTriggers },
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

export class GetApplicationResponseBodyDataDraftVersionInteractionConfigSilenceDetectionConfig extends $dara.Model {
  maxRepeats?: number;
  /**
   * @remarks
   * The task execution timeout period, in seconds.
   * 
   * @example
   * 3
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

export class GetApplicationResponseBodyDataDraftVersionInteractionConfig extends $dara.Model {
  backgroundMusicId?: string;
  endConversationConfig?: GetApplicationResponseBodyDataDraftVersionInteractionConfigEndConversationConfig;
  initialGreetingDelayMilliseconds?: number;
  /**
   * @remarks
   * The silence detection configuration.
   */
  silenceDetectionConfig?: GetApplicationResponseBodyDataDraftVersionInteractionConfigSilenceDetectionConfig;
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
      endConversationConfig: GetApplicationResponseBodyDataDraftVersionInteractionConfigEndConversationConfig,
      initialGreetingDelayMilliseconds: 'number',
      silenceDetectionConfig: GetApplicationResponseBodyDataDraftVersionInteractionConfigSilenceDetectionConfig,
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

export class GetApplicationResponseBodyDataDraftVersionLabelConfig extends $dara.Model {
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

export class GetApplicationResponseBodyDataDraftVersionRagConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether RAG is enabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of knowledge base IDs.
   */
  knowledgeBaseIds?: string[];
  /**
   * @remarks
   * The maximum concatenation length of RAG content.
   * 
   * @example
   * 2000
   */
  maxContentLength?: number;
  /**
   * @remarks
   * The RAG engine.
   * 
   * @example
   * BAILIAN
   */
  ragEngine?: string;
  /**
   * @remarks
   * The maximum number of data entries to retrieve.
   * 
   * @example
   * 5
   */
  topN?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      knowledgeBaseIds: 'KnowledgeBaseIds',
      maxContentLength: 'MaxContentLength',
      ragEngine: 'RagEngine',
      topN: 'TopN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      knowledgeBaseIds: { 'type': 'array', 'itemType': 'string' },
      maxContentLength: 'number',
      ragEngine: 'string',
      topN: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.knowledgeBaseIds)) {
      $dara.Model.validateArray(this.knowledgeBaseIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyDataDraftVersionScriptProfileAgentProfile extends $dara.Model {
  /**
   * @remarks
   * The agent configuration ID.
   * 
   * @example
   * 6a50b67072d44788951de29758432d94
   */
  agentProfileId?: string;
  /**
   * @remarks
   * The agent description.
   * 
   * @example
   * Chatbot
   */
  description?: string;
  name?: string;
  /**
   * @remarks
   * The prompt in JSON format.
   * 
   * @example
   * {"prompts":"I am a chatbot."}
   */
  promptsJson?: string;
  /**
   * @remarks
   * The application template ID.
   * 
   * @example
   * SFM_PROMPTS_DEFAULT
   */
  scriptProfileTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      agentProfileId: 'AgentProfileId',
      description: 'Description',
      name: 'Name',
      promptsJson: 'PromptsJson',
      scriptProfileTemplateId: 'ScriptProfileTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProfileId: 'string',
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

export class GetApplicationResponseBodyDataDraftVersionScriptProfileFunctionMeta extends $dara.Model {
  functionId?: string;
  functionName?: string;
  httpTriggerName?: string;
  httpTriggerUrl?: string;
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

export class GetApplicationResponseBodyDataDraftVersionScriptProfileNluAccessProfile extends $dara.Model {
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

export class GetApplicationResponseBodyDataDraftVersionScriptProfile extends $dara.Model {
  agentKey?: string;
  /**
   * @remarks
   * The agent configuration information.
   */
  agentProfile?: GetApplicationResponseBodyDataDraftVersionScriptProfileAgentProfile;
  chatbotId?: string;
  functionMeta?: GetApplicationResponseBodyDataDraftVersionScriptProfileFunctionMeta;
  /**
   * @remarks
   * The model.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  nluAccessProfile?: GetApplicationResponseBodyDataDraftVersionScriptProfileNluAccessProfile;
  nluAccessType?: string;
  nluEngine?: string;
  omniModel?: boolean;
  /**
   * @remarks
   * The probability threshold for nucleus sampling during generation.
   * 
   * > - For example, when the value is set to 0.8, only the smallest set of most likely tokens whose cumulative probability is greater than or equal to 0.8 is retained as the candidate set.
   *      * Valid values: (0, 1.0). A higher value increases randomness in generation. A lower value increases determinism in generation.
   * 
   * @example
   * 0.8
   */
  temperature?: string;
  /**
   * @remarks
   * Controls the randomness and diversity of model responses.
   * > - Specifically, the temperature value controls the degree of smoothing applied to the probability distribution of each candidate token during text generation. A higher temperature value flattens the probability distribution, allowing more low-probability tokens to be selected, which produces more diverse results. A lower temperature value sharpens the probability distribution, making high-probability tokens more likely to be selected, which produces more deterministic results.
   * > - Valid values: [0, 2). Setting the value to 0 is not recommended because it is meaningless.
   * 
   * @example
   * 0.1
   */
  topP?: string;
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
      temperature: 'Temperature',
      topP: 'TopP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      agentProfile: GetApplicationResponseBodyDataDraftVersionScriptProfileAgentProfile,
      chatbotId: 'string',
      functionMeta: GetApplicationResponseBodyDataDraftVersionScriptProfileFunctionMeta,
      model: 'string',
      nluAccessProfile: GetApplicationResponseBodyDataDraftVersionScriptProfileNluAccessProfile,
      nluAccessType: 'string',
      nluEngine: 'string',
      omniModel: 'boolean',
      temperature: 'string',
      topP: 'string',
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

export class GetApplicationResponseBodyDataDraftVersionSynthesizerConfigNlsAccessProfile extends $dara.Model {
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

export class GetApplicationResponseBodyDataDraftVersionSynthesizerConfigPronRules extends $dara.Model {
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

export class GetApplicationResponseBodyDataDraftVersionSynthesizerConfig extends $dara.Model {
  model?: string;
  nlsAccessProfile?: GetApplicationResponseBodyDataDraftVersionSynthesizerConfigNlsAccessProfile;
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
   * ALIYUN
   */
  nlsEngine?: string;
  /**
   * @remarks
   * The pitch rate.
   * > Valid values: -500 to 500.
   * 
   * @example
   * 5
   */
  pitchRate?: number;
  pronRules?: GetApplicationResponseBodyDataDraftVersionSynthesizerConfigPronRules[];
  /**
   * @remarks
   * The speech rate.
   * > Valid values: -500 to 500.
   * 
   * @example
   * 1
   */
  speechRate?: number;
  /**
   * @remarks
   * The voice.
   * 
   * @example
   * aixia
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
      nlsAccessProfile: GetApplicationResponseBodyDataDraftVersionSynthesizerConfigNlsAccessProfile,
      nlsAccessType: 'string',
      nlsEngine: 'string',
      pitchRate: 'number',
      pronRules: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataDraftVersionSynthesizerConfigPronRules },
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

export class GetApplicationResponseBodyDataDraftVersionToolConfigMcpServers extends $dara.Model {
  /**
   * @remarks
   * The base URL.
   * 
   * @example
   * https://example.com
   */
  baseUrl?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * phone-ai-call
   */
  name?: string;
  /**
   * @remarks
   * The SSE endpoint.
   * 
   * @example
   * /phone-ai-call/mcp/sse?key=value
   */
  sseEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      baseUrl: 'BaseUrl',
      name: 'Name',
      sseEndpoint: 'SseEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseUrl: 'string',
      name: 'string',
      sseEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyDataDraftVersionToolConfig extends $dara.Model {
  /**
   * @remarks
   * The list of MCP server configurations.
   */
  mcpServers?: GetApplicationResponseBodyDataDraftVersionToolConfigMcpServers[];
  static names(): { [key: string]: string } {
    return {
      mcpServers: 'McpServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpServers: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataDraftVersionToolConfigMcpServers },
    };
  }

  validate() {
    if(Array.isArray(this.mcpServers)) {
      $dara.Model.validateArray(this.mcpServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyDataDraftVersionTranscriberConfigCorrectionRules extends $dara.Model {
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

export class GetApplicationResponseBodyDataDraftVersionTranscriberConfigNlsAccessProfile extends $dara.Model {
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

export class GetApplicationResponseBodyDataDraftVersionTranscriberConfig extends $dara.Model {
  correctionRules?: GetApplicationResponseBodyDataDraftVersionTranscriberConfigCorrectionRules[];
  customizationId?: string;
  endSilenceTimeout?: number;
  model?: string;
  nlsAccessProfile?: GetApplicationResponseBodyDataDraftVersionTranscriberConfigNlsAccessProfile;
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
   * ALIYUN
   */
  nlsEngine?: string;
  speechNoiseThreshold?: number;
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
      correctionRules: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataDraftVersionTranscriberConfigCorrectionRules },
      customizationId: 'string',
      endSilenceTimeout: 'number',
      model: 'string',
      nlsAccessProfile: GetApplicationResponseBodyDataDraftVersionTranscriberConfigNlsAccessProfile,
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

export class GetApplicationResponseBodyDataDraftVersion extends $dara.Model {
  /**
   * @remarks
   * The interaction configuration.
   */
  interactionConfig?: GetApplicationResponseBodyDataDraftVersionInteractionConfig;
  labelConfig?: GetApplicationResponseBodyDataDraftVersionLabelConfig[];
  /**
   * @remarks
   * The RAG configuration.
   */
  ragConfig?: GetApplicationResponseBodyDataDraftVersionRagConfig;
  /**
   * @remarks
   * The application model configuration.
   */
  scriptProfile?: GetApplicationResponseBodyDataDraftVersionScriptProfile;
  /**
   * @remarks
   * The text-to-speech (TTS) configuration.
   */
  synthesizerConfig?: GetApplicationResponseBodyDataDraftVersionSynthesizerConfig;
  /**
   * @remarks
   * The tool configuration.
   */
  toolConfig?: GetApplicationResponseBodyDataDraftVersionToolConfig;
  /**
   * @remarks
   * The automatic speech recognition (ASR) configuration.
   */
  transcriberConfig?: GetApplicationResponseBodyDataDraftVersionTranscriberConfig;
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * 743219815472857088
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      interactionConfig: 'InteractionConfig',
      labelConfig: 'LabelConfig',
      ragConfig: 'RagConfig',
      scriptProfile: 'ScriptProfile',
      synthesizerConfig: 'SynthesizerConfig',
      toolConfig: 'ToolConfig',
      transcriberConfig: 'TranscriberConfig',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interactionConfig: GetApplicationResponseBodyDataDraftVersionInteractionConfig,
      labelConfig: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataDraftVersionLabelConfig },
      ragConfig: GetApplicationResponseBodyDataDraftVersionRagConfig,
      scriptProfile: GetApplicationResponseBodyDataDraftVersionScriptProfile,
      synthesizerConfig: GetApplicationResponseBodyDataDraftVersionSynthesizerConfig,
      toolConfig: GetApplicationResponseBodyDataDraftVersionToolConfig,
      transcriberConfig: GetApplicationResponseBodyDataDraftVersionTranscriberConfig,
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
    if(this.ragConfig && typeof (this.ragConfig as any).validate === 'function') {
      (this.ragConfig as any).validate();
    }
    if(this.scriptProfile && typeof (this.scriptProfile as any).validate === 'function') {
      (this.scriptProfile as any).validate();
    }
    if(this.synthesizerConfig && typeof (this.synthesizerConfig as any).validate === 'function') {
      (this.synthesizerConfig as any).validate();
    }
    if(this.toolConfig && typeof (this.toolConfig as any).validate === 'function') {
      (this.toolConfig as any).validate();
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

export class GetApplicationResponseBodyDataPublishedVersionInteractionConfigEndConversationConfigTriggers extends $dara.Model {
  closingStatement?: string;
  keyWords?: string[];
  triggerType?: string;
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

export class GetApplicationResponseBodyDataPublishedVersionInteractionConfigEndConversationConfig extends $dara.Model {
  delay?: number;
  triggers?: GetApplicationResponseBodyDataPublishedVersionInteractionConfigEndConversationConfigTriggers[];
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'number',
      triggers: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataPublishedVersionInteractionConfigEndConversationConfigTriggers },
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

export class GetApplicationResponseBodyDataPublishedVersionInteractionConfigSilenceDetectionConfig extends $dara.Model {
  maxRepeats?: number;
  /**
   * @remarks
   * The timeout period.
   * 
   * @example
   * 30
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

export class GetApplicationResponseBodyDataPublishedVersionInteractionConfig extends $dara.Model {
  backgroundMusicId?: string;
  endConversationConfig?: GetApplicationResponseBodyDataPublishedVersionInteractionConfigEndConversationConfig;
  initialGreetingDelayMilliseconds?: number;
  /**
   * @remarks
   * The silence detection configuration.
   */
  silenceDetectionConfig?: GetApplicationResponseBodyDataPublishedVersionInteractionConfigSilenceDetectionConfig;
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
      endConversationConfig: GetApplicationResponseBodyDataPublishedVersionInteractionConfigEndConversationConfig,
      initialGreetingDelayMilliseconds: 'number',
      silenceDetectionConfig: GetApplicationResponseBodyDataPublishedVersionInteractionConfigSilenceDetectionConfig,
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

export class GetApplicationResponseBodyDataPublishedVersionLabelConfig extends $dara.Model {
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

export class GetApplicationResponseBodyDataPublishedVersionRagConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether RAG is enabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of knowledge base IDs.
   */
  knowledgeBaseIds?: string[];
  /**
   * @remarks
   * The maximum concatenation length of RAG content.
   * 
   * @example
   * 2000
   */
  maxContentLength?: number;
  /**
   * @remarks
   * The RAG engine.
   * 
   * @example
   * BAILIAN
   */
  ragEngine?: string;
  /**
   * @remarks
   * The maximum number of data entries to retrieve.
   * 
   * @example
   * 5
   */
  topN?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      knowledgeBaseIds: 'KnowledgeBaseIds',
      maxContentLength: 'MaxContentLength',
      ragEngine: 'RagEngine',
      topN: 'TopN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      knowledgeBaseIds: { 'type': 'array', 'itemType': 'string' },
      maxContentLength: 'number',
      ragEngine: 'string',
      topN: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.knowledgeBaseIds)) {
      $dara.Model.validateArray(this.knowledgeBaseIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyDataPublishedVersionScriptProfileAgentProfile extends $dara.Model {
  /**
   * @remarks
   * The agent configuration ID.
   * 
   * @example
   * b97b6822dd624c32b6c2a54d717db718
   */
  agentProfileId?: string;
  /**
   * @remarks
   * The agent description.
   * 
   * @example
   * I am a chatbot
   */
  description?: string;
  name?: string;
  /**
   * @remarks
   * The prompt in JSON format.
   * 
   * @example
   * {"prompts":"I am a chatbot."}
   */
  promptsJson?: string;
  /**
   * @remarks
   * The agent configuration template ID.
   * 
   * @example
   * SFM_PROMPTS_DEFAULT
   */
  scriptProfileTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      agentProfileId: 'AgentProfileId',
      description: 'Description',
      name: 'Name',
      promptsJson: 'PromptsJson',
      scriptProfileTemplateId: 'ScriptProfileTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProfileId: 'string',
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

export class GetApplicationResponseBodyDataPublishedVersionScriptProfileFunctionMeta extends $dara.Model {
  functionId?: string;
  functionName?: string;
  httpTriggerName?: string;
  httpTriggerUrl?: string;
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

export class GetApplicationResponseBodyDataPublishedVersionScriptProfileNluAccessProfile extends $dara.Model {
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

export class GetApplicationResponseBodyDataPublishedVersionScriptProfile extends $dara.Model {
  agentKey?: string;
  /**
   * @remarks
   * The agent configuration information.
   */
  agentProfile?: GetApplicationResponseBodyDataPublishedVersionScriptProfileAgentProfile;
  chatbotId?: string;
  functionMeta?: GetApplicationResponseBodyDataPublishedVersionScriptProfileFunctionMeta;
  /**
   * @remarks
   * The model.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  nluAccessProfile?: GetApplicationResponseBodyDataPublishedVersionScriptProfileNluAccessProfile;
  nluAccessType?: string;
  nluEngine?: string;
  omniModel?: boolean;
  /**
   * @remarks
   * The probability threshold for nucleus sampling during generation.
   * 
   * > - For example, when the value is set to 0.8, only the smallest set of most likely tokens whose cumulative probability is greater than or equal to 0.8 is retained as the candidate set.
   *      * Valid values: (0, 1.0). A higher value increases randomness in generation. A lower value increases determinism in generation.
   * 
   * @example
   * 0.8
   */
  temperature?: string;
  /**
   * @remarks
   * Controls the randomness and diversity of model responses.
   * > - Specifically, the temperature value controls the degree of smoothing applied to the probability distribution of each candidate token during text generation. A higher temperature value flattens the probability distribution, allowing more low-probability tokens to be selected, which produces more diverse results. A lower temperature value sharpens the probability distribution, making high-probability tokens more likely to be selected, which produces more deterministic results.
   * > - Valid values: [0, 2). Setting the value to 0 is not recommended because it is meaningless.
   * 
   * @example
   * 0.1
   */
  topP?: string;
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
      temperature: 'Temperature',
      topP: 'TopP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      agentProfile: GetApplicationResponseBodyDataPublishedVersionScriptProfileAgentProfile,
      chatbotId: 'string',
      functionMeta: GetApplicationResponseBodyDataPublishedVersionScriptProfileFunctionMeta,
      model: 'string',
      nluAccessProfile: GetApplicationResponseBodyDataPublishedVersionScriptProfileNluAccessProfile,
      nluAccessType: 'string',
      nluEngine: 'string',
      omniModel: 'boolean',
      temperature: 'string',
      topP: 'string',
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

export class GetApplicationResponseBodyDataPublishedVersionSynthesizerConfigNlsAccessProfile extends $dara.Model {
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

export class GetApplicationResponseBodyDataPublishedVersionSynthesizerConfigPronRules extends $dara.Model {
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

export class GetApplicationResponseBodyDataPublishedVersionSynthesizerConfig extends $dara.Model {
  model?: string;
  nlsAccessProfile?: GetApplicationResponseBodyDataPublishedVersionSynthesizerConfigNlsAccessProfile;
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
   * ALIYUN
   */
  nlsEngine?: string;
  /**
   * @remarks
   * The pitch rate.
   * > Valid values: -500 to 500.
   * 
   * @example
   * 3
   */
  pitchRate?: number;
  pronRules?: GetApplicationResponseBodyDataPublishedVersionSynthesizerConfigPronRules[];
  /**
   * @remarks
   * The speech rate.
   * > Valid values: -500 to 500.
   * 
   * @example
   * -20
   */
  speechRate?: number;
  /**
   * @remarks
   * The voice.
   * 
   * @example
   * aixia
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
      nlsAccessProfile: GetApplicationResponseBodyDataPublishedVersionSynthesizerConfigNlsAccessProfile,
      nlsAccessType: 'string',
      nlsEngine: 'string',
      pitchRate: 'number',
      pronRules: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataPublishedVersionSynthesizerConfigPronRules },
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

export class GetApplicationResponseBodyDataPublishedVersionToolConfigMcpServers extends $dara.Model {
  /**
   * @remarks
   * The base URL.
   * 
   * @example
   * https://example.com
   */
  baseUrl?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * phone-ai-call
   */
  name?: string;
  /**
   * @remarks
   * The SSE endpoint.
   * 
   * @example
   * /phone-ai-call/mcp/sse?key=value
   */
  sseEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      baseUrl: 'BaseUrl',
      name: 'Name',
      sseEndpoint: 'SseEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseUrl: 'string',
      name: 'string',
      sseEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyDataPublishedVersionToolConfig extends $dara.Model {
  /**
   * @remarks
   * The list of MCP server configurations.
   */
  mcpServers?: GetApplicationResponseBodyDataPublishedVersionToolConfigMcpServers[];
  static names(): { [key: string]: string } {
    return {
      mcpServers: 'McpServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpServers: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataPublishedVersionToolConfigMcpServers },
    };
  }

  validate() {
    if(Array.isArray(this.mcpServers)) {
      $dara.Model.validateArray(this.mcpServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyDataPublishedVersionTranscriberConfigCorrectionRules extends $dara.Model {
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

export class GetApplicationResponseBodyDataPublishedVersionTranscriberConfigNlsAccessProfile extends $dara.Model {
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

export class GetApplicationResponseBodyDataPublishedVersionTranscriberConfig extends $dara.Model {
  correctionRules?: GetApplicationResponseBodyDataPublishedVersionTranscriberConfigCorrectionRules[];
  customizationId?: string;
  endSilenceTimeout?: number;
  model?: string;
  nlsAccessProfile?: GetApplicationResponseBodyDataPublishedVersionTranscriberConfigNlsAccessProfile;
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
   * ALIYUN
   */
  nlsEngine?: string;
  speechNoiseThreshold?: number;
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
      correctionRules: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataPublishedVersionTranscriberConfigCorrectionRules },
      customizationId: 'string',
      endSilenceTimeout: 'number',
      model: 'string',
      nlsAccessProfile: GetApplicationResponseBodyDataPublishedVersionTranscriberConfigNlsAccessProfile,
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

export class GetApplicationResponseBodyDataPublishedVersion extends $dara.Model {
  /**
   * @remarks
   * The interaction configuration.
   */
  interactionConfig?: GetApplicationResponseBodyDataPublishedVersionInteractionConfig;
  labelConfig?: GetApplicationResponseBodyDataPublishedVersionLabelConfig[];
  /**
   * @remarks
   * The RAG configuration.
   */
  ragConfig?: GetApplicationResponseBodyDataPublishedVersionRagConfig;
  /**
   * @remarks
   * The application model configuration.
   */
  scriptProfile?: GetApplicationResponseBodyDataPublishedVersionScriptProfile;
  /**
   * @remarks
   * The text-to-speech (TTS) configuration.
   */
  synthesizerConfig?: GetApplicationResponseBodyDataPublishedVersionSynthesizerConfig;
  /**
   * @remarks
   * The tool configuration.
   */
  toolConfig?: GetApplicationResponseBodyDataPublishedVersionToolConfig;
  /**
   * @remarks
   * The automatic speech recognition (ASR) configuration.
   */
  transcriberConfig?: GetApplicationResponseBodyDataPublishedVersionTranscriberConfig;
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * 47889c1f-dd3f-4ace-9587-a13a3563e678
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      interactionConfig: 'InteractionConfig',
      labelConfig: 'LabelConfig',
      ragConfig: 'RagConfig',
      scriptProfile: 'ScriptProfile',
      synthesizerConfig: 'SynthesizerConfig',
      toolConfig: 'ToolConfig',
      transcriberConfig: 'TranscriberConfig',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interactionConfig: GetApplicationResponseBodyDataPublishedVersionInteractionConfig,
      labelConfig: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataPublishedVersionLabelConfig },
      ragConfig: GetApplicationResponseBodyDataPublishedVersionRagConfig,
      scriptProfile: GetApplicationResponseBodyDataPublishedVersionScriptProfile,
      synthesizerConfig: GetApplicationResponseBodyDataPublishedVersionSynthesizerConfig,
      toolConfig: GetApplicationResponseBodyDataPublishedVersionToolConfig,
      transcriberConfig: GetApplicationResponseBodyDataPublishedVersionTranscriberConfig,
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
    if(this.ragConfig && typeof (this.ragConfig as any).validate === 'function') {
      (this.ragConfig as any).validate();
    }
    if(this.scriptProfile && typeof (this.scriptProfile as any).validate === 'function') {
      (this.scriptProfile as any).validate();
    }
    if(this.synthesizerConfig && typeof (this.synthesizerConfig as any).validate === 'function') {
      (this.synthesizerConfig as any).validate();
    }
    if(this.toolConfig && typeof (this.toolConfig as any).validate === 'function') {
      (this.toolConfig as any).validate();
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

export class GetApplicationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * a395011f-a247-400f-bc69-28796749fd52
   */
  applicationId?: string;
  /**
   * @remarks
   * The call concurrency, which is the number of calls being made simultaneously.
   * 
   * @example
   * 10
   */
  concurrency?: number;
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 1730081561000
   */
  createdTime?: number;
  /**
   * @remarks
   * The application description.
   * 
   * @example
   * Describe this application
   */
  description?: string;
  /**
   * @remarks
   * The draft version configuration content.
   */
  draftVersion?: GetApplicationResponseBodyDataDraftVersion;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * Test001
   */
  name?: string;
  /**
   * @remarks
   * The NLU access method.
   * 
   * @example
   * MANAGED
   */
  nluAccessType?: string;
  /**
   * @remarks
   * The NLU engine.
   * 
   * @example
   * PROMPTS
   */
  nluEngine?: string;
  /**
   * @remarks
   * The published application version.
   */
  publishedVersion?: GetApplicationResponseBodyDataPublishedVersion;
  status?: string;
  /**
   * @remarks
   * The time when the application was last modified.
   * 
   * @example
   * 1730081561000
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      concurrency: 'Concurrency',
      createdTime: 'CreatedTime',
      description: 'Description',
      draftVersion: 'DraftVersion',
      name: 'Name',
      nluAccessType: 'NluAccessType',
      nluEngine: 'NluEngine',
      publishedVersion: 'PublishedVersion',
      status: 'Status',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      concurrency: 'number',
      createdTime: 'number',
      description: 'string',
      draftVersion: GetApplicationResponseBodyDataDraftVersion,
      name: 'string',
      nluAccessType: 'string',
      nluEngine: 'string',
      publishedVersion: GetApplicationResponseBodyDataPublishedVersion,
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

export class GetApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetApplicationResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D771A1B6-3D5F-174A-BEE1-98CE1000D337
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
      data: GetApplicationResponseBodyData,
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

