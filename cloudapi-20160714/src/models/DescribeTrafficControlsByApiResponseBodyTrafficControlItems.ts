// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTrafficControlsByApiResponseBodyTrafficControlItemsTrafficControlItem } from "./DescribeTrafficControlsByApiResponseBodyTrafficControlItemsTrafficControlItem";


export class DescribeTrafficControlsByApiResponseBodyTrafficControlItems extends $dara.Model {
  trafficControlItem?: DescribeTrafficControlsByApiResponseBodyTrafficControlItemsTrafficControlItem[];
  static names(): { [key: string]: string } {
    return {
      trafficControlItem: 'TrafficControlItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficControlItem: { 'type': 'array', 'itemType': DescribeTrafficControlsByApiResponseBodyTrafficControlItemsTrafficControlItem },
    };
  }

  validate() {
    if(Array.isArray(this.trafficControlItem)) {
      $dara.Model.validateArray(this.trafficControlItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

