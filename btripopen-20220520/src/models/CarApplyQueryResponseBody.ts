// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CarApplyQueryResponseBodyApplyList } from "./CarApplyQueryResponseBodyApplyList";


export class CarApplyQueryResponseBody extends $dara.Model {
  applyList?: CarApplyQueryResponseBodyApplyList[];
  /**
   * @example
   * 0
   */
  code?: string;
  message?: string;
  /**
   * @example
   * 407543AF-2BD9-5890-BD92-9D1AB7218B27
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 6
   */
  total?: number;
  /**
   * @example
   * 210bcc3a16583004579056128d33d7
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      applyList: 'apply_list',
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      total: 'total',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyList: { 'type': 'array', 'itemType': CarApplyQueryResponseBodyApplyList },
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applyList)) {
      $dara.Model.validateArray(this.applyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

