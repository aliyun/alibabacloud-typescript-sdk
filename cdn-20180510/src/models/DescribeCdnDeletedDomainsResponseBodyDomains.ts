// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnDeletedDomainsResponseBodyDomainsPageData } from "./DescribeCdnDeletedDomainsResponseBodyDomainsPageData";


export class DescribeCdnDeletedDomainsResponseBodyDomains extends $dara.Model {
  pageData?: DescribeCdnDeletedDomainsResponseBodyDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeCdnDeletedDomainsResponseBodyDomainsPageData },
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

