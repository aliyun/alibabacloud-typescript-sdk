// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScriptVoiceConfigResponseBodyScriptVoiceConfig extends $dara.Model {
  /**
   * @example
   * 291cfc6a-8703-4bdd-a99d-9cba32d5288a
   */
  instanceId?: string;
  scriptContent?: string;
  /**
   * @example
   * 947e0875-b5d4-4b33-b18c-7b2cf85bcb4f
   */
  scriptId?: string;
  /**
   * @example
   * 2a07b634-e15d-445f-bbcb-fc4ea2df7b87
   */
  scriptVoiceConfigId?: string;
  scriptWaveformRelation?: string;
  /**
   * @example
   * DIALOGUE_FLOW
   */
  source?: string;
  /**
   * @example
   * WAVEFORM
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
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  scriptVoiceConfig?: DescribeScriptVoiceConfigResponseBodyScriptVoiceConfig;
  /**
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

