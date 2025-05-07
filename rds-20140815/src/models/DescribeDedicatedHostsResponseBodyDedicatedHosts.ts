// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts } from "./DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts";


export class DescribeDedicatedHostsResponseBodyDedicatedHosts extends $dara.Model {
  dedicatedHosts?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHosts: 'DedicatedHosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHosts: { 'type': 'array', 'itemType': DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHosts },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedHosts)) {
      $dara.Model.validateArray(this.dedicatedHosts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

