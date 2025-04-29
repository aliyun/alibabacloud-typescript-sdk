// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceStatusResponseBodyInstanceStatusesInstanceStatus } from "./DescribeInstanceStatusResponseBodyInstanceStatusesInstanceStatus";


export class DescribeInstanceStatusResponseBodyInstanceStatuses extends $dara.Model {
  instanceStatus?: DescribeInstanceStatusResponseBodyInstanceStatusesInstanceStatus[];
  static names(): { [key: string]: string } {
    return {
      instanceStatus: 'InstanceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatus: { 'type': 'array', 'itemType': DescribeInstanceStatusResponseBodyInstanceStatusesInstanceStatus },
    };
  }

  validate() {
    if(Array.isArray(this.instanceStatus)) {
      $dara.Model.validateArray(this.instanceStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

