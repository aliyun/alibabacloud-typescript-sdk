// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageVulWhitelistTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success. Any other value indicates failure. You can use this field to determine the cause of a failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The processing result. Valid values:
   * 
   * - **true**: Succeeded.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message of the request result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 9F4E6157-9600-5588-86B9-38F09067****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * 
   * - **true**: The API call was successful.
   * - **false**: The API call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
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

