// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAutoProvisioningGroupInstancesResponseBodyInstancesInstance } from "./DescribeAutoProvisioningGroupInstancesResponseBodyInstancesInstance";


export class DescribeAutoProvisioningGroupInstancesResponseBodyInstances extends $dara.Model {
  instance?: DescribeAutoProvisioningGroupInstancesResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeAutoProvisioningGroupInstancesResponseBodyInstancesInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

