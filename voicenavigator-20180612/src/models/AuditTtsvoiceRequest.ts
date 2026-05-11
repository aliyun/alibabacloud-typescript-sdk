// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuditTTSVoiceRequest extends $dara.Model {
  accessKey?: string;
  appKey?: string;
  engine?: string;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * 100
   */
  speechRate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aixia
   */
  voice?: string;
  /**
   * @remarks
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

