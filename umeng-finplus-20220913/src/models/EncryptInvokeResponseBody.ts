// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EncryptInvokeResponseBodyData extends $dara.Model {
  encryptData?: string;
  encryptKey?: string;
  sign?: string;
  static names(): { [key: string]: string } {
    return {
      encryptData: 'encryptData',
      encryptKey: 'encryptKey',
      sign: 'sign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptData: 'string',
      encryptKey: 'string',
      sign: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptInvokeResponseBody extends $dara.Model {
  code?: string;
  data?: EncryptInvokeResponseBodyData;
  msg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: EncryptInvokeResponseBodyData,
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

