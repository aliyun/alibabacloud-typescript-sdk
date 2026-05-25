// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTlogTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  errorCode?: number;
  /**
   * @example
   * Successful
   */
  message?: string;
  /**
   * @example
   * 1779434100158kg2B0tZvQOmR1Yn_p_8usw
   */
  model?: string;
  /**
   * @example
   * A8313212-EB4E-4E15-A7F9-D9C8F3FE8E94
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'number',
      message: 'string',
      model: 'string',
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

