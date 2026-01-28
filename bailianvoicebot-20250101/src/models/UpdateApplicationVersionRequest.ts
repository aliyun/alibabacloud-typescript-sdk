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

export class UpdateApplicationVersionRequestSynthesizerConfig extends $dara.Model {
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
      nlsAccessType: 'NlsAccessType',
      nlsEngine: 'NlsEngine',
      pitchRate: 'PitchRate',
      speechRate: 'SpeechRate',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nlsAccessType: 'string',
      nlsEngine: 'string',
      pitchRate: 'number',
      speechRate: 'number',
      voice: 'string',
      volume: 'number',
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
      scriptProfile: 'ScriptProfile',
      synthesizerConfig: 'SynthesizerConfig',
      transcriberConfig: 'TranscriberConfig',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      businessUnitId: 'string',
      interactionConfig: UpdateApplicationVersionRequestInteractionConfig,
      scriptProfile: UpdateApplicationVersionRequestScriptProfile,
      synthesizerConfig: UpdateApplicationVersionRequestSynthesizerConfig,
      transcriberConfig: UpdateApplicationVersionRequestTranscriberConfig,
      versionId: 'string',
    };
  }

  validate() {
    if(this.interactionConfig && typeof (this.interactionConfig as any).validate === 'function') {
      (this.interactionConfig as any).validate();
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

