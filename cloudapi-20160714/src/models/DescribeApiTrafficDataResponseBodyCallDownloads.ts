// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiTrafficDataResponseBodyCallDownloadsMonitorItem } from "./DescribeApiTrafficDataResponseBodyCallDownloadsMonitorItem";


export class DescribeApiTrafficDataResponseBodyCallDownloads extends $dara.Model {
  monitorItem?: DescribeApiTrafficDataResponseBodyCallDownloadsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeApiTrafficDataResponseBodyCallDownloadsMonitorItem },
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

