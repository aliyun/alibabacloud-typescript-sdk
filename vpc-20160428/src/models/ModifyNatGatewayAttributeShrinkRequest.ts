// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNatGatewayAttributeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the NAT gateway that you want to modify.
   * 
   * The description must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The EIP attach pattern of the NAT gateway. Valid values: You can leave this parameter empty. If you specify a value, only **NAT** is allowed, which indicates the standard EIP attach pattern.
   * 
   * 
   * > - You can only change the pattern from **MULTI_BINDED** to **NAT**. You cannot change the pattern from **NAT** to **MULTI_BINDED**. For more information about the **MULTI_BINDED** pattern, see [CreateNatGateway](https://help.aliyun.com/document_detail/120219.html).
   * - During the EIP attach pattern switchover procedure, network connectivity may experience a transient connection at the second level (the duration of the transient connection increases with the number of EIPs. Currently, configuration changes are supported for NAT gateways with up to five EIPs attached), so execute the switchover operation during off-peak hours.
   * - After the EIP attach pattern is changed to **NAT**, the Internet NAT gateway becomes compatible with the IPv4 gateway. However, when you attach a public EIP, a private IP address in the vSwitch where the NAT gateway resides is occupied. Ensure that the vSwitch has sufficient private IP addresses. If no available private IP address exists in the vSwitch, you cannot attach a new EIP.
   * 
   * @example
   * NAT
   */
  eipBindMode?: string;
  /**
   * @remarks
   * Specifies whether to enable the session log feature. Valid values:
   * 
   * - **true**: enables the session log feature.
   * 
   * - **false**: disables the session log feature.
   * 
   * @example
   * true
   */
  enableSessionLog?: boolean;
  /**
   * @remarks
   * Specifies whether to enable ICMP echo reply. Valid values:
   * 
   * - **true** (default): enables ICMP echo reply.
   * - **false**: disables ICMP echo reply.
   * 
   * @example
   * true
   */
  icmpReplyEnabled?: boolean;
  /**
   * @remarks
   * The session log configuration.
   */
  logDeliveryShrink?: string;
  /**
   * @remarks
   * The name of the NAT gateway that you want to modify.
   * 
   * The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * nat123
   */
  name?: string;
  /**
   * @remarks
   * The ID of the NAT gateway that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-2ze0dcn4mq31qx2jc****
   */
  natGatewayId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the NAT gateway that you want to modify. 
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
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
      description: 'Description',
      eipBindMode: 'EipBindMode',
      enableSessionLog: 'EnableSessionLog',
      icmpReplyEnabled: 'IcmpReplyEnabled',
      logDeliveryShrink: 'LogDelivery',
      name: 'Name',
      natGatewayId: 'NatGatewayId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eipBindMode: 'string',
      enableSessionLog: 'boolean',
      icmpReplyEnabled: 'boolean',
      logDeliveryShrink: 'string',
      name: 'string',
      natGatewayId: 'string',
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

