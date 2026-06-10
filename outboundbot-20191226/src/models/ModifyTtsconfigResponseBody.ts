// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTTSConfigResponseBodyTTSConfig extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * 291cfc6a-8703-4bdd-a99d-9cba32d5288a
   */
  instanceId?: string;
  /**
   * @remarks
   * Pitch. An integer between -500 and 500. Default is 0.
   * 
   * A value greater than 0 raises pitch.
   * 
   * A value less than 0 lowers pitch.
   * 
   * @example
   * 0
   */
  pitchRate?: string;
  /**
   * @remarks
   * Scenario ID
   * 
   * @example
   * 947e0875-b5d4-4b33-b18c-7b2cf85bcb4f
   */
  scriptId?: string;
  /**
   * @remarks
   * Speech rate
   * 
   * @example
   * 50
   */
  speechRate?: string;
  /**
   * @remarks
   * Configuration ID
   * 
   * @example
   * 2a07b634-e15d-445f-bbcb-fc4ea2df7b87
   */
  TTSConfigId?: string;
  /**
   * @remarks
   * Voice model
   * 
   * @example
   * xiaoyun
   */
  voice?: string;
  /**
   * @remarks
   * Volume
   * 
   * @example
   * 100
   */
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pitchRate: 'PitchRate',
      scriptId: 'ScriptId',
      speechRate: 'SpeechRate',
      TTSConfigId: 'TTSConfigId',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pitchRate: 'string',
      scriptId: 'string',
      speechRate: 'string',
      TTSConfigId: 'string',
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

export class ModifyTTSConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * API status code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * API message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * f765d3ee-ec03-4765-b235-6877501d99d1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * TTS configuration
   */
  TTSConfig?: ModifyTTSConfigResponseBodyTTSConfig;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      TTSConfig: 'TTSConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      TTSConfig: ModifyTTSConfigResponseBodyTTSConfig,
    };
  }

  validate() {
    if(this.TTSConfig && typeof (this.TTSConfig as any).validate === 'function') {
      (this.TTSConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

