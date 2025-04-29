// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHost } from "./DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHost";


export class DescribeDedicatedHostsResponseBodyDedicatedHosts extends $dara.Model {
  dedicatedHost?: DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHost[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHost: 'DedicatedHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHost: { 'type': 'array', 'itemType': DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHost },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedHost)) {
      $dara.Model.validateArray(this.dedicatedHost);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

