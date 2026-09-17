// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialSubmitIntlV2ResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the verification request.
   * 
   * @example
   * hk573be80f944d95ac812e0*******a8
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transactionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialSubmitIntlV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7F971622-38C0-5F56-B2EC-315367979B4F
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: CredentialSubmitIntlV2ResponseBodyResult;
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
      result: CredentialSubmitIntlV2ResponseBodyResult,
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

