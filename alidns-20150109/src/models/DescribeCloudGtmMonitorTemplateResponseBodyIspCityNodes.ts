// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudGtmMonitorTemplateResponseBodyIspCityNodesIspCityNode } from "./DescribeCloudGtmMonitorTemplateResponseBodyIspCityNodesIspCityNode";


export class DescribeCloudGtmMonitorTemplateResponseBodyIspCityNodes extends $dara.Model {
  ispCityNode?: DescribeCloudGtmMonitorTemplateResponseBodyIspCityNodesIspCityNode[];
  static names(): { [key: string]: string } {
    return {
      ispCityNode: 'IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispCityNode: { 'type': 'array', 'itemType': DescribeCloudGtmMonitorTemplateResponseBodyIspCityNodesIspCityNode },
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

