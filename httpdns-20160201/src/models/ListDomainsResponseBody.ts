// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDomainsResponseBodyDomainInfosDomainInfo extends $dara.Model {
  domainName?: string;
  resolveHttpAes?: number;
  resolveHttpsAes?: number;
  resolved?: number;
  resolved6?: number;
  resolvedDoh?: number;
  resolvedHttps?: number;
  resolvedHttps6?: number;
  timeModified?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      resolveHttpAes: 'ResolveHttpAes',
      resolveHttpsAes: 'ResolveHttpsAes',
      resolved: 'Resolved',
      resolved6: 'Resolved6',
      resolvedDoh: 'ResolvedDoh',
      resolvedHttps: 'ResolvedHttps',
      resolvedHttps6: 'ResolvedHttps6',
      timeModified: 'TimeModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      resolveHttpAes: 'number',
      resolveHttpsAes: 'number',
      resolved: 'number',
      resolved6: 'number',
      resolvedDoh: 'number',
      resolvedHttps: 'number',
      resolvedHttps6: 'number',
      timeModified: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBodyDomainInfos extends $dara.Model {
  domainInfo?: ListDomainsResponseBodyDomainInfosDomainInfo[];
  static names(): { [key: string]: string } {
    return {
      domainInfo: 'DomainInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfo: { 'type': 'array', 'itemType': ListDomainsResponseBodyDomainInfosDomainInfo },
    };
  }

  validate() {
    if(Array.isArray(this.domainInfo)) {
      $dara.Model.validateArray(this.domainInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBody extends $dara.Model {
  domainInfos?: ListDomainsResponseBodyDomainInfos;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @example
   * 50F9C40E-188D-4208-BE2C-7427E531****
   */
  requestId?: string;
  /**
   * @example
   * 18
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainInfos: 'DomainInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfos: ListDomainsResponseBodyDomainInfos,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.domainInfos && typeof (this.domainInfos as any).validate === 'function') {
      (this.domainInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

