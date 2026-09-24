// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddModelApplicationRequestTtsConfig extends $dara.Model {
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
   * The background sound ID.
   * 
   * @example
   * 111
   */
  backgroundSound?: number;
  /**
   * @remarks
   * The background sound volume.
   * 
   * @example
   * 1
   */
  backgroundVolume?: number;
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 45
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
   * The mixing template ID.
   * 
   * @example
   * 111
   */
  mixingTemplate?: number;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * example
   */
  resourceId?: string;
  /**
   * @remarks
   * The speed for TTS variable playback. Valid values: -200 to 200. Default value: 0.
   * 
   * @example
   * 13
   */
  ttsSpeed?: number;
  /**
   * @remarks
   * The voice style.
   * 
   * @example
   * 龙小夏
   */
  ttsStyle?: string;
  /**
   * @remarks
   * The volume for TTS variable playback. Valid values: 0 to 100. Default value: 0.
   * 
   * @example
   * 55
   */
  ttsVolume?: number;
  /**
   * @remarks
   * The voice code.
   * 
   * @example
   * ddddfd
   */
  voiceCode?: string;
  /**
   * @remarks
   * The voice type. Valid values:
   * 
   * - SYSTEM: system voice.
   * - COSYCLONE: cloned voice.
   * - BL-CUSTOM: custom premium cloned voice.
   * 
   * @example
   * SYSTEM
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

export class AddModelApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The number of concurrent requests for the application.
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
   * TestApplication
   */
  applicationName?: string;
  /**
   * @remarks
   * Specifies whether to enable call-connected event push. Disabled by default.
   * 
   * @example
   * false
   */
  callConnectedTriggerModel?: boolean;
  /**
   * @remarks
   * The scenario name.
   * 
   * @example
   * TestScenario
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
   * The number of consecutive mute events before the system proactively hangs up the call.
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
   * Test prompt
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
   * The qualification name.
   * 
   * @example
   * TestQualification
   */
  qualificationName?: string;
  /**
   * @remarks
   * The URL of the recorded audio file for the opening statement. This parameter is required when the opening statement type is set to 1.
   * 
   * @example
   * https://xxxxxxxx.wav
   */
  recordingFile?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source. Fixed value: USER.
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
   * Test speech script
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
   * The opening statement.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello, this is an opening statement
   */
  startWord?: string;
  /**
   * @remarks
   * The type of the opening statement.
   * 
   * @example
   * 0
   */
  startWordType?: number;
  /**
   * @remarks
   * The text-to-speech (TTS) configuration, including voice, volume, and speed.
   * 
   * This parameter is required.
   */
  ttsConfig?: AddModelApplicationRequestTtsConfig;
  /**
   * @remarks
   * The usage description.
   * 
   * @example
   * TestUsage
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
      ttsConfig: 'TtsConfig',
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
      ttsConfig: AddModelApplicationRequestTtsConfig,
      usageDesc: 'string',
    };
  }

  validate() {
    if(this.ttsConfig && typeof (this.ttsConfig as any).validate === 'function') {
      (this.ttsConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

