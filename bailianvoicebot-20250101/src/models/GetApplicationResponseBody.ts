// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationResponseBodyDataDraftVersionInteractionConfigSilenceDetectionConfig extends $dara.Model {
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

export class GetApplicationResponseBodyDataDraftVersionInteractionConfig extends $dara.Model {
  silenceDetectionConfig?: GetApplicationResponseBodyDataDraftVersionInteractionConfigSilenceDetectionConfig;
  static names(): { [key: string]: string } {
    return {
      silenceDetectionConfig: 'SilenceDetectionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      silenceDetectionConfig: GetApplicationResponseBodyDataDraftVersionInteractionConfigSilenceDetectionConfig,
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

export class GetApplicationResponseBodyDataDraftVersionScriptProfileAgentProfile extends $dara.Model {
  /**
   * @example
   * 6a50b67072d44788951de29758432d94
   */
  agentProfileId?: string;
  description?: string;
  promptsJson?: string;
  /**
   * @example
   * SFM_PROMPTS_DEFAULT
   */
  scriptProfileTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      agentProfileId: 'AgentProfileId',
      description: 'Description',
      promptsJson: 'PromptsJson',
      scriptProfileTemplateId: 'ScriptProfileTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProfileId: 'string',
      description: 'string',
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

export class GetApplicationResponseBodyDataDraftVersionScriptProfile extends $dara.Model {
  agentProfile?: GetApplicationResponseBodyDataDraftVersionScriptProfileAgentProfile;
  /**
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @example
   * 0.8
   */
  temperature?: string;
  /**
   * @example
   * 0.1
   */
  topP?: string;
  static names(): { [key: string]: string } {
    return {
      agentProfile: 'AgentProfile',
      model: 'Model',
      temperature: 'Temperature',
      topP: 'TopP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProfile: GetApplicationResponseBodyDataDraftVersionScriptProfileAgentProfile,
      model: 'string',
      temperature: 'string',
      topP: 'string',
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

export class GetApplicationResponseBodyDataDraftVersionSynthesizerConfig extends $dara.Model {
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
   * 5
   */
  pitchRate?: number;
  /**
   * @example
   * 1
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

export class GetApplicationResponseBodyDataDraftVersionTranscriberConfig extends $dara.Model {
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

export class GetApplicationResponseBodyDataDraftVersion extends $dara.Model {
  interactionConfig?: GetApplicationResponseBodyDataDraftVersionInteractionConfig;
  scriptProfile?: GetApplicationResponseBodyDataDraftVersionScriptProfile;
  synthesizerConfig?: GetApplicationResponseBodyDataDraftVersionSynthesizerConfig;
  transcriberConfig?: GetApplicationResponseBodyDataDraftVersionTranscriberConfig;
  /**
   * @example
   * 743219815472857088
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      interactionConfig: 'InteractionConfig',
      scriptProfile: 'ScriptProfile',
      synthesizerConfig: 'SynthesizerConfig',
      transcriberConfig: 'TranscriberConfig',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interactionConfig: GetApplicationResponseBodyDataDraftVersionInteractionConfig,
      scriptProfile: GetApplicationResponseBodyDataDraftVersionScriptProfile,
      synthesizerConfig: GetApplicationResponseBodyDataDraftVersionSynthesizerConfig,
      transcriberConfig: GetApplicationResponseBodyDataDraftVersionTranscriberConfig,
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

export class GetApplicationResponseBodyDataPublishedVersionInteractionConfigSilenceDetectionConfig extends $dara.Model {
  /**
   * @example
   * 30
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

export class GetApplicationResponseBodyDataPublishedVersionInteractionConfig extends $dara.Model {
  silenceDetectionConfig?: GetApplicationResponseBodyDataPublishedVersionInteractionConfigSilenceDetectionConfig;
  static names(): { [key: string]: string } {
    return {
      silenceDetectionConfig: 'SilenceDetectionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      silenceDetectionConfig: GetApplicationResponseBodyDataPublishedVersionInteractionConfigSilenceDetectionConfig,
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

export class GetApplicationResponseBodyDataPublishedVersionScriptProfileAgentProfile extends $dara.Model {
  /**
   * @example
   * b97b6822dd624c32b6c2a54d717db718
   */
  agentProfileId?: string;
  description?: string;
  promptsJson?: string;
  /**
   * @example
   * SFM_PROMPTS_DEFAULT
   */
  scriptProfileTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      agentProfileId: 'AgentProfileId',
      description: 'Description',
      promptsJson: 'PromptsJson',
      scriptProfileTemplateId: 'ScriptProfileTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProfileId: 'string',
      description: 'string',
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

export class GetApplicationResponseBodyDataPublishedVersionScriptProfile extends $dara.Model {
  agentProfile?: GetApplicationResponseBodyDataPublishedVersionScriptProfileAgentProfile;
  /**
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @example
   * 0.8
   */
  temperature?: string;
  /**
   * @example
   * 0.1
   */
  topP?: string;
  static names(): { [key: string]: string } {
    return {
      agentProfile: 'AgentProfile',
      model: 'Model',
      temperature: 'Temperature',
      topP: 'TopP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProfile: GetApplicationResponseBodyDataPublishedVersionScriptProfileAgentProfile,
      model: 'string',
      temperature: 'string',
      topP: 'string',
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

export class GetApplicationResponseBodyDataPublishedVersionSynthesizerConfig extends $dara.Model {
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
   * 3
   */
  pitchRate?: number;
  /**
   * @example
   * -20
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

export class GetApplicationResponseBodyDataPublishedVersionTranscriberConfig extends $dara.Model {
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

export class GetApplicationResponseBodyDataPublishedVersion extends $dara.Model {
  interactionConfig?: GetApplicationResponseBodyDataPublishedVersionInteractionConfig;
  scriptProfile?: GetApplicationResponseBodyDataPublishedVersionScriptProfile;
  synthesizerConfig?: GetApplicationResponseBodyDataPublishedVersionSynthesizerConfig;
  transcriberConfig?: GetApplicationResponseBodyDataPublishedVersionTranscriberConfig;
  /**
   * @example
   * 47889c1f-dd3f-4ace-9587-a13a3563e678
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      interactionConfig: 'InteractionConfig',
      scriptProfile: 'ScriptProfile',
      synthesizerConfig: 'SynthesizerConfig',
      transcriberConfig: 'TranscriberConfig',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interactionConfig: GetApplicationResponseBodyDataPublishedVersionInteractionConfig,
      scriptProfile: GetApplicationResponseBodyDataPublishedVersionScriptProfile,
      synthesizerConfig: GetApplicationResponseBodyDataPublishedVersionSynthesizerConfig,
      transcriberConfig: GetApplicationResponseBodyDataPublishedVersionTranscriberConfig,
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

export class GetApplicationResponseBodyData extends $dara.Model {
  /**
   * @example
   * a395011f-a247-400f-bc69-28796749fd52
   */
  applicationId?: string;
  /**
   * @example
   * 10
   */
  concurrency?: number;
  /**
   * @example
   * 1730081561000
   */
  createdTime?: number;
  description?: string;
  draftVersion?: GetApplicationResponseBodyDataDraftVersion;
  name?: string;
  /**
   * @example
   * MANAGED
   */
  nluAccessType?: string;
  /**
   * @example
   * PROMPTS
   */
  nluEngine?: string;
  publishedVersion?: GetApplicationResponseBodyDataPublishedVersion;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: GetApplicationResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetApplicationResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

