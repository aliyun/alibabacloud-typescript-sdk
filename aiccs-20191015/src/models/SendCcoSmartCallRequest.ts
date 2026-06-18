// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendCcoSmartCallRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the initial playback file can be interrupted. The default value is **true**, meaning the initial playback file can be interrupted.
   * 
   * @example
   * true
   */
  actionCodeBreak?: boolean;
  /**
   * @remarks
   * Interrupts based on the user\\"s continuous speaking duration. Takes effect only when ActionCodeBreak is set to **true**. Unit: milliseconds.
   * 
   * @example
   * 120
   */
  actionCodeTimeBreak?: number;
  /**
   * @remarks
   * Acoustic model ID.
   * 
   * @example
   * 123456
   */
  asrAlsAmId?: string;
  /**
   * @remarks
   * ASR foundation model.
   * 
   * - **customer_service_8k**: Mandarin.
   * - **dialect_customer_service_8k**: Strong accent.
   * - If only **asrModelId** is set, the specified ASR model is used.
   * - If only **AsrBaseId** is set, the specified ASR foundation model is used.
   * - If neither is set, the default ASR foundation model is used. By default, **AsrBaseId** is **customer_service_8k**, which corresponds to the Mandarin ASR foundation model.
   * - If both are set, ensure they correctly correspond to each other.
   * 
   * > When invoking the **SendCcoSmartCall** API, you must specify the ASR model to use. We recommend that you specify either **asrModelId** or **AsrBaseId**, but not both.
   * 
   * @example
   * customer_service_8k
   */
  asrBaseId?: string;
  /**
   * @remarks
   * The ASR model ID. You can view the ASR model ID on the [ASR Model Management Page](https://aiccs.console.aliyun.com/sentence/model/private?spm=a2c4g.11186623.0.0.7f9b2964fYSGv4).
   * 
   * @example
   * bf71664d30d2478fb8cb8c39c6b6****
   */
  asrModelId?: string;
  /**
   * @remarks
   * Hotword ID. You can view the ASR hotword ID on the [ASR Hotword Management Page](https://aiccs.console.aliyun.com/sentence/vocab?spm=a2c4g.11186623.0.0.7f9bf965IKBpsi).
   * 
   * @example
   * 123456
   */
  asrVocabularyId?: string;
  /**
   * @remarks
   * ID of the background audio file played during the conversation between the user and the robot. You can log on to the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview), choose **Intelligent Interaction > Audio File Management**, and click **View Details** to obtain the corresponding audio ID.
   * 
   * @example
   * 2d4c-4e78-8d2a-afbb06cf****.wav
   */
  backgroundFileCode?: string;
  /**
   * @remarks
   * This parameter is not currently supported.
   * 
   * @example
   * 1
   */
  backgroundSpeed?: number;
  /**
   * @remarks
   * This parameter is not currently supported.
   * 
   * @example
   * 1
   */
  backgroundVolume?: number;
  /**
   * @remarks
   * Callee number. Only numbers from the Chinese mainland are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 137****0000
   */
  calledNumber?: string;
  /**
   * @remarks
   * Called party display number. This must be a purchased number.
   * 
   * You can log on to the [Contact Center console](https://aiccs.console.aliyun.com/overview?spm=a2c4g.11186623.0.0.7f9bf9658X6jte) to view your purchased numbers.
   * 
   * This parameter is required.
   * 
   * @example
   * 0571****0000
   */
  calledShowNumber?: string;
  /**
   * @remarks
   * A dynamic extension ID reserved for the caller. This ID is returned in the webhook address and used as a developer identity for the customer.
   * 
   * @example
   * 123456
   */
  dynamicId?: string;
  /**
   * @remarks
   * The early media speech recognition identity. When set to true, it records the reason why the call was not answered. The default value is **false**, meaning this feature is disabled.
   * 
   * > To enable early media speech recognition, you must manually set this parameter to **true**.
   * 
   * @example
   * false
   */
  earlyMediaAsr?: boolean;
  /**
   * @remarks
   * Whether to execute ITN in post-processing.
   * 
   * > When set to **true**, Chinese numerals are converted to Arabic numerals in the output. The default value is **false**.
   * 
   * @example
   * true
   */
  enableITN?: boolean;
  /**
   * @remarks
   * Mute duration, used to set how long the user remains silent before the call ends. The unit is milliseconds, and the valid range is **1000–20000**.  
   * 
   * - If the specified value is outside this range, the default MuteTime is **10000**.  
   * - This parameter can be dynamically set during the call, and the last setting takes effect.
   * 
   * @example
   * 10000
   */
  muteTime?: number;
  /**
   * @remarks
   * An ID reserved for the caller, which will ultimately be returned to the caller in the receipt message.  
   * It is of string type and must be 1 to 15 bytes in length.
   * 
   * @example
   * 222356****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The pause duration. This parameter specifies how long a user must pause to indicate the end of a sentence. Unit: milliseconds. Valid values are **300–1200**. If the specified value is outside this range, PauseTime defaults to **800**.
   * 
   * > The first setting takes effect; subsequent settings are ignored.
   * 
   * @example
   * 800
   */
  pauseTime?: number;
  /**
   * @remarks
   * This parameter is not currently supported.
   * 
   * @example
   * 1
   */
  playTimes?: number;
  /**
   * @remarks
   * Product name. Default value: **aiccs**.
   * 
   * @example
   * aiccs
   */
  prodCode?: string;
  /**
   * @remarks
   * Whether to record during the call.
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  recordFlag?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The maximum call duration, in seconds. The call is automatically disconnected after timeout.
   * 
   * @example
   * 120
   */
  sessionTimeout?: number;
  /**
   * @remarks
   * This parameter is currently not supported.
   * 
   * @example
   * 1
   */
  speed?: number;
  /**
   * @remarks
   * Whether to configure TTS voice parameters.
   * - If set to **true**, you must configure the voice style using the TtsStyle, TtsVolume, and TtsSpeed parameters.
   * - If set to **false**, related parameters do not take effect, even if configured.
   * 
   * @example
   * true
   */
  ttsConf?: boolean;
  /**
   * @remarks
   * The playback speed of the TTS variable. Valid values range from -200 to 200. The default value is 0.
   * 
   * @example
   * 100
   */
  ttsSpeed?: number;
  /**
   * @remarks
   * The voice style for TTS variable playback. The default value is **xiaoyun**. For available styles, see the voice style list.
   * 
   * @example
   * xiaoyun
   */
  ttsStyle?: string;
  /**
   * @remarks
   * Playback volume for TTS variables. Valid values: **0–100**. Default value: **0**.
   * 
   * @example
   * 10
   */
  ttsVolume?: number;
  /**
   * @remarks
   * The audio playback file for Intelligent outbound calls, which supports both network files and TTS. Multiple files and TTS parameters can be mixed and separated by commas (,). The replacement values for TTS parameters are specified in **VoiceCodeParam**.
   * 
   * - When using a network file for playback: Set the VoiceCode parameter to a publicly accessible URL of the audio file. We recommend using a .wav audio file with a sampling frequency of 8000 Hz or 16000 Hz.
   * - When using TTS for playback: Set the VoiceCode parameter to a variable name such as $name$, and define the corresponding content for this variable in VoiceCodeParam.
   * 
   * This parameter is required.
   * 
   * @example
   * 2d4c-4e78-8d2a-afbb06cf****.wav,$name$
   */
  voiceCode?: string;
  /**
   * @remarks
   * A JSON-formatted string for passing TTS parameters. It must correspond to the TTS parameters of VoiceCode.
   * 
   * @example
   * {"name":"喂，你好"}
   */
  voiceCodeParam?: string;
  /**
   * @remarks
   * Playback volume for user audio. Valid values: –4 to 4. We recommend setting it to 1.
   * 
   * @example
   * 1
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      actionCodeBreak: 'ActionCodeBreak',
      actionCodeTimeBreak: 'ActionCodeTimeBreak',
      asrAlsAmId: 'AsrAlsAmId',
      asrBaseId: 'AsrBaseId',
      asrModelId: 'AsrModelId',
      asrVocabularyId: 'AsrVocabularyId',
      backgroundFileCode: 'BackgroundFileCode',
      backgroundSpeed: 'BackgroundSpeed',
      backgroundVolume: 'BackgroundVolume',
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      dynamicId: 'DynamicId',
      earlyMediaAsr: 'EarlyMediaAsr',
      enableITN: 'EnableITN',
      muteTime: 'MuteTime',
      outId: 'OutId',
      ownerId: 'OwnerId',
      pauseTime: 'PauseTime',
      playTimes: 'PlayTimes',
      prodCode: 'ProdCode',
      recordFlag: 'RecordFlag',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sessionTimeout: 'SessionTimeout',
      speed: 'Speed',
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
      asrAlsAmId: 'string',
      asrBaseId: 'string',
      asrModelId: 'string',
      asrVocabularyId: 'string',
      backgroundFileCode: 'string',
      backgroundSpeed: 'number',
      backgroundVolume: 'number',
      calledNumber: 'string',
      calledShowNumber: 'string',
      dynamicId: 'string',
      earlyMediaAsr: 'boolean',
      enableITN: 'boolean',
      muteTime: 'number',
      outId: 'string',
      ownerId: 'number',
      pauseTime: 'number',
      playTimes: 'number',
      prodCode: 'string',
      recordFlag: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sessionTimeout: 'number',
      speed: 'number',
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

