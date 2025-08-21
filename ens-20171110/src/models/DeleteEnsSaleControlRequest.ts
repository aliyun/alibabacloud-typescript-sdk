// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEnsSaleControlRequestSaleControls extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  moduleCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      moduleCode: 'ModuleCode',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeleteEnsSaleControlRequest extends $dara.Model {
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
  saleControls?: DeleteEnsSaleControlRequestSaleControls[];
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
      saleControls: { 'type': 'array', 'itemType': DeleteEnsSaleControlRequestSaleControls },
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

