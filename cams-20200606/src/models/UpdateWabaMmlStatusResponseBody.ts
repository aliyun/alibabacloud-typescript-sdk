// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWabaMmlStatusResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值示例值
   */
  code?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  message?: string;
  /**
   * @example
   * 1
   */
  model?: { [key: string]: any };
  /**
   * @example
   * 示例值示例值
   */
  requestId?: string;
  /**
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

