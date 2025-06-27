// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomainLineAlgorithmsLineAlgorithm } from "./DescribeDnsslbsubDomainsResponseBodySlbSubDomainsSlbSubDomainLineAlgorithmsLineAlgorithm";


export class DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomainLineAlgorithms extends $dara.Model {
  lineAlgorithm?: DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomainLineAlgorithmsLineAlgorithm[];
  static names(): { [key: string]: string } {
    return {
      lineAlgorithm: 'LineAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineAlgorithm: { 'type': 'array', 'itemType': DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomainLineAlgorithmsLineAlgorithm },
    };
  }

  validate() {
    if(Array.isArray(this.lineAlgorithm)) {
      $dara.Model.validateArray(this.lineAlgorithm);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

