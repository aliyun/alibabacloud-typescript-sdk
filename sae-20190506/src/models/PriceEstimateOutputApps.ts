// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PriceEstimateFeature } from "./PriceEstimateFeature";
import { PriceEstimateOutputAppsUsages } from "./PriceEstimateOutputAppsUsages";


export class PriceEstimateOutputApps extends $dara.Model {
  feature?: PriceEstimateFeature;
  /**
   * @example
   * 1
   */
  id?: number;
  usages?: PriceEstimateOutputAppsUsages[];
  static names(): { [key: string]: string } {
    return {
      feature: 'Feature',
      id: 'Id',
      usages: 'Usages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feature: PriceEstimateFeature,
      id: 'number',
      usages: { 'type': 'array', 'itemType': PriceEstimateOutputAppsUsages },
    };
  }

  validate() {
    if(this.feature && typeof (this.feature as any).validate === 'function') {
      (this.feature as any).validate();
    }
    if(Array.isArray(this.usages)) {
      $dara.Model.validateArray(this.usages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

