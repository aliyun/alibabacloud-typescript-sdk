// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacitySocketCapacitiesSocketCapacity } from "./DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacitySocketCapacitiesSocketCapacity";


export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacitySocketCapacities extends $dara.Model {
  socketCapacity?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacitySocketCapacitiesSocketCapacity[];
  static names(): { [key: string]: string } {
    return {
      socketCapacity: 'SocketCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      socketCapacity: { 'type': 'array', 'itemType': DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostCapacitySocketCapacitiesSocketCapacity },
    };
  }

  validate() {
    if(Array.isArray(this.socketCapacity)) {
      $dara.Model.validateArray(this.socketCapacity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

