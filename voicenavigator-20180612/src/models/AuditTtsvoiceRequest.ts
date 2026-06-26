// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuditTTSVoiceRequest extends $dara.Model {
  accessKey?: string;
  appKey?: string;
  engine?: string;
  extParams?: string;
  /**
   * @remarks
   * The instance ID of the navigation instance.
   * 
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  pitchRate?: string;
  secretKey?: string;
  /**
   * @remarks
   * The speech rate.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  speechRate?: string;
  /**
   * @remarks
   * The text to preview.
   * 
   * This parameter is required.
   * 
   * @example
   * 你好
   */
  text?: string;
  /**
   * @remarks
   * The voice.
   * 
   * This parameter is required.
   * 
   * @example
   * aixia
   */
  voice?: string;
  /**
   * @remarks
   * The volume.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      appKey: 'AppKey',
      engine: 'Engine',
      extParams: 'ExtParams',
      instanceId: 'InstanceId',
      pitchRate: 'PitchRate',
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
      appKey: 'string',
      engine: 'string',
      extParams: 'string',
      instanceId: 'string',
      pitchRate: 'string',
      secretKey: 'string',
      speechRate: 'string',
      text: 'string',
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

