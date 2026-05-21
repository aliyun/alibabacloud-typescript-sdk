// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationVersionRequestInteractionConfigSilenceDetectionConfig extends $dara.Model {
  /**
   * @example
   * 3
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateApplicationVersionRequestInteractionConfig extends $dara.Model {
  silenceDetectionConfig?: UpdateApplicationVersionRequestInteractionConfigSilenceDetectionConfig;
  static names(): { [key: string]: string } {
    return {
      silenceDetectionConfig: 'SilenceDetectionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      silenceDetectionConfig: UpdateApplicationVersionRequestInteractionConfigSilenceDetectionConfig,
    };
  }

  validate() {
    if(this.silenceDetectionConfig && typeof (this.silenceDetectionConfig as any).validate === 'function') {
      (this.silenceDetectionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationVersionRequestRagConfig extends $dara.Model {
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

export class UpdateApplicationVersionRequestScriptProfileAgentProfile extends $dara.Model {
  description?: string;
  name?: string;
  promptsJson?: string;
  /**
   * @example
   * SFM_PROMPTS_DEFAULT
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

export class UpdateApplicationVersionRequestScriptProfile extends $dara.Model {
  agentProfile?: UpdateApplicationVersionRequestScriptProfileAgentProfile;
  /**
   * @example
   * qwen-plus
   */
  model?: string;
  static names(): { [key: string]: string } {
    return {
      agentProfile: 'AgentProfile',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProfile: UpdateApplicationVersionRequestScriptProfileAgentProfile,
      model: 'string',
    };
  }

  validate() {
    if(this.agentProfile && typeof (this.agentProfile as any).validate === 'function') {
      (this.agentProfile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationVersionRequestSynthesizerConfigNlsAccessProfile extends $dara.Model {
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

export class UpdateApplicationVersionRequestSynthesizerConfigPronRules extends $dara.Model {
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

export class UpdateApplicationVersionRequestSynthesizerConfig extends $dara.Model {
  model?: string;
  nlsAccessProfile?: UpdateApplicationVersionRequestSynthesizerConfigNlsAccessProfile;
  /**
   * @example
   * MANAGED
   */
  nlsAccessType?: string;
  /**
   * @example
   * ALIYUN
   */
  nlsEngine?: string;
  /**
   * @example
   * 1
   */
  pitchRate?: number;
  pronRules?: UpdateApplicationVersionRequestSynthesizerConfigPronRules[];
  /**
   * @example
   * 3
   */
  speechRate?: number;
  /**
   * @example
   * aixia
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
      nlsAccessProfile: UpdateApplicationVersionRequestSynthesizerConfigNlsAccessProfile,
      nlsAccessType: 'string',
      nlsEngine: 'string',
      pitchRate: 'number',
      pronRules: { 'type': 'array', 'itemType': UpdateApplicationVersionRequestSynthesizerConfigPronRules },
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

export class UpdateApplicationVersionRequestToolConfigMcpServers extends $dara.Model {
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

export class UpdateApplicationVersionRequestToolConfig extends $dara.Model {
  mcpServers?: UpdateApplicationVersionRequestToolConfigMcpServers[];
  static names(): { [key: string]: string } {
    return {
      mcpServers: 'McpServers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpServers: { 'type': 'array', 'itemType': UpdateApplicationVersionRequestToolConfigMcpServers },
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

export class UpdateApplicationVersionRequestTranscriberConfigCorrectionRules extends $dara.Model {
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

export class UpdateApplicationVersionRequestTranscriberConfigNlsAccessProfile extends $dara.Model {
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

export class UpdateApplicationVersionRequestTranscriberConfig extends $dara.Model {
  correctionRules?: UpdateApplicationVersionRequestTranscriberConfigCorrectionRules[];
  customizationId?: string;
  endSilenceTimeout?: number;
  model?: string;
  nlsAccessProfile?: UpdateApplicationVersionRequestTranscriberConfigNlsAccessProfile;
  /**
   * @example
   * MANAGED
   */
  nlsAccessType?: string;
  /**
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
      correctionRules: { 'type': 'array', 'itemType': UpdateApplicationVersionRequestTranscriberConfigCorrectionRules },
      customizationId: 'string',
      endSilenceTimeout: 'number',
      model: 'string',
      nlsAccessProfile: UpdateApplicationVersionRequestTranscriberConfigNlsAccessProfile,
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

export class UpdateApplicationVersionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a395011f-a247-400f-bc69-28796749fd52
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-c11iig67g863rih8
   */
  businessUnitId?: string;
  interactionConfig?: UpdateApplicationVersionRequestInteractionConfig;
  ragConfig?: UpdateApplicationVersionRequestRagConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  scriptProfile?: UpdateApplicationVersionRequestScriptProfile;
  /**
   * **if can be null:**
   * true
   */
  synthesizerConfig?: UpdateApplicationVersionRequestSynthesizerConfig;
  toolConfig?: UpdateApplicationVersionRequestToolConfig;
  /**
   * **if can be null:**
   * true
   */
  transcriberConfig?: UpdateApplicationVersionRequestTranscriberConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20904943-f711-494f-9f1f-e7f340f37707
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      businessUnitId: 'BusinessUnitId',
      interactionConfig: 'InteractionConfig',
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
      applicationId: 'string',
      businessUnitId: 'string',
      interactionConfig: UpdateApplicationVersionRequestInteractionConfig,
      ragConfig: UpdateApplicationVersionRequestRagConfig,
      scriptProfile: UpdateApplicationVersionRequestScriptProfile,
      synthesizerConfig: UpdateApplicationVersionRequestSynthesizerConfig,
      toolConfig: UpdateApplicationVersionRequestToolConfig,
      transcriberConfig: UpdateApplicationVersionRequestTranscriberConfig,
      versionId: 'string',
    };
  }

  validate() {
    if(this.interactionConfig && typeof (this.interactionConfig as any).validate === 'function') {
      (this.interactionConfig as any).validate();
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

