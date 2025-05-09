// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadFileJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * InvalidParameterValid
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Unsupported url scheme : null, scheme must be https or http
   */
  errorMessage?: string;
  /**
   * @remarks
   * The key of the task.
   * 
   * >  You can call the [GetUserUploadFileJob](https://help.aliyun.com/document_detail/206069.html) operation to query the progress and details of the task.
   * 
   * @example
   * 761f18031635736380812****
   */
  jobKey?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E103C5F9-DE47-53F2-BF34-D71DF38F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
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

