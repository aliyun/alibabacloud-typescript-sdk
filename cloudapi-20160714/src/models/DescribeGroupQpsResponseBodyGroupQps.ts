// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGroupQpsResponseBodyGroupQpsMonitorItem } from "./DescribeGroupQpsResponseBodyGroupQpsMonitorItem";


export class DescribeGroupQpsResponseBodyGroupQps extends $dara.Model {
  monitorItem?: DescribeGroupQpsResponseBodyGroupQpsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeGroupQpsResponseBodyGroupQpsMonitorItem },
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

