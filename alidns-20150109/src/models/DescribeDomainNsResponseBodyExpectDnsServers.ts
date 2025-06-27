// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainNsResponseBodyExpectDnsServers extends $dara.Model {
  expectDnsServer?: string[];
  static names(): { [key: string]: string } {
    return {
      expectDnsServer: 'ExpectDnsServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectDnsServer: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.expectDnsServer)) {
      $dara.Model.validateArray(this.expectDnsServer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

