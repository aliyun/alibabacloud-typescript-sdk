// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceOpsTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container group.
   * 
   * This parameter is required.
   * 
   * @example
   * eci-bp1dvysdafbh00t7****
   */
  containerGroupId?: string;
  /**
   * @remarks
   * The type of the O&M task. Valid values:
   * 
   * *   coredump
   * *   tcpdump
   * 
   * This parameter is required.
   * 
   * @example
   * coredump
   */
  opsType?: string;
  /**
   * @remarks
   * The value of the O\\&M task. You can set this parameter based on the value of OpsType.
   * 
   * *   If OpsType is set to coredump, the valid values of OpsValue are:
   * 
   *     *   enable: enables coredump.
   *     *   disable: disables coredump.
   * 
   * *   If OpsType is set to tcpdump, the value of OpsValue is a JSON-formatted parameter string. Example: `{"Enable":true, "IfDeviceName":"eth0"}`. The value may contain the following parameters:
   * 
   *     *   Enable: specifies whether to enable tcpdump. You must specify this parameter. Valid values: true and false.
   *     *   Protocol: the network protocol. Valid values: tcp, udp, and icmpv4.
   *     *   SourceIp: the source IP address.
   *     *   SourceCidr: the source CIDR block. If you specify both an IP address and a CIDR block, the IP address is ignored if the CIDR block is valid.
   *     *   SourcePort: the source port. Valid values: 1 to 65535.
   *     *   DestIp: the destination IP address.
   *     *   DestCidr: the destination CIDR block. If you specify both an IP address and a CIDR block, the IP address is ignored if the CIDR block is valid.
   *     *   DestPort: the destination port. Valid values: 1 to 65535.
   *     *   IfDeviceName: the destination network interface controller. Default value: eth0.
   *     *   Snaplen: the length to be captured. Default value: 65535. Unit: bytes.
   *     *   Duration: the captured period. Unit: seconds.
   *     *   PacketNum: the number of packets to be captured.
   *     *   FileSize: the size of the destination files on packets. Unit: bytes. Maximum value: 1073741824. 1073741824 bytes is equal to 1 GB.
   * 
   * This parameter is required.
   * 
   * @example
   * enable
   */
  opsValue?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the O&M task.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      containerGroupId: 'ContainerGroupId',
      opsType: 'OpsType',
      opsValue: 'OpsValue',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupId: 'string',
      opsType: 'string',
      opsValue: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

