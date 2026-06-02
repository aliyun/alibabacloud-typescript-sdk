// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTTSConfigResponseBodyTTSConfig extends $dara.Model {
  appKey?: string;
  /**
   * @example
   * 947e0875-b5d4-4b33-b18c-7b2cf85bcb4f
   */
  instanceId?: string;
  /**
   * @example
   * Managed
   */
  nlsServiceType?: string;
  /**
   * @example
   * -150
   */
  speechRate?: string;
  /**
   * @example
   * xiaoyun
   */
  voice?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * f765d3ee-ec03-4765-b235-6877501d99d1
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
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

