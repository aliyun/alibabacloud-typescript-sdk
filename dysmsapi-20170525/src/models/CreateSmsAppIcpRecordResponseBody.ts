// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsAppIcpRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the access denial.
   * 
   * @example
   * 无
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code.
   * 
   * - A value of `OK` indicates that the request was successful.
   * 
   * - For other error codes, see the [error code list](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The ID of the app\\"s ICP filing record.
   * 
   * @example
   * 10000*******
   */
  data?: string;
  /**
   * @remarks
   * The message returned with the request status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates this unique identifier for each request. Use this ID to troubleshoot issues.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
   * 
   * - **`true`**
   * 
   * - **`false`**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: 'string',
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

