// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OfflineFlowVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access denied details; this field is only returned when RAM verification fails.
   * 
   * @example
   * 无
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * 示例值示例值
   */
  code?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 示例值示例值
   */
  requestId?: string;
  /**
   * @remarks
   * Content of the returned data.
   * 
   * @example
   * 无
   */
  response?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether the operation was successful. true means success, false means failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      response: 'Response',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
      response: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      success: 'boolean',
    };
  }

  validate() {
    if(this.response) {
      $dara.Model.validateMap(this.response);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

