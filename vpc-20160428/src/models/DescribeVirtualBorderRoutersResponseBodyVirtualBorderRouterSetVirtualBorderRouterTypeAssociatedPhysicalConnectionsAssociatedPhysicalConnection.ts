// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVirtualBorderRoutersResponseBodyVirtualBorderRouterSetVirtualBorderRouterTypeAssociatedPhysicalConnectionsAssociatedPhysicalConnection extends $dara.Model {
  /**
   * @remarks
   * The circuit code of the Express Connect circuit, which is provided by the connectivity provider.
   * 
   * @example
   * longtel0**
   */
  circuitCode?: string;
  /**
   * @remarks
   * Indicates whether IPv6 is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * The IPv4 address of the VBR on the Alibaba Cloud side.
   * 
   * @example
   * 192.168.XX.XX
   */
  localGatewayIp?: string;
  /**
   * @remarks
   * The IPv6 address of the VBR on the Alibaba Cloud side.
   * 
   * @example
   * 2001:XXXX:3c4d:0015:0000:0000:0000:1a2b
   */
  localIpv6GatewayIp?: string;
  /**
   * @remarks
   * The IPv4 address of the VBR on the user side.
   * 
   * @example
   * 116.62.XX.XX
   */
  peerGatewayIp?: string;
  /**
   * @remarks
   * The IPv6 address of the VBR on the user side.
   * 
   * @example
   * 2001:XXXX:3c4d:0015:0000:0000:0000:1a2b
   */
  peerIpv6GatewayIp?: string;
  /**
   * @remarks
   * The subnet mask for the IPv6 addresses on the user side and on the Alibaba Cloud side.
   * 
   * Both IPv6 addresses must belong to the same subnet.
   * 
   * @example
   * 2408:4004:cc:400::/56
   */
  peeringIpv6SubnetMask?: string;
  /**
   * @remarks
   * The subnet mask for the IPv4 addresses of the VBR on the user side and on the Alibaba Cloud side.
   * 
   * Both IPv4 addresses must belong to the same subnet.
   * 
   * @example
   * 255.255.255.252
   */
  peeringSubnetMask?: string;
  /**
   * @remarks
   * The business status of the Express Connect circuit. Valid values:
   * 
   * *   **Normal:** The Express Connect circuit is running as normal.
   * *   **FinancialLocked:** The Express Connect circuit is locked due to overdue payments.
   * 
   * @example
   * Normal
   */
  physicalConnectionBusinessStatus?: string;
  /**
   * @remarks
   * The ID of the Express Connect circuit.
   * 
   * @example
   * pc-119mfjzm7****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The ID of the account to which the Express Connect circuit belongs.
   * 
   * @example
   * 12345678****
   */
  physicalConnectionOwnerUid?: string;
  /**
   * @remarks
   * The status of the Express Connect circuit. Valid values:
   * 
   * *   **Initial:** The application is under review.
   * *   **Approved**: The application is approved.
   * *   **Allocating**: The system is allocating resources.
   * *   **Allocated**: The Express Connect circuit is under construction.
   * *   **Confirmed**: The Express Connect circuit is to be confirmed.
   * *   **Enabled**: The Express Connect circuit is enabled.
   * *   **Rejected**: The application is rejected.
   * *   **Canceled**: The application is canceled.
   * *   **Allocation Failed:** The system failed to allocate resources.
   * *   **Terminated:** The Express Connect circuit is disabled.
   * 
   * @example
   * Enabled
   */
  physicalConnectionStatus?: string;
  /**
   * @remarks
   * The status of the VBR. Valid values:
   * 
   * *   **unconfirmed**
   * *   **active:**
   * *   **terminating**
   * *   **terminated**
   * *   **recovering**
   * *   **deleting:**
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The VLAN ID of the VBR.
   * 
   * @example
   * 0
   */
  vlanId?: string;
  /**
   * @remarks
   * The ID of the VBR interface, which can be used as a next hop of a VBR route.
   * 
   * @example
   * ri-kojok19x3j0q6k****
   */
  vlanInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      circuitCode: 'CircuitCode',
      enableIpv6: 'EnableIpv6',
      localGatewayIp: 'LocalGatewayIp',
      localIpv6GatewayIp: 'LocalIpv6GatewayIp',
      peerGatewayIp: 'PeerGatewayIp',
      peerIpv6GatewayIp: 'PeerIpv6GatewayIp',
      peeringIpv6SubnetMask: 'PeeringIpv6SubnetMask',
      peeringSubnetMask: 'PeeringSubnetMask',
      physicalConnectionBusinessStatus: 'PhysicalConnectionBusinessStatus',
      physicalConnectionId: 'PhysicalConnectionId',
      physicalConnectionOwnerUid: 'PhysicalConnectionOwnerUid',
      physicalConnectionStatus: 'PhysicalConnectionStatus',
      status: 'Status',
      vlanId: 'VlanId',
      vlanInterfaceId: 'VlanInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      circuitCode: 'string',
      enableIpv6: 'boolean',
      localGatewayIp: 'string',
      localIpv6GatewayIp: 'string',
      peerGatewayIp: 'string',
      peerIpv6GatewayIp: 'string',
      peeringIpv6SubnetMask: 'string',
      peeringSubnetMask: 'string',
      physicalConnectionBusinessStatus: 'string',
      physicalConnectionId: 'string',
      physicalConnectionOwnerUid: 'string',
      physicalConnectionStatus: 'string',
      status: 'string',
      vlanId: 'string',
      vlanInterfaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

