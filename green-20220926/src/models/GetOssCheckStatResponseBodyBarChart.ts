// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetOssCheckStatResponseBodyBarChartY } from "./GetOssCheckStatResponseBodyBarChartY";


export class GetOssCheckStatResponseBodyBarChart extends $dara.Model {
  x?: string[];
  y?: GetOssCheckStatResponseBodyBarChartY[];
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: { 'type': 'array', 'itemType': 'string' },
      y: { 'type': 'array', 'itemType': GetOssCheckStatResponseBodyBarChartY },
    };
  }

  validate() {
    if(Array.isArray(this.x)) {
      $dara.Model.validateArray(this.x);
    }
    if(Array.isArray(this.y)) {
      $dara.Model.validateArray(this.y);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

