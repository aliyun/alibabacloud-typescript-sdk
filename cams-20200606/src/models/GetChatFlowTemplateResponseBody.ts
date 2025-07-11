// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetChatFlowTemplateResponseBodyData } from "./GetChatFlowTemplateResponseBodyData";


export class GetChatFlowTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access denied details, this field is returned only when RAM verification fails.
   * 
   * @example
   * 无
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * System returned error code. For more details on error codes, please refer to the error code documentation.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   */
  data?: GetChatFlowTemplateResponseBodyData;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * Unique request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Values: true: success; false: failure.
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
      data: GetChatFlowTemplateResponseBodyData,
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

