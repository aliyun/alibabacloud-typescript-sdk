// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PriceEstimateOutputApps } from "./PriceEstimateOutputApps";
import { PriceEstimateOutputItems } from "./PriceEstimateOutputItems";
import { PriceEstimateOutputPostPayItems } from "./PriceEstimateOutputPostPayItems";


export class PriceEstimateOutput extends $dara.Model {
  apps?: PriceEstimateOutputApps[];
  items?: PriceEstimateOutputItems[];
  postPayItems?: PriceEstimateOutputPostPayItems[];
  /**
   * @example
   * 235.66
   */
  postPayTotalPrice?: number;
  /**
   * @example
   * 235.66
   */
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      apps: 'Apps',
      items: 'Items',
      postPayItems: 'PostPayItems',
      postPayTotalPrice: 'PostPayTotalPrice',
      totalPrice: 'TotalPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apps: { 'type': 'array', 'itemType': PriceEstimateOutputApps },
      items: { 'type': 'array', 'itemType': PriceEstimateOutputItems },
      postPayItems: { 'type': 'array', 'itemType': PriceEstimateOutputPostPayItems },
      postPayTotalPrice: 'number',
      totalPrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apps)) {
      $dara.Model.validateArray(this.apps);
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    if(Array.isArray(this.postPayItems)) {
      $dara.Model.validateArray(this.postPayItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

