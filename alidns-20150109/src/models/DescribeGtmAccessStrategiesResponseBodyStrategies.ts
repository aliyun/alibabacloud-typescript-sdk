// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmAccessStrategiesResponseBodyStrategiesStrategy } from "./DescribeGtmAccessStrategiesResponseBodyStrategiesStrategy";


export class DescribeGtmAccessStrategiesResponseBodyStrategies extends $dara.Model {
  strategy?: DescribeGtmAccessStrategiesResponseBodyStrategiesStrategy[];
  static names(): { [key: string]: string } {
    return {
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategy: { 'type': 'array', 'itemType': DescribeGtmAccessStrategiesResponseBodyStrategiesStrategy },
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

