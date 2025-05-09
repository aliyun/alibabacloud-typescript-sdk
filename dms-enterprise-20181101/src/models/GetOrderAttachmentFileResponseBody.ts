// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrderAttachmentFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned. Take note of the following rules:
   * 
   * *   The **ErrorCode** parameter is not returned if the request is successful.
   * *   The **ErrorCode** parameter is returned if the request fails. For more information, see the **Error codes** section of this topic.
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
   * The download URL of the attachment.
   * 
   * @example
   * https://dmsxxx
   */
  fileUrl?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FE8EE2F1-4880-46BC-A704-5CF63EAF9A04
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
      fileUrl: 'FileUrl',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      fileUrl: 'string',
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

