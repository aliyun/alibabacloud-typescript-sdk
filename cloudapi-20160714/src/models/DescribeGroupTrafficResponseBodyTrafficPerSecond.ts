// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGroupTrafficResponseBodyTrafficPerSecondMonitorItem } from "./DescribeGroupTrafficResponseBodyTrafficPerSecondMonitorItem";


export class DescribeGroupTrafficResponseBodyTrafficPerSecond extends $dara.Model {
  monitorItem?: DescribeGroupTrafficResponseBodyTrafficPerSecondMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeGroupTrafficResponseBodyTrafficPerSecondMonitorItem },
    };
  }

  validate() {
    if(Array.isArray(this.monitorItem)) {
      $dara.Model.validateArray(this.monitorItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

