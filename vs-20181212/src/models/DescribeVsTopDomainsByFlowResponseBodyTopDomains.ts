// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsTopDomainsByFlowResponseBodyTopDomainsTopDomain } from "./DescribeVsTopDomainsByFlowResponseBodyTopDomainsTopDomain";


export class DescribeVsTopDomainsByFlowResponseBodyTopDomains extends $dara.Model {
  topDomain?: DescribeVsTopDomainsByFlowResponseBodyTopDomainsTopDomain[];
  static names(): { [key: string]: string } {
    return {
      topDomain: 'TopDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topDomain: { 'type': 'array', 'itemType': DescribeVsTopDomainsByFlowResponseBodyTopDomainsTopDomain },
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

