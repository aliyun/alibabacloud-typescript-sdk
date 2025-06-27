// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddress } from "./SearchCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddress";


export class SearchCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddresses extends $dara.Model {
  address?: SearchCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddress[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: { 'type': 'array', 'itemType': SearchCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddress },
    };
  }

  validate() {
    if(Array.isArray(this.address)) {
      $dara.Model.validateArray(this.address);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

