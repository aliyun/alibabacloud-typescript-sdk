// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveContactByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code.
   * 
   * - OK indicates that the request was successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * SampleValueSampleValueSampleValue.
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * SampleValueSampleValue.
   */
  data?: string;
  /**
   * @remarks
   * The returned message. A success message is returned if the request succeeds. A failure reason is returned if the request fails.
   * 
   * @example
   * SampleValueSampleValueSampleValue.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * SampleValueSampleValueSampleValue.
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * - true: Successful.
   * 
   * - false: Failed.
   * 
   * @example
   * false
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

