// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ErrorResult extends $dara.Model {
  /**
   * @remarks
   * The error code. SUCCESS indicates the request was successful. Otherwise, a specific error code is returned, such as ERR_BAD_REQUEST, ERR_VALIDATION_FAILED, or ERR_INTERNAL_SERVER_ERROR.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * A human-readable description of the error.
   * 
   * @example
   * Conflict Transaction, process failed
   */
  message?: string;
  /**
   * @remarks
   * The unique request identifier, used for troubleshooting.
   * 
   * @example
   * 55D4BE40-2811-5CFB-8482-E0E98D575B1E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

