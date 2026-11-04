// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFaceUserPictureResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code of the operation:
   * - **200**: The call is successful.
   * - Other values: error codes. For more information, see [Error codes](https://help.aliyun.com/document_detail/288314.html).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * face user not exist
   */
  errorMessage?: string;
  /**
   * @remarks
   * The unique identifier that Alibaba Cloud generates for the request.
   * 
   * @example
   * 4de2c367-c1db-417c-aa15-8c585e595d92
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * - **true**: The call is successful.
   * - **false**: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMessage: 'string',
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

