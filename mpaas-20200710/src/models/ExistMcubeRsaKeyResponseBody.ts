// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExistMcubeRsaKeyResponseBodyCheckRsaKeyResult extends $dara.Model {
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

export class ExistMcubeRsaKeyResponseBody extends $dara.Model {
  checkRsaKeyResult?: ExistMcubeRsaKeyResponseBodyCheckRsaKeyResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      checkRsaKeyResult: 'CheckRsaKeyResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRsaKeyResult: ExistMcubeRsaKeyResponseBodyCheckRsaKeyResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.checkRsaKeyResult && typeof (this.checkRsaKeyResult as any).validate === 'function') {
      (this.checkRsaKeyResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

