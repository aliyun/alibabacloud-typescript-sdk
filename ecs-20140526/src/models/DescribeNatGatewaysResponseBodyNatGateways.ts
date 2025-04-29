// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNatGatewaysResponseBodyNatGatewaysNatGateway } from "./DescribeNatGatewaysResponseBodyNatGatewaysNatGateway";


export class DescribeNatGatewaysResponseBodyNatGateways extends $dara.Model {
  natGateway?: DescribeNatGatewaysResponseBodyNatGatewaysNatGateway[];
  static names(): { [key: string]: string } {
    return {
      natGateway: 'NatGateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGateway: { 'type': 'array', 'itemType': DescribeNatGatewaysResponseBodyNatGatewaysNatGateway },
    };
  }

  validate() {
    if(Array.isArray(this.natGateway)) {
      $dara.Model.validateArray(this.natGateway);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

