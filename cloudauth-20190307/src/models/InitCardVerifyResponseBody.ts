// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitCardVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The verification request ID, which is the unique identifier of the verification service authentication request.
   * - You must specify the authentication request ID when you query the authentication result.
   * 
   * - The CertifyId field is used for billing statistics. Save this field locally for future bill reconciliation. The CertifyId returned by the initialization operation is valid for 30 minutes and can be submitted for authentication only once. Use it within the validity period and do not reuse it.
   * 
   * @example
   * 91707dc296d469ad38e4c5efa6a0****
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

export class InitCardVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 200 indicates success. Other values indicate failure.
   * 
   * > **Important** This parameter indicates whether the operation is called correctly. For more information about return codes, see error codes. Check the fields in ResultObject for the business result.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 130A2C10-B9EE-4D84-88E3-5384FF039795
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  resultObject?: InitCardVerifyResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: InitCardVerifyResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

