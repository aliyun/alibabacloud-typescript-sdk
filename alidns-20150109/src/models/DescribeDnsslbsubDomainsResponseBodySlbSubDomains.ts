// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomain } from "./DescribeDnsslbsubDomainsResponseBodySlbSubDomainsSlbSubDomain";


export class DescribeDNSSLBSubDomainsResponseBodySlbSubDomains extends $dara.Model {
  slbSubDomain?: DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomain[];
  static names(): { [key: string]: string } {
    return {
      slbSubDomain: 'SlbSubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbSubDomain: { 'type': 'array', 'itemType': DescribeDNSSLBSubDomainsResponseBodySlbSubDomainsSlbSubDomain },
    };
  }

  validate() {
    if(Array.isArray(this.slbSubDomain)) {
      $dara.Model.validateArray(this.slbSubDomain);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

