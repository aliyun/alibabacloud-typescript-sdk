// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTTSConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The custom voice ID.
   * 
   * @example
   * dc458bba-5a25-4cbc-b5c2
   */
  aliCustomizedVoice?: string;
  /**
   * @remarks
   * The AppKey of the third-party voice configuration.
   * 
   * @example
   * 5b358afc
   */
  appKey?: string;
  /**
   * @remarks
   * The TTS engine.
   * 
   * @example
   * bailian
   */
  engine?: string;
  /**
   * @remarks
   * The iFLYTEK engine parameters.
   * 
   * @example
   * {\\"Voice\\":\\"aisjinger\\"}
   */
  engineXunfei?: string;
  extParams?: string;
  /**
   * @remarks
   * The TTS service invoke type.
   * 
   * @example
   * Managed
   */
  nlsServiceType?: string;
  /**
   * @remarks
   * The pitch rate.
   * 
   * @example
   * 0
   */
  pitchRate?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F132DDBA-66C4-5BD3-BF7E-9642FE877158
   */
  requestId?: string;
  /**
   * @remarks
   * The speech rate.
   * 
   * @example
   * -150
   */
  speechRate?: number;
  /**
   * @remarks
   * The TTS error correction dictionary.
   * 
   * @example
   * [{\\"pronunciation\\":\\"环钱\\",\\"word\\":\\"还钱\\"}]
   */
  ttsOverrides?: string;
  /**
   * @remarks
   * The voice.
   * 
   * @example
   * aixia
   */
  voice?: string;
  /**
   * @remarks
   * The volume.
   * 
   * @example
   * 50
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      aliCustomizedVoice: 'AliCustomizedVoice',
      appKey: 'AppKey',
      engine: 'Engine',
      engineXunfei: 'EngineXunfei',
      extParams: 'ExtParams',
      nlsServiceType: 'NlsServiceType',
      pitchRate: 'PitchRate',
      requestId: 'RequestId',
      speechRate: 'SpeechRate',
      ttsOverrides: 'TtsOverrides',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliCustomizedVoice: 'string',
      appKey: 'string',
      engine: 'string',
      engineXunfei: 'string',
      extParams: 'string',
      nlsServiceType: 'string',
      pitchRate: 'number',
      requestId: 'string',
      speechRate: 'number',
      ttsOverrides: 'string',
      voice: 'string',
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

