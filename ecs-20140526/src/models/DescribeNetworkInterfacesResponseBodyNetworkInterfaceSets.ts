// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSet } from "./DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSet";


export class DescribeNetworkInterfacesResponseBodyNetworkInterfaceSets extends $dara.Model {
  networkInterfaceSet?: DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSet[];
  static names(): { [key: string]: string } {
    return {
      networkInterfaceSet: 'NetworkInterfaceSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceSet: { 'type': 'array', 'itemType': DescribeNetworkInterfacesResponseBodyNetworkInterfaceSetsNetworkInterfaceSet },
    };
  }

  validate() {
    if(Array.isArray(this.networkInterfaceSet)) {
      $dara.Model.validateArray(this.networkInterfaceSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

