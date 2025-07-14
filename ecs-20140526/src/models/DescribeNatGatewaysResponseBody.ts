// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayBandwidthPackageIds extends $dara.Model {
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

export class DescribeNatGatewaysResponseBodyNatGatewaysNatGateway extends $dara.Model {
  bandwidthPackageIds?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayBandwidthPackageIds;
  businessStatus?: string;
  creationTime?: string;
  description?: string;
  forwardTableIds?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayForwardTableIds;
  instanceChargeType?: string;
  name?: string;
  natGatewayId?: string;
  regionId?: string;
  spec?: string;
  status?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageIds: 'BandwidthPackageIds',
      businessStatus: 'BusinessStatus',
      creationTime: 'CreationTime',
      description: 'Description',
      forwardTableIds: 'ForwardTableIds',
      instanceChargeType: 'InstanceChargeType',
      name: 'Name',
      natGatewayId: 'NatGatewayId',
      regionId: 'RegionId',
      spec: 'Spec',
      status: 'Status',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageIds: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayBandwidthPackageIds,
      businessStatus: 'string',
      creationTime: 'string',
      description: 'string',
      forwardTableIds: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayForwardTableIds,
      instanceChargeType: 'string',
      name: 'string',
      natGatewayId: 'string',
      regionId: 'string',
      spec: 'string',
      status: 'string',
      vpcId: 'string',
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

export class DescribeNatGatewaysResponseBody extends $dara.Model {
  natGateways?: DescribeNatGatewaysResponseBodyNatGateways;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      natGateways: 'NatGateways',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGateways: DescribeNatGatewaysResponseBodyNatGateways,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.natGateways && typeof (this.natGateways as any).validate === 'function') {
      (this.natGateways as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

