// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiIpControlsResponseBodyApiIpControlsApiIpControlItem } from "./DescribeApiIpControlsResponseBodyApiIpControlsApiIpControlItem";


export class DescribeApiIpControlsResponseBodyApiIpControls extends $dara.Model {
  apiIpControlItem?: DescribeApiIpControlsResponseBodyApiIpControlsApiIpControlItem[];
  static names(): { [key: string]: string } {
    return {
      apiIpControlItem: 'ApiIpControlItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIpControlItem: { 'type': 'array', 'itemType': DescribeApiIpControlsResponseBodyApiIpControlsApiIpControlItem },
    };
  }

  validate() {
    if(Array.isArray(this.apiIpControlItem)) {
      $dara.Model.validateArray(this.apiIpControlItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

