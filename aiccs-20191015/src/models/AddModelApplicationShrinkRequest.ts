// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddModelApplicationShrinkRequest extends $dara.Model {
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
  ttsConfigShrink?: string;
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

