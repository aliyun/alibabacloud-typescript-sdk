// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmAccessStrategyResponseBodyFailoverAddrPoolsFailoverAddrPool extends $dara.Model {
  /**
   * @remarks
   * The number of addresses in the address pool.
   * 
   * @example
   * 1
   */
  addrCount?: number;
  /**
   * @remarks
   * The ID of the address pool.
   * 
   * @example
   * pool1
   */
  id?: string;
  /**
   * @remarks
   * The weight of the address pool.
   * 
   * @example
   * 1
   */
  lbaWeight?: number;
  /**
   * @remarks
   * The name of the address pool.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addrCount: 'AddrCount',
      id: 'Id',
      lbaWeight: 'LbaWeight',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrCount: 'number',
      id: 'string',
      lbaWeight: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

