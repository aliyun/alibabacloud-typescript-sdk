// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitAuthVerifyResponseBodyResult extends $dara.Model {
  /**
   * @example
   * shif9d1a185b8dde7cd07bf0943a448b
   */
  certifyId?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitAuthVerifyResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * B506328A-D84B-4750-82C7-6A207C585CF1
   */
  requestId?: string;
  result?: InitAuthVerifyResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: InitAuthVerifyResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

