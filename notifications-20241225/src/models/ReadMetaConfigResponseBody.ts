// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadMetaConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the call fails. For more information, see error codes.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The execution result.
   * 
   * @example
   * {
   *     "isSubNextUser": "YES",
   *     "IS_INNER_USER": "NO",
   *     "isXsWhite": "NO",
   *     "isXs": "NO",
   *     "SITEID": "cn",
   *     "webhookSignatures": [
   *         "Alibaba",
   *         "阿里云"
   *     ]
   * }
   */
  data?: any;
  /**
   * @remarks
   * The message returned if the call fails.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5F62766-1C2F-1F56-A39D-63E3D30F0633
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates that the call is successful. A value of false indicates that the call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
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

