// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUserUploadFileJobResponseBodyUploadFileJobDetail } from "./GetUserUploadFileJobResponseBodyUploadFileJobDetail";


export class GetUserUploadFileJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BDEFE9F2-B3B4-42D0-83AE-ECF9FC067DCD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The details of the file upload task.
   */
  uploadFileJobDetail?: GetUserUploadFileJobResponseBodyUploadFileJobDetail;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      uploadFileJobDetail: 'UploadFileJobDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      uploadFileJobDetail: GetUserUploadFileJobResponseBodyUploadFileJobDetail,
    };
  }

  validate() {
    if(this.uploadFileJobDetail && typeof (this.uploadFileJobDetail as any).validate === 'function') {
      (this.uploadFileJobDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

