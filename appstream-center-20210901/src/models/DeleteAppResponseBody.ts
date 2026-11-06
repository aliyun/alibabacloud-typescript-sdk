// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This field is returned when the request fails. A successful response may not contain this field.
   * 
   * @example
   * InternalError
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. A value of true indicates that the operation was successful.
   */
  data?: boolean;
  /**
   * @remarks
   * The error or result message. This field describes the cause when a request fails. A successful response may not contain this field.
   * 
   * @example
   * Internal error.
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request. You can provide this value for troubleshooting.
   * 
   * @example
   * 01A1A962-5503-107B-AC8F-EBA85DF905AC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of true indicates that the request was successful. To check whether an asynchronous task is completed, you must query the task status separately.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
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

