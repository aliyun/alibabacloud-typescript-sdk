// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is returned when the request fails. A successful response may not contain this parameter.
   * 
   * @example
   * InternalError
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. A value of true indicates that the operation is successful.
   */
  data?: boolean;
  /**
   * @remarks
   * The error or result message. This parameter describes the cause when the request fails. A successful response may not contain this parameter.
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
   * Indicates whether the request is successful. A value of true indicates that the request is successful. To check whether an asynchronous task is completed, you must query the task status separately.
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

