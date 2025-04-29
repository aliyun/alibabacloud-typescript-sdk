// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesInstanceAttributeNetworkInterfaceAttributesNetworkInterfaceAttribute } from "./DescribeInstancesResponseBodyInstancesInstanceAttributeNetworkInterfaceAttributesNetworkInterfaceAttribute";


export class DescribeInstancesResponseBodyInstancesInstanceAttributeNetworkInterfaceAttributes extends $dara.Model {
  networkInterfaceAttribute?: DescribeInstancesResponseBodyInstancesInstanceAttributeNetworkInterfaceAttributesNetworkInterfaceAttribute[];
  static names(): { [key: string]: string } {
    return {
      networkInterfaceAttribute: 'NetworkInterfaceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceAttribute: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceAttributeNetworkInterfaceAttributesNetworkInterfaceAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.networkInterfaceAttribute)) {
      $dara.Model.validateArray(this.networkInterfaceAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

