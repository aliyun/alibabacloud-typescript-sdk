// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfosDomainInfo } from "./DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfosDomainInfo";


export class DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfos extends $dara.Model {
  domainInfo?: DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfosDomainInfo[];
  static names(): { [key: string]: string } {
    return {
      domainInfo: 'domainInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfo: { 'type': 'array', 'itemType': DescribeDomainsBySourceResponseBodyDomainsListDomainsDataDomainInfosDomainInfo },
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

