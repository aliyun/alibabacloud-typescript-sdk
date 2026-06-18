// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiccsSmartCallRequest extends $dara.Model {
  /**
   * @remarks
   * Whether the initial audio playback file is interruptible. The default value is **true**, which means the initial audio playback file can be interrupted.
   * 
   * @example
   * true
   */
  actionCodeBreak?: boolean;
  /**
   * @remarks
   * Interrupts based on the user\\"s continuous speaking duration. Takes effect only when ActionCodeBreak is **true**. Unit: milliseconds.
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
   * 23387****
   */
  asrAlsAmId?: string;
  /**
   * @remarks
   * ASR foundation model.
   * 
   * - **customer_service_8k**: Mandarin.
   * - **dialect_customer_service_8k**: Heavy accent.
   * 
   * > - When invoking the **SendCcoSmartCall** API, you must specify an ASR model. We recommend that you provide either the **asrModelId** or **AsrBaseId** parameter.
   * - If only **asrModelId** is set, the specified ASR model is used.
   * - If only **AsrBaseId** is set, the specified ASR foundation model is used.
   * - If neither parameter is set, the default ASR foundation model is used. By default, **AsrBaseId** is **customer_service_8k**, which corresponds to the Mandarin ASR foundation model.
   * - If both parameters are set, confirm that they correctly correspond to each other.
   * 
   * @example
   * customer_service_8k
   */
  asrBaseId?: string;
  /**
   * @remarks
   * ASR model ID. You can view the ASR model ID on the [ASR Model Management page](https://aiccs.console.aliyun.com/sentence/model/private?spm=a2c4g.11186623.0.0.7f9b2964fYSGv4).
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
   * 6689****
   */
  asrVocabularyId?: string;
  /**
   * @remarks
   * ID of the background audio file played during the conversation between the user and the robot.  
   * 
   * You can log on to the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview), choose **Intelligent Interaction > Audio File Management**, and click **View** to check the corresponding audio ID.
   * 
   * @example
   * 2d4c-4e78-8d2a-afbb06cf****.wav
   */
  backgroundFileCode?: string;
  /**
   * @remarks
   * This parameter is currently not supported.
   * 
   * @example
   * 1
   */
  backgroundSpeed?: number;
  /**
   * @remarks
   * The parameter is not supported yet.
   * 
   * @example
   * 1
   */
  backgroundVolume?: number;
  /**
   * @remarks
   * Called number. Only numbers in the Chinese mainland are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 1862222****
   */
  calledNumber?: string;
  /**
   * @remarks
   * The caller ID displayed to the callee. This must be a number you have purchased.
   * 
   * You can log on to the [Contact Center console](https://aiccs.console.aliyun.com/overview?spm=a2c4g.11186623.0.0.7f9bf9658X6jte) to view your purchased numbers.
   * 
   * This parameter is required.
   * 
   * @example
   * 0571000****
   */
  calledShowNumber?: string;
  /**
   * @remarks
   * A dynamic extension ID reserved for the caller, which is returned in the webhook address to serve as the customer\\"s developer identity.
   * 
   * @example
   * 2234****
   */
  dynamicId?: string;
  /**
   * @remarks
   * Early media speech recognition identity. When set to **true**, it records the reason why the call was not answered. Default value: **false**, meaning disabled.
   * 
   * > To enable early media speech recognition, you must manually set this parameter to **true**.
   * 
   * @example
   * fasle
   */
  earlyMediaAsr?: boolean;
  /**
   * @remarks
   * Whether to execute ITN during post-processing.  
   * 
   * > When set to **true**, Chinese numerals are converted to Arabic numerals in the output. The default value is **false**.
   * 
   * @example
   * true
   */
  enableITN?: boolean;
  /**
   * @remarks
   * Silence duration. This parameter defines how long the call waits for user speech before ending the call. The unit is milliseconds, and valid values range from **1000 to 20000**.
   * 
   * - If the specified value is outside this range, **MuteTime** defaults to **10000**.
   * - This parameter can be dynamically updated during the call. The last set value takes effect.
   * 
   * @example
   * 10000
   */
  muteTime?: number;
  /**
   * @remarks
   * An ID reserved for the caller. This ID will be returned to the caller in the receipt message.  
   * It is a string with a length of 1 to 15 bytes.
   * 
   * @example
   * 222356****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * Pause duration. Specifies how long the user must pause to indicate the end of a sentence. Unit: milliseconds. Valid range: **300–1200**.
   * 
   * - If the specified value is outside this range, PauseTime defaults to **800**.
   * - Only the first setting takes effect; subsequent settings are ignored.
   * 
   * @example
   * 800
   */
  pauseTime?: number;
  /**
   * @remarks
   * The parameter is not supported yet.
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
   * 
   * @example
   * true
   */
  recordFlag?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Maximum call duration, in seconds. The call is automatically disconnected after timeout.
   * 
   * @example
   * 120
   */
  sessionTimeout?: number;
  /**
   * @remarks
   * This parameter is not currently supported.
   * 
   * @example
   * 1
   */
  speed?: number;
  /**
   * @remarks
   * Whether to configure TTS voice parameters.
   * - If set to **true**, you must use the TtsStyle, TtsVolume, and TtsSpeed parameters to define the voice style.
   * - If set to **false**, related parameters are not required and will have no effect even if configured.
   * 
   * @example
   * true
   */
  ttsConf?: boolean;
  /**
   * @remarks
   * Speech speed when playing TTS variables. Valid values range from **-200 to 200**. The default value is **0**.
   * 
   * @example
   * 100
   */
  ttsSpeed?: number;
  /**
   * @remarks
   * Voice style used during TTS variable playback. Default value: **xiaoyun**. For available styles, see the voice style list.
   * 
   * @example
   * xiaoyun
   */
  ttsStyle?: string;
  /**
   * @remarks
   * The volume for TTS variable playback. Valid values range from **0 to 100**. The default value is **0**.
   * 
   * @example
   * 10
   */
  ttsVolume?: number;
  /**
   * @remarks
   * The Intelligent Outbound Call playback audio file supports both network files and TTS. Multiple files and TTS parameters can be mixed for playback, separated by commas (,). The replacement values for TTS parameters are specified in **VoiceCodeParam**.
   * 
   * - When the playback file is a network file: Set the VoiceCode parameter to a publicly accessible URL of the audio file. We recommend using a WAV-formatted audio file with a sampling frequency of 8000 Hz or 16000 Hz.
   * - When the playback file uses TTS: Set the VoiceCode parameter to a variable name such as $name$, and define the corresponding content for this variable in VoiceCodeParam.
   * 
   * This parameter is required.
   * 
   * @example
   * 2d4c-4e78-8d2a-afbb06cf****.wav,$name$
   */
  voiceCode?: string;
  /**
   * @remarks
   * TTS parameter string in JSON format. It must correspond to the TTS parameters of VoiceCode.
   * 
   * @example
   * “{\\”name\\”:\\”喂，你好\\”}”
   */
  voiceCodeParam?: string;
  /**
   * @remarks
   * The volume for playing user audio. Valid values range from **-4 to 4**. We recommend setting it to **1**.
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

