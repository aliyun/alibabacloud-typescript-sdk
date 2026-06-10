// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryScriptWaveformsResponseBodyScriptWaveforms extends $dara.Model {
  /**
   * @remarks
   * File key in OSS
   * 
   * @example
   * UPLOADED/RECORDING/a8xxxxx-2b26-4b6d-a54f-696b95xxx1/a6bf591a-cf6d-4xxxxxx.wav
   */
  fileId?: string;
  /**
   * @remarks
   * Recording file name
   * 
   * @example
   * SHUKE_ZA_ol_32_邀约.wav
   */
  fileName?: string;
  /**
   * @remarks
   * Scenario voice name
   * 
   * @example
   * 测试
   */
  scriptContent?: string;
  /**
   * @remarks
   * Scenario ID
   * 
   * @example
   * 25b26ce1-009c-4791-a720-e7ac4f9821a1
   */
  scriptId?: string;
  /**
   * @remarks
   * Scenario voice recording ID
   * 
   * @example
   * 444df4-009c-4791-a720-e7ac4f9821a1
   */
  scriptWaveformId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileName: 'FileName',
      scriptContent: 'ScriptContent',
      scriptId: 'ScriptId',
      scriptWaveformId: 'ScriptWaveformId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      scriptContent: 'string',
      scriptId: 'string',
      scriptWaveformId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScriptWaveformsResponseBody extends $dara.Model {
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
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Recording list of scenario voices
   * 
   * > Recording data is returned only when the voice type is recording. It is not returned when the voice is speech synthesis.
   */
  scriptWaveforms?: QueryScriptWaveformsResponseBodyScriptWaveforms[];
  /**
   * @remarks
   * Indicates whether the request succeeded.
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
      scriptWaveforms: 'ScriptWaveforms',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scriptWaveforms: { 'type': 'array', 'itemType': QueryScriptWaveformsResponseBodyScriptWaveforms },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.scriptWaveforms)) {
      $dara.Model.validateArray(this.scriptWaveforms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

