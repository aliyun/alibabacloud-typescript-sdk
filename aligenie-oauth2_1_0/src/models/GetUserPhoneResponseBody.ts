// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserPhoneResponseBody extends $dara.Model {
  /**
   * @example
   * 18612345678
   */
  phone?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CEADB586-51CB-1B6B-95BD-AB85A7A08E97
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      phone: 'Phone',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phone: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

