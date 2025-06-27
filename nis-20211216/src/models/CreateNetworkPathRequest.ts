// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNetworkPathRequestTag } from "./CreateNetworkPathRequestTag";


export class CreateNetworkPathRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the network path.
   * 
   * @example
   * Analyze the path from ECS to ECS
   */
  networkPathDescription?: string;
  /**
   * @remarks
   * The name of the network path.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs2PublicIp
   */
  networkPathName?: string;
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
   * The region ID of the network path that you want to create.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm27qsxjj****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the source resource.
   * 
   * This parameter is required.
   * 
   * @example
   * i-2zef4ngqfarepyun****
   */
  sourceId?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 172.17.XX.XX
   */
  sourceIpAddress?: string;
  /**
   * @remarks
   * The source port.
   * 
   * @example
   * 443
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
   * The tags to add to the resource.
   */
  tag?: CreateNetworkPathRequestTag[];
  /**
   * @remarks
   * The ID of the destination resource.
   * 
   * @example
   * i-bp13d0e064gubm****
   */
  targetId?: string;
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 192.168.0.210
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
      networkPathDescription: 'NetworkPathDescription',
      networkPathName: 'NetworkPathName',
      protocol: 'Protocol',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceId: 'SourceId',
      sourceIpAddress: 'SourceIpAddress',
      sourcePort: 'SourcePort',
      sourceType: 'SourceType',
      tag: 'Tag',
      targetId: 'TargetId',
      targetIpAddress: 'TargetIpAddress',
      targetPort: 'TargetPort',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPathDescription: 'string',
      networkPathName: 'string',
      protocol: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceId: 'string',
      sourceIpAddress: 'string',
      sourcePort: 'number',
      sourceType: 'string',
      tag: { 'type': 'array', 'itemType': CreateNetworkPathRequestTag },
      targetId: 'string',
      targetIpAddress: 'string',
      targetPort: 'number',
      targetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

