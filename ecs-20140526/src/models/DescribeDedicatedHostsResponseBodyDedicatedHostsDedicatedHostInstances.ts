// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostInstancesInstance } from "./DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostInstancesInstance";


export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostInstances extends $dara.Model {
  instance?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostInstancesInstance },
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

