// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPool } from "./SearchCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPool";


export class SearchCloudGtmAddressPoolsResponseBodyAddressPools extends $dara.Model {
  addressPool?: SearchCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPool[];
  static names(): { [key: string]: string } {
    return {
      addressPool: 'AddressPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPool: { 'type': 'array', 'itemType': SearchCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPool },
    };
  }

  validate() {
    if(Array.isArray(this.addressPool)) {
      $dara.Model.validateArray(this.addressPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

