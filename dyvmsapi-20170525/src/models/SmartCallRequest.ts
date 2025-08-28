// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmartCallRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the playback of the recording file can be interrupted. Default value: **true**. The default value indicates that the playback of the recording file can be interrupted.
   * 
   * If you set the value of this parameter to false, the playback of the recording file cannot be interrupted even if the value of action_break is set to true.
   * 
   * > The value of action_code_break takes precedence over the value of action_break.
   * 
   * @example
   * true
   */
  actionCodeBreak?: boolean;
  /**
   * @remarks
   * The duration that the user keeps speaking. The playback of the recording file is interrupted when this duration is reached. Unit: milliseconds.
   * 
   * If the value of ActionCodeBreak is set to **true** for the recording file and the duration that the user keeps speaking reaches the specified duration, the playback of the recording file is interrupted. If you do not specify ActionCodeTimeBreak or set the value of ActionCodeTimeBreak to 0, the setting of ActionCodeBreak does not take effect.
   * 
   * @example
   * 120
   */
  actionCodeTimeBreak?: number;
  /**
   * @remarks
   * The ASR base model. Valid values:
   * 
   * *   **customer_service_8k** (default): Chinese Mandarin.
   * *   **dialect_customer_service_8k**: a heavy accent.
   * 
   * > You must specify the ASR model when you call the SmartCall operation. We recommend that you specify either of the AsrModelId and AsrBaseId parameters.
   * 
   * *   If you specify only the AsrModelId parameter, the specified ASR model is used.
   * 
   * *   If you specify only the AsrBaseId parameter, the ASR base model is used.
   * 
   * *   If you specify neither of the two parameters, the default ASR base model is used, that is, the default value customer_service_8k is used for the AsrBaseId parameter.
   * 
   * *   If you specify both parameters, make sure that their values do not conflict with each other.
   * 
   * @example
   * customer_service_8k
   */
  asrBaseId?: string;
  /**
   * @remarks
   * The ID of the Automatic Speech Recognition (ASR) model.
   * 
   * You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home) and view the ID of the ASR model on the **ASR Model Management** page.
   * 
   * > You must specify the ASR model when you call the SmartCall operation. We recommend that you specify either of the AsrModelId and AsrBaseId parameters.
   * 
   * *   If you specify only the AsrModelId parameter, the specified ASR model is used.
   * 
   * *   If you specify only the AsrBaseId parameter, the specified ASR base model is used.
   * 
   * *   If you specify neither of the two parameters, the default value customer_service_8k is used for the AsrBaseId parameter. This means that the default Mandarin ASR base model is used.
   * 
   * *   If you specify both parameters, make sure that their values do not conflict with each other.
   * 
   * @example
   * 2070aca1eff146f9a7bc826f1c3d****
   */
  asrModelId?: string;
  /**
   * @remarks
   * The ID of the background voice file that is played back when the user talks with the robot.
   * 
   * You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Voice File Management**, click the **Intelligent Speech Interaction Recording File** tab, and then click **Details** in the Actions column to view the voice ID.
   * 
   * @example
   * 2d4c-4e78-8d2a-afbb06cf****.wav
   */
  backgroundFileCode?: string;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * 1
   */
  backgroundSpeed?: number;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * 1
   */
  backgroundVolume?: number;
  /**
   * @remarks
   * The called number. Only phone numbers in the Chinese mainland are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 1590****0000
   */
  calledNumber?: string;
  /**
   * @remarks
   * The number displayed to the called party. The value must be the number you purchased.
   * 
   * You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home) and choose **Voice Numbers** > **Real Number Management** to view the number you purchased.
   * 
   * This parameter is required.
   * 
   * @example
   * 0571****5678
   */
  calledShowNumber?: string;
  /**
   * @remarks
   * The dynamic extension ID that is reserved for the caller of the operation. This ID is returned in the callback URL and is used as the development identifier of the customer.
   * 
   * @example
   * abcdefgh
   */
  dynamicId?: string;
  /**
   * @remarks
   * Specifies whether to enable speech recognition of early media. Valid values:
   * 
   * *   **false** (default): Speech recognition of early media is disabled.
   * *   **true**: Speech recognition of early media is enabled.
   * 
   * > If you set the value of this parameter to **true**, the reason why the call is not answered is recorded.
   * 
   * @example
   * true
   */
  earlyMediaAsr?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Inverse Text Normalization (ITN) during post-processing. Default value: **false**. If you set the value to false, ITN is not enabled during post-processing.
   * 
   * If you set the value to **true**, Chinese numerals are converted into Arabic numerals for output.
   * 
   * @example
   * false
   */
  enableITN?: boolean;
  /**
   * @remarks
   * The silence duration. The system determines the end of the conversation based on the silence duration of the user. Unit: milliseconds. Valid values: 1000 to 20000.****
   * 
   * > 
   * 
   * *   If you specify a value out of the valid range, the default value **10000** is used.
   * 
   * *   The parameter value can be adjusted during the conversation. The last setting prevails.
   * 
   * @example
   * 10000
   */
  muteTime?: number;
  noiseThreshold?: number;
  /**
   * @remarks
   * The ID that is reserved for the caller of the operation. This ID is returned to the caller in a receipt message.
   * 
   * The value is of the STRING type and must be 1 to 15 bytes in length.
   * 
   * @example
   * 342268*****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The pause duration. The system determines the end of a sentence based on the pause duration of the user in the conversation. Unit: milliseconds. Valid values: 300 to 1200.****
   * 
   * > 
   * 
   * *   If you specify a value out of the valid range, the default value **800** is used.
   * 
   * *   You cannot change the parameter value after specifying it.
   * 
   * @example
   * 800
   */
  pauseTime?: number;
  /**
   * @remarks
   * Specifies whether to record the conversation. Valid values:
   * 
   * *   **true**: The conversation is recorded.
   * *   **false**: The conversation is not recorded.
   * 
   * @example
   * true
   */
  recordFlag?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The maximum call duration. The call is automatically hung up when the maximum call duration is reached. Unit: seconds.
   * 
   * > The maximum call duration is 3,600 seconds.
   * 
   * @example
   * 120
   */
  sessionTimeout?: number;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * 1
   */
  speed?: number;
  /**
   * @remarks
   * Specifies whether to enable streaming ASR, which intelligently judges what the user wants to express based on the first few words spoken by the user. Valid values:
   * 
   * *   **0**: Streaming ASR is disabled.
   * *   **1**: Streaming ASR is enabled.
   * 
   * @example
   * 1
   */
  streamAsr?: number;
  /**
   * @remarks
   * Specifies whether to set TTS sound parameters. Valid values:
   * 
   * *   **true**: TTS sound parameters must be set. You must set the **TtsStyle**, **TtsColume**, and **TtsSpeed** parameters to specify a sound style.
   * *   **false**: TTS sound parameters do not need to be set. The values of TTS sound parameters do not take effect even if you set them.
   * 
   * @example
   * true
   */
  ttsConf?: boolean;
  /**
   * @remarks
   * The speed of TTS variable playback. Valid values: -200 to 200. Default value: 0.
   * 
   * @example
   * 100
   */
  ttsSpeed?: number;
  /**
   * @remarks
   * The sound style for TTS variable playback. Default value: **xiaoyun**. For more information about the sound styles, see the **Sound styles** table below.
   * 
   * @example
   * xiaoyun
   */
  ttsStyle?: string;
  /**
   * @remarks
   * The volume of TTS variable playback. Valid values: 0 to 100. Default value: 0.
   * 
   * @example
   * 10
   */
  ttsVolume?: number;
  /**
   * @remarks
   * The recording file that is played back in the intelligent outbound call.
   * 
   * The file can be an online file, a voice file uploaded from the Voice Messaging Service console, or a text-to-speech (TTS) template that contains variables. You can specify multiple files and a TTS variable together. Separate them with commas (,). The values of the variables in the TTS template are specified by the **VoiceCodeParam** parameter.
   * 
   * *   If you use an online file as the recording file, set the value of **VoiceCode** to the URL of the file that can be accessed over the Internet.
   * *   If you use a voice file uploaded from the Voice Messaging Service console as the recording file, set the value of **VoiceCode** to the voice ID of the file. You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Voice File Management**, click the **Intelligent Speech Interaction Recording File** tab, and then click **Details** in the Actions column to view the voice ID.
   * *   If you use a TTS template that contains variables as the recording file, set the value of **VoiceCode** to a variable name such as $name$, and also set a value for the variable in the **VoiceCodeParam** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2d4c-4e78-8d2a-afbb06cf****.wav,$name$
   */
  voiceCode?: string;
  /**
   * @remarks
   * The value of the TTS variable, in the JSON format. This value must match the TTS variable specified by the **VoiceCode** parameter.
   * 
   * @example
   * {"name":"hello"}
   */
  voiceCodeParam?: string;
  /**
   * @remarks
   * The volume at which the recording file is played. Valid values: -4 to 4. We recommend that you set the value of this parameter to **1**.
   * 
   * @example
   * 1
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      actionCodeBreak: 'ActionCodeBreak',
      actionCodeTimeBreak: 'ActionCodeTimeBreak',
      asrBaseId: 'AsrBaseId',
      asrModelId: 'AsrModelId',
      backgroundFileCode: 'BackgroundFileCode',
      backgroundSpeed: 'BackgroundSpeed',
      backgroundVolume: 'BackgroundVolume',
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      dynamicId: 'DynamicId',
      earlyMediaAsr: 'EarlyMediaAsr',
      enableITN: 'EnableITN',
      muteTime: 'MuteTime',
      noiseThreshold: 'NoiseThreshold',
      outId: 'OutId',
      ownerId: 'OwnerId',
      pauseTime: 'PauseTime',
      recordFlag: 'RecordFlag',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sessionTimeout: 'SessionTimeout',
      speed: 'Speed',
      streamAsr: 'StreamAsr',
      ttsConf: 'TtsConf',
      ttsSpeed: 'TtsSpeed',
      ttsStyle: 'TtsStyle',
      ttsVolume: 'TtsVolume',
      voiceCode: 'VoiceCode',
      voiceCodeParam: 'VoiceCodeParam',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCodeBreak: 'boolean',
      actionCodeTimeBreak: 'number',
      asrBaseId: 'string',
      asrModelId: 'string',
      backgroundFileCode: 'string',
      backgroundSpeed: 'number',
      backgroundVolume: 'number',
      calledNumber: 'string',
      calledShowNumber: 'string',
      dynamicId: 'string',
      earlyMediaAsr: 'boolean',
      enableITN: 'boolean',
      muteTime: 'number',
      noiseThreshold: 'number',
      outId: 'string',
      ownerId: 'number',
      pauseTime: 'number',
      recordFlag: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sessionTimeout: 'number',
      speed: 'number',
      streamAsr: 'number',
      ttsConf: 'boolean',
      ttsSpeed: 'number',
      ttsStyle: 'string',
      ttsVolume: 'number',
      voiceCode: 'string',
      voiceCodeParam: 'string',
      volume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

