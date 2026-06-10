// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScriptVoiceConfigResponseBodyScriptVoiceConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 291cfc6a-8703-4bdd-a99d-9cba32d5288a
   */
  instanceId?: string;
  /**
   * @remarks
   * The script content.
   * 
   * @example
   * 你的花呗欠款逾期了需要处理，你现在能处理一下吗？
   */
  scriptContent?: string;
  /**
   * @remarks
   * The ID of the script.
   * 
   * @example
   * 947e0875-b5d4-4b33-b18c-7b2cf85bcb4f
   */
  scriptId?: string;
  /**
   * @remarks
   * The ID of the script voice configuration.
   * 
   * @example
   * 2a07b634-e15d-445f-bbcb-fc4ea2df7b87
   */
  scriptVoiceConfigId?: string;
  /**
   * @remarks
   * The script waveform relation data. Returned only when `Type` is `WAVEFORM`.
   * 
   * @example
   * [{"ScriptContent":"请问你是","ScriptWaveformId":"07db2f0a-acb2-4e68-b9f4-66397414f50c"},{"ScriptContent":"吗？","ScriptWaveformId":"c2a69440-03e3-406e-b0a9-a9791fccb31b"}]
   */
  scriptWaveformRelation?: string;
  /**
   * @remarks
   * The source of the script.
   * 
   * @example
   * DIALOGUE_FLOW
   */
  source?: string;
  /**
   * @remarks
   * The type of the voice configuration. Valid values:
   * 
   * - `WAVEFORM`: A recording.
   * 
   * - `TTS`: Text-to-speech.
   * 
   * @example
   * TTS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptContent: 'ScriptContent',
      scriptId: 'ScriptId',
      scriptVoiceConfigId: 'ScriptVoiceConfigId',
      scriptWaveformRelation: 'ScriptWaveformRelation',
      source: 'Source',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptContent: 'string',
      scriptId: 'string',
      scriptVoiceConfigId: 'string',
      scriptWaveformRelation: 'string',
      source: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScriptVoiceConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the script voice configuration.
   */
  scriptVoiceConfig?: DescribeScriptVoiceConfigResponseBodyScriptVoiceConfig;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      scriptVoiceConfig: 'ScriptVoiceConfig',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scriptVoiceConfig: DescribeScriptVoiceConfigResponseBodyScriptVoiceConfig,
      success: 'boolean',
    };
  }

  validate() {
    if(this.scriptVoiceConfig && typeof (this.scriptVoiceConfig as any).validate === 'function') {
      (this.scriptVoiceConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

