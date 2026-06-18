// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiVoiceAgentDetailNewResponseBodyDataAgentCallConfigEventConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disconnect the call when an answering machine is detected.
   * 
   * @example
   * false
   */
  callAssistantHangup?: boolean;
  /**
   * @remarks
   * Specifies whether to enable answering machine detection.
   * 
   * @example
   * true
   */
  callAssistantRecognize?: boolean;
  /**
   * @remarks
   * Specifies whether to wake up the model upon the first mute event.
   * 
   * @example
   * true
   */
  muteActive?: boolean;
  /**
   * @remarks
   * The mute duration. Unit: seconds. Valid values: 3 to 15.
   * 
   * @example
   * 5
   */
  muteDuration?: number;
  /**
   * @remarks
   * The number of consecutive mute events that trigger an automatic disconnection. Valid values: 1 to 5.
   * 
   * @example
   * 1
   */
  muteHangupNum?: number;
  /**
   * @remarks
   * The maximum call duration. Unit: seconds. Valid values: 600 to 3600. The call is automatically disconnected if this duration is exceeded.
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
   * The type of the caller number.
   * 
   * @example
   * 48
   */
  callerNumberType?: number;
  /**
   * @remarks
   * The destination number for the transfer, such as the phone number of a customer service agent.
   * 
   * @example
   * 123111122222
   */
  callingNumber?: string;
  /**
   * @remarks
   * The type of the called number.
   * 
   * @example
   * 1
   */
  callingNumberType?: number;
  /**
   * @remarks
   * The customer route code.
   * 
   * @example
   * 123
   */
  customerRouteCode?: string;
  /**
   * @remarks
   * Specifies whether to enable call transfer.
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
   * The prompt that is played when the transfer to a manual agent fails.
   * 
   * @example
   * 失败说明
   */
  failureContent?: string;
  /**
   * @remarks
   * The agent route code.
   * 
   * @example
   * SEAT_CTI_A_NET
   */
  seatRouteCode?: string;
  /**
   * @remarks
   * The name of the agent route.
   * 
   * @example
   * 人工座席
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
   * The prompt that is played when the call is transferred to a manual agent.
   * 
   * @example
   * 提示语
   */
  transferContent?: string;
  /**
   * @remarks
   * The agent transfer type.
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
   * Specifies whether to enable background sound.
   * 
   * @example
   * true
   */
  backgroundEnabled?: boolean;
  /**
   * @remarks
   * The ID of the background sound.
   * 
   * @example
   * 17
   */
  backgroundSound?: number;
  /**
   * @remarks
   * The volume of the background sound. Valid values: `0` (low), `1` (medium), and `2` (high).
   * 
   * @example
   * 1
   */
  backgroundVolume?: number;
  /**
   * @remarks
   * The account of the third-party voice platform.
   * 
   * @example
   * 75
   */
  customerAccountId?: number;
  /**
   * @remarks
   * Specifies whether to enable audio mixing.
   * 
   * @example
   * true
   */
  mixingEnabled?: boolean;
  /**
   * @remarks
   * The ID of the audio mixing template.
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
   * The speech rate for TTS playback. Valid values: -200 to 200. Default value: 0.
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
   * The volume of TTS playback. Valid values: 0 to 100.
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
   * The type of the TTS voice. Valid values:
   * 
   * `VOICE_TYPE_SYSTEM`: a system voice.
   * 
   * `VOICE_TYPE_CLONE`: a cloned voice.
   * 
   * `VOICE_TYPE_DOUBAO`: a Doubao voice.
   * 
   * `VOICE_TYPE_MINIMAX`: a Minimax voice.
   * 
   * `VOICE_TYPE_OPENTTS`: an open voice.
   * 
   * `VOICE_TYPE_BL_CUSTOM`: a high-quality custom cloned voice.
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
   * The prologue.
   * 
   * @example
   * 你好，这里是******。
   */
  prologue?: string;
  /**
   * @remarks
   * The URL of the audio file for the prologue. This parameter is returned only when `StartWordType` is set to `1`.
   * 
   * @example
   * /oss-file-key
   */
  recordingFile?: string;
  /**
   * @remarks
   * The type of the prologue. Valid values: `0` (text) and `1` (recording).
   * 
   * @example
   * 1
   */
  startWordType?: number;
  /**
   * @remarks
   * The configuration for transferring the call to a manual agent.
   */
  transferConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataAgentCallConfigTransferConfig;
  /**
   * @remarks
   * The Text-to-Speech (TTS) configuration.
   */
  ttsConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataAgentCallConfigTtsConfig;
  /**
   * @remarks
   * The ID of the hotword vocabulary.
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
   * Specifies whether the agent was built with AI assistance.
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
   * 进行产品营销，介绍优势特点
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
   * 销售线索转化
   */
  coreTarget?: string;
  /**
   * @remarks
   * The system role.
   * 
   * @example
   * 销售
   */
  sysRole?: string;
  /**
   * @remarks
   * The user role.
   * 
   * @example
   * 潜在客户
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
   * The ID of the knowledge base.
   * 
   * @example
   * 68
   */
  knowledgeId?: number;
  /**
   * @remarks
   * The name of the knowledge base.
   * 
   * @example
   * 产品知识库
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
   * RAG retrieval description
   * 
   * @example
   * 知识库检索
   */
  description?: string;
  /**
   * @remarks
   * Enable RAG retrieval
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
   * The Retrieval-Augmented Generation (RAG) configuration.
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
   * The tag ID.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The tag value.
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
   * The ID of the call variable.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The enumerated values for the call variable.
   */
  phoneTagEnum?: QueryAiVoiceAgentDetailNewResponseBodyDataPhoneTagConfigPhoneTagEnum[];
  /**
   * @remarks
   * The key of the call variable.
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
   * 用户性别
   */
  phoneTagName?: string;
  /**
   * @remarks
   * Specifies whether the call variable is required.
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
   * The type of the call variable. Valid values: `TEXT` and `ENUM`.
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
   * 标签说明
   */
  desc?: string;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * 标签1
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
   * The mapping of call results to tags.
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
   * The description of the value.
   * 
   * @example
   * Description of the tag value
   */
  description?: string;
  /**
   * @remarks
   * The unique ID of the tag.
   * 
   * @example
   * tag_12345
   */
  id?: string;
  /**
   * @remarks
   * The value.
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
   * The ID of the main intent.
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
   * The enumerated values for the main intent.
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
   * The value type of the main intent. Valid values: `TEXT` and `ENUM`.
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
   * 用户有较高购买意愿
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
   * The enumerated value of the tag.
   * 
   * @example
   * 高意愿
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
   * The ID of the output tag.
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
   * 用户购买产品的意愿
   */
  outputTagDescription?: string;
  /**
   * @remarks
   * The enumerated values for the output tag.
   */
  outputTagEnum?: QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigOutputTagConfigOutputTagEnum[];
  /**
   * @remarks
   * The name of the output tag.
   * 
   * @example
   * 购买意愿
   */
  outputTagName?: string;
  /**
   * @remarks
   * The value type of the output tag. Valid values: `TEXT` and `ENUM`.
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
   * The configuration for mapping call results to tags.
   */
  callResultTagConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigCallResultTagConfig;
  /**
   * @remarks
   * The main intent.
   */
  mainPurpose?: QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfigMainPurpose;
  /**
   * @remarks
   * The output tag configuration.
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
   * The voice configuration for intelligent outbound calls.
   */
  agentCallConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataAgentCallConfig;
  /**
   * @remarks
   * The business requirement configuration for the agent.
   */
  agentDemandConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataAgentDemandConfig;
  /**
   * @remarks
   * The agent description.
   * 
   * @example
   * 日常测试使用。
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
   * The build mode. Valid values:
   * 
   * - `0`: prompt-based mode.
   * 
   * - `1`: dialog flow mode.
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
   * 测试智能体
   */
  agentName?: string;
  /**
   * @remarks
   * The deployment status. Valid values:
   * 
   * - `0`: Inactive (NOT_EFFECT).
   * 
   * - `1`: Active (EFFECT).
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
   * 默认分支
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
   * 默认版本
   */
  branchName?: string;
  /**
   * @remarks
   * The knowledge base configuration.
   */
  knowledgeConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataKnowledgeConfig;
  /**
   * @remarks
   * The call variable configuration.
   */
  phoneTagConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataPhoneTagConfig[];
  /**
   * @remarks
   * The scenario.
   * 
   * @example
   * 个人客户线索转化
   */
  scene?: string;
  /**
   * @remarks
   * The call summary configuration.
   */
  summaryConfig?: QueryAiVoiceAgentDetailNewResponseBodyDataSummaryConfig;
  /**
   * @remarks
   * Version Description
   * 
   * @example
   * 测试第一个版本
   */
  versionDesc?: string;
  /**
   * @remarks
   * Version ID.
   * 
   * @example
   * 89
   */
  versionId?: number;
  /**
   * @remarks
   * Version name.
   * 
   * @example
   * 测试版本1
   */
  versionName?: string;
  /**
   * @remarks
   * The release status of the version. 0 indicates Unreleased, 1 indicates Released, and 2 indicates Draft.
   * 
   * @example
   * 1
   */
  versionPublishStatus?: number;
  /**
   * @remarks
   * The most recent release time of the version.
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
   * @remarks
   * The reason for the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The detailed data of the agent.
   */
  data?: QueryAiVoiceAgentDetailNewResponseBodyData;
  /**
   * @remarks
   * The message that is associated with the status code.
   * 
   * @example
   * 成功
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
   * Indicates whether the API call was successful. Possible values:
   * 
   * - **true**: The operation was successful.
   * 
   * - **false**: Failure.
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

