// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentCallConfigEventConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to hang up the call if an answering machine is detected.
   * 
   * @example
   * false
   */
  callAssistantHangup?: boolean;
  /**
   * @remarks
   * Whether answering machine detection is enabled.
   * 
   * @example
   * true
   */
  callAssistantRecognize?: boolean;
  /**
   * @remarks
   * Specifies whether to trigger the model on the first silence event.
   * 
   * @example
   * false
   */
  muteActive?: boolean;
  /**
   * @remarks
   * Silence duration.
   * 
   * > - Maximum value: 15 s.
   * >
   * > - Minimum value: 3 s.
   * 
   * @example
   * 10
   */
  muteDuration?: number;
  /**
   * @remarks
   * The system automatically disconnects the call after a specified number of consecutive silence events.
   * 
   * > - Maximum value: 5.
   * >
   * > - Minimum value: 1.
   * 
   * @example
   * 1
   */
  muteHangupNum?: number;
  /**
   * @remarks
   * The maximum call duration, in seconds. The call automatically disconnects when this duration is exceeded.
   * 
   * > - Maximum value: 3600.
   * >
   * > - Minimum value: 600.
   * 
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
   * @remarks
   * The TTS speech rate.
   * 
   * > - Valid values: -200 to 200. Default value: 0.
   * >
   * > - If this parameter is not specified, the speech rate configured for the large model application is used.
   * 
   * @example
   * 34
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
   * The TTS playback volume.
   * 
   * > - Valid values: 0 to 100. Default value: 0.
   * >
   * > - If this parameter is not specified, the volume configured for the large model application is used.
   * 
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
  /**
   * @remarks
   * The call event configuration.
   */
  eventConfig?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentCallConfigEventConfig;
  /**
   * @remarks
   * The TTS configuration.
   */
  ttsConfig?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentCallConfigTtsConfig;
  /**
   * @remarks
   * The ID of the hotword.
   * 
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
   * @remarks
   * The description of the subtask.
   * 
   * @example
   * 新用户邀约: \\"喂，家长您好！我是*****的王老师，我们现在有**课程100个试听名额，想帮宝贝安排一下体验，您看什么时候比较方便呢？\\
   */
  childTaskDescription?: string;
  /**
   * @remarks
   * The name of the subtask.
   * 
   * @example
   * 开场与邀约
   */
  childTaskName?: string;
  /**
   * @remarks
   * The unique ID of the subtask.
   * 
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
   * @remarks
   * Specifies whether to output the content as an exception tag.
   * 
   * @example
   * true
   */
  exceptionSign?: boolean;
  /**
   * @remarks
   * The exception type.
   * 
   * @example
   * -
   */
  exceptionType?: string;
  /**
   * @remarks
   * The reply.
   * 
   * @example
   * -
   */
  reply?: string;
  /**
   * @remarks
   * Specifies whether interruption is supported.
   * 
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
   * @remarks
   * The description of the value.
   * 
   * @example
   * 意向强烈。
   */
  description?: string;
  /**
   * @remarks
   * The unique ID of the value.
   * 
   * @example
   * d5606d80-7625-dcea-xxxx-17f66fbb564a
   */
  id?: string;
  /**
   * @remarks
   * The value.
   * 
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
   * @remarks
   * The ID of the main intent.
   * 
   * @example
   * 1ee6e994-08e0-xxxx-f662-1659cc54d409
   */
  id?: string;
  /**
   * @remarks
   * The description of the main intent.
   * 
   * @example
   * 通话效果评级：A、B、C、D，（A最好）
   */
  mainPurposeDescription?: string;
  /**
   * @remarks
   * The list of valid values for the main intent.
   */
  mainPurposeEnum?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigMainPurposeMainPurposeEnum[];
  /**
   * @remarks
   * The name of the main intent.
   * 
   * @example
   * 通话效果评级
   */
  mainPurposeName?: string;
  /**
   * @remarks
   * The value type of the main intent. Currently, only the `ENUM` type is supported.
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
   * @remarks
   * The description of the enumerated value.
   * 
   * @example
   * 高（非常积极，大概率转化）
   */
  description?: string;
  /**
   * @remarks
   * The unique ID of the enumerated value.
   * 
   * @example
   * 8757************2c499fa
   */
  id?: string;
  /**
   * @remarks
   * The enumerated value.
   * 
   * @example
   * 高
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
   * @remarks
   * The unique ID of the tag.
   * 
   * @example
   * 8757************2c499fa
   */
  id?: string;
  /**
   * @remarks
   * The description of the tag.
   * 
   * @example
   * 记录本次通话的最终状态
   */
  outputTagDescription?: string;
  /**
   * @remarks
   * The enumerated values for the tag. This parameter is returned only if the value of `OutputTagType` is `ENUM`.
   */
  outputTagEnum?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigOutputTagConfigOutputTagEnum[];
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * 客户意向度
   */
  outputTagName?: string;
  /**
   * @remarks
   * The data type of the tag.
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
   * @remarks
   * The description of the enumerated value.
   * 
   * @example
   * 客户完全不接受挽留
   */
  description?: string;
  /**
   * @remarks
   * The unique ID of the enumerated value.
   * 
   * @example
   * c3d4ff4e-*********bc26dc044682
   */
  id?: string;
  /**
   * @remarks
   * The enumerated value.
   * 
   * @example
   * 完全不接受
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
   * @remarks
   * The unique ID of the variable.
   * 
   * @example
   * 280cd4bf-*******df472c
   */
  id?: string;
  /**
   * @remarks
   * The description of the variable.
   * 
   * @example
   * 用户感兴趣的车系。
   */
  phoneTagDescription?: string;
  /**
   * @remarks
   * A list of enumerated values for the variable. This parameter is returned only if the value of `PhoneTagType` is `ENUM`.
   */
  phoneTagEnum?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigPhoneTagConfigPhoneTagEnum[];
  /**
   * @remarks
   * The key of the variable.
   * 
   * @example
   * testParam
   */
  phoneTagKey?: string;
  /**
   * @remarks
   * The name of the variable.
   * 
   * @example
   * 意向车系
   */
  phoneTagName?: string;
  /**
   * @remarks
   * Specifies whether the variable is required.
   * 
   * @example
   * true
   */
  phoneTagRequired?: boolean;
  /**
   * @example
   * 示例值
   */
  phoneTagSource?: string;
  /**
   * @remarks
   * The data type of the variable.
   * 
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
   * @remarks
   * The configuration for the basic task.
   * 
   * @example
   * 任务描述。
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
   * The list of subtask configurations.
   */
  childTaskList?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigChildTaskList[];
  /**
   * @remarks
   * Specifies whether custom exception handling is enabled.
   * 
   * @example
   * false
   */
  customExceptionEnable?: boolean;
  /**
   * @remarks
   * The ID of the custom exception file.
   * 
   * @example
   * OSS文件ID
   */
  customExceptionFileId?: string;
  /**
   * @remarks
   * The name of the custom exception file.
   * 
   * @example
   * 异常测试文件.xlsx
   */
  customExceptionFileName?: string;
  /**
   * @remarks
   * This parameter is deprecated and will be removed in a future release.
   */
  customExceptionList?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigCustomExceptionList[];
  /**
   * @remarks
   * This parameter is deprecated and will be removed in a future release.
   * 
   * @example
   * -
   */
  customExceptionUrlPath?: string;
  /**
   * @remarks
   * The voice style.
   * 
   * @example
   * 2
   */
  customExceptionVoiceStyle?: number;
  /**
   * @remarks
   * The description of the advanced task flow.
   * 
   * @example
   * 这次外呼通过三个核心步骤与家长沟通，........ 3. 用户需求 > 主动介绍
   */
  flowDesc?: string;
  /**
   * @remarks
   * The list of knowledge document IDs.
   */
  knowledgeDocIdList?: string[];
  /**
   * @remarks
   * The list of knowledge document names.
   */
  knowledgeDocNameList?: string[];
  /**
   * @remarks
   * A list of original file names for the knowledge base documents.
   */
  knowledgeDocOriginalNameList?: string[];
  /**
   * @remarks
   * Specifies whether the agent is associated with a knowledge base.
   * 
   * @example
   * false
   */
  knowledgeEnable?: boolean;
  /**
   * @remarks
   * The ID of the knowledge base.
   * 
   * @example
   * 1232131*******
   */
  knowledgeId?: string;
  /**
   * @remarks
   * The main intent configuration.
   */
  mainPurpose?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigMainPurpose;
  /**
   * @remarks
   * The output tag configuration.
   */
  outputTagConfig?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigOutputTagConfig[];
  /**
   * @remarks
   * The call variable configuration.
   */
  phoneTagConfig?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigPhoneTagConfig[];
  /**
   * @remarks
   * The opening statement.
   * 
   * @example
   * 你好，这里是******。
   */
  prologue?: string;
  /**
   * @example
   * 示例值
   */
  recordingFile?: string;
  /**
   * @example
   * 1
   */
  startWordType?: number;
  /**
   * @remarks
   * The system role.
   * 
   * @example
   * 课程销售
   */
  sysRole?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * ADVANCED
   */
  taskType?: string;
  /**
   * @remarks
   * The user role.
   * 
   * @example
   * 急需课程的新用户
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
   * @remarks
   * The ID of the agent.
   * 
   * @example
   * 12311212******
   */
  agentId?: number;
  /**
   * @remarks
   * The name of the agent.
   * 
   * @example
   * 测试智能体
   */
  agentName?: string;
  /**
   * @remarks
   * The voice configuration for AI-powered outbound calls.
   */
  aiVoiceAgentCallConfig?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentCallConfig;
  /**
   * @remarks
   * The model configuration for the agent.
   */
  aiVoiceAgentModelConfig?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfig;
  /**
   * @remarks
   * The name of the business scenario.
   * 
   * @example
   * 个人线索转化
   */
  businessTypeName?: string;
  /**
   * @remarks
   * The description of the agent.
   * 
   * @example
   * 日常测试使用。
   */
  description?: string;
  /**
   * @remarks
   * The name of the knowledge base.
   * 
   * @example
   * 测试知识库
   */
  knowledgeName?: string;
  /**
   * @remarks
   * The status of the agent.
   * 
   * @example
   * 7
   */
  status?: number;
  /**
   * @remarks
   * The name of the voice style.
   * 
   * @example
   * 亲切
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
   * @remarks
   * The detailed reason why the access was denied.
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
   * The details of the agent.
   */
  data?: QueryAiVoiceAgentDetailResponseBodyData;
  /**
   * @remarks
   * The description of the status code.
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
   * 742C9243-2870-B8D6-0C68-C60BEB2DF09A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Possible values:
   * 
   * - **true**: The operation was successful.
   * 
   * - **false**: Failed.
   * 
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

