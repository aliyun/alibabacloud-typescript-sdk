// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsProductInstancesResponseBodyDnsProductsDnsProduct } from "./DescribeDnsProductInstancesResponseBodyDnsProductsDnsProduct";


export class DescribeDnsProductInstancesResponseBodyDnsProducts extends $dara.Model {
  dnsProduct?: DescribeDnsProductInstancesResponseBodyDnsProductsDnsProduct[];
  static names(): { [key: string]: string } {
    return {
      dnsProduct: 'DnsProduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsProduct: { 'type': 'array', 'itemType': DescribeDnsProductInstancesResponseBodyDnsProductsDnsProduct },
    };
  }

  validate() {
    if(Array.isArray(this.dnsProduct)) {
      $dara.Model.validateArray(this.dnsProduct);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

