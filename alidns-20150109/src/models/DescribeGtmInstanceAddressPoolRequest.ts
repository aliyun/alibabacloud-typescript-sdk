// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmInstanceAddressPoolRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the address pool that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  addrPoolId?: string;
  /**
   * @remarks
   * The language used by the user.
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      addrPoolId: 'AddrPoolId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPoolId: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

