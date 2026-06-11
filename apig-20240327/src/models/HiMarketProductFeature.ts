// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HiMarketModelFeature } from "./HiMarketModelFeature";


export class HiMarketProductFeature extends $dara.Model {
  /**
   * @remarks
   * Specifies the product\\"s model feature. For more information, see HiMarketModelFeature.
   */
  modelFeature?: HiMarketModelFeature;
  static names(): { [key: string]: string } {
    return {
      modelFeature: 'modelFeature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelFeature: HiMarketModelFeature,
    };
  }

  validate() {
    if(this.modelFeature && typeof (this.modelFeature as any).validate === 'function') {
      (this.modelFeature as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

