// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayBandwidthPackageIds } from "./DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayBandwidthPackageIds";
import { DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayForwardTableIds } from "./DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayForwardTableIds";


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

