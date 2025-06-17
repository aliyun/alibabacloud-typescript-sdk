// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnUserDomainsByFuncResponseBodyDomainsPageData } from "./DescribeCdnUserDomainsByFuncResponseBodyDomainsPageData";


export class DescribeCdnUserDomainsByFuncResponseBodyDomains extends $dara.Model {
  pageData?: DescribeCdnUserDomainsByFuncResponseBodyDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeCdnUserDomainsByFuncResponseBodyDomainsPageData },
    };
  }

  validate() {
    if(Array.isArray(this.pageData)) {
      $dara.Model.validateArray(this.pageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

