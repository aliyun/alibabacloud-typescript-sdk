// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendCcoSmartCallRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the opening audio file can be interrupted. Default value: **true**, which indicates the opening audio file can be interrupted.
   * 
   * @example
   * true
   */
  actionCodeBreak?: boolean;
  /**
   * @remarks
   * The duration threshold for interrupting based on continuous user speech. This parameter takes effect only when ActionCodeBreak is set to **true**. Unit: milliseconds.
   * 
   * @example
   * 120
   */
  actionCodeTimeBreak?: number;
  /**
   * @remarks
   * The acoustic model ID.
   * 
   * @example
   * 123456
   */
  asrAlsAmId?: string;
  /**
   * @remarks
   * The ASR foundation model.
   * 
   * - **customer_service_8k**: Mandarin.
   * - **dialect_customer_service_8k**: Heavy accent.
   * - If only **asrModelId** is set, the specified ASR model is used.
   * - If only **AsrBaseId** is set, the specified ASR foundation model is used.
   * - If neither is set, the default ASR foundation model is used. The default value of **AsrBaseId** is **customer_service_8k**, which indicates the ASR Mandarin foundation model.
   * - If both are set, make sure they correspond correctly. 
   * 
   * > When you call the **SendCcoSmartCall** operation, specify the ASR model to use. Set either **asrModelId** or **AsrBaseId**.
   * 
   * @example
   * customer_service_8k
   */
  asrBaseId?: string;
  /**
   * @remarks
   * The ASR model ID. View the ASR model ID on the [ASR Model Management page](https://aiccs.console.aliyun.com/sentence/model/private?spm=a2c4g.11186623.0.0.7f9b2964fYSGv4).
   * 
   * @example
   * bf71664d30d2478fb8cb8c39c6b6****
   */
  asrModelId?: string;
  /**
   * @remarks
   * The hot word ID. View the ASR hot word ID on the [ASR Hot Word Management page](https://aiccs.console.aliyun.com/sentence/vocab?spm=a2c4g.11186623.0.0.7f9bf965IKBpsi).
   * 
   * @example
   * 123456
   */
  asrVocabularyId?: string;
  /**
   * @remarks
   * The ID of the background audio file played during the conversation between the user and the robot. Log on to the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview), choose **Intelligent Interaction > Voice File Management**, and click **Details** to view the corresponding voice ID.
   * 
   * @example
   * 2d4c-4e78-8d2a-afbb06cf****.wav
   */
  backgroundFileCode?: string;
  /**
   * @remarks
   * This parameter is not supported.
   * 
   * @example
   * 1
   */
  backgroundSpeed?: number;
  /**
   * @remarks
   * This parameter is not supported.
   * 
   * @example
   * 1
   */
  backgroundVolume?: number;
  /**
   * @remarks
   * The called number. Only numbers in the Chinese mainland are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 137****0000
   */
  calledNumber?: string;
  /**
   * @remarks
   * The China-only caller ID displayed to the called party. The number must be a purchased number.
   * 
   * Log on to the [Contact Center console](https://aiccs.console.aliyun.com/overview?spm=a2c4g.11186623.0.0.7f9bf9658X6jte) to view purchased numbers.
   * 
   * This parameter is required.
   * 
   * @example
   * 0571****0000
   */
  calledShowNumber?: string;
  /**
   * @remarks
   * The dynamic extension ID reserved for the caller. This ID is returned in the callback URL for the caller\\"s development identifier.
   * 
   * @example
   * 123456
   */
  dynamicId?: string;
  /**
   * @remarks
   * The early media speech recognition flag. If set to true, the reason for unanswered calls is recorded. Default value: **false**, which indicates the feature is disabled.
   * 
   * > To enable early media speech recognition, manually set this parameter to **true**.
   * 
   * @example
   * false
   */
  earlyMediaAsr?: boolean;
  /**
   * @remarks
   * Specifies whether to perform Inverse Text Normalization (ITN) in post-processing.
   * 
   * > When set to **true**, Chinese numerals are converted to Arabic numerals in the output. Default value: **false**.
   * 
   * @example
   * true
   */
  enableITN?: boolean;
  /**
   * @remarks
   * The silence duration. Specifies how long the call ends after the user stops speaking. Unit: milliseconds. Valid values: **1000 to 20000**.
   * 
   * - If the specified value is outside this range, the default value of **10000** is used.
   * - This parameter can be dynamically set during the call. The last setting takes effect.
   * 
   * @example
   * 10000
   */
  muteTime?: number;
  /**
   * @remarks
   * The ID reserved for the caller. This ID is returned to the caller in the receipt message. The value is a string of 1 to 15 bytes.
   * 
   * @example
   * 222356****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The pause duration. Specifies how long a user pause indicates the end of a sentence. Unit: milliseconds. Valid values: **300 to 1200**. If the specified value is outside this range, the default value of **800** is used.
   * 
   * > Only the first setting takes effect. Subsequent settings are ignored.
   * 
   * @example
   * 800
   */
  pauseTime?: number;
  /**
   * @remarks
   * This parameter is not supported.
   * 
   * @example
   * 1
   */
  playTimes?: number;
  /**
   * @remarks
   * The product name. Default value: **aiccs**.
   * 
   * @example
   * aiccs
   */
  prodCode?: string;
  /**
   * @remarks
   * Specifies whether to record the call. Valid values:
   * - **true**: Record the call.
   * - **false**: Do not record the call.
   * 
   * @example
   * true
   */
  recordFlag?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The maximum call duration. Unit: seconds. The call is automatically hung up after the timeout.
   * 
   * @example
   * 120
   */
  sessionTimeout?: number;
  /**
   * @remarks
   * This parameter is not supported.
   * 
   * @example
   * 1
   */
  speed?: number;
  /**
   * @remarks
   * Specifies whether to set TTS voice parameters. Valid values:
   * - **true**: Set the voice style by using the TtsStyle, TtsVolume, and TtsSpeed parameters.
   * - **false**: Do not set the related parameters. Even if they are set, they do not take effect.
   * 
   * @example
   * true
   */
  ttsConf?: boolean;
  /**
   * @remarks
   * The voice speed for TTS variable playback. Valid values: -200 to 200. Default value: 0.
   * 
   * @example
   * 100
   */
  ttsSpeed?: number;
  /**
   * @remarks
   * The voice style for TTS variable playback. Default value: **xiaoyun**. For specific styles, refer to the voice style list.
   * 
   * @example
   * xiaoyun
   */
  ttsStyle?: string;
  /**
   * @remarks
   * The volume for TTS variable playback. Valid values: **0 to 100**. Default value: **0**.
   * 
   * @example
   * 10
   */
  ttsVolume?: number;
  /**
   * @remarks
   * The intelligent outbound call audio file. Network files and text-to-speech (TTS) are supported. Multiple files and TTS parameters can be mixed and separated by commas (,). The replacement values for TTS parameters are specified in **VoiceCodeParam**.
   * 
   * - When the audio file is a network file: Set VoiceCode to a public network access audio file URL. Use a WAV format audio file with a sampling frequency of 8000 Hz or 16000 Hz.
   * - When the audio file is TTS: Set VoiceCode to a variable name such as $name$, and set the corresponding content for the variable in VoiceCodeParam in **Settings**.
   * 
   * This parameter is required.
   * 
   * @example
   * 2d4c-4e78-8d2a-afbb06cf****.wav,$name$
   */
  voiceCode?: string;
  /**
   * @remarks
   * The TTS parameter string in JSON format. This parameter must correspond to the TTS parameters in VoiceCode.
   * 
   * @example
   * {"name":"Hello, how are you"}
   */
  voiceCodeParam?: string;
  /**
   * @remarks
   * The volume for playing user audio. Valid values: -4 to 4. Set this parameter to 1.
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

