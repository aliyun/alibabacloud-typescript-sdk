// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitFaceVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of ID Verification.
   * 
   * @example
   * 91707dc296d469ad38e4c5efa6a0f24b
   */
  certifyId?: string;
  /**
   * @remarks
   * The URL for ID Verification in a web browser. After the authentication is completed, the user is redirected based on the ReturnUrl parameter.
   * 
   * >Notice: 
   * 
   * - The CertifyUrl returned by the initialization API operation is **valid for 30 minutes and can be used to submit authentication only once**. Use it within the validity period to avoid repeated use.
   * - This parameter requires the correct input of the **MetaInfo** parameter to return a CertifyUrl that matches the client. If you cannot obtain it, check whether **MetaInfo** and other input parameters are correct.
   * 
   * - The domain name of this URL may change with service updates. To ensure normal service availability, we recommend that you do not configure access control for this domain name.
   * 
   * - When the browser redirects, try not to use incognito mode or change the URL. Otherwise, a **signature exception** error may occur.
   * 
   * @example
   * https://t.aliyun.com/****
   */
  certifyUrl?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      certifyUrl: 'CertifyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      certifyUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitFaceVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates success, and other values indicate failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
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
   * The result object.
   */
  resultObject?: InitFaceVerifyResponseBodyResultObject;
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
      resultObject: InitFaceVerifyResponseBodyResultObject,
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

