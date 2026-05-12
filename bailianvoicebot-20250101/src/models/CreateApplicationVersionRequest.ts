// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationVersionRequestInteractionConfigSilenceDetectionConfig extends $dara.Model {
  /**
   * @example
   * 5
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

export class CreateApplicationVersionRequestInteractionConfig extends $dara.Model {
  silenceDetectionConfig?: CreateApplicationVersionRequestInteractionConfigSilenceDetectionConfig;
  static names(): { [key: string]: string } {
    return {
      silenceDetectionConfig: 'SilenceDetectionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      silenceDetectionConfig: CreateApplicationVersionRequestInteractionConfigSilenceDetectionConfig,
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

export class CreateApplicationVersionRequestScriptProfile extends $dara.Model {
  agentProfile?: CreateApplicationVersionRequestScriptProfileAgentProfile;
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
      agentProfile: CreateApplicationVersionRequestScriptProfileAgentProfile,
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
   * 50
   */
  pitchRate?: number;
  pronRules?: CreateApplicationVersionRequestSynthesizerConfigPronRules[];
  /**
   * @example
   * -156
   */
  speechRate?: number;
  /**
   * @example
   * aiqi
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

export class CreateApplicationVersionRequestTranscriberConfig extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      nlsAccessType: 'NlsAccessType',
      nlsEngine: 'NlsEngine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nlsAccessType: 'string',
      nlsEngine: 'string',
    };
  }

  validate() {
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
  interactionConfig?: CreateApplicationVersionRequestInteractionConfig;
  ragConfig?: CreateApplicationVersionRequestRagConfig;
  scriptProfile?: CreateApplicationVersionRequestScriptProfile;
  /**
   * @example
   * 20904943-f711-494f-9f1f-e7f340f37707
   */
  sourceVersionId?: string;
  synthesizerConfig?: CreateApplicationVersionRequestSynthesizerConfig;
  transcriberConfig?: CreateApplicationVersionRequestTranscriberConfig;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      businessUnitId: 'BusinessUnitId',
      interactionConfig: 'InteractionConfig',
      ragConfig: 'RagConfig',
      scriptProfile: 'ScriptProfile',
      sourceVersionId: 'SourceVersionId',
      synthesizerConfig: 'SynthesizerConfig',
      transcriberConfig: 'TranscriberConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      businessUnitId: 'string',
      interactionConfig: CreateApplicationVersionRequestInteractionConfig,
      ragConfig: CreateApplicationVersionRequestRagConfig,
      scriptProfile: CreateApplicationVersionRequestScriptProfile,
      sourceVersionId: 'string',
      synthesizerConfig: CreateApplicationVersionRequestSynthesizerConfig,
      transcriberConfig: CreateApplicationVersionRequestTranscriberConfig,
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
    if(this.transcriberConfig && typeof (this.transcriberConfig as any).validate === 'function') {
      (this.transcriberConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

