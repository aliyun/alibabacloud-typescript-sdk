// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEniMonitorDataResponseBodyMonitorDataEniMonitorData } from "./DescribeEniMonitorDataResponseBodyMonitorDataEniMonitorData";


export class DescribeEniMonitorDataResponseBodyMonitorData extends $dara.Model {
  eniMonitorData?: DescribeEniMonitorDataResponseBodyMonitorDataEniMonitorData[];
  static names(): { [key: string]: string } {
    return {
      eniMonitorData: 'EniMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniMonitorData: { 'type': 'array', 'itemType': DescribeEniMonitorDataResponseBodyMonitorDataEniMonitorData },
    };
  }

  validate() {
    if(Array.isArray(this.eniMonitorData)) {
      $dara.Model.validateArray(this.eniMonitorData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

