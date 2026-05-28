// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelApplicationRequestInterruptConfigAvoidInterruptDTO extends $dara.Model {
  /**
   * @example
   * 3
   */
  interruptNum?: number;
  /**
   * @example
   * 16.417547
   */
  interruptProtectDuration?: number;
  static names(): { [key: string]: string } {
    return {
      interruptNum: 'InterruptNum',
      interruptProtectDuration: 'InterruptProtectDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interruptNum: 'number',
      interruptProtectDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelApplicationRequestInterruptConfig extends $dara.Model {
  /**
   * @remarks
   * 防止连续抢话功能配置
   */
  avoidInterruptDTO?: UpdateModelApplicationRequestInterruptConfigAvoidInterruptDTO;
  /**
   * @remarks
   * 防止连续抢话功能是否开启
   * 
   * @example
   * true
   */
  enableAvoidInterrupt?: boolean;
  /**
   * @example
   * true
   */
  enableInterruptBackchannel?: boolean;
  /**
   * @remarks
   * 开场白全程不打断
   * 
   * @example
   * true
   */
  enableStartwordEntireNotInterrupt?: boolean;
  /**
   * @remarks
   * 开场白不打断配置是否开启
   */
  enableStartwordNotInterrupt?: boolean;
  /**
   * @remarks
   * 开场白保护时长
   * 
   * @example
   * 1.4699
   */
  startwordProtectDuration?: number;
  static names(): { [key: string]: string } {
    return {
      avoidInterruptDTO: 'AvoidInterruptDTO',
      enableAvoidInterrupt: 'EnableAvoidInterrupt',
      enableInterruptBackchannel: 'EnableInterruptBackchannel',
      enableStartwordEntireNotInterrupt: 'EnableStartwordEntireNotInterrupt',
      enableStartwordNotInterrupt: 'EnableStartwordNotInterrupt',
      startwordProtectDuration: 'StartwordProtectDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avoidInterruptDTO: UpdateModelApplicationRequestInterruptConfigAvoidInterruptDTO,
      enableAvoidInterrupt: 'boolean',
      enableInterruptBackchannel: 'boolean',
      enableStartwordEntireNotInterrupt: 'boolean',
      enableStartwordNotInterrupt: 'boolean',
      startwordProtectDuration: 'number',
    };
  }

  validate() {
    if(this.avoidInterruptDTO && typeof (this.avoidInterruptDTO as any).validate === 'function') {
      (this.avoidInterruptDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelApplicationRequestTtsConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  backgroundEnabled?: boolean;
  /**
   * @remarks
   * 背景音id
   * 
   * @example
   * 111
   */
  backgroundSound?: number;
  /**
   * @remarks
   * 背景音音量(id)
   * 
   * @example
   * 1
   */
  backgroundVolume?: number;
  /**
   * @example
   * 47
   */
  customerAccountId?: number;
  /**
   * @example
   * true
   */
  mixingEnabled?: boolean;
  /**
   * @remarks
   * 混音模版id
   * 
   * @example
   * 111
   */
  mixingTemplate?: number;
  /**
   * @example
   * 示例值示例值
   */
  resourceId?: string;
  /**
   * @remarks
   * TTS 变量播放时的声音速度。取值范围：-200~200，默认值为 0。
   * 
   * @example
   * 7
   */
  ttsSpeed?: number;
  /**
   * @remarks
   * 声音风格
   * 
   * @example
   * voice
   */
  ttsStyle?: string;
  /**
   * @remarks
   * TTS 变量播放的音量。取值范围：0~100，默认值为 0。
   * 
   * @example
   * 11
   */
  ttsVolume?: number;
  /**
   * @remarks
   * 声音编码
   * 
   * @example
   * 示例值示例值
   */
  voiceCode?: string;
  /**
   * @remarks
   * 声音类型
   * 
   * @example
   * 示例值示例值
   */
  voiceType?: string;
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

export class UpdateModelApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * 应用编码
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  applicationCode?: string;
  /**
   * @remarks
   * 应用并发请求数
   * 
   * @example
   * 12
   */
  applicationCps?: number;
  /**
   * @remarks
   * 模型应用名称
   * 
   * @example
   * 示例值示例值
   */
  applicationName?: string;
  /**
   * @example
   * false
   */
  callAssistantHangup?: boolean;
  /**
   * @remarks
   * 通话助手识别
   * 
   * @example
   * 示例值
   */
  callAssistantRecognize?: boolean;
  /**
   * @example
   * false
   */
  callConnectedTriggerModel?: boolean;
  /**
   * @example
   * 示例值
   */
  dtmfAllowedDigits?: string;
  /**
   * @example
   * true
   */
  dtmfAutoValidateEnable?: boolean;
  /**
   * @example
   * 1
   */
  dtmfDigitCount?: number;
  /**
   * @example
   * 1
   */
  dtmfInputTimeout?: number;
  /**
   * @example
   * RETURN_MODEL
   */
  dtmfOutOfRangeAction?: string;
  /**
   * @example
   * 1
   */
  dtmfRetryPlayTimes?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  dtmfRetryPromptText?: string;
  /**
   * @remarks
   * 场景名称
   * 
   * @example
   * 示例值示例值
   */
  dyvmsSceneName?: string;
  /**
   * @example
   * false
   */
  enableDtmfReceive?: boolean;
  /**
   * @example
   * false
   */
  enableMorse?: boolean;
  /**
   * @remarks
   * 打断配置
   */
  interruptConfig?: UpdateModelApplicationRequestInterruptConfig;
  /**
   * @remarks
   * 模型编码
   * 
   * @example
   * 示例值示例值示例值
   */
  modelCode?: string;
  /**
   * @remarks
   * 模型版本
   * 
   * @example
   * 示例值示例值示例值
   */
  modelVersion?: string;
  /**
   * @remarks
   * 第一个静音是否唤起模型
   * 
   * @example
   * true
   */
  muteActive?: boolean;
  /**
   * @remarks
   * 静音时长
   * 
   * @example
   * 85
   */
  muteDuration?: number;
  /**
   * @remarks
   * 连续多少个静音事件主动挂机
   * 
   * @example
   * 70
   */
  muteHangupNum?: number;
  ownerId?: number;
  /**
   * @remarks
   * 提示词
   * 
   * @example
   * 示例值示例值
   */
  prompt?: string;
  /**
   * @remarks
   * 资质ID
   * 
   * @example
   * 61
   */
  qualificationId?: number;
  /**
   * @remarks
   * 资质名称
   * 
   * @example
   * 示例值示例值示例值
   */
  qualificationName?: string;
  /**
   * @example
   * 示例值示例值
   */
  recordingFile?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 最大通话时长
   * 
   * @example
   * 49
   */
  sessionTimeout?: number;
  /**
   * @remarks
   * 来源
   * 
   * @example
   * 示例值示例值
   */
  source?: string;
  /**
   * @remarks
   * 话术内容
   * 
   * @example
   * 示例值
   */
  speechContent?: string;
  /**
   * @remarks
   * 话束id
   * 
   * @example
   * 15
   */
  speechId?: number;
  /**
   * @remarks
   * 开场白
   * 
   * @example
   * 示例值示例值
   */
  startWord?: string;
  /**
   * @example
   * 1
   */
  startWordType?: number;
  /**
   * @remarks
   * tts配置，包括音色、音量、音速等。
   */
  ttsConfig?: UpdateModelApplicationRequestTtsConfig;
  /**
   * @remarks
   * 用途
   * 
   * @example
   * 示例值示例值
   */
  usageDesc?: string;
  static names(): { [key: string]: string } {
    return {
      applicationCode: 'ApplicationCode',
      applicationCps: 'ApplicationCps',
      applicationName: 'ApplicationName',
      callAssistantHangup: 'CallAssistantHangup',
      callAssistantRecognize: 'CallAssistantRecognize',
      callConnectedTriggerModel: 'CallConnectedTriggerModel',
      dtmfAllowedDigits: 'DtmfAllowedDigits',
      dtmfAutoValidateEnable: 'DtmfAutoValidateEnable',
      dtmfDigitCount: 'DtmfDigitCount',
      dtmfInputTimeout: 'DtmfInputTimeout',
      dtmfOutOfRangeAction: 'DtmfOutOfRangeAction',
      dtmfRetryPlayTimes: 'DtmfRetryPlayTimes',
      dtmfRetryPromptText: 'DtmfRetryPromptText',
      dyvmsSceneName: 'DyvmsSceneName',
      enableDtmfReceive: 'EnableDtmfReceive',
      enableMorse: 'EnableMorse',
      interruptConfig: 'InterruptConfig',
      modelCode: 'ModelCode',
      modelVersion: 'ModelVersion',
      muteActive: 'MuteActive',
      muteDuration: 'MuteDuration',
      muteHangupNum: 'MuteHangupNum',
      ownerId: 'OwnerId',
      prompt: 'Prompt',
      qualificationId: 'QualificationId',
      qualificationName: 'QualificationName',
      recordingFile: 'RecordingFile',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sessionTimeout: 'SessionTimeout',
      source: 'Source',
      speechContent: 'SpeechContent',
      speechId: 'SpeechId',
      startWord: 'StartWord',
      startWordType: 'StartWordType',
      ttsConfig: 'TtsConfig',
      usageDesc: 'UsageDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCode: 'string',
      applicationCps: 'number',
      applicationName: 'string',
      callAssistantHangup: 'boolean',
      callAssistantRecognize: 'boolean',
      callConnectedTriggerModel: 'boolean',
      dtmfAllowedDigits: 'string',
      dtmfAutoValidateEnable: 'boolean',
      dtmfDigitCount: 'number',
      dtmfInputTimeout: 'number',
      dtmfOutOfRangeAction: 'string',
      dtmfRetryPlayTimes: 'number',
      dtmfRetryPromptText: 'string',
      dyvmsSceneName: 'string',
      enableDtmfReceive: 'boolean',
      enableMorse: 'boolean',
      interruptConfig: UpdateModelApplicationRequestInterruptConfig,
      modelCode: 'string',
      modelVersion: 'string',
      muteActive: 'boolean',
      muteDuration: 'number',
      muteHangupNum: 'number',
      ownerId: 'number',
      prompt: 'string',
      qualificationId: 'number',
      qualificationName: 'string',
      recordingFile: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sessionTimeout: 'number',
      source: 'string',
      speechContent: 'string',
      speechId: 'number',
      startWord: 'string',
      startWordType: 'number',
      ttsConfig: UpdateModelApplicationRequestTtsConfig,
      usageDesc: 'string',
    };
  }

  validate() {
    if(this.interruptConfig && typeof (this.interruptConfig as any).validate === 'function') {
      (this.interruptConfig as any).validate();
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

