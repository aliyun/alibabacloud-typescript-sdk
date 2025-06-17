// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfos } from "./DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfos";
import { DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomains } from "./DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomains";


export class DescribeDomainsBySourceResponseBodyDomainsListDomainsData extends $dara.Model {
  /**
   * @remarks
   * Information about the domain name.
   */
  domainInfos?: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfos;
  /**
   * @remarks
   * The domain names that correspond to each origin server.
   */
  domains?: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomains;
  /**
   * @remarks
   * The origin server.
   * 
   * @example
   * example.com
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      domainInfos: 'DomainInfos',
      domains: 'Domains',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfos: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfos,
      domains: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomains,
      source: 'string',
    };
  }

  validate() {
    if(this.domainInfos && typeof (this.domainInfos as any).validate === 'function') {
      (this.domainInfos as any).validate();
    }
    if(this.domains && typeof (this.domains as any).validate === 'function') {
      (this.domains as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

