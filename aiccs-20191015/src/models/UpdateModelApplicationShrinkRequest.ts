// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelApplicationShrinkRequest extends $dara.Model {
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
  interruptConfigShrink?: string;
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
  ttsConfigShrink?: string;
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
      interruptConfigShrink: 'InterruptConfig',
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
      ttsConfigShrink: 'TtsConfig',
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
      interruptConfigShrink: 'string',
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
      ttsConfigShrink: 'string',
      usageDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

