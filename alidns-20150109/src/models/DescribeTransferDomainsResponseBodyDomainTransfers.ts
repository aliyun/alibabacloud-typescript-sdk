// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTransferDomainsResponseBodyDomainTransfersDomainTransfer } from "./DescribeTransferDomainsResponseBodyDomainTransfersDomainTransfer";


export class DescribeTransferDomainsResponseBodyDomainTransfers extends $dara.Model {
  domainTransfer?: DescribeTransferDomainsResponseBodyDomainTransfersDomainTransfer[];
  static names(): { [key: string]: string } {
    return {
      domainTransfer: 'DomainTransfer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainTransfer: { 'type': 'array', 'itemType': DescribeTransferDomainsResponseBodyDomainTransfersDomainTransfer },
    };
  }

  validate() {
    if(Array.isArray(this.domainTransfer)) {
      $dara.Model.validateArray(this.domainTransfer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

