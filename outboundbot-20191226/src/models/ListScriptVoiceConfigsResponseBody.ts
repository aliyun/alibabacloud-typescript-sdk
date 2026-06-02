// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptVoiceConfigsResponseBodyScriptVoiceConfigsList extends $dara.Model {
  /**
   * @example
   * bdd49242-114c-4045-b1d1-25ccc1756c75
   */
  instanceId?: string;
  scriptContent?: string;
  /**
   * @example
   * a7441a05-43bb-4a2d-acb0-365f245d7a5b
   */
  scriptId?: string;
  /**
   * @example
   * 2c8fa91f-9856-4145-90f2-08252f09bc18
   */
  scriptVoiceConfigId?: string;
  /**
   * @example
   * ""
   */
  scriptWaveformRelation?: string;
  /**
   * @example
   * DIALOGUE_FLOW
   */
  source?: string;
  /**
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

export class ListScriptVoiceConfigsResponseBodyScriptVoiceConfigs extends $dara.Model {
  list?: ListScriptVoiceConfigsResponseBodyScriptVoiceConfigsList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListScriptVoiceConfigsResponseBodyScriptVoiceConfigsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptVoiceConfigsResponseBody extends $dara.Model {
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
  scriptVoiceConfigs?: ListScriptVoiceConfigsResponseBodyScriptVoiceConfigs;
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
      scriptVoiceConfigs: 'ScriptVoiceConfigs',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scriptVoiceConfigs: ListScriptVoiceConfigsResponseBodyScriptVoiceConfigs,
      success: 'boolean',
    };
  }

  validate() {
    if(this.scriptVoiceConfigs && typeof (this.scriptVoiceConfigs as any).validate === 'function') {
      (this.scriptVoiceConfigs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

