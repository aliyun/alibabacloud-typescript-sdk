// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PostInnerUploadConvertPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business data returned by the operation as a string. The specific content varies by operation.
   * 
   * @example
   * demo
   */
  data?: string;
  /**
   * @remarks
   * The error code. This value is an empty string if the call is successful.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * The error message. This value is an empty string if the call is successful.
   * 
   * @example
   * success
   */
  errMessage?: string;
  /**
   * @remarks
   * The request ID that uniquely identifies this call. Provide this value when troubleshooting issues.
   * 
   * @example
   * 4C467B38-3910-4477-9B0B-6963D83B4E72
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * - true: The call is successful.
   * - false: The call failed. Troubleshoot by using errCode and errMessage.
   */
  success?: boolean;
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

