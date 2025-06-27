// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmAccessStrategyResponseBodyLinesLine } from "./DescribeDnsGtmAccessStrategyResponseBodyLinesLine";


export class DescribeDnsGtmAccessStrategyResponseBodyLines extends $dara.Model {
  line?: DescribeDnsGtmAccessStrategyResponseBodyLinesLine[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategyResponseBodyLinesLine },
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

