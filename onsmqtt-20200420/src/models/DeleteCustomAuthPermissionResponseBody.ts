// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomAuthPermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The message returned by the request.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 34063BCA-0946-49C1-B824-2ED2C905****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - true: The request is successful.
   * - false: The request fails.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
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

