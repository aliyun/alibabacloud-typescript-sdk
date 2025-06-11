// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCommerceSettingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the shopping cart button is displayed. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  cartEnable?: boolean;
  /**
   * @remarks
   * Indicates whether the catalog button is displayed. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  catalogVisible?: boolean;
  static names(): { [key: string]: string } {
    return {
      cartEnable: 'CartEnable',
      catalogVisible: 'CatalogVisible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cartEnable: 'boolean',
      catalogVisible: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

