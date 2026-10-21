// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgenticDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the deletion was successful.
   */
  data?: boolean;
  /**
   * @remarks
   * The error code returned when the call fails. This field is empty when the call succeeds.
   * 
   * @example
   * InvalidParameter
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails. This field is empty when the call succeeds.
   * 
   * @example
   * The parameter is invalid
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request. You can use this ID to trace the call.
   * 
   * @example
   * request-1234567890
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
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

