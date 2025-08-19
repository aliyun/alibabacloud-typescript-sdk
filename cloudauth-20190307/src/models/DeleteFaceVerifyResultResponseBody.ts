// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFaceVerifyResultResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Unique identifier for real-person authentication.
   * 
   * @example
   * sha58aeae7ea2f5ed069530f58df4e6d
   */
  certifyId?: string;
  /**
   * @remarks
   * Deletion result. Possible values are as follows:
   * 
   * - Y: Deletion successful.
   * - N: Deletion failed.
   * 
   * @example
   * N
   */
  deleteResult?: string;
  /**
   * @remarks
   * Reason for deletion failure
   * 
   * - NOT_DELETE_REPEATEDLY: Cannot be deleted repeatedly
   * - NEED_QUERY_VERIFY_RESULT: Need to query the verification result first, then delete
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
   * Return code: 200 for success, others for failure.
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
   * ID of the request
   * 
   * @example
   * 5A6229C0-E156-48E4-B6EC-0F528BDF60D2
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result information.
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

