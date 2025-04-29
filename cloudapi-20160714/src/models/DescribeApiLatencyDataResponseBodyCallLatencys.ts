// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiLatencyDataResponseBodyCallLatencysMonitorItem } from "./DescribeApiLatencyDataResponseBodyCallLatencysMonitorItem";


export class DescribeApiLatencyDataResponseBodyCallLatencys extends $dara.Model {
  monitorItem?: DescribeApiLatencyDataResponseBodyCallLatencysMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeApiLatencyDataResponseBodyCallLatencysMonitorItem },
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

