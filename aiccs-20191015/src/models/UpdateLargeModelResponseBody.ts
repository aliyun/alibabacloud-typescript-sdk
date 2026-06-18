// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLargeModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about an authentication error.
   * 
   * @example
   * Access Denied
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code returned for the request.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The result of the update operation.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * example
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * example
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
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
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

