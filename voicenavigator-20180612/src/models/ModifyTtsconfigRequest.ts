// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTTSConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The personalized custom voice ID.
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
   * The scenario ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 8a9bdaa895a748528a15b50c281e6474
   */
  instanceId?: string;
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
   * 50
   */
  pitchRate?: string;
  /**
   * @remarks
   * The speech rate.
   * 
   * @example
   * 50
   */
  speechRate?: string;
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
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      aliCustomizedVoice: 'AliCustomizedVoice',
      appKey: 'AppKey',
      engine: 'Engine',
      engineXunfei: 'EngineXunfei',
      extParams: 'ExtParams',
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
      extParams: 'string',
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

