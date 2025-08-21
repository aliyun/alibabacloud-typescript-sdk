// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVSwitchAttributesResponseBodyHaVipIds extends $dara.Model {
  haVipId?: string[];
  static names(): { [key: string]: string } {
    return {
      haVipId: 'HaVipId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVipId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.haVipId)) {
      $dara.Model.validateArray(this.haVipId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchAttributesResponseBodyInstanceIds extends $dara.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchAttributesResponseBodyLoadBalancerIds extends $dara.Model {
  loadBalancerId?: string[];
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.loadBalancerId)) {
      $dara.Model.validateArray(this.loadBalancerId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchAttributesResponseBodyNatGatewayIds extends $dara.Model {
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

export class DescribeVSwitchAttributesResponseBodyNetworkInterfaceIds extends $dara.Model {
  networkInterfaceId?: string[];
  static names(): { [key: string]: string } {
    return {
      networkInterfaceId: 'NetworkInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.networkInterfaceId)) {
      $dara.Model.validateArray(this.networkInterfaceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVSwitchAttributesResponseBody extends $dara.Model {
  /**
   * @example
   * 253
   */
  availableIpAddressCount?: number;
  /**
   * @example
   * 10.0.0.0/24
   */
  cidrBlock?: string;
  /**
   * @example
   * 2019-06-01T00:00:00Z
   */
  createdTime?: string;
  /**
   * @example
   * This is my vswitch.
   */
  description?: string;
  /**
   * @example
   * cn-xian-unicom
   */
  ensRegionId?: string;
  haVipIds?: DescribeVSwitchAttributesResponseBodyHaVipIds;
  instanceIds?: DescribeVSwitchAttributesResponseBodyInstanceIds;
  loadBalancerIds?: DescribeVSwitchAttributesResponseBodyLoadBalancerIds;
  natGatewayIds?: DescribeVSwitchAttributesResponseBodyNatGatewayIds;
  /**
   * @example
   * n-257gqcdfvx6n****
   */
  networkId?: string;
  networkInterfaceIds?: DescribeVSwitchAttributesResponseBodyNetworkInterfaceIds;
  /**
   * @example
   * C0003****2A8
   */
  requestId?: string;
  /**
   * @example
   * Available
   */
  status?: string;
  /**
   * @example
   * vsw-5****
   */
  vSwitchId?: string;
  /**
   * @example
   * Test-switch
   */
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      availableIpAddressCount: 'AvailableIpAddressCount',
      cidrBlock: 'CidrBlock',
      createdTime: 'CreatedTime',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      haVipIds: 'HaVipIds',
      instanceIds: 'InstanceIds',
      loadBalancerIds: 'LoadBalancerIds',
      natGatewayIds: 'NatGatewayIds',
      networkId: 'NetworkId',
      networkInterfaceIds: 'NetworkInterfaceIds',
      requestId: 'RequestId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIpAddressCount: 'number',
      cidrBlock: 'string',
      createdTime: 'string',
      description: 'string',
      ensRegionId: 'string',
      haVipIds: DescribeVSwitchAttributesResponseBodyHaVipIds,
      instanceIds: DescribeVSwitchAttributesResponseBodyInstanceIds,
      loadBalancerIds: DescribeVSwitchAttributesResponseBodyLoadBalancerIds,
      natGatewayIds: DescribeVSwitchAttributesResponseBodyNatGatewayIds,
      networkId: 'string',
      networkInterfaceIds: DescribeVSwitchAttributesResponseBodyNetworkInterfaceIds,
      requestId: 'string',
      status: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
    };
  }

  validate() {
    if(this.haVipIds && typeof (this.haVipIds as any).validate === 'function') {
      (this.haVipIds as any).validate();
    }
    if(this.instanceIds && typeof (this.instanceIds as any).validate === 'function') {
      (this.instanceIds as any).validate();
    }
    if(this.loadBalancerIds && typeof (this.loadBalancerIds as any).validate === 'function') {
      (this.loadBalancerIds as any).validate();
    }
    if(this.natGatewayIds && typeof (this.natGatewayIds as any).validate === 'function') {
      (this.natGatewayIds as any).validate();
    }
    if(this.networkInterfaceIds && typeof (this.networkInterfaceIds as any).validate === 'function') {
      (this.networkInterfaceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

