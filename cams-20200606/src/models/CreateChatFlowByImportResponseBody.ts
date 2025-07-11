// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatFlowByImportResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access denied details.
   * 
   * @example
   * 无
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Request status code.
   * 
   * @example
   * 示例值示例值
   */
  code?: string;
  /**
   * @remarks
   * Returned data object.
   * 
   * @example
   * 无
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
   * Request ID
   * 
   * @example
   * 示例值示例值
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request was successful
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
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

