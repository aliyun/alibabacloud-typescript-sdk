// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainsBySourceResponseBodyDomainsListDomainsData } from "./DescribeDomainsBySourceResponseBodyDomainsListDomainsData";


export class DescribeDomainsBySourceResponseBodyDomainsList extends $dara.Model {
  domainsData?: DescribeDomainsBySourceResponseBodyDomainsListDomainsData[];
  static names(): { [key: string]: string } {
    return {
      domainsData: 'DomainsData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainsData: { 'type': 'array', 'itemType': DescribeDomainsBySourceResponseBodyDomainsListDomainsData },
    };
  }

  validate() {
    if(Array.isArray(this.domainsData)) {
      $dara.Model.validateArray(this.domainsData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

