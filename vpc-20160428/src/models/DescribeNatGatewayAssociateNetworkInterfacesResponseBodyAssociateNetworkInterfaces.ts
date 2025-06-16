// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterface } from "./DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterface";


export class DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfaces extends $dara.Model {
  associateNetworkInterface?: DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterface[];
  static names(): { [key: string]: string } {
    return {
      associateNetworkInterface: 'AssociateNetworkInterface',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateNetworkInterface: { 'type': 'array', 'itemType': DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterface },
    };
  }

  validate() {
    if(Array.isArray(this.associateNetworkInterface)) {
      $dara.Model.validateArray(this.associateNetworkInterface);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

