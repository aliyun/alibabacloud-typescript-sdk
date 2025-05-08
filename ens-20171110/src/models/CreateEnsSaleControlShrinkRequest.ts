// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnsSaleControlShrinkRequest extends $dara.Model {
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
  saleControlsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      aliUidAccount: 'AliUidAccount',
      commodityCode: 'CommodityCode',
      customAccount: 'CustomAccount',
      saleControlsShrink: 'SaleControls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUidAccount: 'string',
      commodityCode: 'string',
      customAccount: 'string',
      saleControlsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

