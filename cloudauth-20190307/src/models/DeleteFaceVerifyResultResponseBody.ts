// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFaceVerifyResultResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The unique identifier for ID Verification.
   * 
   * @example
   * sha58aeae7ea2f5ed069530f58df4e6d
   */
  certifyId?: string;
  /**
   * @remarks
   * The deletion result. Valid values:
   * - Y: The deletion succeeded.
   * - N: The deletion failed.
   * 
   * @example
   * N
   */
  deleteResult?: string;
  /**
   * @remarks
   * The reason for the deletion failure. Valid values:
   * - NOT_DELETE_REPEATEDLY: The data cannot be repeatedly deleted.
   * - NEED_QUERY_VERIFY_RESULT: You must query the verification result before you delete the data.
   * 
   * @example
   * NOT_DELETE_REPEATEDLY
   */
  failReason?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      deleteResult: 'DeleteResult',
      failReason: 'FailReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      deleteResult: 'string',
      failReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceVerifyResultResponseBody extends $dara.Model {
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
   * The returned message.
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
   * 5A6229C0-E156-48E4-B6EC-0F528BDF60D2
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result information.
   */
  resultObject?: DeleteFaceVerifyResultResponseBodyResultObject;
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
      resultObject: DeleteFaceVerifyResultResponseBodyResultObject,
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

