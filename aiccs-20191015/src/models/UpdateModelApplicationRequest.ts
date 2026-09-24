// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelApplicationRequestInterruptConfigAvoidInterruptDTO extends $dara.Model {
  /**
   * @remarks
   * The number of consecutive interruptions.
   * 
   * @example
   * 3
   */
  interruptNum?: number;
  /**
   * @remarks
   * The interrupt protection duration.
   * 
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
   * The continuous interruption prevention configuration.
   */
  avoidInterruptDTO?: UpdateModelApplicationRequestInterruptConfigAvoidInterruptDTO;
  /**
   * @remarks
   * Specifies whether to enable the continuous interruption prevention feature.
   * 
   * @example
   * true
   */
  enableAvoidInterrupt?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the interrupt filler word configuration.
   * 
   * @example
   * true
   */
  enableInterruptBackchannel?: boolean;
  /**
   * @remarks
   * Specifies whether to disable interruption during the entire opening statement.
   * 
   * @example
   * true
   */
  enableStartwordEntireNotInterrupt?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the opening line no-interrupt configuration.
   * 
   * @example
   * true
   */
  enableStartwordNotInterrupt?: boolean;
  /**
   * @remarks
   * The opening line protection duration.
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
   * 111
   */
  backgroundSound?: number;
  /**
   * @remarks
   * The background sound volume (ID). Valid values:
   * - 0: low.
   * - 1: medium.
   * - 2: high.
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
   * 47
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
   * The ID of the mixing template.
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
   * 122
   */
  resourceId?: string;
  /**
   * @remarks
   * The speed for TTS variable playback. Valid values: -200 to 200. Default value: 0.
   * 
   * @example
   * 7
   */
  ttsSpeed?: number;
  /**
   * @remarks
   * The voice style.
   * 
   * @example
   * voice
   */
  ttsStyle?: string;
  /**
   * @remarks
   * The volume for TTS variable playback. Valid values: 0 to 100. Default value: 0.
   * 
   * @example
   * 11
   */
  ttsVolume?: number;
  /**
   * @remarks
   * The code of the voice.
   * 
   * @example
   * 12123213123
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

export class UpdateModelApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * DKSDLSA
   */
  applicationCode?: string;
  /**
   * @remarks
   * The number of concurrent requests for the application.
   * 
   * @example
   * 12
   */
  applicationCps?: number;
  /**
   * @remarks
   * The name of the model application.
   * 
   * @example
   * TestApplication
   */
  applicationName?: string;
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
   * Specifies whether to enable call assistant recognition.
   * 
   * @example
   * true
   */
  callAssistantRecognize?: boolean;
  /**
   * @remarks
   * Specifies whether to enable call-connected event push. This feature is disabled by default.
   * 
   * @example
   * false
   */
  callConnectedTriggerModel?: boolean;
  /**
   * @remarks
   * The enumeration of allowed key digits, specified as comma-separated text such as 1,2,3. A maximum of 20 values are supported.
   * 
   * @example
   * 1
   */
  dtmfAllowedDigits?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic key value validation.
   * 
   * @example
   * true
   */
  dtmfAutoValidateEnable?: boolean;
  /**
   * @remarks
   * The number of DTMF key digits. Valid values: 1 to 12.
   * 
   * @example
   * 1
   */
  dtmfDigitCount?: number;
  /**
   * @remarks
   * The DTMF input timeout period in seconds. Valid values: 1 to 10.
   * 
   * @example
   * 1
   */
  dtmfInputTimeout?: number;
  /**
   * @remarks
   * The action to take when the input is out of range. Valid values:
   * - RETURN_MODEL
   * - AUTO_RETRY
   * 
   * @example
   * RETURN_MODEL
   */
  dtmfOutOfRangeAction?: string;
  /**
   * @remarks
   * The number of retry attempts (PlayTimes). Valid values: 1 to 3. This parameter takes effect only when DtmfOutOfRangeAction is set to AUTO_RETRY.
   * 
   * @example
   * 1
   */
  dtmfRetryPlayTimes?: number;
  /**
   * @remarks
   * The custom retry prompt text. The maximum length is 50 characters. If this parameter is left empty, the default prompt "Invalid input. Enter again." is used.
   * 
   * @example
   * Sample text
   */
  dtmfRetryPromptText?: string;
  /**
   * @remarks
   * The maximum number of DTMF key sending attempts.
   * 
   * @example
   * 90
   */
  dtmfSendMaxCount?: number;
  /**
   * @remarks
   * The timeout period for waiting for DTMF key sending.
   * 
   * @example
   * 58
   */
  dtmfSendWaitTimeout?: number;
  /**
   * @remarks
   * The name of the scenario.
   * 
   * @example
   * TestScenario
   */
  dyvmsSceneName?: string;
  /**
   * @remarks
   * Specifies whether to enable DTMF key collection. Default value: false.
   * 
   * @example
   * false
   */
  enableDtmfReceive?: boolean;
  /**
   * @remarks
   * Specifies whether to enable DTMF key sending.
   * 
   * @example
   * true
   */
  enableDtmfSend?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Morse code configuration. This feature is disabled by default.
   * 
   * @example
   * false
   */
  enableMorse?: boolean;
  /**
   * @remarks
   * The interruption configuration.
   */
  interruptConfig?: UpdateModelApplicationRequestInterruptConfig;
  /**
   * @remarks
   * The code of the model.
   * 
   * @example
   * 1231
   */
  modelCode?: string;
  /**
   * @remarks
   * The version of the model.
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
   * true
   */
  muteActive?: boolean;
  /**
   * @remarks
   * The mute duration.
   * 
   * @example
   * 85
   */
  muteDuration?: number;
  /**
   * @remarks
   * The number of consecutive mute events before the system proactively hangs up.
   * 
   * @example
   * 70
   */
  muteHangupNum?: number;
  /**
   * @remarks
   * The push mode for mute events.
   * 
   * @example
   * FIRST_ONLY
   */
  mutePushMode?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ASR recognition pause duration.
   * 
   * @example
   * 350
   */
  pauseTime?: number;
  /**
   * @remarks
   * The prompt.
   * 
   * @example
   * TestPrompt
   */
  prompt?: string;
  /**
   * @remarks
   * The ID of the qualification.
   * 
   * @example
   * 61
   */
  qualificationId?: number;
  /**
   * @remarks
   * The name of the qualification.
   * 
   * @example
   * TestQualification
   */
  qualificationName?: string;
  /**
   * @remarks
   * The URL of the recording audio file.
   * 
   * @example
   * https://xxxxxxxxxxxxxxx.wav
   */
  recordingFile?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The maximum call duration.
   * 
   * @example
   * 49
   */
  sessionTimeout?: number;
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
   * The content of the speech script.
   * 
   * @example
   * TestSpeechScript
   */
  speechContent?: string;
  /**
   * @remarks
   * The ID of the speech script.
   * 
   * @example
   * 15
   */
  speechId?: number;
  /**
   * @remarks
   * The opening statement.
   * 
   * @example
   * Hello, this is a test opening statement
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
   */
  ttsConfig?: UpdateModelApplicationRequestTtsConfig;
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
      dtmfSendMaxCount: 'DtmfSendMaxCount',
      dtmfSendWaitTimeout: 'DtmfSendWaitTimeout',
      dyvmsSceneName: 'DyvmsSceneName',
      enableDtmfReceive: 'EnableDtmfReceive',
      enableDtmfSend: 'EnableDtmfSend',
      enableMorse: 'EnableMorse',
      interruptConfig: 'InterruptConfig',
      modelCode: 'ModelCode',
      modelVersion: 'ModelVersion',
      muteActive: 'MuteActive',
      muteDuration: 'MuteDuration',
      muteHangupNum: 'MuteHangupNum',
      mutePushMode: 'MutePushMode',
      ownerId: 'OwnerId',
      pauseTime: 'PauseTime',
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
      dtmfSendMaxCount: 'number',
      dtmfSendWaitTimeout: 'number',
      dyvmsSceneName: 'string',
      enableDtmfReceive: 'boolean',
      enableDtmfSend: 'boolean',
      enableMorse: 'boolean',
      interruptConfig: UpdateModelApplicationRequestInterruptConfig,
      modelCode: 'string',
      modelVersion: 'string',
      muteActive: 'boolean',
      muteDuration: 'number',
      muteHangupNum: 'number',
      mutePushMode: 'string',
      ownerId: 'number',
      pauseTime: 'number',
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

