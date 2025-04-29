// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceDropConnectionsResponseBodyInstanceDropConnectionsMonitorItem } from "./DescribeInstanceDropConnectionsResponseBodyInstanceDropConnectionsMonitorItem";


export class DescribeInstanceDropConnectionsResponseBodyInstanceDropConnections extends $dara.Model {
  monitorItem?: DescribeInstanceDropConnectionsResponseBodyInstanceDropConnectionsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeInstanceDropConnectionsResponseBodyInstanceDropConnectionsMonitorItem },
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

