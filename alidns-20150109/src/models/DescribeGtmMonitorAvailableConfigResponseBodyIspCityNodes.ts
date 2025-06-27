// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodesIspCityNode } from "./DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodesIspCityNode";


export class DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodes extends $dara.Model {
  ispCityNode?: DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodesIspCityNode[];
  static names(): { [key: string]: string } {
    return {
      ispCityNode: 'IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispCityNode: { 'type': 'array', 'itemType': DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodesIspCityNode },
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

