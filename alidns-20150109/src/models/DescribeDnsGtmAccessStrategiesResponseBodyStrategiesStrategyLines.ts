// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyLinesLine } from "./DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyLinesLine";


export class DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyLines extends $dara.Model {
  line?: DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyLinesLine[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategiesResponseBodyStrategiesStrategyLinesLine },
    };
  }

  validate() {
    if(Array.isArray(this.line)) {
      $dara.Model.validateArray(this.line);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

