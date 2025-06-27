// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodesDomainIpv4IspCityNode } from "./DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4ispCityNodesDomainIpv4ispCityNode";


export class DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodes extends $dara.Model {
  domainIpv4IspCityNode?: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodesDomainIpv4IspCityNode[];
  static names(): { [key: string]: string } {
    return {
      domainIpv4IspCityNode: 'DomainIpv4IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainIpv4IspCityNode: { 'type': 'array', 'itemType': DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodesDomainIpv4IspCityNode },
    };
  }

  validate() {
    if(Array.isArray(this.domainIpv4IspCityNode)) {
      $dara.Model.validateArray(this.domainIpv4IspCityNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

