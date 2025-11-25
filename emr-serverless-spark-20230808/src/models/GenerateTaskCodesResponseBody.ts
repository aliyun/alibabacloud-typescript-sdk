// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateTaskCodesResponseBody extends $dara.Model {
  /**
   * @example
   * 1000000
   */
  code?: number;
  data?: number[];
  /**
   * @example
   * false
   */
  failed?: boolean;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * No permission for resource action
   */
  msg?: string;
  /**
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      failed: 'failed',
      httpStatusCode: 'httpStatusCode',
      msg: 'msg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': 'number' },
      failed: 'boolean',
      httpStatusCode: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

