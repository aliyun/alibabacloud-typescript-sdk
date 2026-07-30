// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The operation result. The value `success` indicates success. Otherwise, an error message is returned.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The error code description.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message. This parameter is not returned if Code is `success`.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F7E4322D-D679-5ACB-A909-490D2F0E****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - true: The call was successful.
   * - false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      httpStatusCode: 'number',
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

