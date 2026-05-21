// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHoloWebLoginSettingResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * Internal server error.
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CB13FFDD-2DF8-5396-A848-2D6A31245B6D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
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

