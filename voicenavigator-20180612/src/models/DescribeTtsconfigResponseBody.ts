// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTTSConfigResponseBody extends $dara.Model {
  aliCustomizedVoice?: string;
  appKey?: string;
  engine?: string;
  engineXunfei?: string;
  nlsServiceType?: string;
  pitchRate?: number;
  /**
   * @example
   * F132DDBA-66C4-5BD3-BF7E-9642FE877158
   */
  requestId?: string;
  /**
   * @example
   * -150
   */
  speechRate?: number;
  ttsOverrides?: string;
  /**
   * @example
   * aixia
   */
  voice?: string;
  /**
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

