// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentCallConfigEventConfig extends $dara.Model {
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
   * false
   */
  muteActive?: boolean;
  /**
   * @example
   * 10
   */
  muteDuration?: number;
  /**
   * @example
   * 1
   */
  muteHangupNum?: number;
  /**
   * @example
   * 600
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

export class QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentCallConfigTtsConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  backgroundEnabled?: boolean;
  /**
   * @example
   * 1
   */
  backgroundSound?: number;
  /**
   * @example
   * 1
   */
  backgroundVolume?: number;
  /**
   * @example
   * true
   */
  mixingEnabled?: boolean;
  /**
   * @example
   * 1
   */
  mixingTemplate?: number;
  /**
   * @example
   * 34
   */
  ttsSpeed?: number;
  /**
   * @example
   * longxiaoxia_v2p1
   */
  ttsStyle?: string;
  /**
   * @example
   * 72
   */
  ttsVolume?: number;
  /**
   * @example
   * 示例值
   */
  voiceCode?: string;
  /**
   * @example
   * 示例值
   */
  voiceType?: string;
  static names(): { [key: string]: string } {
    return {
      backgroundEnabled: 'BackgroundEnabled',
      backgroundSound: 'BackgroundSound',
      backgroundVolume: 'BackgroundVolume',
      mixingEnabled: 'MixingEnabled',
      mixingTemplate: 'MixingTemplate',
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
      mixingEnabled: 'boolean',
      mixingTemplate: 'number',
      ttsSpeed: 'number',
      ttsStyle: 'string',
      ttsVolume: 'number',
      voiceCode: 'string',
      voiceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentCallConfig extends $dara.Model {
  eventConfig?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentCallConfigEventConfig;
  ttsConfig?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentCallConfigTtsConfig;
  /**
   * @example
   * afb2c43**********83e6df30551c11f7
   */
  vocabId?: string;
  static names(): { [key: string]: string } {
    return {
      eventConfig: 'EventConfig',
      ttsConfig: 'TtsConfig',
      vocabId: 'VocabId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventConfig: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentCallConfigEventConfig,
      ttsConfig: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentCallConfigTtsConfig,
      vocabId: 'string',
    };
  }

  validate() {
    if(this.eventConfig && typeof (this.eventConfig as any).validate === 'function') {
      (this.eventConfig as any).validate();
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

export class QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigChildTaskList extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  childTaskDescription?: string;
  /**
   * @example
   * 示例值示例值
   */
  childTaskName?: string;
  /**
   * @example
   * 280cd4bf-*******df472c
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      childTaskDescription: 'ChildTaskDescription',
      childTaskName: 'ChildTaskName',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childTaskDescription: 'string',
      childTaskName: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigCustomExceptionList extends $dara.Model {
  /**
   * @example
   * true
   */
  exceptionSign?: boolean;
  /**
   * @example
   * -
   */
  exceptionType?: string;
  /**
   * @example
   * -
   */
  reply?: string;
  /**
   * @example
   * false
   */
  supportBreak?: boolean;
  static names(): { [key: string]: string } {
    return {
      exceptionSign: 'ExceptionSign',
      exceptionType: 'ExceptionType',
      reply: 'Reply',
      supportBreak: 'SupportBreak',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionSign: 'boolean',
      exceptionType: 'string',
      reply: 'string',
      supportBreak: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigMainPurposeMainPurposeEnum extends $dara.Model {
  /**
   * @example
   * 示例
   */
  description?: string;
  /**
   * @example
   * d5606d80-7625-dcea-8610-17f66fbb564a
   */
  id?: string;
  /**
   * @example
   * A
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

export class QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigMainPurpose extends $dara.Model {
  /**
   * @example
   * 1ee6e994-08e0-5e87-f662-1659cc54d409
   */
  id?: string;
  /**
   * @example
   * 示例值示例值
   */
  mainPurposeDescription?: string;
  mainPurposeEnum?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigMainPurposeMainPurposeEnum[];
  /**
   * @example
   * 示例值
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
      mainPurposeEnum: { 'type': 'array', 'itemType': QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigMainPurposeMainPurposeEnum },
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

export class QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigOutputTagConfigOutputTagEnum extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  description?: string;
  /**
   * @example
   * 8757************2c499fa
   */
  id?: string;
  /**
   * @example
   * 示例值示例值示例值
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

export class QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigOutputTagConfig extends $dara.Model {
  /**
   * @example
   * 8757************2c499fa
   */
  id?: string;
  /**
   * @example
   * 示例值示例值
   */
  outputTagDescription?: string;
  outputTagEnum?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigOutputTagConfigOutputTagEnum[];
  /**
   * @example
   * 示例值示例值
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
      outputTagEnum: { 'type': 'array', 'itemType': QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigOutputTagConfigOutputTagEnum },
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

export class QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigPhoneTagConfigPhoneTagEnum extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  description?: string;
  /**
   * @example
   * c3d4ff4e-*********bc26dc044682
   */
  id?: string;
  /**
   * @example
   * 示例值示例值示例值
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

export class QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigPhoneTagConfig extends $dara.Model {
  /**
   * @example
   * 280cd4bf-*******df472c
   */
  id?: string;
  /**
   * @example
   * 示例值示例值
   */
  phoneTagDescription?: string;
  phoneTagEnum?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigPhoneTagConfigPhoneTagEnum[];
  /**
   * @example
   * testParam
   */
  phoneTagKey?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  phoneTagName?: string;
  /**
   * @example
   * true
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
      phoneTagDescription: 'PhoneTagDescription',
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
      phoneTagDescription: 'string',
      phoneTagEnum: { 'type': 'array', 'itemType': QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigPhoneTagConfigPhoneTagEnum },
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

export class QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfig extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  basicTaskDescription?: string;
  /**
   * @example
   * 1
   */
  businessType?: number;
  childTaskList?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigChildTaskList[];
  /**
   * @example
   * false
   */
  customExceptionEnable?: boolean;
  /**
   * @example
   * 示例值示例值
   */
  customExceptionFileId?: string;
  /**
   * @example
   * 示例值
   */
  customExceptionFileName?: string;
  customExceptionList?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigCustomExceptionList[];
  /**
   * @example
   * -
   */
  customExceptionUrlPath?: string;
  /**
   * @example
   * 2
   */
  customExceptionVoiceStyle?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  flowDesc?: string;
  knowledgeDocIdList?: string[];
  knowledgeDocNameList?: string[];
  knowledgeDocOriginalNameList?: string[];
  /**
   * @example
   * false
   */
  knowledgeEnable?: boolean;
  /**
   * @example
   * 1232131*******
   */
  knowledgeId?: string;
  mainPurpose?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigMainPurpose;
  outputTagConfig?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigOutputTagConfig[];
  phoneTagConfig?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigPhoneTagConfig[];
  /**
   * @example
   * 示例值示例值示例值
   */
  prologue?: string;
  /**
   * @example
   * 示例值示例值
   */
  recordingFile?: string;
  /**
   * @example
   * 1
   */
  startWordType?: number;
  /**
   * @example
   * 示例值示例值
   */
  sysRole?: string;
  /**
   * @example
   * ADVANCED
   */
  taskType?: string;
  /**
   * @example
   * 示例值示例值
   */
  userRole?: string;
  static names(): { [key: string]: string } {
    return {
      basicTaskDescription: 'BasicTaskDescription',
      businessType: 'BusinessType',
      childTaskList: 'ChildTaskList',
      customExceptionEnable: 'CustomExceptionEnable',
      customExceptionFileId: 'CustomExceptionFileId',
      customExceptionFileName: 'CustomExceptionFileName',
      customExceptionList: 'CustomExceptionList',
      customExceptionUrlPath: 'CustomExceptionUrlPath',
      customExceptionVoiceStyle: 'CustomExceptionVoiceStyle',
      flowDesc: 'FlowDesc',
      knowledgeDocIdList: 'KnowledgeDocIdList',
      knowledgeDocNameList: 'KnowledgeDocNameList',
      knowledgeDocOriginalNameList: 'KnowledgeDocOriginalNameList',
      knowledgeEnable: 'KnowledgeEnable',
      knowledgeId: 'KnowledgeId',
      mainPurpose: 'MainPurpose',
      outputTagConfig: 'OutputTagConfig',
      phoneTagConfig: 'PhoneTagConfig',
      prologue: 'Prologue',
      recordingFile: 'RecordingFile',
      startWordType: 'StartWordType',
      sysRole: 'SysRole',
      taskType: 'TaskType',
      userRole: 'UserRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicTaskDescription: 'string',
      businessType: 'number',
      childTaskList: { 'type': 'array', 'itemType': QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigChildTaskList },
      customExceptionEnable: 'boolean',
      customExceptionFileId: 'string',
      customExceptionFileName: 'string',
      customExceptionList: { 'type': 'array', 'itemType': QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigCustomExceptionList },
      customExceptionUrlPath: 'string',
      customExceptionVoiceStyle: 'number',
      flowDesc: 'string',
      knowledgeDocIdList: { 'type': 'array', 'itemType': 'string' },
      knowledgeDocNameList: { 'type': 'array', 'itemType': 'string' },
      knowledgeDocOriginalNameList: { 'type': 'array', 'itemType': 'string' },
      knowledgeEnable: 'boolean',
      knowledgeId: 'string',
      mainPurpose: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigMainPurpose,
      outputTagConfig: { 'type': 'array', 'itemType': QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigOutputTagConfig },
      phoneTagConfig: { 'type': 'array', 'itemType': QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigPhoneTagConfig },
      prologue: 'string',
      recordingFile: 'string',
      startWordType: 'number',
      sysRole: 'string',
      taskType: 'string',
      userRole: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.childTaskList)) {
      $dara.Model.validateArray(this.childTaskList);
    }
    if(Array.isArray(this.customExceptionList)) {
      $dara.Model.validateArray(this.customExceptionList);
    }
    if(Array.isArray(this.knowledgeDocIdList)) {
      $dara.Model.validateArray(this.knowledgeDocIdList);
    }
    if(Array.isArray(this.knowledgeDocNameList)) {
      $dara.Model.validateArray(this.knowledgeDocNameList);
    }
    if(Array.isArray(this.knowledgeDocOriginalNameList)) {
      $dara.Model.validateArray(this.knowledgeDocOriginalNameList);
    }
    if(this.mainPurpose && typeof (this.mainPurpose as any).validate === 'function') {
      (this.mainPurpose as any).validate();
    }
    if(Array.isArray(this.outputTagConfig)) {
      $dara.Model.validateArray(this.outputTagConfig);
    }
    if(Array.isArray(this.phoneTagConfig)) {
      $dara.Model.validateArray(this.phoneTagConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailResponseBodyData extends $dara.Model {
  /**
   * @example
   * 12311212******
   */
  agentId?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  agentName?: string;
  aiVoiceAgentCallConfig?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentCallConfig;
  aiVoiceAgentModelConfig?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfig;
  /**
   * @example
   * 示例值示例值示例值
   */
  businessTypeName?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  description?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  knowledgeName?: string;
  /**
   * @example
   * 7
   */
  status?: number;
  /**
   * @example
   * 示例值示例值
   */
  voiceStyleName?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      aiVoiceAgentCallConfig: 'AiVoiceAgentCallConfig',
      aiVoiceAgentModelConfig: 'AiVoiceAgentModelConfig',
      businessTypeName: 'BusinessTypeName',
      description: 'Description',
      knowledgeName: 'KnowledgeName',
      status: 'Status',
      voiceStyleName: 'VoiceStyleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      agentName: 'string',
      aiVoiceAgentCallConfig: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentCallConfig,
      aiVoiceAgentModelConfig: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfig,
      businessTypeName: 'string',
      description: 'string',
      knowledgeName: 'string',
      status: 'number',
      voiceStyleName: 'string',
    };
  }

  validate() {
    if(this.aiVoiceAgentCallConfig && typeof (this.aiVoiceAgentCallConfig as any).validate === 'function') {
      (this.aiVoiceAgentCallConfig as any).validate();
    }
    if(this.aiVoiceAgentModelConfig && typeof (this.aiVoiceAgentModelConfig as any).validate === 'function') {
      (this.aiVoiceAgentModelConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAiVoiceAgentDetailResponseBody extends $dara.Model {
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
  data?: QueryAiVoiceAgentDetailResponseBodyData;
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
   * false
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
      data: QueryAiVoiceAgentDetailResponseBodyData,
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

