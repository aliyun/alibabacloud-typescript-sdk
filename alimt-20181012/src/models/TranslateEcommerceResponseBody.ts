// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TranslateECommerceResponseBodyData } from "./TranslateEcommerceResponseBodyData";


export class TranslateECommerceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: TranslateECommerceResponseBodyData;
  /**
   * @example
   * An error occurred while translating.
   */
  message?: string;
  /**
   * @example
   * CC93BB5C-EAB5-579B-AA44-F61528F48FF8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: TranslateECommerceResponseBodyData,
      message: 'string',
      requestId: 'string',
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

