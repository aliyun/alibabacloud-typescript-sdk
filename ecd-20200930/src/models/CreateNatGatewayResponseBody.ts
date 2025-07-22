// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatGatewayResponseBody extends $dara.Model {
  forwardTableIds?: string[];
  natGatewayId?: string;
  requestId?: string;
  snatTableIds?: string[];
  static names(): { [key: string]: string } {
    return {
      forwardTableIds: 'ForwardTableIds',
      natGatewayId: 'NatGatewayId',
      requestId: 'RequestId',
      snatTableIds: 'SnatTableIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardTableIds: { 'type': 'array', 'itemType': 'string' },
      natGatewayId: 'string',
      requestId: 'string',
      snatTableIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.forwardTableIds)) {
      $dara.Model.validateArray(this.forwardTableIds);
    }
    if(Array.isArray(this.snatTableIds)) {
      $dara.Model.validateArray(this.snatTableIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

