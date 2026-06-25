// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * - 0: The request was successful.
   * - Non-zero: The request failed.
   */
  code?: number;
  /**
   * @remarks
   * The error message.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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

