// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiTrafficControlsResponseBodyApiTrafficControlsApiTrafficControlItem } from "./DescribeApiTrafficControlsResponseBodyApiTrafficControlsApiTrafficControlItem";


export class DescribeApiTrafficControlsResponseBodyApiTrafficControls extends $dara.Model {
  apiTrafficControlItem?: DescribeApiTrafficControlsResponseBodyApiTrafficControlsApiTrafficControlItem[];
  static names(): { [key: string]: string } {
    return {
      apiTrafficControlItem: 'ApiTrafficControlItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiTrafficControlItem: { 'type': 'array', 'itemType': DescribeApiTrafficControlsResponseBodyApiTrafficControlsApiTrafficControlItem },
    };
  }

  validate() {
    if(Array.isArray(this.apiTrafficControlItem)) {
      $dara.Model.validateArray(this.apiTrafficControlItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

