// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePurchasedApiGroupResponseBodyDomainsDomainItem } from "./DescribePurchasedApiGroupResponseBodyDomainsDomainItem";


export class DescribePurchasedApiGroupResponseBodyDomains extends $dara.Model {
  domainItem?: DescribePurchasedApiGroupResponseBodyDomainsDomainItem[];
  static names(): { [key: string]: string } {
    return {
      domainItem: 'DomainItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainItem: { 'type': 'array', 'itemType': DescribePurchasedApiGroupResponseBodyDomainsDomainItem },
    };
  }

  validate() {
    if(Array.isArray(this.domainItem)) {
      $dara.Model.validateArray(this.domainItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

