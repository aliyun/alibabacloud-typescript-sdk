// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsSaleControlStockRequest extends $dara.Model {
  aliUidAccount?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  commodityCode?: string;
  customAccount?: string;
  moduleCode?: string;
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      aliUidAccount: 'AliUidAccount',
      commodityCode: 'CommodityCode',
      customAccount: 'CustomAccount',
      moduleCode: 'ModuleCode',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUidAccount: 'string',
      commodityCode: 'string',
      customAccount: 'string',
      moduleCode: 'string',
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

