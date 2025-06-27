// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmAccessStrategyAvailableConfigResponseBodyAddrPoolsAddrPool extends $dara.Model {
  /**
   * @remarks
   * The ID of the address pool.
   * 
   * @example
   * hra0ix
   */
  addrPoolId?: string;
  /**
   * @remarks
   * The name of the address pool.
   * 
   * @example
   * test
   */
  addrPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      addrPoolId: 'AddrPoolId',
      addrPoolName: 'AddrPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPoolId: 'string',
      addrPoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

