// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiVoiceAgentDetailNewResponseBodyDataAgentCallConfigEventConfig extends $dara.Model {
  /**
   * @example
   * false
   */
  callAssistantHangup?: boolean;
  /**
   * @example
   * true
   */
  callAssistantRecognize?: boolean;
  /**
   * @example
   * true
   */
  muteActive?: boolean;
  /**
   * @example
   * 63
   */
  muteDuration?: number;
  /**
   * @example
   * 70
   */
  muteHangupNum?: number;
  /**
   * @example
   * 50
   */
  sessionTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      callAssistantHangup: 'CallAssistantHangup',
      callAssistantRecognize: 'CallAssistantRecognize',
      muteActive: 'MuteActive',
      muteDuration: 'MuteDuration',
      muteHangupNum: 'MuteHangupNum',
      sessionTimeout: 'SessionTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callAssistantHangup: 'boolean',
      callAssistantRecognize: 'boolean',
      muteActive: 'boolean',
      muteDuration: 'number',
      muteHangupNum: 'number',
      sessionTimeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailNewResponseBodyDataAgentCallConfigTransferConfig extends $dara.Model {
  /**
   * @example
   * 123111122222
   */
  calledNumber?: string;
  /**
   * @example
   * 123111122222
   */
  callerNumber?: string;
  /**
   * @example
   * 48
   */
  callerNumberType?: number;
  /**
   * @example
   * 123111122222
   */
  callingNumber?: string;
  /**
   * @example
   * 1
   */
  callingNumberType?: number;
  /**
   * @example
   * 123
   */
  customerRouteCode?: string;
  /**
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @example
   * Additional information for the agent
   */
  extraInfo?: string;
  /**
   * @example
   * 示例值示例值
   */
  failureContent?: string;
  /**
   * @example
   * 123
   */
  seatRouteCode?: string;
  /**
   * @example
   * 示例值
   */
  seatRouteName?: string;
  /**
   * @example
   * 123
   */
  transferBizId?: string;
  /**
   * @example
   * 示例值示例值
   */
  transferContent?: string;
  /**
   * @example
   * 73
   */
  transferType?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callerNumber: 'CallerNumber',
      callerNumberType: 'CallerNumberType',
      callingNumber: 'CallingNumber',
      callingNumberType: 'CallingNumberType',
      customerRouteCode: 'CustomerRouteCode',
      enabled: 'Enabled',
      extraInfo: 'ExtraInfo',
      failureContent: 'FailureContent',
      seatRouteCode: 'SeatRouteCode',
      seatRouteName: 'SeatRouteName',
      transferBizId: 'TransferBizId',
      transferContent: 'TransferContent',
      transferType: 'TransferType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callerNumber: 'string',
      callerNumberType: 'number',
      callingNumber: 'string',
      callingNumberType: 'number',
      customerRouteCode: 'string',
      enabled: 'boolean',
      extraInfo: 'string',
      failureContent: 'string',
      seatRouteCode: 'string',
      seatRouteName: 'string',
      transferBizId: 'string',
      transferContent: 'string',
      transferType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailNewResponseBodyDataAgentCallConfigTtsConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  backgroundEnabled?: boolean;
  /**
   * @example
   * 17
   */
  backgroundSound?: number;
  /**
   * @example
   * 33
   */
  backgroundVolume?: number;
  /**
   * @example
   * 75
   */
  customerAccountId?: number;
  /**
   * @example
   * true
   */
  mixingEnabled?: boolean;
  /**
   * @example
   * 57
   */
  mixingTemplate?: number;
  /**
   * @example
   * voice-12345
   */
  resourceId?: string;
  /**
   * @example
   * 24
   */
  ttsSpeed?: number;
  /**
   * @example
   * longxiaoxia_v2p1
   */
  ttsStyle?: string;
  /**
   * @example
   * 88
   */
  ttsVolume?: number;
  /**
   * @example
   * V123ABC00
   */
  voiceCode?: string;
  /**
   * @example
   * VOICE_TYPE_SYSTEM
   */
  voiceType?: boolean;
  static names(): { [key: string]: string } {
    return {
      backgroundEnabled: 'BackgroundEnabled',
      backgroundSound: 'BackgroundSound',
      backgroundVolume: 'BackgroundVolume',
      customerAccountId: 'CustomerAccountId',
      mixingEnabled: 'MixingEnabled',
      mixingTemplate: 'MixingTemplate',
      resourceId: 'ResourceId',
      ttsSpeed: 'TtsSpeed',
      ttsStyle: 'TtsStyle',
      ttsVolume: 'TtsVolume',
      voiceCode: 'VoiceCode',
      voiceType: 'VoiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundEnabled: 'boolean',
      backgroundSound: 'number',
      backgroundVolume: 'number',
      customerAccountId: 'number',
      mixingEnabled: 'boolean',
      mixingTemplate: 'number',
      resourceId: 'string',
      ttsSpeed: 'number',
      ttsStyle: 'string',
      ttsVolume: 'number',
      voiceCode: 'string',
      voiceType: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailNewResponseBodyDataAgentCallConfig extends $dara.Model {
  eventConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataAgentCallConfigEventConfig;
  /**
   * @example
   * 示例值
   */
  prologue?: string;
  /**
   * @example
   * /oss-file-key
   */
  recordingFile?: string;
  /**
   * @example
   * 1
   */
  startWordType?: number;
  transferConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataAgentCallConfigTransferConfig;
  ttsConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataAgentCallConfigTtsConfig;
  /**
   * @example
   * afb2c43**********83e6df30551c11f7
   */
  vocabId?: string;
  static names(): { [key: string]: string } {
    return {
      eventConfig: 'EventConfig',
      prologue: 'Prologue',
      recordingFile: 'RecordingFile',
      startWordType: 'StartWordType',
      transferConfig: 'TransferConfig',
      ttsConfig: 'TtsConfig',
      vocabId: 'VocabId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventConfig: QueryAiVoiceAgentDetailNewResponseBodyDataAgentCallConfigEventConfig,
      prologue: 'string',
      recordingFile: 'string',
      startWordType: 'number',
      transferConfig: QueryAiVoiceAgentDetailNewResponseBodyDataAgentCallConfigTransferConfig,
      ttsConfig: QueryAiVoiceAgentDetailNewResponseBodyDataAgentCallConfigTtsConfig,
      vocabId: 'string',
    };
  }

  validate() {
    if(this.eventConfig && typeof (this.eventConfig as any).validate === 'function') {
      (this.eventConfig as any).validate();
    }
    if(this.transferConfig && typeof (this.transferConfig as any).validate === 'function') {
      (this.transferConfig as any).validate();
    }
    if(this.ttsConfig && typeof (this.ttsConfig as any).validate === 'function') {
      (this.ttsConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailNewResponseBodyDataAgentDemandConfig extends $dara.Model {
  /**
   * @example
   * false
   */
  aiGenerate?: boolean;
  /**
   * @example
   * Basic task configuration for customer service
   */
  basicTaskDescription?: string;
  /**
   * @example
   * 53
   */
  businessType?: number;
  /**
   * @example
   * Improve customer service efficiency
   */
  coreTarget?: string;
  /**
   * @example
   * System administrator
   */
  sysRole?: string;
  /**
   * @example
   * End user
   */
  userRole?: string;
  static names(): { [key: string]: string } {
    return {
      aiGenerate: 'AiGenerate',
      basicTaskDescription: 'BasicTaskDescription',
      businessType: 'BusinessType',
      coreTarget: 'CoreTarget',
      sysRole: 'SysRole',
      userRole: 'UserRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiGenerate: 'boolean',
      basicTaskDescription: 'string',
      businessType: 'number',
      coreTarget: 'string',
      sysRole: 'string',
      userRole: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailNewResponseBodyDataKnowledgeConfigKnowledgeIds extends $dara.Model {
  /**
   * @example
   * 68
   */
  knowledgeId?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  knowledgeName?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeId: 'KnowledgeId',
      knowledgeName: 'KnowledgeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'number',
      knowledgeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailNewResponseBodyDataKnowledgeConfigRagConfig extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  description?: string;
  /**
   * @example
   * false
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailNewResponseBodyDataKnowledgeConfig extends $dara.Model {
  knowledgeIds?: QueryAiVoiceAgentDetailNewResponseBodyDataKnowledgeConfigKnowledgeIds[];
  ragConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataKnowledgeConfigRagConfig;
  static names(): { [key: string]: string } {
    return {
      knowledgeIds: 'KnowledgeIds',
      ragConfig: 'RagConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeIds: { 'type': 'array', 'itemType': QueryAiVoiceAgentDetailNewResponseBodyDataKnowledgeConfigKnowledgeIds },
      ragConfig: QueryAiVoiceAgentDetailNewResponseBodyDataKnowledgeConfigRagConfig,
    };
  }

  validate() {
    if(Array.isArray(this.knowledgeIds)) {
      $dara.Model.validateArray(this.knowledgeIds);
    }
    if(this.ragConfig && typeof (this.ragConfig as any).validate === 'function') {
      (this.ragConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailNewResponseBodyDataPhoneTagConfigPhoneTagEnum extends $dara.Model {
  /**
   * @example
   * gender
   */
  description?: string;
  /**
   * @example
   * 123
   */
  id?: string;
  /**
   * @example
   * male
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailNewResponseBodyDataPhoneTagConfig extends $dara.Model {
  /**
   * @example
   * 123
   */
  id?: string;
  phoneTagEnum?: QueryAiVoiceAgentDetailNewResponseBodyDataPhoneTagConfigPhoneTagEnum[];
  /**
   * @example
   * gender
   */
  phoneTagKey?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  phoneTagName?: string;
  /**
   * @example
   * false
   */
  phoneTagRequired?: boolean;
  /**
   * @example
   * 示例值示例值示例值
   */
  phoneTagSource?: string;
  /**
   * @example
   * ENUM
   */
  phoneTagType?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      phoneTagEnum: 'PhoneTagEnum',
      phoneTagKey: 'PhoneTagKey',
      phoneTagName: 'PhoneTagName',
      phoneTagRequired: 'PhoneTagRequired',
      phoneTagSource: 'PhoneTagSource',
      phoneTagType: 'PhoneTagType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      phoneTagEnum: { 'type': 'array', 'itemType': QueryAiVoiceAgentDetailNewResponseBodyDataPhoneTagConfigPhoneTagEnum },
      phoneTagKey: 'string',
      phoneTagName: 'string',
      phoneTagRequired: 'boolean',
      phoneTagSource: 'string',
      phoneTagType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.phoneTagEnum)) {
      $dara.Model.validateArray(this.phoneTagEnum);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigCallResultTagConfigDefaultTag extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  desc?: string;
  /**
   * @example
   * 示例值
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigCallResultTagConfig extends $dara.Model {
  defaultTag?: QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigCallResultTagConfigDefaultTag;
  mappingTag?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      defaultTag: 'DefaultTag',
      mappingTag: 'MappingTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultTag: QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigCallResultTagConfigDefaultTag,
      mappingTag: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.defaultTag && typeof (this.defaultTag as any).validate === 'function') {
      (this.defaultTag as any).validate();
    }
    if(this.mappingTag) {
      $dara.Model.validateMap(this.mappingTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigMainPurposeMainPurposeEnum extends $dara.Model {
  /**
   * @example
   * Description of the tag value
   */
  description?: string;
  /**
   * @example
   * tag_12345
   */
  id?: string;
  /**
   * @example
   * Tag value example
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigMainPurpose extends $dara.Model {
  /**
   * @example
   * 123
   */
  id?: string;
  /**
   * @example
   * Description of the main intent
   */
  mainPurposeDescription?: string;
  mainPurposeEnum?: QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigMainPurposeMainPurposeEnum[];
  /**
   * @example
   * Customer inquiry handling
   */
  mainPurposeName?: string;
  /**
   * @example
   * ENUM
   */
  mainPurposeType?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      mainPurposeDescription: 'MainPurposeDescription',
      mainPurposeEnum: 'MainPurposeEnum',
      mainPurposeName: 'MainPurposeName',
      mainPurposeType: 'MainPurposeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      mainPurposeDescription: 'string',
      mainPurposeEnum: { 'type': 'array', 'itemType': QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigMainPurposeMainPurposeEnum },
      mainPurposeName: 'string',
      mainPurposeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mainPurposeEnum)) {
      $dara.Model.validateArray(this.mainPurposeEnum);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigOutputTagConfigOutputTagEnum extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  description?: string;
  /**
   * @example
   * 10
   */
  id?: string;
  /**
   * @example
   * 示例值示例值
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigOutputTagConfig extends $dara.Model {
  /**
   * @example
   * 123
   */
  id?: string;
  /**
   * @example
   * 示例值示例值
   */
  outputTagDescription?: string;
  outputTagEnum?: QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigOutputTagConfigOutputTagEnum[];
  /**
   * @example
   * 示例值示例值示例值
   */
  outputTagName?: string;
  /**
   * @example
   * ENUM
   */
  outputTagType?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      outputTagDescription: 'OutputTagDescription',
      outputTagEnum: 'OutputTagEnum',
      outputTagName: 'OutputTagName',
      outputTagType: 'OutputTagType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      outputTagDescription: 'string',
      outputTagEnum: { 'type': 'array', 'itemType': QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigOutputTagConfigOutputTagEnum },
      outputTagName: 'string',
      outputTagType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.outputTagEnum)) {
      $dara.Model.validateArray(this.outputTagEnum);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfig extends $dara.Model {
  callResultTagConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigCallResultTagConfig;
  mainPurpose?: QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigMainPurpose;
  outputTagConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigOutputTagConfig[];
  static names(): { [key: string]: string } {
    return {
      callResultTagConfig: 'CallResultTagConfig',
      mainPurpose: 'MainPurpose',
      outputTagConfig: 'OutputTagConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callResultTagConfig: QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigCallResultTagConfig,
      mainPurpose: QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigMainPurpose,
      outputTagConfig: { 'type': 'array', 'itemType': QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigOutputTagConfig },
    };
  }

  validate() {
    if(this.callResultTagConfig && typeof (this.callResultTagConfig as any).validate === 'function') {
      (this.callResultTagConfig as any).validate();
    }
    if(this.mainPurpose && typeof (this.mainPurpose as any).validate === 'function') {
      (this.mainPurpose as any).validate();
    }
    if(Array.isArray(this.outputTagConfig)) {
      $dara.Model.validateArray(this.outputTagConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailNewResponseBodyData extends $dara.Model {
  agentCallConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataAgentCallConfig;
  agentDemandConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataAgentDemandConfig;
  /**
   * @example
   * 示例值示例值
   */
  agentDesc?: string;
  /**
   * @example
   * 3021893791
   */
  agentId?: number;
  /**
   * @example
   * 33
   */
  agentMode?: number;
  /**
   * @example
   * 示例值示例值
   */
  agentName?: string;
  /**
   * @example
   * 24
   */
  branchDeployStatus?: number;
  /**
   * @example
   * 示例值
   */
  branchDesc?: string;
  /**
   * @example
   * 18
   */
  branchId?: number;
  /**
   * @example
   * 示例值
   */
  branchName?: string;
  knowledgeConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataKnowledgeConfig;
  phoneTagConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataPhoneTagConfig[];
  /**
   * @example
   * Customer service scenario
   */
  scene?: string;
  summaryConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfig;
  /**
   * @example
   * 示例值示例值示例值
   */
  versionDesc?: string;
  /**
   * @example
   * 89
   */
  versionId?: number;
  /**
   * @example
   * 示例值
   */
  versionName?: string;
  /**
   * @example
   * 1
   */
  versionPublishStatus?: number;
  /**
   * @example
   * 2024-01-15T10:30:00Z
   */
  versionPublishTime?: string;
  static names(): { [key: string]: string } {
    return {
      agentCallConfig: 'AgentCallConfig',
      agentDemandConfig: 'AgentDemandConfig',
      agentDesc: 'AgentDesc',
      agentId: 'AgentId',
      agentMode: 'AgentMode',
      agentName: 'AgentName',
      branchDeployStatus: 'BranchDeployStatus',
      branchDesc: 'BranchDesc',
      branchId: 'BranchId',
      branchName: 'BranchName',
      knowledgeConfig: 'KnowledgeConfig',
      phoneTagConfig: 'PhoneTagConfig',
      scene: 'Scene',
      summaryConfig: 'SummaryConfig',
      versionDesc: 'VersionDesc',
      versionId: 'VersionId',
      versionName: 'VersionName',
      versionPublishStatus: 'VersionPublishStatus',
      versionPublishTime: 'VersionPublishTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentCallConfig: QueryAiVoiceAgentDetailNewResponseBodyDataAgentCallConfig,
      agentDemandConfig: QueryAiVoiceAgentDetailNewResponseBodyDataAgentDemandConfig,
      agentDesc: 'string',
      agentId: 'number',
      agentMode: 'number',
      agentName: 'string',
      branchDeployStatus: 'number',
      branchDesc: 'string',
      branchId: 'number',
      branchName: 'string',
      knowledgeConfig: QueryAiVoiceAgentDetailNewResponseBodyDataKnowledgeConfig,
      phoneTagConfig: { 'type': 'array', 'itemType': QueryAiVoiceAgentDetailNewResponseBodyDataPhoneTagConfig },
      scene: 'string',
      summaryConfig: QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfig,
      versionDesc: 'string',
      versionId: 'number',
      versionName: 'string',
      versionPublishStatus: 'number',
      versionPublishTime: 'string',
    };
  }

  validate() {
    if(this.agentCallConfig && typeof (this.agentCallConfig as any).validate === 'function') {
      (this.agentCallConfig as any).validate();
    }
    if(this.agentDemandConfig && typeof (this.agentDemandConfig as any).validate === 'function') {
      (this.agentDemandConfig as any).validate();
    }
    if(this.knowledgeConfig && typeof (this.knowledgeConfig as any).validate === 'function') {
      (this.knowledgeConfig as any).validate();
    }
    if(Array.isArray(this.phoneTagConfig)) {
      $dara.Model.validateArray(this.phoneTagConfig);
    }
    if(this.summaryConfig && typeof (this.summaryConfig as any).validate === 'function') {
      (this.summaryConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailNewResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: QueryAiVoiceAgentDetailNewResponseBodyData;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @example
   * 742C9243-2870-B8D6-0C68-C60BEB2DF09A
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: QueryAiVoiceAgentDetailNewResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

