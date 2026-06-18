// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetAccountPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response message. If the request is successful, success is returned. If the request fails, the corresponding error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 73559800-3c8c-11ec-bd40-99cfcff3fe1e
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

