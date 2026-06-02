// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTTSConfigResponseBodyTTSConfig extends $dara.Model {
  /**
   * @example
   * 291cfc6a-8703-4bdd-a99d-9cba32d5288a
   */
  instanceId?: string;
  /**
   * @remarks
   * 语调
   * [-500,500]之间整数。默认值为0。
   * 
   * 大于0表示升高音高。
   * 
   * 小于0表示降低音高。
   */
  pitchRate?: string;
  /**
   * @example
   * 947e0875-b5d4-4b33-b18c-7b2cf85bcb4f
   */
  scriptId?: string;
  /**
   * @example
   * 50
   */
  speechRate?: string;
  /**
   * @example
   * 2a07b634-e15d-445f-bbcb-fc4ea2df7b87
   */
  TTSConfigId?: string;
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

