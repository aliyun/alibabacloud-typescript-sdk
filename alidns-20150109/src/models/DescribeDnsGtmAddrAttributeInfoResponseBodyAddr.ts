// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddr } from "./DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddr";


export class DescribeDnsGtmAddrAttributeInfoResponseBodyAddr extends $dara.Model {
  addr?: DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddr[];
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: { 'type': 'array', 'itemType': DescribeDnsGtmAddrAttributeInfoResponseBodyAddrAddr },
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

