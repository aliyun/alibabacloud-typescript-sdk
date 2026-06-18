// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddModelApplicationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The number of concurrent requests per second (CPS).
   * 
   * This parameter is required.
   * 
   * @example
   * 25
   */
  applicationCps?: number;
  /**
   * @remarks
   * The name of the model application.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试应用
   */
  applicationName?: string;
  /**
   * @remarks
   * Specifies whether to push an event notification when a call is connected. The default value is false.
   * 
   * @example
   * false
   */
  callConnectedTriggerModel?: boolean;
  /**
   * @remarks
   * The scene name.
   * 
   * @example
   * 测试场景
   */
  dyvmsSceneName?: string;
  /**
   * @remarks
   * The model code.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  modelCode?: string;
  /**
   * @remarks
   * The model version.
   * 
   * @example
   * 1
   */
  modelVersion?: string;
  /**
   * @remarks
   * Specifies whether the first mute event triggers the model.
   * 
   * @example
   * false
   */
  muteActive?: boolean;
  /**
   * @remarks
   * The mute duration.
   * 
   * @example
   * 70
   */
  muteDuration?: number;
  /**
   * @remarks
   * The number of consecutive mute events that trigger an automatic hang-up.
   * 
   * @example
   * 5
   */
  muteHangupNum?: number;
  ownerId?: number;
  /**
   * @remarks
   * The prompt.
   * 
   * @example
   * 测试提示词。
   */
  prompt?: string;
  /**
   * @remarks
   * The qualification ID.
   * 
   * @example
   * 85
   */
  qualificationId?: number;
  /**
   * @remarks
   * The name of the qualification.
   * 
   * @example
   * 测试资质
   */
  qualificationName?: string;
  /**
   * @remarks
   * The URL of the audio file for the opening line. This parameter is required if `StartWordType` is set to `1`.
   * 
   * @example
   * https://xxxxxxxx.wav
   */
  recordingFile?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source. The value must be `USER`.
   * 
   * @example
   * USER
   */
  source?: string;
  /**
   * @remarks
   * The speech script content.
   * 
   * @example
   * 测试话术。
   */
  speechContent?: string;
  /**
   * @remarks
   * The speech script ID.
   * 
   * @example
   * 88
   */
  speechId?: number;
  /**
   * @remarks
   * The opening line.
   * 
   * This parameter is required.
   * 
   * @example
   * 你好，这是一句开场白。
   */
  startWord?: string;
  /**
   * @remarks
   * The type of the opening line.
   * 
   * @example
   * 0：文本
   * 1：录音
   */
  startWordType?: number;
  /**
   * @remarks
   * The TTS configuration, including voice, volume, speech speed, and more.
   * 
   * This parameter is required.
   */
  ttsConfigShrink?: string;
  /**
   * @remarks
   * The purpose of the application.
   * 
   * @example
   * 测试用途
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

