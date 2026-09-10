// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationVersionRequestInteractionConfigEndConversationConfigTriggers extends $dara.Model {
  /**
   * @example
   * 感谢您的接听，祝您生活愉快，再见!
   */
  closingStatement?: string;
  keyWords?: string[];
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

export class CreateApplicationVersionRequestInteractionConfigEndConversationConfig extends $dara.Model {
  delay?: number;
  triggers?: CreateApplicationVersionRequestInteractionConfigEndConversationConfigTriggers[];
  static names(): { [key: string]: string } {
    return {
      delay: 'Delay',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delay: 'number',
      triggers: { 'type': 'array', 'itemType': CreateApplicationVersionRequestInteractionConfigEndConversationConfigTriggers },
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

export class CreateApplicationVersionRequestInteractionConfigSilenceDetectionConfig extends $dara.Model {
  maxRepeats?: number;
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

export class CreateApplicationVersionRequestInteractionConfig extends $dara.Model {
  backgroundMusicId?: string;
  endConversationConfig?: CreateApplicationVersionRequestInteractionConfigEndConversationConfig;
  initialGreetingDelayMilliseconds?: number;
  silenceDetectionConfig?: CreateApplicationVersionRequestInteractionConfigSilenceDetectionConfig;
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
      endConversationConfig: CreateApplicationVersionRequestInteractionConfigEndConversationConfig,
      initialGreetingDelayMilliseconds: 'number',
      silenceDetectionConfig: CreateApplicationVersionRequestInteractionConfigSilenceDetectionConfig,
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

export class CreateApplicationVersionRequestLabelConfig extends $dara.Model {
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

export class CreateApplicationVersionRequestRagConfig extends $dara.Model {
  enabled?: boolean;
  knowledgeBaseIds?: string[];
  maxContentLength?: number;
  ragEngine?: string;
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

export class CreateApplicationVersionRequestScriptProfileAgentProfile extends $dara.Model {
  description?: string;
  name?: string;
  promptsJson?: string;
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

export class CreateApplicationVersionRequestScriptProfileFunctionMeta extends $dara.Model {
  /**
   * @example
   * 9b752bbb-805a-4d3e-9013-eab5555c3fef
   */
  functionId?: string;
  functionName?: string;
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

export class CreateApplicationVersionRequestScriptProfileNluAccessProfile extends $dara.Model {
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

export class CreateApplicationVersionRequestScriptProfile extends $dara.Model {
  /**
   * @example
   * 6f444ecf21d94238b516735916c98666
   */
  agentKey?: string;
  agentProfile?: CreateApplicationVersionRequestScriptProfileAgentProfile;
  /**
   * @example
   * chatbot-cn-MQuyjjb666
   */
  chatbotId?: string;
  functionMeta?: CreateApplicationVersionRequestScriptProfileFunctionMeta;
  model?: string;
  nluAccessProfile?: CreateApplicationVersionRequestScriptProfileNluAccessProfile;
  nluAccessType?: string;
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
      agentProfile: CreateApplicationVersionRequestScriptProfileAgentProfile,
      chatbotId: 'string',
      functionMeta: CreateApplicationVersionRequestScriptProfileFunctionMeta,
      model: 'string',
      nluAccessProfile: CreateApplicationVersionRequestScriptProfileNluAccessProfile,
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

export class CreateApplicationVersionRequestSynthesizerConfigNlsAccessProfile extends $dara.Model {
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

export class CreateApplicationVersionRequestSynthesizerConfigPronRules extends $dara.Model {
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

export class CreateApplicationVersionRequestSynthesizerConfig extends $dara.Model {
  model?: string;
  nlsAccessProfile?: CreateApplicationVersionRequestSynthesizerConfigNlsAccessProfile;
  nlsAccessType?: string;
  nlsEngine?: string;
  pitchRate?: number;
  pronRules?: CreateApplicationVersionRequestSynthesizerConfigPronRules[];
  speechRate?: number;
  voice?: string;
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
      nlsAccessProfile: CreateApplicationVersionRequestSynthesizerConfigNlsAccessProfile,
      nlsAccessType: 'string',
      nlsEngine: 'string',
      pitchRate: 'number',
      pronRules: { 'type': 'array', 'itemType': CreateApplicationVersionRequestSynthesizerConfigPronRules },
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

export class CreateApplicationVersionRequestToolConfigMcpServers extends $dara.Model {
  baseUrl?: string;
  name?: string;
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

export class CreateApplicationVersionRequestToolConfig extends $dara.Model {
  mcpServers?: CreateApplicationVersionRequestToolConfigMcpServers[];
  static names(): { [key: string]: string } {
    return {
      mcpServers: 'McpServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpServers: { 'type': 'array', 'itemType': CreateApplicationVersionRequestToolConfigMcpServers },
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

export class CreateApplicationVersionRequestTranscriberConfigCorrectionRules extends $dara.Model {
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

export class CreateApplicationVersionRequestTranscriberConfigNlsAccessProfile extends $dara.Model {
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

export class CreateApplicationVersionRequestTranscriberConfig extends $dara.Model {
  correctionRules?: CreateApplicationVersionRequestTranscriberConfigCorrectionRules[];
  customizationId?: string;
  endSilenceTimeout?: number;
  model?: string;
  nlsAccessProfile?: CreateApplicationVersionRequestTranscriberConfigNlsAccessProfile;
  nlsAccessType?: string;
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
      correctionRules: { 'type': 'array', 'itemType': CreateApplicationVersionRequestTranscriberConfigCorrectionRules },
      customizationId: 'string',
      endSilenceTimeout: 'number',
      model: 'string',
      nlsAccessProfile: CreateApplicationVersionRequestTranscriberConfigNlsAccessProfile,
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

export class CreateApplicationVersionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  businessUnitId?: string;
  interactionConfig?: CreateApplicationVersionRequestInteractionConfig;
  labelConfig?: CreateApplicationVersionRequestLabelConfig[];
  ragConfig?: CreateApplicationVersionRequestRagConfig;
  scriptProfile?: CreateApplicationVersionRequestScriptProfile;
  sourceVersionId?: string;
  synthesizerConfig?: CreateApplicationVersionRequestSynthesizerConfig;
  toolConfig?: CreateApplicationVersionRequestToolConfig;
  transcriberConfig?: CreateApplicationVersionRequestTranscriberConfig;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      businessUnitId: 'BusinessUnitId',
      interactionConfig: 'InteractionConfig',
      labelConfig: 'LabelConfig',
      ragConfig: 'RagConfig',
      scriptProfile: 'ScriptProfile',
      sourceVersionId: 'SourceVersionId',
      synthesizerConfig: 'SynthesizerConfig',
      toolConfig: 'ToolConfig',
      transcriberConfig: 'TranscriberConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      businessUnitId: 'string',
      interactionConfig: CreateApplicationVersionRequestInteractionConfig,
      labelConfig: { 'type': 'array', 'itemType': CreateApplicationVersionRequestLabelConfig },
      ragConfig: CreateApplicationVersionRequestRagConfig,
      scriptProfile: CreateApplicationVersionRequestScriptProfile,
      sourceVersionId: 'string',
      synthesizerConfig: CreateApplicationVersionRequestSynthesizerConfig,
      toolConfig: CreateApplicationVersionRequestToolConfig,
      transcriberConfig: CreateApplicationVersionRequestTranscriberConfig,
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

