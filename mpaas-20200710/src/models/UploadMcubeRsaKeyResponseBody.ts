// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadMcubeRsaKeyResponseBodyUploadRsaResult extends $dara.Model {
  data?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMcubeRsaKeyResponseBody extends $dara.Model {
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  uploadRsaResult?: UploadMcubeRsaKeyResponseBodyUploadRsaResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      uploadRsaResult: 'UploadRsaResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      uploadRsaResult: UploadMcubeRsaKeyResponseBodyUploadRsaResult,
    };
  }

  validate() {
    if(this.uploadRsaResult && typeof (this.uploadRsaResult as any).validate === 'function') {
      (this.uploadRsaResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

