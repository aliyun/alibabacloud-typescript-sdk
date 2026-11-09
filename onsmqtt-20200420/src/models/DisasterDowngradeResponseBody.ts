// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisasterDowngradeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the access denial. This field is returned only when RAM authentication fails.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The return code of the operation. A value of 200 indicates success. Other values indicate error codes. For more information, see Error codes.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The result message of the call.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82B9E503-F4A1-4F30-976F-C6999FF9****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
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

