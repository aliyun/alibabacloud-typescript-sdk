// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeliveryAddressResponseBodyAddressesTown extends $dara.Model {
  /**
   * @example
   * 3001****
   */
  townId?: number;
  townName?: string;
  static names(): { [key: string]: string } {
    return {
      townId: 'TownId',
      townName: 'TownName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      townId: 'number',
      townName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

