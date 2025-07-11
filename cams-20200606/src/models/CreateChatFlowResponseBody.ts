// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatFlowResponseBody extends $dara.Model {
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
   * Error code
   * 
   * @example
   * 示例值
   */
  code?: string;
  /**
   * @remarks
   * Returned data object.
   */
  data?: { [key: string]: any };
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
   * Unique request ID.
   * 
   * @example
   * 示例值
   */
  requestId?: string;
  /**
   * @remarks
   * Response data
   */
  response?: { [key: string]: any };
  /**
   * @remarks
   * Whether the call was successful.
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
      response: 'Response',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      response: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      success: 'boolean',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    if(this.response) {
      $dara.Model.validateMap(this.response);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

