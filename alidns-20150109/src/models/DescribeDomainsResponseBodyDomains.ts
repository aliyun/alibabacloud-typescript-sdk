// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainsResponseBodyDomainsDomain } from "./DescribeDomainsResponseBodyDomainsDomain";


export class DescribeDomainsResponseBodyDomains extends $dara.Model {
  domain?: DescribeDomainsResponseBodyDomainsDomain[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomainsDomain },
    };
  }

  validate() {
    if(Array.isArray(this.domain)) {
      $dara.Model.validateArray(this.domain);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

