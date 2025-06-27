// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomainLineAlgorithms } from "./DescribeDnsslbsubDomainsResponseBodySlbSubDomainsSlbSubDomainLineAlgorithms";


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

