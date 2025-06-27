// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDnsGtmAccessStrategyRequestFailoverAddrPool extends $dara.Model {
  /**
   * @remarks
   * The ID of the address pool in the secondary address pool set.
   * 
   * @example
   * pool1
   */
  id?: string;
  /**
   * @remarks
   * The weight of the address pool in the secondary address pool set.
   * 
   * @example
   * 1
   */
  lbaWeight?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lbaWeight: 'LbaWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      lbaWeight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

