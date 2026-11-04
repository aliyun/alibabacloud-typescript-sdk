// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStreamSnapshotJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * - **200**: The call was successful.
   * - Other values: An error occurred. For more information, see [Error codes](https://help.aliyun.com/document_detail/145071.html).
   * 
   * @example
   * 403
   */
  code?: string;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * Request auth failed.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E55***B7-4***-4***-8***-D3******F565
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
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

