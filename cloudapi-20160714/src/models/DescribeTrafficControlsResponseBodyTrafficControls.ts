// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTrafficControlsResponseBodyTrafficControlsTrafficControl } from "./DescribeTrafficControlsResponseBodyTrafficControlsTrafficControl";


export class DescribeTrafficControlsResponseBodyTrafficControls extends $dara.Model {
  trafficControl?: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControl[];
  static names(): { [key: string]: string } {
    return {
      trafficControl: 'TrafficControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficControl: { 'type': 'array', 'itemType': DescribeTrafficControlsResponseBodyTrafficControlsTrafficControl },
    };
  }

  validate() {
    if(Array.isArray(this.trafficControl)) {
      $dara.Model.validateArray(this.trafficControl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

