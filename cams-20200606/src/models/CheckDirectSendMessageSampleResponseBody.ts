// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDirectSendMessageSampleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The category of the WhatsApp template. Valid values:
   * 
   * - **UTILITY**: A template related to a specific, agreed-upon transaction.
   * 
   * - **MARKETING**: A template for promotional or marketing purposes.
   * 
   * @example
   * example
   */
  category?: string;
  /**
   * @remarks
   * Whether the validation was successful. Valid values:
   * 
   * - true: The validation succeeded.
   * 
   * - false: The validation failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
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

export class CheckDirectSendMessageSampleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code of the request.
   * 
   * - `OK` indicates that the request was successful.
   * 
   * - For other error codes, see [Error codes](https://www.alibabacloud.com/help/zh/cams/latest/api-error-codes).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: CheckDirectSendMessageSampleResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * example
   */
  message?: string;
  /**
   * @remarks
   * The request ID. Use this ID to trace logs and troubleshoot issues.
   * 
   * @example
   * example
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
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
      data: CheckDirectSendMessageSampleResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

