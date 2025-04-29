// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayForwardTableIds extends $dara.Model {
  forwardTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      forwardTableId: 'ForwardTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.forwardTableId)) {
      $dara.Model.validateArray(this.forwardTableId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

