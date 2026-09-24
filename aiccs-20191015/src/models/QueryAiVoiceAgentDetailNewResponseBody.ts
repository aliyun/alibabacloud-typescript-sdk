// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiVoiceAgentDetailNewResponseBodyDataAgentCallConfigEventConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to hang up when intelligent answering is detected.
   * 
   * @example
   * false
   */
  callAssistantHangup?: boolean;
  /**
   * @remarks
   * Specifies whether intelligent answering recognition is enabled.
   * 
   * @example
   * true
   */
  callAssistantRecognize?: boolean;
  /**
   * @remarks
   * Specifies whether the first silence event triggers the model.
   * 
   * @example
   * true
   */
  muteActive?: boolean;
  /**
   * @remarks
   * The silence duration in seconds. Minimum: 3s. Maximum: 15s.
   * 
   * @example
   * 5
   */
  muteDuration?: number;
  /**
   * @remarks
   * The number of consecutive silence events before the call is automatically hung up. Minimum: 1. Maximum: 5.
   * 
   * @example
   * 1
   */
  muteHangupNum?: number;
  /**
   * @remarks
   * The maximum call duration in seconds. Minimum: 600s. Maximum: 3600s. The call is automatically hung up after the timeout.
   * 
   * @example
   * 1000
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
   * @remarks
   * The called number.
   * 
   * @example
   * 123111122222
   */
  calledNumber?: string;
  /**
   * @remarks
   * The caller number.
   * 
   * @example
   * 123111122222
   */
  callerNumber?: string;
  /**
   * @remarks
   * The caller number type.
   * 
   * @example
   * 48
   */
  callerNumberType?: number;
  /**
   * @remarks
   * The answering party number, such as a user mobile number, customer service agent number, or robot number.
   * 
   * @example
   * 123111122222
   */
  callingNumber?: string;
  /**
   * @remarks
   * The called number type.
   * 
   * @example
   * 1
   */
  callingNumberType?: number;
  /**
   * @remarks
   * The customer line code.
   * 
   * @example
   * 123
   */
  customerRouteCode?: string;
  /**
   * @remarks
   * Specifies whether the feature is enabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The supplementary information.
   * 
   * @example
   * Additional information for the agent
   */
  extraInfo?: string;
  /**
   * @remarks
   * The prompt displayed when the transfer to a human agent fails.
   * 
   * @example
   * Failure description
   */
  failureContent?: string;
  /**
   * @remarks
   * The agent line code.
   * 
   * @example
   * SEAT_CTI_A_NET
   */
  seatRouteCode?: string;
  /**
   * @remarks
   * The agent line name.
   * 
   * @example
   * Human agent
   */
  seatRouteName?: string;
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * 123
   */
  transferBizId?: string;
  /**
   * @remarks
   * The prompt displayed when the call is transferred to a human agent.
   * 
   * @example
   * Prompt message
   */
  transferContent?: string;
  /**
   * @remarks
   * The transfer-to-agent type.
   * 
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
   * @remarks
   * Specifies whether background sound is enabled.
   * 
   * @example
   * true
   */
  backgroundEnabled?: boolean;
  /**
   * @remarks
   * The background sound ID.
   * 
   * @example
   * 17
   */
  backgroundSound?: number;
  /**
   * @remarks
   * The background sound volume. Valid values: 0: low. 1: medium. 2: high.
   * 
   * @example
   * 1
   */
  backgroundVolume?: number;
  /**
   * @remarks
   * The third-party voice platform account.
   * 
   * @example
   * 75
   */
  customerAccountId?: number;
  /**
   * @remarks
   * Specifies whether audio mixing is enabled.
   * 
   * @example
   * true
   */
  mixingEnabled?: boolean;
  /**
   * @remarks
   * The audio mixing template ID.
   * 
   * @example
   * 1
   */
  mixingTemplate?: number;
  /**
   * @remarks
   * The resource ID. This parameter is required only for third-party voices.
   * 
   * @example
   * voice-12345
   */
  resourceId?: string;
  /**
   * @remarks
   * The voice speed for TTS playback. Valid values: -200 to 200. Default value: 0.
   * 
   * @example
   * 0
   */
  ttsSpeed?: number;
  /**
   * @remarks
   * The voice style.
   * 
   * @example
   * longxiaoxia_v2p1
   */
  ttsStyle?: string;
  /**
   * @remarks
   * The volume for TTS playback. Valid values: 0 to 100.
   * 
   * @example
   * 88
   */
  ttsVolume?: number;
  /**
   * @remarks
   * The voice code.
   * 
   * @example
   * V123ABC00
   */
  voiceCode?: string;
  /**
   * @remarks
   * The TTS voice type. Valid values:
   * 
   * `VOICE_TYPE_SYSTEM`: system voice.
   * 
   * `VOICE_TYPE_CLONE`: cloned voice.
   * 
   * `VOICE_TYPE_DOUBAO`: Doubao voice.
   * 
   * `VOICE_TYPE_MINIMAX`: Minimax voice.
   * 
   * `VOICE_TYPE_OPENTTS`: open voice.
   * 
   * `VOICE_TYPE_BL_CUSTOM`: custom premium cloned voice.
   * 
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
  /**
   * @remarks
   * The event configuration.
   */
  eventConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataAgentCallConfigEventConfig;
  /**
   * @remarks
   * The opening statement.
   * 
   * @example
   * Hello, this is ******
   */
  prologue?: string;
  /**
   * @remarks
   * The URL of the opening statement recording audio file. This parameter has a value only when StartWordType is set to 1.
   * 
   * @example
   * /oss-file-key
   */
  recordingFile?: string;
  /**
   * @remarks
   * The opening statement type. 0: text. 1: recording.
   * 
   * @example
   * 1
   */
  startWordType?: number;
  /**
   * @remarks
   * The transfer-to-agent configuration.
   */
  transferConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataAgentCallConfigTransferConfig;
  /**
   * @remarks
   * The TTS configuration.
   */
  ttsConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataAgentCallConfigTtsConfig;
  /**
   * @remarks
   * The hot word library ID.
   * 
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
   * @remarks
   * Specifies whether AI-assisted building is enabled.
   * 
   * @example
   * false
   */
  aiGenerate?: boolean;
  /**
   * @remarks
   * The basic task configuration.
   * 
   * @example
   * Conduct product marketing and introduce advantages and features
   */
  basicTaskDescription?: string;
  /**
   * @remarks
   * The business scenario.
   * 
   * @example
   * 1
   */
  businessType?: number;
  /**
   * @remarks
   * The core objective.
   * 
   * @example
   * Sales lead conversion
   */
  coreTarget?: string;
  /**
   * @remarks
   * The system role.
   * 
   * @example
   * Sales
   */
  sysRole?: string;
  /**
   * @remarks
   * The user role.
   * 
   * @example
   * Potential customer
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
   * @remarks
   * The knowledge base ID.
   * 
   * @example
   * 68
   */
  knowledgeId?: number;
  /**
   * @remarks
   * The knowledge base name.
   * 
   * @example
   * Product knowledge base
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
   * @remarks
   * The RAG retrieval description.
   * 
   * @example
   * Knowledge base retrieval
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether RAG retrieval is enabled.
   * 
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
  /**
   * @remarks
   * The collection of knowledge bases.
   */
  knowledgeIds?: QueryAiVoiceAgentDetailNewResponseBodyDataKnowledgeConfigKnowledgeIds[];
  /**
   * @remarks
   * The RAG configuration.
   */
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
   * @remarks
   * The description.
   * 
   * @example
   * gender
   */
  description?: string;
  /**
   * @remarks
   * The label ID.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The label value.
   * 
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
   * @remarks
   * The call variable ID.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The available values for the call variable label.
   */
  phoneTagEnum?: QueryAiVoiceAgentDetailNewResponseBodyDataPhoneTagConfigPhoneTagEnum[];
  /**
   * @remarks
   * The key name of the call variable.
   * 
   * @example
   * gender
   */
  phoneTagKey?: string;
  /**
   * @remarks
   * The description of the call variable.
   * 
   * @example
   * User gender
   */
  phoneTagName?: string;
  /**
   * @remarks
   * Indicates whether the call variable is required.
   * 
   * @example
   * false
   */
  phoneTagRequired?: boolean;
  /**
   * @remarks
   * The source of the call variable.
   * 
   * @example
   * MANUAL_CREATE
   */
  phoneTagSource?: string;
  /**
   * @remarks
   * The type of the call variable. Valid values: TEXT (text type) and ENUM (enumeration type).
   * 
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
   * @remarks
   * The description.
   * 
   * @example
   * Tag description
   */
  desc?: string;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * Tag1
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
  /**
   * @remarks
   * The default fallback tag information.
   */
  defaultTag?: QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigCallResultTagConfigDefaultTag;
  /**
   * @remarks
   * The mapping between call results and tags.
   */
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
   * @remarks
   * The description of the available value.
   * 
   * @example
   * Description of the tag value
   */
  description?: string;
  /**
   * @remarks
   * The unique ID of the label.
   * 
   * @example
   * tag_12345
   */
  id?: string;
  /**
   * @remarks
   * The available value.
   * 
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
   * @remarks
   * The main intent ID.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The description of the main intent.
   * 
   * @example
   * Description of the main intent
   */
  mainPurposeDescription?: string;
  /**
   * @remarks
   * The available values for the main intent.
   */
  mainPurposeEnum?: QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigMainPurposeMainPurposeEnum[];
  /**
   * @remarks
   * The name of the main intent.
   * 
   * @example
   * Customer inquiry handling
   */
  mainPurposeName?: string;
  /**
   * @remarks
   * The value type of the main intent. Valid values: TEXT (text type) and ENUM (enumeration type).
   * 
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
   * @remarks
   * The tag description.
   * 
   * @example
   * The user has a high willingness to purchase
   */
  description?: string;
  /**
   * @remarks
   * The tag ID.
   * 
   * @example
   * 10
   */
  id?: string;
  /**
   * @remarks
   * The tag enumeration value.
   * 
   * @example
   * High willingness
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
   * @remarks
   * The output tag ID.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The description of the output tag.
   * 
   * @example
   * The user\\"s willingness to purchase the product
   */
  outputTagDescription?: string;
  /**
   * @remarks
   * The available options for the output tag.
   */
  outputTagEnum?: QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigOutputTagConfigOutputTagEnum[];
  /**
   * @remarks
   * The name of the output tag.
   * 
   * @example
   * Purchase willingness
   */
  outputTagName?: string;
  /**
   * @remarks
   * The value type of the output tag. Valid values: TEXT (text type) and ENUM (enumeration type).
   * 
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
  /**
   * @remarks
   * The call result tag mapping configuration.
   */
  callResultTagConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigCallResultTagConfig;
  /**
   * @remarks
   * The main intent.
   */
  mainPurpose?: QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigMainPurpose;
  /**
   * @remarks
   * The output tag configurations.
   */
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
  /**
   * @remarks
   * The intelligent outbound voice call configuration.
   */
  agentCallConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataAgentCallConfig;
  /**
   * @remarks
   * The agent business requirement configuration.
   */
  agentDemandConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataAgentDemandConfig;
  /**
   * @remarks
   * The agent description.
   * 
   * @example
   * Used for daily testing
   */
  agentDesc?: string;
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * 3021893791
   */
  agentId?: number;
  /**
   * @remarks
   * The building method. Valid values:
   * - 0: prompt mode.
   * - 1: dialog flow mode.
   * 
   * @example
   * 1
   */
  agentMode?: number;
  /**
   * @remarks
   * The agent name.
   * 
   * @example
   * Test agent
   */
  agentName?: string;
  /**
   * @remarks
   * The deployment status. Valid values:
   * - 0: not effective (NOT_EFFECT).
   * - 1: effective (EFFECT).
   * 
   * @example
   * 1
   */
  branchDeployStatus?: number;
  /**
   * @remarks
   * The branch description.
   * 
   * @example
   * Default branch
   */
  branchDesc?: string;
  /**
   * @remarks
   * The branch ID.
   * 
   * @example
   * 18
   */
  branchId?: number;
  /**
   * @remarks
   * The branch name.
   * 
   * @example
   * Default version
   */
  branchName?: string;
  /**
   * @remarks
   * The knowledge base configuration.
   */
  knowledgeConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataKnowledgeConfig;
  /**
   * @remarks
   * The call variable configurations.
   */
  phoneTagConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataPhoneTagConfig[];
  /**
   * @remarks
   * The scenario.
   * 
   * @example
   * Personal customer lead conversion
   */
  scene?: string;
  /**
   * @remarks
   * The service direction.
   * 
   * @example
   * 示例值示例值
   */
  serviceDirection?: string;
  /**
   * @remarks
   * The call summary configuration.
   */
  summaryConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfig;
  /**
   * @remarks
   * The version description.
   * 
   * @example
   * Test first version
   */
  versionDesc?: string;
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * 89
   */
  versionId?: number;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * Test version 1
   */
  versionName?: string;
  /**
   * @remarks
   * The version publish status. Valid values:
   * - 0: Not published.
   * - 1: Published.
   * - 2: Draft.
   * 
   * @example
   * 1
   */
  versionPublishStatus?: number;
  /**
   * @remarks
   * The most recent publish time of the version. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-01-15 10:30:00
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
      serviceDirection: 'ServiceDirection',
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
      serviceDirection: 'string',
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
   * @remarks
   * The detailed reason why access was denied.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The agent details.
   */
  data?: QueryAiVoiceAgentDetailNewResponseBodyData;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 742C9243-2870-B8D6-0C68-C12345AABBCC0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
   * 
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

