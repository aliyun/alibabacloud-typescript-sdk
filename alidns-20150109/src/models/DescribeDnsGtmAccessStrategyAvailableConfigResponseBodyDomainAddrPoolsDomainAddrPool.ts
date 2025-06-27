// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPoolsDomainAddrPool extends $dara.Model {
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
   * The name of the address pool.
   * 
   * @example
   * testpool
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addrCount: 'AddrCount',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrCount: 'number',
      id: 'string',
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

