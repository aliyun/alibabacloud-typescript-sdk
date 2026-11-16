// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWabaMmlStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason for access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code.
   * 
   * - A value of OK indicates that the request is successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * Example value
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Example value
   */
  message?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * 1
   */
  model?: { [key: string]: any };
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * Example value
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether the operation is successful. Valid values:
   * 
   * - true: The operation is successful.
   * 
   * - false: The operation fails.
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.model) {
      $dara.Model.validateMap(this.model);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

