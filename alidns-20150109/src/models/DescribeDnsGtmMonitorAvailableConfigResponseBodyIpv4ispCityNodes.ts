// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodesIpv4IspCityNode } from "./DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4ispCityNodesIpv4ispCityNode";


export class DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodes extends $dara.Model {
  ipv4IspCityNode?: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodesIpv4IspCityNode[];
  static names(): { [key: string]: string } {
    return {
      ipv4IspCityNode: 'Ipv4IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4IspCityNode: { 'type': 'array', 'itemType': DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodesIpv4IspCityNode },
    };
  }

  validate() {
    if(Array.isArray(this.ipv4IspCityNode)) {
      $dara.Model.validateArray(this.ipv4IspCityNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

