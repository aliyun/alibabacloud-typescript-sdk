// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTTSConfigRequest extends $dara.Model {
  aliCustomizedVoice?: string;
  appKey?: string;
  engine?: string;
  engineXunfei?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12f407b22cbe4890ac595f09985848d5
   */
  instanceId?: string;
  nlsServiceType?: string;
  pitchRate?: string;
  /**
   * @example
   * 100
   */
  speechRate?: string;
  ttsOverrides?: string;
  /**
   * @example
   * aixia
   */
  voice?: string;
  /**
   * @example
   * 10
   */
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      aliCustomizedVoice: 'AliCustomizedVoice',
      appKey: 'AppKey',
      engine: 'Engine',
      engineXunfei: 'EngineXunfei',
      instanceId: 'InstanceId',
      nlsServiceType: 'NlsServiceType',
      pitchRate: 'PitchRate',
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
      instanceId: 'string',
      nlsServiceType: 'string',
      pitchRate: 'string',
      speechRate: 'string',
      ttsOverrides: 'string',
      voice: 'string',
      volume: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

