// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendCcoSmartCallRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  actionCodeBreak?: boolean;
  /**
   * @example
   * 120
   */
  actionCodeTimeBreak?: number;
  /**
   * @example
   * 123456
   */
  asrAlsAmId?: string;
  /**
   * @example
   * customer_service_8k
   */
  asrBaseId?: string;
  /**
   * @example
   * bf71664d30d2478fb8cb8c39c6b6****
   */
  asrModelId?: string;
  /**
   * @example
   * 123456
   */
  asrVocabularyId?: string;
  /**
   * @example
   * 2d4c-4e78-8d2a-afbb06cf****.wav
   */
  backgroundFileCode?: string;
  /**
   * @example
   * 1
   */
  backgroundSpeed?: number;
  /**
   * @example
   * 1
   */
  backgroundVolume?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 137****0000
   */
  calledNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0571****0000
   */
  calledShowNumber?: string;
  /**
   * @example
   * 123456
   */
  dynamicId?: string;
  /**
   * @example
   * fasle
   */
  earlyMediaAsr?: boolean;
  /**
   * @example
   * true
   */
  enableITN?: boolean;
  /**
   * @example
   * 10000
   */
  muteTime?: number;
  /**
   * @example
   * 222356****
   */
  outId?: string;
  ownerId?: number;
  /**
   * @example
   * 800
   */
  pauseTime?: number;
  /**
   * @example
   * 1
   */
  playTimes?: number;
  /**
   * @example
   * aiccs
   */
  prodCode?: string;
  /**
   * @example
   * true
   */
  recordFlag?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 120
   */
  sessionTimeout?: number;
  /**
   * @example
   * 1
   */
  speed?: number;
  /**
   * @example
   * true
   */
  ttsConf?: boolean;
  /**
   * @example
   * 100
   */
  ttsSpeed?: number;
  /**
   * @example
   * xiaoyun
   */
  ttsStyle?: string;
  /**
   * @example
   * 10
   */
  ttsVolume?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2d4c-4e78-8d2a-afbb06cf****.wav,$name$
   */
  voiceCode?: string;
  voiceCodeParam?: string;
  /**
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

