// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItemsAddressItem } from "./DescribeDbinstanceEndpointsResponseBodyDataDbinstanceEndpointsDbinstanceEndpointAddressItemsAddressItem";


export class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItems extends $dara.Model {
  addressItem?: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItemsAddressItem[];
  static names(): { [key: string]: string } {
    return {
      addressItem: 'AddressItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressItem: { 'type': 'array', 'itemType': DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointAddressItemsAddressItem },
    };
  }

  validate() {
    if(Array.isArray(this.addressItem)) {
      $dara.Model.validateArray(this.addressItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

