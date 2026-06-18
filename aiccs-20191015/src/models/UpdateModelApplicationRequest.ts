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
   * The interruption protection duration, in seconds.
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
   * The configuration to prevent consecutive barge-ins.
   */
  avoidInterruptDTO?: UpdateModelApplicationRequestInterruptConfigAvoidInterruptDTO;
  /**
   * @remarks
   * Specifies whether to prevent consecutive barge-ins.
   * 
   * @example
   * true
   */
  enableAvoidInterrupt?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the backchannel configuration for interruptions.
   * 
   * @example
   * true
   */
  enableInterruptBackchannel?: boolean;
  /**
   * @remarks
   * Specifies whether to make the entire opening statement non-interruptible.
   * 
   * @example
   * true
   */
  enableStartwordEntireNotInterrupt?: boolean;
  /**
   * @remarks
   * Specifies whether to make the opening statement non-interruptible.
   */
  enableStartwordNotInterrupt?: boolean;
  /**
   * @remarks
   * The protection duration for the opening statement, in seconds.
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
   * The background sound ID.
   * 
   * @example
   * 111
   */
  backgroundSound?: number;
  /**
   * @remarks
   * The volume of the background sound. Valid values: `0` (low), `1` (medium), and `2` (high).
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
   * 122
   */
  resourceId?: string;
  /**
   * @remarks
   * The TTS playback speech rate. Valid values range from -200 to 200. The default value is 0.
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
   * The TTS playback volume. Valid values range from 0 to 100. The default value is 0.
   * 
   * @example
   * 11
   */
  ttsVolume?: number;
  /**
   * @remarks
   * The voice code.
   * 
   * @example
   * 12123213123
   */
  voiceCode?: string;
  /**
   * @remarks
   * The voice type. Valid values:
   * 
   * ```
   * SYSTEM: System voice.
   * COSYCLONE: Cloned voice.
   * BL-CUSTOM: Premium custom-cloned voice.
   * ```
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
   * The application code.
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
   * 测试应用
   */
  applicationName?: string;
  /**
   * @remarks
   * Specifies whether to hang up the call when a call assistant is detected.
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
   * Specifies whether to trigger the model immediately after the call is connected.
   * 
   * @example
   * false
   */
  callConnectedTriggerModel?: boolean;
  /**
   * @remarks
   * The allowed DTMF digits, specified as a comma-separated string such as `1,2,3`. You can specify a maximum of 20 digits.
   * 
   * @example
   * 1
   */
  dtmfAllowedDigits?: string;
  /**
   * @remarks
   * Specifies whether to automatically validate the DTMF digits.
   * 
   * @example
   * true
   */
  dtmfAutoValidateEnable?: boolean;
  /**
   * @remarks
   * The number of DTMF digits to collect. The value must be between 1 and 12.
   * 
   * @example
   * 1
   */
  dtmfDigitCount?: number;
  /**
   * @remarks
   * The timeout for DTMF input, in seconds. The value must be between 1 and 10.
   * 
   * @example
   * 1
   */
  dtmfInputTimeout?: number;
  /**
   * @remarks
   * The action to take when the input is outside the allowed range. Valid values: `RETURN_MODEL` and `AUTO_RETRY`.
   * 
   * @example
   * RETURN_MODEL
   */
  dtmfOutOfRangeAction?: string;
  /**
   * @remarks
   * The number of retry attempts. The value must be between 1 and 3. This parameter is effective only when `DtmfOutOfRangeAction` is set to `AUTO_RETRY`.
   * 
   * @example
   * 1
   */
  dtmfRetryPlayTimes?: number;
  /**
   * @remarks
   * The custom text for the retry prompt. The text can contain a maximum of 50 characters. If this parameter is empty, the system uses the default prompt: "Invalid input. Please try again."
   * 
   * @example
   * 测试文本
   */
  dtmfRetryPromptText?: string;
  /**
   * @example
   * 90
   */
  dtmfSendMaxCount?: number;
  /**
   * @example
   * 58
   */
  dtmfSendWaitTimeout?: number;
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
   * Specifies whether to enable the collection of DTMF signals. The default value is `false`.
   * 
   * @example
   * false
   */
  enableDtmfReceive?: boolean;
  /**
   * @example
   * true
   */
  enableDtmfSend?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the Morse code configuration. The default value is `false`.
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
   * The model code.
   * 
   * @example
   * 1231
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
   * The number of consecutive mute events that trigger an automatic hang-up.
   * 
   * @example
   * 70
   */
  muteHangupNum?: number;
  /**
   * @remarks
   * 静音事件推送模式
   * 
   * @example
   * FIRST_ONLY
   */
  mutePushMode?: string;
  ownerId?: number;
  /**
   * @remarks
   * The prompt.
   * 
   * @example
   * 测试提示词
   */
  prompt?: string;
  /**
   * @remarks
   * The qualification ID.
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
   * 测试质检
   */
  qualificationName?: string;
  /**
   * @remarks
   * The URL of the recording file.
   * 
   * @example
   * https://xxxxxxxxxxxxxxx.wav
   */
  recordingFile?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The session timeout, which is the maximum duration of a call.
   * 
   * @example
   * 49
   */
  sessionTimeout?: number;
  /**
   * @remarks
   * The value must be `USER`.
   * 
   * @example
   * USER
   */
  source?: string;
  /**
   * @remarks
   * The content of the speech.
   * 
   * @example
   * 测试话术
   */
  speechContent?: string;
  /**
   * @remarks
   * The speech ID.
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
   * 你好，这是个测试开场白
   */
  startWord?: string;
  /**
   * @remarks
   * The type of the opening statement. Valid values:
   * 
   * @example
   * 0：文本
   * 1：录音
   */
  startWordType?: number;
  /**
   * @remarks
   * The TTS configuration, such as voice, volume, and speech rate.
   */
  ttsConfig?: UpdateModelApplicationRequestTtsConfig;
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

