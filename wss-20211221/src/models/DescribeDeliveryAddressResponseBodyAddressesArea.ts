// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeliveryAddressResponseBodyAddressesArea extends $dara.Model {
  /**
   * @example
   * 33****
   */
  areaId?: number;
  areaName?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      areaName: 'AreaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'number',
      areaName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

