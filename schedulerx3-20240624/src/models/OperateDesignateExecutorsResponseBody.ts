// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateDesignateExecutorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of `200` indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message that is returned if the request fails.
   * 
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @remarks
   * The unique ID generated for the request. Use this ID for troubleshooting.
   * 
   * @example
   * AFD5B166-4A7D-50DF-91BF-EFAFD41F7335
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - `true`: The request was successful.
   * 
   * - `false`: The request failed.
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

