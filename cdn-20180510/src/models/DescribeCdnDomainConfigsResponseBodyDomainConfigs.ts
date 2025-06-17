// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfig } from "./DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfig";


export class DescribeCdnDomainConfigsResponseBodyDomainConfigs extends $dara.Model {
  domainConfig?: DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfig[];
  static names(): { [key: string]: string } {
    return {
      domainConfig: 'DomainConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfig: { 'type': 'array', 'itemType': DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfig },
    };
  }

  validate() {
    if(Array.isArray(this.domainConfig)) {
      $dara.Model.validateArray(this.domainConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

