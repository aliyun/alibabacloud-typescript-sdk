// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HiMarketModelFeature } from "./HiMarketModelFeature";


export class HiMarketProductFeature extends $dara.Model {
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

