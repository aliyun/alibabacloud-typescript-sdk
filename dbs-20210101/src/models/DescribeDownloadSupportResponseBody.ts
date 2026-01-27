// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDownloadSupportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * DBS.ParamIsInValid
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the advanced download feature is supported. Valid values:
   * 
   * *   **true**: The advanced download feature is supported.
   * *   **false**: The advanced download feature is not supported.
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * DBS.ParamIsInValid
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * Argument: regionCode Must not be empty
   */
  errMessage?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * Argument: regionCode Must not be empty
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F1A186F7-7B34-5C11-A903-EE23876B****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
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

