// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentDownloadUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * API status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * OSS file access URL.
   * 
   * @example
   * https://oos-cn.ctyunapi.cn/example-bucket/test/1.jpg
   */
  data?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Message of the returned result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * C7BE80B4-7692-54FA-AB22-2A7DF08C4754
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful: - **true**: The call was successful. - **false**: The call failed.
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
      data: 'string',
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

