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

export class CreateApplicationVersionRequestSynthesizerConfig extends $dara.Model {
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

