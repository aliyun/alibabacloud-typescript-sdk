// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddModelApplicationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 应用并发请求数
   * 
   * This parameter is required.
   * 
   * @example
   * 25
   */
  applicationCps?: number;
  /**
   * @remarks
   * 模型应用名称
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  applicationName?: string;
  /**
   * @example
   * false
   */
  callConnectedTriggerModel?: boolean;
  /**
   * @remarks
   * 场景名称
   * 
   * @example
   * 示例值示例值
   */
  dyvmsSceneName?: string;
  /**
   * @remarks
   * 模型编码
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  modelCode?: string;
  /**
   * @remarks
   * 模型版本
   * 
   * @example
   * 示例值示例值
   */
  modelVersion?: string;
  /**
   * @remarks
   * 第一个静音是否唤起模型
   * 
   * @example
   * false
   */
  muteActive?: boolean;
  /**
   * @remarks
   * 静音时长
   * 
   * @example
   * 70
   */
  muteDuration?: number;
  /**
   * @remarks
   * 连续多少个静音事件主动挂机
   * 
   * @example
   * 5
   */
  muteHangupNum?: number;
  ownerId?: number;
  /**
   * @remarks
   * 提示词
   * 
   * @example
   * 示例值示例值示例值
   */
  prompt?: string;
  /**
   * @remarks
   * 资质ID
   * 
   * @example
   * 85
   */
  qualificationId?: number;
  /**
   * @remarks
   * 资质名称
   * 
   * @example
   * 示例值
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
   * 来源
   * 
   * @example
   * USER
   */
  source?: string;
  /**
   * @remarks
   * 话术内容
   * 
   * @example
   * 示例值示例值示例值
   */
  speechContent?: string;
  /**
   * @remarks
   * 话束id
   * 
   * @example
   * 88
   */
  speechId?: number;
  /**
   * @remarks
   * 开场白
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
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
   * 
   * This parameter is required.
   */
  ttsConfigShrink?: string;
  /**
   * @remarks
   * 用途
   * 
   * @example
   * 示例值示例值示例值
   */
  usageDesc?: string;
  static names(): { [key: string]: string } {
    return {
      applicationCps: 'ApplicationCps',
      applicationName: 'ApplicationName',
      callConnectedTriggerModel: 'CallConnectedTriggerModel',
      dyvmsSceneName: 'DyvmsSceneName',
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
      applicationCps: 'number',
      applicationName: 'string',
      callConnectedTriggerModel: 'boolean',
      dyvmsSceneName: 'string',
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

