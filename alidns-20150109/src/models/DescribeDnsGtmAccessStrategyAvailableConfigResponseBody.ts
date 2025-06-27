// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPools } from "./DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPools";
import { DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv4AddrPools } from "./DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv4addrPools";
import { DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv6AddrPools } from "./DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv6addrPools";
import { DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyLines } from "./DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyLines";
import { DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedDomainLines } from "./DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedDomainLines";
import { DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedIpv4Lines } from "./DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedIpv4lines";
import { DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedIpv6Lines } from "./DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedIpv6lines";


export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The available address pools of the domain name type.
   */
  domainAddrPools?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPools;
  /**
   * @remarks
   * The available address pools of the IPv4 type.
   */
  ipv4AddrPools?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv4AddrPools;
  /**
   * @remarks
   * The available address pools of the IPv6 type.
   */
  ipv6AddrPools?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv6AddrPools;
  /**
   * @remarks
   * The source regions.
   */
  lines?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyLines;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C2851BA9-CE56-49AF-8D12-4FC6A49EE688
   */
  requestId?: string;
  selectedDomainLines?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedDomainLines;
  selectedIpv4Lines?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedIpv4Lines;
  selectedIpv6Lines?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedIpv6Lines;
  /**
   * @remarks
   * Indicates whether we recommend that you set the source region to global.
   * 
   * @example
   * true
   */
  suggestSetDefaultLine?: boolean;
  static names(): { [key: string]: string } {
    return {
      domainAddrPools: 'DomainAddrPools',
      ipv4AddrPools: 'Ipv4AddrPools',
      ipv6AddrPools: 'Ipv6AddrPools',
      lines: 'Lines',
      requestId: 'RequestId',
      selectedDomainLines: 'SelectedDomainLines',
      selectedIpv4Lines: 'SelectedIpv4Lines',
      selectedIpv6Lines: 'SelectedIpv6Lines',
      suggestSetDefaultLine: 'SuggestSetDefaultLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainAddrPools: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPools,
      ipv4AddrPools: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv4AddrPools,
      ipv6AddrPools: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv6AddrPools,
      lines: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyLines,
      requestId: 'string',
      selectedDomainLines: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedDomainLines,
      selectedIpv4Lines: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedIpv4Lines,
      selectedIpv6Lines: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedIpv6Lines,
      suggestSetDefaultLine: 'boolean',
    };
  }

  validate() {
    if(this.domainAddrPools && typeof (this.domainAddrPools as any).validate === 'function') {
      (this.domainAddrPools as any).validate();
    }
    if(this.ipv4AddrPools && typeof (this.ipv4AddrPools as any).validate === 'function') {
      (this.ipv4AddrPools as any).validate();
    }
    if(this.ipv6AddrPools && typeof (this.ipv6AddrPools as any).validate === 'function') {
      (this.ipv6AddrPools as any).validate();
    }
    if(this.lines && typeof (this.lines as any).validate === 'function') {
      (this.lines as any).validate();
    }
    if(this.selectedDomainLines && typeof (this.selectedDomainLines as any).validate === 'function') {
      (this.selectedDomainLines as any).validate();
    }
    if(this.selectedIpv4Lines && typeof (this.selectedIpv4Lines as any).validate === 'function') {
      (this.selectedIpv4Lines as any).validate();
    }
    if(this.selectedIpv6Lines && typeof (this.selectedIpv6Lines as any).validate === 'function') {
      (this.selectedIpv6Lines as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

