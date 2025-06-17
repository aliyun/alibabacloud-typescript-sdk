// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTopDomainsByFlowResponseBodyTopDomainsTopDomain } from "./DescribeTopDomainsByFlowResponseBodyTopDomainsTopDomain";


export class DescribeTopDomainsByFlowResponseBodyTopDomains extends $dara.Model {
  topDomain?: DescribeTopDomainsByFlowResponseBodyTopDomainsTopDomain[];
  static names(): { [key: string]: string } {
    return {
      topDomain: 'TopDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topDomain: { 'type': 'array', 'itemType': DescribeTopDomainsByFlowResponseBodyTopDomainsTopDomain },
    };
  }

  validate() {
    if(Array.isArray(this.topDomain)) {
      $dara.Model.validateArray(this.topDomain);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

