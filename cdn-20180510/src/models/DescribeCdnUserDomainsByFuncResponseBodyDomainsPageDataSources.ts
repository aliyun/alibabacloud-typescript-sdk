// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSourcesSource } from "./DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSourcesSource";


export class DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSources extends $dara.Model {
  source?: DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeCdnUserDomainsByFuncResponseBodyDomainsPageDataSourcesSource },
    };
  }

  validate() {
    if(Array.isArray(this.source)) {
      $dara.Model.validateArray(this.source);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

