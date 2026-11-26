// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HoldCallResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @remarks
   * The request ID used to trace the error cause.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful.
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
      code: 'string',
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

