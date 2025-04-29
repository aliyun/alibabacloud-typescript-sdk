// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiGroupResponseBodyCustomDomainsDomainItem } from "./DescribeApiGroupResponseBodyCustomDomainsDomainItem";


export class DescribeApiGroupResponseBodyCustomDomains extends $dara.Model {
  domainItem?: DescribeApiGroupResponseBodyCustomDomainsDomainItem[];
  static names(): { [key: string]: string } {
    return {
      domainItem: 'DomainItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainItem: { 'type': 'array', 'itemType': DescribeApiGroupResponseBodyCustomDomainsDomainItem },
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

