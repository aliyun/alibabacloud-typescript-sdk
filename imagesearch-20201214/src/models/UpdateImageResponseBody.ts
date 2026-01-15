// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * *   A value of 0 indicates that the operation is successful.
   * *   Values other than 0 indicate errors.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E0845DE6-52AF-4B50-9F15-51ED4044E6AB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
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

