// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstanceAddrPoolsAddrPool extends $dara.Model {
  /**
   * @remarks
   * The address pool ID.
   */
  addrPoolId?: string;
  /**
   * @remarks
   * The name of the address pool.
   * 
   * @example
   * hra0i9
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addrPoolId: 'AddrPoolId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrPoolId: 'string',
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

