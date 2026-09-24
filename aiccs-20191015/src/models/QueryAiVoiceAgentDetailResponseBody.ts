// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentCallConfigEventConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to hang up when an intelligent answering service is detected.
   * 
   * @example
   * false
   */
  callAssistantHangup?: boolean;
  /**
   * @remarks
   * Specifies whether intelligent answering service detection is enabled.
   * 
   * @example
   * true
   */
  callAssistantRecognize?: boolean;
  /**
   * @remarks
   * Specifies whether the first silence triggers the model.
   * 
   * @example
   * false
   */
  muteActive?: boolean;
  /**
   * @remarks
   * The silence duration.
   * >
   * >- Maximum value: 15s.
   * >- Minimum value: 3s.
   * 
   * @example
   * 10
   */
  muteDuration?: number;
  /**
   * @remarks
   * The number of consecutive silence events before the system proactively hangs up.
   * >
   * >- Maximum value: 5.
   * >- Minimum value: 1.
   * 
   * @example
   * 1
   */
  muteHangupNum?: number;
  /**
   * @remarks
   * The maximum call duration. The call is automatically hung up after the timeout. Unit: seconds.
   * >
   * >- Maximum value: 3600.
   * >- Minimum value: 600.
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
   * @remarks
   * Indicates whether background sound is enabled.
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
   * 1
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
   * Indicates whether audio mixing is enabled.
   * 
   * @example
   * true
   */
  mixingEnabled?: boolean;
  /**
   * @remarks
   * The mixing template ID.
   * 
   * @example
   * 1
   */
  mixingTemplate?: number;
  /**
   * @remarks
   * The voice speed during TTS playback.
   * 
   * > 
   * > - Valid values: -200 to 200. Default value: 0.
   * > - If no value is specified, the voice speed configured in the large model application is used by default.
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
   * > 
   * > - Valid values: 0 to 100. Default value: 0.
   * > - If no value is specified, the volume configured in the large model application is used by default.
   * 
   * @example
   * 72
   */
  ttsVolume?: number;
  /**
   * @remarks
   * The voice code.
   * 
   * @example
   * Sample value
   */
  voiceCode?: string;
  /**
   * @remarks
   * The voice type. Valid values: SYSTEM: system voice. COSYCLONE: cloned voice. BL-CUSTOM: custom premium cloned voice.
   * 
   * @example
   * Sample value
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
   * The hot word ID.
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
   * The subtask description.
   * 
   * @example
   * 新用户邀约: \\"喂，家长您好！我是*****的王老师，我们现在有**课程100个试听名额，想帮宝贝安排一下体验，您看什么时候比较方便呢？\\
   */
  childTaskDescription?: string;
  /**
   * @remarks
   * The subtask name.
   * 
   * @example
   * Opening and invitation
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
   * Specifies whether to output as an exception tag.
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
   * The reply content.
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
   * The description of the valid value.
   * 
   * @example
   * Strong intent
   */
  description?: string;
  /**
   * @remarks
   * The unique ID of the valid value.
   * 
   * @example
   * d5606d80-7625-dcea-xxxx-17f66fbb564a
   */
  id?: string;
  /**
   * @remarks
   * The valid value.
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
   * The main intent ID.
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
   * Call effectiveness rating: A, B, C, D (A is the best)
   */
  mainPurposeDescription?: string;
  /**
   * @remarks
   * The list of valid values for the main intent.
   */
  mainPurposeEnum?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigMainPurposeMainPurposeEnum[];
  /**
   * @remarks
   * The main intent name.
   * 
   * @example
   * Call effectiveness rating
   */
  mainPurposeName?: string;
  /**
   * @remarks
   * The value type of the main intent. Currently, only the ENUM type is supported.
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
   * The description of the tag enum value.
   * 
   * @example
   * High (very positive, high probability of conversion)
   */
  description?: string;
  /**
   * @remarks
   * The unique ID of the tag enum value.
   * 
   * @example
   * 8757************2c499fa
   */
  id?: string;
  /**
   * @remarks
   * The tag enum value.
   * 
   * @example
   * High
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
   * The tag description.
   * 
   * @example
   * Records the final status of this call
   */
  outputTagDescription?: string;
  /**
   * @remarks
   * The tag enum values. This field is available only when the tag value type is ENUM.
   */
  outputTagEnum?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigOutputTagConfigOutputTagEnum[];
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * Customer intent level
   */
  outputTagName?: string;
  /**
   * @remarks
   * The tag value type.
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
   * The description of the enumeration value.
   * 
   * @example
   * The customer completely rejects retention
   */
  description?: string;
  /**
   * @remarks
   * The unique ID of the enum value.
   * 
   * @example
   * c3d4ff4e-*********bc26dc044682
   */
  id?: string;
  /**
   * @remarks
   * The enumeration value.
   * 
   * @example
   * Completely unacceptable
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
   * The variable description.
   * 
   * @example
   * The car series the user is interested in
   */
  phoneTagDescription?: string;
  /**
   * @remarks
   * The list of enumeration values for the variable. This field is present only when the variable value type is ENUM.
   */
  phoneTagEnum?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigPhoneTagConfigPhoneTagEnum[];
  /**
   * @remarks
   * The variable key name.
   * 
   * @example
   * testParam
   */
  phoneTagKey?: string;
  /**
   * @remarks
   * The Chinese name of the variable.
   * 
   * @example
   * 意向车系
   */
  phoneTagName?: string;
  /**
   * @remarks
   * Indicates whether the variable is required.
   * 
   * @example
   * true
   */
  phoneTagRequired?: boolean;
  /**
   * @remarks
   * The source of the call variable.
   * 
   * @example
   * Sample value
   */
  phoneTagSource?: string;
  /**
   * @remarks
   * The variable value type.
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
   * The basic task configuration.
   * 
   * @example
   * Task description
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
   * Indicates whether custom exception handling is enabled.
   * 
   * @example
   * false
   */
  customExceptionEnable?: boolean;
  /**
   * @remarks
   * The custom exception file ID.
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
   * **[Deprecated]** This field is deprecated and will be removed in the future.
   */
  customExceptionList?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfigCustomExceptionList[];
  /**
   * @remarks
   * **[Deprecated]** This field is deprecated and will be removed in the future.
   * 
   * @example
   * -
   */
  customExceptionUrlPath?: string;
  /**
   * @remarks
   * The language style.
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
   * This outbound call communicates with parents through three core steps, ........ 3. User needs > Proactive introduction
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
   * The list of original file names of knowledge base documents.
   */
  knowledgeDocOriginalNameList?: string[];
  /**
   * @remarks
   * Indicates whether a knowledge base is associated.
   * 
   * @example
   * false
   */
  knowledgeEnable?: boolean;
  /**
   * @remarks
   * The knowledge base ID.
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
   * The output tag configurations.
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
   * Hello, this is ******
   */
  prologue?: string;
  /**
   * @remarks
   * The URL of the opening greeting recording audio file. This field has a value only when StartWordType is set to 1.
   * 
   * @example
   * Sample value
   */
  recordingFile?: string;
  /**
   * @remarks
   * The opening statement type. Valid values: 0: text. 1: recording.
   * 
   * @example
   * 1
   */
  startWordType?: number;
  /**
   * @remarks
   * The system role.
   * 
   * @example
   * Course sales
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
   * New user in urgent need of courses
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
   * The agent ID.
   * 
   * @example
   * 12311212******
   */
  agentId?: number;
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
   * The intelligent outbound call voice configuration.
   */
  aiVoiceAgentCallConfig?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentCallConfig;
  /**
   * @remarks
   * The agent model configuration.
   */
  aiVoiceAgentModelConfig?: QueryAiVoiceAgentDetailResponseBodyDataAiVoiceAgentModelConfig;
  /**
   * @remarks
   * The business scenario name.
   * 
   * @example
   * Personal lead conversion
   */
  businessTypeName?: string;
  /**
   * @remarks
   * The agent description.
   * 
   * @example
   * Used for daily testing
   */
  description?: string;
  /**
   * @remarks
   * The knowledge base name.
   * 
   * @example
   * Test knowledge base
   */
  knowledgeName?: string;
  /**
   * @remarks
   * The agent status.
   * 
   * @example
   * 7
   */
  status?: number;
  /**
   * @remarks
   * The language style name.
   * 
   * @example
   * Friendly
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
  data?: QueryAiVoiceAgentDetailResponseBodyData;
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
   * 742C9243-2870-B8D6-0C68-C60BEB2DF09A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * - **true**: Successful.
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

