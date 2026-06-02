// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScriptVoiceConfigResponseBodyScriptVoiceConfig extends $dara.Model {
  /**
   * @example
   * bdd49242-114c-4045-b1d1-25ccc1756c75
   */
  instanceId?: string;
  scriptContent?: string;
  /**
   * @example
   * 1d7a26e0-628b-4c3c-9918-7f2e23273f54
   */
  scriptId?: string;
  /**
   * @example
   * 4ddea690-6534-4c88-9cbd-0b5882ec64c0
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

export class ModifyScriptVoiceConfigResponseBody extends $dara.Model {
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
  scriptVoiceConfig?: ModifyScriptVoiceConfigResponseBodyScriptVoiceConfig;
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
      scriptVoiceConfig: ModifyScriptVoiceConfigResponseBodyScriptVoiceConfig,
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

