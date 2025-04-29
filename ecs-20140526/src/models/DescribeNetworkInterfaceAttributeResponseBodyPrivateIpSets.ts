// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSetsPrivateIpSet } from "./DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSetsPrivateIpSet";


export class DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSets extends $dara.Model {
  privateIpSet?: DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSetsPrivateIpSet[];
  static names(): { [key: string]: string } {
    return {
      privateIpSet: 'PrivateIpSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpSet: { 'type': 'array', 'itemType': DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSetsPrivateIpSet },
    };
  }

  validate() {
    if(Array.isArray(this.privateIpSet)) {
      $dara.Model.validateArray(this.privateIpSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

