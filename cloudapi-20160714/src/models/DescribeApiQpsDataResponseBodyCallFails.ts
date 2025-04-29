// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiQpsDataResponseBodyCallFailsMonitorItem } from "./DescribeApiQpsDataResponseBodyCallFailsMonitorItem";


export class DescribeApiQpsDataResponseBodyCallFails extends $dara.Model {
  monitorItem?: DescribeApiQpsDataResponseBodyCallFailsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeApiQpsDataResponseBodyCallFailsMonitorItem },
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

