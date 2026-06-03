// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDypnsSmsVerifyMessageQueueResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * {
   *   "RequestId": "C210BE04-8CB4-542A-92E1-44160AB05B01",
   *   "Message": "successful",
   *   "Data": "Alicom-Queue-10********384-DypnsSmsVerifyReport",
   *   "Code": "200",
   *   "Success": true
   * }
   */
  data?: { [key: string]: any };
  /**
   * @example
   * 示例值示例值示例值
   */
  message?: string;
  /**
   * @example
   * 2E7CA885-8D97-C497-A02C-2D31214D3285
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

