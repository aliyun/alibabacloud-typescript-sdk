// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsSaleControlAvailableResourceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  commodityCode?: string;
  customAccount?: string;
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      customAccount: 'CustomAccount',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      customAccount: 'string',
      orderType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

