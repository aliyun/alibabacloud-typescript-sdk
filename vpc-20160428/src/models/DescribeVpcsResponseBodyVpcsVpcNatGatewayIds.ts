// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcsResponseBodyVpcsVpcNatGatewayIds extends $dara.Model {
  natGatewayIds?: string[];
  static names(): { [key: string]: string } {
    return {
      natGatewayIds: 'NatGatewayIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGatewayIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.natGatewayIds)) {
      $dara.Model.validateArray(this.natGatewayIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

