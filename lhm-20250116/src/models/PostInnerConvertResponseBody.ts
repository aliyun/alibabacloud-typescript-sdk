// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PostInnerConvertResponseBody extends $dara.Model {
  /**
   * @remarks
   * Business data, the identifier of the transformation task returned upon successful submission of this interface.
   * 
   * @example
   * c8f3a1b2e9d74c5f
   */
  data?: string;
  /**
   * @remarks
   * Error code, which is an empty string when the call is successful.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * Error message, which is an empty string when the call is successful.
   * 
   * @example
   * success
   */
  errMessage?: string;
  /**
   * @remarks
   * Request ID, used for locating and troubleshooting issues with this call.
   * 
   * @example
   * 4C467B38-3910-4477-9B0B-6963D83B4E72
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful: `true` indicates success, `false` indicates failure. In case of failure, troubleshoot using `errCode` and `errMessage`.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

