// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategy } from "./DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategy";


export class DescribeDnsGtmAccessStrategiesResponseBodyStrategies extends $dara.Model {
  strategy?: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategy[];
  static names(): { [key: string]: string } {
    return {
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategy: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategy },
    };
  }

  validate() {
    if(Array.isArray(this.strategy)) {
      $dara.Model.validateArray(this.strategy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

