// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkAttributeResponseBodyNatGatewayIds extends $dara.Model {
  natGatewayId?: string[];
  static names(): { [key: string]: string } {
    return {
      natGatewayId: 'NatGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGatewayId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.natGatewayId)) {
      $dara.Model.validateArray(this.natGatewayId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

