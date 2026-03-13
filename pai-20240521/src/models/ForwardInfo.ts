// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForwardInfo extends $dara.Model {
  eipAllocationId?: string;
  natGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      eipAllocationId: 'EipAllocationId',
      natGatewayId: 'NatGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAllocationId: 'string',
      natGatewayId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

