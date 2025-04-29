// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNatGatewayResponseBodyBandwidthPackageIds } from "./CreateNatGatewayResponseBodyBandwidthPackageIds";
import { CreateNatGatewayResponseBodyForwardTableIds } from "./CreateNatGatewayResponseBodyForwardTableIds";


export class CreateNatGatewayResponseBody extends $dara.Model {
  bandwidthPackageIds?: CreateNatGatewayResponseBodyBandwidthPackageIds;
  forwardTableIds?: CreateNatGatewayResponseBodyForwardTableIds;
  natGatewayId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageIds: 'BandwidthPackageIds',
      forwardTableIds: 'ForwardTableIds',
      natGatewayId: 'NatGatewayId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageIds: CreateNatGatewayResponseBodyBandwidthPackageIds,
      forwardTableIds: CreateNatGatewayResponseBodyForwardTableIds,
      natGatewayId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.bandwidthPackageIds && typeof (this.bandwidthPackageIds as any).validate === 'function') {
      (this.bandwidthPackageIds as any).validate();
    }
    if(this.forwardTableIds && typeof (this.forwardTableIds as any).validate === 'function') {
      (this.forwardTableIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

