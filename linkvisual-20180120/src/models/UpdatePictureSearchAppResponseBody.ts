// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePictureSearchAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/145071.html).
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
   * Description is mandatory for this action.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CC6B9D69-627C-4C9D-AEAA-0BC08AB6DBED
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

