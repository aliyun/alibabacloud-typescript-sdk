// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserSubscriptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned by the system. For more information about error codes, see error codes.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The message returned when the call fails.
   * 
   * @example
   * Succeeded
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
   * Indicates whether the call is successful. Valid values:
   * - true: The call is successful.
   * - false: The call fails.
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

