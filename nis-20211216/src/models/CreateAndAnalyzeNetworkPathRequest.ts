// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAndAnalyzeNetworkPathRequest extends $dara.Model {
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * *   **tcp**: Transmission Control Protocol (TCP)
   * *   **udp**: User Datagram Protocol (UDP)
   * *   **icmp**: Internet Control Message Protocol (ICMP)
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the region for which you want to initiate a task for analyzing network reachability.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the source resource.
   * 
   * This parameter is required.
   * 
   * @example
   * i-uf62y8khhbkbdrp6****
   */
  sourceId?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceIpAddress?: string;
  /**
   * @remarks
   * The source port.
   * 
   * @example
   * 0
   */
  sourcePort?: number;
  /**
   * @remarks
   * The type of the source resource. Valid values:
   * 
   * *   **ecs**: the Elastic Compute Service (ECS) instance
   * *   **internetIp**: the public IP address
   * *   **vsw**: the vSwitch
   * *   **vpn**: the VPN gateway
   * *   **vbr**: the virtual border router (VBR)
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  sourceType?: string;
  /**
   * @remarks
   * The ID of the destination resource.
   * 
   * @example
   * i-m5eactvw7wtpktv5****
   */
  targetId?: string;
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 172.50.XX.XX
   */
  targetIpAddress?: string;
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 80
   */
  targetPort?: number;
  /**
   * @remarks
   * The type of the destination resource. Valid values:
   * 
   * *   **ecs**: the ECS instance
   * *   **internetIp**: the public IP address
   * *   **vsw**: the vSwitch
   * *   **vpn**: the VPN gateway
   * *   **vbr**: the VBR
   * *   **clb**: the Classic Load Balancer (CLB) instance
   * 
   * @example
   * ecs
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
      regionId: 'RegionId',
      sourceId: 'SourceId',
      sourceIpAddress: 'SourceIpAddress',
      sourcePort: 'SourcePort',
      sourceType: 'SourceType',
      targetId: 'TargetId',
      targetIpAddress: 'TargetIpAddress',
      targetPort: 'TargetPort',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: 'string',
      regionId: 'string',
      sourceId: 'string',
      sourceIpAddress: 'string',
      sourcePort: 'number',
      sourceType: 'string',
      targetId: 'string',
      targetIpAddress: 'string',
      targetPort: 'number',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

