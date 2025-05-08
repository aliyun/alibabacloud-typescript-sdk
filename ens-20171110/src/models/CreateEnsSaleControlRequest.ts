// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEnsSaleControlRequestSaleControls } from "./CreateEnsSaleControlRequestSaleControls";


export class CreateEnsSaleControlRequest extends $dara.Model {
  aliUidAccount?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  commodityCode?: string;
  customAccount?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  saleControls?: CreateEnsSaleControlRequestSaleControls[];
  static names(): { [key: string]: string } {
    return {
      aliUidAccount: 'AliUidAccount',
      commodityCode: 'CommodityCode',
      customAccount: 'CustomAccount',
      saleControls: 'SaleControls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUidAccount: 'string',
      commodityCode: 'string',
      customAccount: 'string',
      saleControls: { 'type': 'array', 'itemType': CreateEnsSaleControlRequestSaleControls },
    };
  }

  validate() {
    if(Array.isArray(this.saleControls)) {
      $dara.Model.validateArray(this.saleControls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

