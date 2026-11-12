// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FinishValidateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned when an error occurs.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The error or result message. This field describes the cause of a failed request and may not be included in a successful response.
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
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values: true: The call was successful. false: The call failed.
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

