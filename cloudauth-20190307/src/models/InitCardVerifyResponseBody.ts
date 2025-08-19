// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitCardVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Verification request ID, a unique identifier for the verification service\\"s authentication request.
   * - When querying the authentication result, the authentication request ID must be provided.
   * 
   * - The CertifyId field is a billing statistics field. To facilitate subsequent bill reconciliation, please retain this field information locally. The CertifyId returned by the initialization interface is valid for 30 minutes and can only be submitted once for authentication. Please apply it within the validity period to avoid reuse.
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
   * Return code: 200 for success, others for failure.
   * Important
   * - This parameter indicates whether the interface was called correctly. For detailed return code descriptions, see the error codes.
   * - Business results should be viewed through the fields in ResultObject.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 130A2C10-B9EE-4D84-88E3-5384FF039795
   */
  requestId?: string;
  /**
   * @remarks
   * Return result.
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

