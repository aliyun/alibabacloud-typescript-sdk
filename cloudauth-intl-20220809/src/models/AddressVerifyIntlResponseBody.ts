// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddressVerifyIntlResponseBodyResultObject } from "./AddressVerifyIntlResponseBodyResultObject";


export class AddressVerifyIntlResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 86C40EC3-5940-5F47-995C-BFE90B70E540
   */
  requestId?: string;
  resultObject?: AddressVerifyIntlResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: AddressVerifyIntlResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

