// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCustomerInfoResponseBodyData } from "./GetCustomerInfoResponseBodyData";


export class GetCustomerInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetCustomerInfoResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * DF6A3FB7-A5AA-43BE-A65B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCustomerInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

