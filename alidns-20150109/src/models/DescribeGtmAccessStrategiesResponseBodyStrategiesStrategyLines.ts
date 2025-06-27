// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLinesLine } from "./DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLinesLine";


export class DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLines extends $dara.Model {
  line?: DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLinesLine[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': DescribeGtmAccessStrategiesResponseBodyStrategiesStrategyLinesLine },
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

