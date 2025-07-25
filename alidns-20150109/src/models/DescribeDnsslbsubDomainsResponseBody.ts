// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomainLineAlgorithmsLineAlgorithm extends $dara.Model {
  /**
   * @remarks
   * The DNS resolution line. The line can be China Telecom, China Mobile, and China Unicom.
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * Indicates whether weighted round-robin is enabled for the line. Valid values:
   * 
   * *   **true** (default): Weighted round-robin is enabled.
   * *   **false**: Weighted round-robin is disabled.
   * 
   * @example
   * true
   */
  open?: boolean;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      open: 'Open',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: 'string',
      open: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomainLineAlgorithms extends $dara.Model {
  lineAlgorithm?: DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomainLineAlgorithmsLineAlgorithm[];
  static names(): { [key: string]: string } {
    return {
      lineAlgorithm: 'LineAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineAlgorithm: { 'type': 'array', 'itemType': DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomainLineAlgorithmsLineAlgorithm },
    };
  }

  validate() {
    if(Array.isArray(this.lineAlgorithm)) {
      $dara.Model.validateArray(this.lineAlgorithm);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomain extends $dara.Model {
  /**
   * @remarks
   * The lines for which weighted round-robin is enabled.
   */
  lineAlgorithms?: DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomainLineAlgorithms;
  /**
   * @remarks
   * Indicates whether weighted round-robin is enabled for the subdomain.
   * 
   * @example
   * true
   */
  open?: boolean;
  /**
   * @remarks
   * The number of DNS records added for the subdomain.
   * 
   * @example
   * 3
   */
  recordCount?: number;
  /**
   * @remarks
   * The name of the subdomain.
   * 
   * @example
   * www.example.com
   */
  subDomain?: string;
  /**
   * @remarks
   * The type of the Domain Name System (DNS) record that supports weighted round-robin. Valid values: A, AAAA, and CNAME.
   * 
   * @example
   * A
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      lineAlgorithms: 'LineAlgorithms',
      open: 'Open',
      recordCount: 'RecordCount',
      subDomain: 'SubDomain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineAlgorithms: DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomainLineAlgorithms,
      open: 'boolean',
      recordCount: 'number',
      subDomain: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.lineAlgorithms && typeof (this.lineAlgorithms as any).validate === 'function') {
      (this.lineAlgorithms as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDNSSLBSubDomainsResponseBodySlbSubDomains extends $dara.Model {
  slbSubDomain?: DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomain[];
  static names(): { [key: string]: string } {
    return {
      slbSubDomain: 'SlbSubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbSubDomain: { 'type': 'array', 'itemType': DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomain },
    };
  }

  validate() {
    if(Array.isArray(this.slbSubDomain)) {
      $dara.Model.validateArray(this.slbSubDomain);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDNSSLBSubDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 100**. Default value: **20**.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * The subdomains for which weighted round-robin is enabled.
   */
  slbSubDomains?: DescribeDNSSLBSubDomainsResponseBodySlbSubDomains;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      slbSubDomains: 'SlbSubDomains',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      slbSubDomains: DescribeDNSSLBSubDomainsResponseBodySlbSubDomains,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.slbSubDomains && typeof (this.slbSubDomains as any).validate === 'function') {
      (this.slbSubDomains as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

