// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodes } from "./DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4ispCityNodes";
import { DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodes } from "./DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6ispCityNodes";
import { DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodes } from "./DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4ispCityNodes";
import { DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodes } from "./DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6ispCityNodes";


export class DescribeDnsGtmMonitorAvailableConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The nodes that perform health checks on domain names that use public IPv4 addresses.
   */
  domainIpv4IspCityNodes?: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodes;
  /**
   * @remarks
   * The nodes that perform health checks on domain names that use public IPv6 addresses.
   */
  domainIpv6IspCityNodes?: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodes;
  /**
   * @remarks
   * The nodes that perform health checks on public IPv4 addresses.
   */
  ipv4IspCityNodes?: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodes;
  /**
   * @remarks
   * The nodes that perform health checks on public IPv6 addresses.
   */
  ipv6IspCityNodes?: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodes;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainIpv4IspCityNodes: 'DomainIpv4IspCityNodes',
      domainIpv6IspCityNodes: 'DomainIpv6IspCityNodes',
      ipv4IspCityNodes: 'Ipv4IspCityNodes',
      ipv6IspCityNodes: 'Ipv6IspCityNodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainIpv4IspCityNodes: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv4IspCityNodes,
      domainIpv6IspCityNodes: DescribeDnsGtmMonitorAvailableConfigResponseBodyDomainIpv6IspCityNodes,
      ipv4IspCityNodes: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv4IspCityNodes,
      ipv6IspCityNodes: DescribeDnsGtmMonitorAvailableConfigResponseBodyIpv6IspCityNodes,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domainIpv4IspCityNodes && typeof (this.domainIpv4IspCityNodes as any).validate === 'function') {
      (this.domainIpv4IspCityNodes as any).validate();
    }
    if(this.domainIpv6IspCityNodes && typeof (this.domainIpv6IspCityNodes as any).validate === 'function') {
      (this.domainIpv6IspCityNodes as any).validate();
    }
    if(this.ipv4IspCityNodes && typeof (this.ipv4IspCityNodes as any).validate === 'function') {
      (this.ipv4IspCityNodes as any).validate();
    }
    if(this.ipv6IspCityNodes && typeof (this.ipv6IspCityNodes as any).validate === 'function') {
      (this.ipv6IspCityNodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

