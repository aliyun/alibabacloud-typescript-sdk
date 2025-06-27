// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodesIpv6IspCityNode } from "./DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6ispCityNodesIpv6ispCityNode";


export class DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodes extends $dara.Model {
  ipv6IspCityNode?: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodesIpv6IspCityNode[];
  static names(): { [key: string]: string } {
    return {
      ipv6IspCityNode: 'Ipv6IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6IspCityNode: { 'type': 'array', 'itemType': DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodesIpv6IspCityNode },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6IspCityNode)) {
      $dara.Model.validateArray(this.ipv6IspCityNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

