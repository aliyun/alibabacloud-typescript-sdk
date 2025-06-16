// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVirtualBorderRoutersForPhysicalConnectionResponseBodyVirtualBorderRouterForPhysicalConnectionSetVirtualBorderRouterForPhysicalConnectionType extends $dara.Model {
  /**
   * @remarks
   * The time when the VBR was first activated.
   * 
   * @example
   * 2021-06-08T12:20:55
   */
  activationTime?: string;
  /**
   * @remarks
   * The bandwidth of the VBR that is associated with the Express Connect circuit. Unit: Mbit/s.
   * 
   * @example
   * 10
   */
  bandwidth?: string;
  /**
   * @remarks
   * The status of the bandwidth. Valid values:
   * 
   * *   **Active**
   * *   **Inactive**
   * 
   * @example
   * Active
   */
  bandwidthStatus?: string;
  /**
   * @remarks
   * The circuit code of the Express Connect circuit. The circuit code is provided by the connectivity provider.
   * 
   * @example
   * longtel0**
   */
  circuitCode?: string;
  /**
   * @remarks
   * The time when the VBR was created.
   * 
   * @example
   * 2021-06-08T12:20:55
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the ECC instance.
   * 
   * @example
   * ecc-sjghe****
   */
  eccId?: string;
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
   * The IPv4 address of the gateway device on the Alibaba Cloud side.
   * 
   * @example
   * 192.168.XX.X
   */
  localGatewayIp?: string;
  /**
   * @remarks
   * The IPv6 address of the gateway device on the Alibaba Cloud side.
   * 
   * @example
   * ipv6bw-uf6hcyzu65v98v3du****
   */
  localIpv6GatewayIp?: string;
  /**
   * @remarks
   * The status of the VBR associated with the Express Connect circuit. Valid values:
   * 
   * *   **Normal**
   * *   **FinancialLocked**
   * 
   * @example
   * Normal
   */
  PConnVbrBussinessStatus?: string;
  /**
   * @remarks
   * The billing method of the VBR. Valid values:
   * 
   * *   **PrePaid**: subscription. If you choose this billing method, make sure that your Apsara Stack account supports balance payments or credit payments.
   * *   **PostPaid**: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  PConnVbrChargeType?: string;
  /**
   * @remarks
   * The time when the VBR associated with the Express Connect circuit expires.
   * 
   * @example
   * 2021-06-10T12:20:55
   */
  PConnVbrExpireTime?: string;
  /**
   * @remarks
   * The IPv4 address of the gateway device on the user side.
   * 
   * @example
   * 162.62.XX.XX
   */
  peerGatewayIp?: string;
  /**
   * @remarks
   * The IPv6 address of the gateway device on the user side.
   * 
   * This parameter is required when you create a VBR for the owner of the Express Connect circuit. You can ignore this parameter when you create a VBR for another Alibaba Cloud account.
   * 
   * @example
   * 2001:XXXX:3c4d:0015:0000:0000:0000:1a2b
   */
  peerIpv6GatewayIp?: string;
  /**
   * @remarks
   * The subnet mask for the IPv6 addresses of the gateway devices on the Alibaba Cloud side and on the user side.
   * 
   * The two IPv6 addresses must fall within the same subnet.
   * 
   * @example
   * 2408:4004:cc:400::/56
   */
  peeringIpv6SubnetMask?: string;
  /**
   * @remarks
   * The subnet mask of the IPv4 addresses configured on the user side and Alibaba Cloud side.
   * 
   * The two IPv4 addresses must fall within the same subnet.
   * 
   * @example
   * 255.255.255.0
   */
  peeringSubnetMask?: string;
  /**
   * @remarks
   * The last time when the status of the VBR changed from Terminated to Active.
   * 
   * @example
   * 2021-06-08T12:20:55
   */
  recoveryTime?: string;
  /**
   * @remarks
   * The status of the VBR. Valid values:
   * 
   * *   **unconfirmed**
   * *   **active**
   * *   **terminating**
   * *   **terminated**
   * *   **recovering**
   * *   **deleting**
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The last time when the VBR was disabled.
   * 
   * @example
   * 2021-06-07T12:20:55
   */
  terminationTime?: string;
  /**
   * @remarks
   * The VBR type.
   * 
   * @example
   * pconnVBR
   */
  type?: string;
  /**
   * @remarks
   * The VBR ID.
   * 
   * @example
   * vbr-bp16ksp61j7e0tk****
   */
  vbrId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VBR belongs.
   * 
   * If the owner of the VBR is the same as that of the Express Connect circuit, this parameter is empty.
   * 
   * @example
   * 253460731706911258
   */
  vbrOwnerUid?: number;
  /**
   * @remarks
   * The VLAN ID of the VBR.
   * 
   * @example
   * 1678
   */
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

