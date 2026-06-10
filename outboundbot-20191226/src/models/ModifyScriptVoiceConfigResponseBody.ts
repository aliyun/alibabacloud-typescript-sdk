// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScriptVoiceConfigResponseBodyScriptVoiceConfig extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * bdd49242-114c-4045-b1d1-25ccc1756c75
   */
  instanceId?: string;
  /**
   * @remarks
   * The text that corresponds to the audio.
   * 
   * @example
   * 你好
   */
  scriptContent?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 1d7a26e0-628b-4c3c-9918-7f2e23273f54
   */
  scriptId?: string;
  /**
   * @remarks
   * The script voice configuration ID.
   * 
   * @example
   * 4ddea690-6534-4c88-9cbd-0b5882ec64c0
   */
  scriptVoiceConfigId?: string;
  /**
   * @remarks
   * Maps script segments to audio recordings.
   * 
   * @example
   * [{"ScriptContent":"你好","ScriptWaveformId":"6facc560-9f25-420f-bb0b-99f4299ad0d5"},{"ScriptContent":"吗","ScriptWaveformId":"76f48266-e253-4f44-ab4f-f64f7d38f1b4"}]
   */
  scriptWaveformRelation?: string;
  /**
   * @remarks
   * The script source.
   * 
   * @example
   * DIALOGUE_FLOW
   */
  source?: string;
  /**
   * @remarks
   * The audio source type.
   * 
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
   * @remarks
   * The API status code.
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
   * The API message.
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
   * The voice configuration for the script.
   */
  scriptVoiceConfig?: ModifyScriptVoiceConfigResponseBodyScriptVoiceConfig;
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

