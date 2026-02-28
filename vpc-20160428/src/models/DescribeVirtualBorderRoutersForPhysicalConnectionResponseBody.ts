// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSetVirtualBorderRouterForPhysicalConnectionType extends $dara.Model {
  activationTime?: string;
  bandwidth?: string;
  bandwidthStatus?: string;
  circuitCode?: string;
  creationTime?: string;
  eccId?: string;
  enableIpv6?: boolean;
  localGatewayIp?: string;
  localIpv6GatewayIp?: string;
  PConnVbrBussinessStatus?: string;
  PConnVbrChargeType?: string;
  PConnVbrExpireTime?: string;
  peerGatewayIp?: string;
  peerIpv6GatewayIp?: string;
  peeringIpv6SubnetMask?: string;
  peeringSubnetMask?: string;
  recoveryTime?: string;
  status?: string;
  terminationTime?: string;
  type?: string;
  vbrId?: string;
  vbrName?: string;
  vbrOwnerUid?: number;
  vlanId?: number;
  static names(): { [key: string]: string } {
    return {
      activationTime: 'ActivationTime',
      bandwidth: 'Bandwidth',
      bandwidthStatus: 'BandwidthStatus',
      circuitCode: 'CircuitCode',
      creationTime: 'CreationTime',
      eccId: 'EccId',
      enableIpv6: 'EnableIpv6',
      localGatewayIp: 'LocalGatewayIp',
      localIpv6GatewayIp: 'LocalIpv6GatewayIp',
      PConnVbrBussinessStatus: 'PConnVbrBussinessStatus',
      PConnVbrChargeType: 'PConnVbrChargeType',
      PConnVbrExpireTime: 'PConnVbrExpireTime',
      peerGatewayIp: 'PeerGatewayIp',
      peerIpv6GatewayIp: 'PeerIpv6GatewayIp',
      peeringIpv6SubnetMask: 'PeeringIpv6SubnetMask',
      peeringSubnetMask: 'PeeringSubnetMask',
      recoveryTime: 'RecoveryTime',
      status: 'Status',
      terminationTime: 'TerminationTime',
      type: 'Type',
      vbrId: 'VbrId',
      vbrName: 'VbrName',
      vbrOwnerUid: 'VbrOwnerUid',
      vlanId: 'VlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activationTime: 'string',
      bandwidth: 'string',
      bandwidthStatus: 'string',
      circuitCode: 'string',
      creationTime: 'string',
      eccId: 'string',
      enableIpv6: 'boolean',
      localGatewayIp: 'string',
      localIpv6GatewayIp: 'string',
      PConnVbrBussinessStatus: 'string',
      PConnVbrChargeType: 'string',
      PConnVbrExpireTime: 'string',
      peerGatewayIp: 'string',
      peerIpv6GatewayIp: 'string',
      peeringIpv6SubnetMask: 'string',
      peeringSubnetMask: 'string',
      recoveryTime: 'string',
      status: 'string',
      terminationTime: 'string',
      type: 'string',
      vbrId: 'string',
      vbrName: 'string',
      vbrOwnerUid: 'number',
      vlanId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSet extends $dara.Model {
  virtualBorderRouterForPhysicalConnectionType?: DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSetVirtualBorderRouterForPhysicalConnectionType[];
  static names(): { [key: string]: string } {
    return {
      virtualBorderRouterForPhysicalConnectionType: 'VirtualBorderRouterForPhysicalConnectionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      virtualBorderRouterForPhysicalConnectionType: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSetVirtualBorderRouterForPhysicalConnectionType },
    };
  }

  validate() {
    if(Array.isArray(this.virtualBorderRouterForPhysicalConnectionType)) {
      $dara.Model.validateArray(this.virtualBorderRouterForPhysicalConnectionType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersForPhysicalConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7C5AE8B3-A2D8-428D-A2FF-93A225C0821E
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  virtualBorderRouterForPhysicalConnectionSet?: DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSet;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      virtualBorderRouterForPhysicalConnectionSet: 'VirtualBorderRouterForPhysicalConnectionSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      virtualBorderRouterForPhysicalConnectionSet: DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSet,
    };
  }

  validate() {
    if(this.virtualBorderRouterForPhysicalConnectionSet && typeof (this.virtualBorderRouterForPhysicalConnectionSet as any).validate === 'function') {
      (this.virtualBorderRouterForPhysicalConnectionSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

