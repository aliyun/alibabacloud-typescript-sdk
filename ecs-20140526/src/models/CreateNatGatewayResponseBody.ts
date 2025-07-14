// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatGatewayResponseBodyBandwidthPackageIds extends $dara.Model {
  bandwidthPackageId?: string[];
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.bandwidthPackageId)) {
      $dara.Model.validateArray(this.bandwidthPackageId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatGatewayResponseBodyForwardTableIds extends $dara.Model {
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

