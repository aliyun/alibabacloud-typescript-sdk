// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmInstanceAddressPoolResponseBodyAddrsAddr } from "./DescribeDnsGtmInstanceAddressPoolResponseBodyAddrsAddr";


export class DescribeDnsGtmInstanceAddressPoolResponseBodyAddrs extends $dara.Model {
  addr?: DescribeDnsGtmInstanceAddressPoolResponseBodyAddrsAddr[];
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: { 'type': 'array', 'itemType': DescribeDnsGtmInstanceAddressPoolResponseBodyAddrsAddr },
    };
  }

  validate() {
    if(Array.isArray(this.addr)) {
      $dara.Model.validateArray(this.addr);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

