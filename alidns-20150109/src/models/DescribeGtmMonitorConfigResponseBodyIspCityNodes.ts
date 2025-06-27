// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmMonitorConfigResponseBodyIspCityNodesIspCityNode } from "./DescribeGtmMonitorConfigResponseBodyIspCityNodesIspCityNode";


export class DescribeGtmMonitorConfigResponseBodyIspCityNodes extends $dara.Model {
  ispCityNode?: DescribeGtmMonitorConfigResponseBodyIspCityNodesIspCityNode[];
  static names(): { [key: string]: string } {
    return {
      ispCityNode: 'IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispCityNode: { 'type': 'array', 'itemType': DescribeGtmMonitorConfigResponseBodyIspCityNodesIspCityNode },
    };
  }

  validate() {
    if(Array.isArray(this.ispCityNode)) {
      $dara.Model.validateArray(this.ispCityNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

