// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceMonitorDataResponseBodyMonitorDataInstanceMonitorData } from "./DescribeInstanceMonitorDataResponseBodyMonitorDataInstanceMonitorData";


export class DescribeInstanceMonitorDataResponseBodyMonitorData extends $dara.Model {
  instanceMonitorData?: DescribeInstanceMonitorDataResponseBodyMonitorDataInstanceMonitorData[];
  static names(): { [key: string]: string } {
    return {
      instanceMonitorData: 'InstanceMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceMonitorData: { 'type': 'array', 'itemType': DescribeInstanceMonitorDataResponseBodyMonitorDataInstanceMonitorData },
    };
  }

  validate() {
    if(Array.isArray(this.instanceMonitorData)) {
      $dara.Model.validateArray(this.instanceMonitorData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

