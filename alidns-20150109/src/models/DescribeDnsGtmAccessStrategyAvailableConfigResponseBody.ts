// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPoolsDomainAddrPool extends $dara.Model {
  /**
   * @remarks
   * The number of addresses in the address pool.
   * 
   * @example
   * 1
   */
  addrCount?: number;
  /**
   * @remarks
   * The ID of the address pool.
   * 
   * @example
   * pool1
   */
  id?: string;
  /**
   * @remarks
   * The name of the address pool.
   * 
   * @example
   * testpool
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addrCount: 'AddrCount',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrCount: 'number',
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPools extends $dara.Model {
  domainAddrPool?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPoolsDomainAddrPool[];
  static names(): { [key: string]: string } {
    return {
      domainAddrPool: 'DomainAddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainAddrPool: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyDomainAddrPoolsDomainAddrPool },
    };
  }

  validate() {
    if(Array.isArray(this.domainAddrPool)) {
      $dara.Model.validateArray(this.domainAddrPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv4AddrPoolsIpv4AddrPool extends $dara.Model {
  /**
   * @remarks
   * The number of addresses in the address pool.
   * 
   * @example
   * 1
   */
  addrCount?: number;
  /**
   * @remarks
   * The ID of the address pool.
   * 
   * @example
   * pool1
   */
  id?: string;
  /**
   * @remarks
   * The name of the address pool.
   * 
   * @example
   * testpool
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addrCount: 'AddrCount',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrCount: 'number',
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv4AddrPools extends $dara.Model {
  ipv4AddrPool?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv4AddrPoolsIpv4AddrPool[];
  static names(): { [key: string]: string } {
    return {
      ipv4AddrPool: 'Ipv4AddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4AddrPool: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv4AddrPoolsIpv4AddrPool },
    };
  }

  validate() {
    if(Array.isArray(this.ipv4AddrPool)) {
      $dara.Model.validateArray(this.ipv4AddrPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv6AddrPoolsIpv6AddrPool extends $dara.Model {
  /**
   * @remarks
   * The number of addresses in the address pool.
   * 
   * @example
   * 1
   */
  addrCount?: number;
  /**
   * @remarks
   * The ID of the address pool.
   * 
   * @example
   * pool1
   */
  id?: string;
  /**
   * @remarks
   * The name of the address pool.
   * 
   * @example
   * testpool
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addrCount: 'AddrCount',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addrCount: 'number',
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv6AddrPools extends $dara.Model {
  ipv6AddrPool?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv6AddrPoolsIpv6AddrPool[];
  static names(): { [key: string]: string } {
    return {
      ipv6AddrPool: 'Ipv6AddrPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6AddrPool: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyIpv6AddrPoolsIpv6AddrPool },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6AddrPool)) {
      $dara.Model.validateArray(this.ipv6AddrPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyLinesLine extends $dara.Model {
  /**
   * @remarks
   * The parent line code of the source region. Leave it blank if no parent line exists.
   * 
   * @example
   * telecom
   */
  fatherCode?: string;
  /**
   * @remarks
   * The line name of the source region.
   * 
   * @example
   * default
   */
  groupCode?: string;
  /**
   * @remarks
   * The name of the source region group.
   * 
   * @example
   * global
   */
  groupName?: string;
  /**
   * @remarks
   * The line code of the source region.
   * 
   * @example
   * default
   */
  lineCode?: string;
  /**
   * @remarks
   * The code of the source region group.
   * 
   * @example
   * global
   */
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      fatherCode: 'FatherCode',
      groupCode: 'GroupCode',
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fatherCode: 'string',
      groupCode: 'string',
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyLines extends $dara.Model {
  line?: DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyLinesLine[];
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: { 'type': 'array', 'itemType': DescribeDnsGtmAccessStrategyAvailableConfigResponseBodyLinesLine },
    };
  }

  validate() {
    if(Array.isArray(this.line)) {
      $dara.Model.validateArray(this.line);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedDomainLines extends $dara.Model {
  selectedDomainLine?: string[];
  static names(): { [key: string]: string } {
    return {
      selectedDomainLine: 'SelectedDomainLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectedDomainLine: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.selectedDomainLine)) {
      $dara.Model.validateArray(this.selectedDomainLine);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedIpv4Lines extends $dara.Model {
  selectedIpv4Line?: string[];
  static names(): { [key: string]: string } {
    return {
      selectedIpv4Line: 'SelectedIpv4Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectedIpv4Line: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.selectedIpv4Line)) {
      $dara.Model.validateArray(this.selectedIpv4Line);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAccessStrategyAvailableConfigResponseBodySelectedIpv6Lines extends $dara.Model {
  selectedIpv6Line?: string[];
  static names(): { [key: string]: string } {
    return {
      selectedIpv6Line: 'SelectedIpv6Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectedIpv6Line: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.selectedIpv6Line)) {
      $dara.Model.validateArray(this.selectedIpv6Line);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

