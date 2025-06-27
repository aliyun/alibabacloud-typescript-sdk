// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmAccessStrategyAvailableConfigResponseBodyLinesLine } from "./DescribeGtmAccessStrategyAvailableConfigResponseBodyLinesLine";


export class DescribeGtmAccessStrategyAvailableConfigResponseBodyLines extends $dara.Model {
  line?: DescribeGtmAccessStrategyAvailableConfigResponseBodyLinesLine[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': DescribeGtmAccessStrategyAvailableConfigResponseBodyLinesLine },
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

