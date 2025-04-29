// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusType } from "./DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusType";


export class DescribeInstancesFullStatusResponseBodyInstanceFullStatusSet extends $dara.Model {
  instanceFullStatusType?: DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusType[];
  static names(): { [key: string]: string } {
    return {
      instanceFullStatusType: 'InstanceFullStatusType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceFullStatusType: { 'type': 'array', 'itemType': DescribeInstancesFullStatusResponseBodyInstanceFullStatusSetInstanceFullStatusType },
    };
  }

  validate() {
    if(Array.isArray(this.instanceFullStatusType)) {
      $dara.Model.validateArray(this.instanceFullStatusType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

