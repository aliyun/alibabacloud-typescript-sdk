// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyLinesLine } from "./DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyLinesLine";


export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyLines extends $dara.Model {
  line?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyLinesLine[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyLinesLine },
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

