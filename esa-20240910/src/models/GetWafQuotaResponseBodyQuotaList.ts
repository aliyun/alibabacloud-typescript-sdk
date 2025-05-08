// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuotaListItemsValue } from "./QuotaListItemsValue";
import { WafQuotaInteger } from "./WafQuotaInteger";


export class GetWafQuotaResponseBodyQuotaList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the custom list is enabled.
   */
  enable?: boolean;
  /**
   * @remarks
   * An object containing quota information for each type of item in the custom list.
   */
  items?: { [key: string]: QuotaListItemsValue };
  /**
   * @remarks
   * The number quota allowed per custom list.
   */
  numberItemsPerList?: WafQuotaInteger;
  /**
   * @remarks
   * The total number quota allowed for items in all custom lists.
   */
  numberItemsTotal?: WafQuotaInteger;
  /**
   * @remarks
   * The total number quota allowed for custom lists.
   */
  numberTotal?: WafQuotaInteger;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      items: 'Items',
      numberItemsPerList: 'NumberItemsPerList',
      numberItemsTotal: 'NumberItemsTotal',
      numberTotal: 'NumberTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      items: { 'type': 'map', 'keyType': 'string', 'valueType': QuotaListItemsValue },
      numberItemsPerList: WafQuotaInteger,
      numberItemsTotal: WafQuotaInteger,
      numberTotal: WafQuotaInteger,
    };
  }

  validate() {
    if(this.items) {
      $dara.Model.validateMap(this.items);
    }
    if(this.numberItemsPerList && typeof (this.numberItemsPerList as any).validate === 'function') {
      (this.numberItemsPerList as any).validate();
    }
    if(this.numberItemsTotal && typeof (this.numberItemsTotal as any).validate === 'function') {
      (this.numberItemsTotal as any).validate();
    }
    if(this.numberTotal && typeof (this.numberTotal as any).validate === 'function') {
      (this.numberTotal as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

