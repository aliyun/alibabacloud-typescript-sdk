// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodesDomainIpv6IspCityNode } from "./DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6ispCityNodesDomainIpv6ispCityNode";


export class DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodes extends $dara.Model {
  domainIpv6IspCityNode?: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodesDomainIpv6IspCityNode[];
  static names(): { [key: string]: string } {
    return {
      domainIpv6IspCityNode: 'DomainIpv6IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainIpv6IspCityNode: { 'type': 'array', 'itemType': DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodesDomainIpv6IspCityNode },
    };
  }

  validate() {
    if(Array.isArray(this.domainIpv6IspCityNode)) {
      $dara.Model.validateArray(this.domainIpv6IspCityNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

