// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainGroupsResponseBodyDomainGroupsDomainGroup } from "./DescribeDomainGroupsResponseBodyDomainGroupsDomainGroup";


export class DescribeDomainGroupsResponseBodyDomainGroups extends $dara.Model {
  domainGroup?: DescribeDomainGroupsResponseBodyDomainGroupsDomainGroup[];
  static names(): { [key: string]: string } {
    return {
      domainGroup: 'DomainGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainGroup: { 'type': 'array', 'itemType': DescribeDomainGroupsResponseBodyDomainGroupsDomainGroup },
    };
  }

  validate() {
    if(Array.isArray(this.domainGroup)) {
      $dara.Model.validateArray(this.domainGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

