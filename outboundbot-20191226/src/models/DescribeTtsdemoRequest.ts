// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTTSDemoRequest extends $dara.Model {
  accessKey?: string;
  aliCustomizedVoice?: string;
  appKey?: string;
  engine?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a8eccb3c-2b26-4b6d-a54f-696b953e33a6
   */
  instanceId?: string;
  nlsServiceType?: string;
  /**
   * @example
   * 0
   */
  pitchRate?: number;
  /**
   * @example
   * 5ab2d935-306c-478a-88bf-d08e4e25c1b7
   */
  scriptId?: string;
  secretKey?: string;
  /**
   * @example
   * 0
   */
  speechRate?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: string;
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
      accessKey: 'AccessKey',
      aliCustomizedVoice: 'AliCustomizedVoice',
      appKey: 'AppKey',
      engine: 'Engine',
      instanceId: 'InstanceId',
      nlsServiceType: 'NlsServiceType',
      pitchRate: 'PitchRate',
      scriptId: 'ScriptId',
      secretKey: 'SecretKey',
      speechRate: 'SpeechRate',
      text: 'Text',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      aliCustomizedVoice: 'string',
      appKey: 'string',
      engine: 'string',
      instanceId: 'string',
      nlsServiceType: 'string',
      pitchRate: 'number',
      scriptId: 'string',
      secretKey: 'string',
      speechRate: 'number',
      text: 'string',
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

