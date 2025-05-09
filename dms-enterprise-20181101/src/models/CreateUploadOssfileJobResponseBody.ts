// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadOSSFileJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The key of the file upload task. You can query the upload progress and task details. For more information, see [GetUserUploadFileJob](https://help.aliyun.com/document_detail/206069.html).
   * 
   * @example
   * 65254a4c1614235217749100e
   */
  jobKey?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4E1D2B4D-3E53-4ABC-999D-1D2520B3471A
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
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      jobKey: 'JobKey',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      jobKey: 'string',
      requestId: 'string',
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

