// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmInstanceAddressPoolRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the address pool.
   * 
   * This parameter is required.
   * 
   * @example
   * testpool1
   */
  addrPoolId?: string;
  /**
   * @remarks
   * The language of the values of specific response parameters. Default value: en. Valid values: en, zh, and ja.
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

