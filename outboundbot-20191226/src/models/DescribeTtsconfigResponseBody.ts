// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTTSConfigResponseBodyTTSConfig extends $dara.Model {
  /**
   * @remarks
   * AppKey for invoking TTS
   * 
   * @example
   * p2SjSj4zxxxxxxxx
   */
  appKey?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * 947e0875-b5d4-4b33-b18c-7b2cf85bcb4f
   */
  instanceId?: string;
  /**
   * @remarks
   * Service type
   * 
   * @example
   * Managed
   */
  nlsServiceType?: string;
  /**
   * @remarks
   * Speech rate
   * 
   * @example
   * -150
   */
  speechRate?: string;
  /**
   * @remarks
   * TTS model
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
      appKey: 'AppKey',
      instanceId: 'InstanceId',
      nlsServiceType: 'NlsServiceType',
      speechRate: 'SpeechRate',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      instanceId: 'string',
      nlsServiceType: 'string',
      speechRate: 'string',
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

export class DescribeTTSConfigResponseBody extends $dara.Model {
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
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * TTS configuration
   */
  TTSConfig?: DescribeTTSConfigResponseBodyTTSConfig;
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
      TTSConfig: DescribeTTSConfigResponseBodyTTSConfig,
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

