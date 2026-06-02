// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryScriptWaveformsResponseBodyScriptWaveforms extends $dara.Model {
  fileId?: string;
  fileName?: string;
  scriptContent?: string;
  scriptId?: string;
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
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  scriptWaveforms?: QueryScriptWaveformsResponseBodyScriptWaveforms[];
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

