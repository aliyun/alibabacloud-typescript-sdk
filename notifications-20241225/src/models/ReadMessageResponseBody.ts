// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the call failed. For more information, see error codes.
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
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The error message returned when the call failed.
   * 
   * @example
   * 成功
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
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
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

