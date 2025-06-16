// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNatGatewayAttributeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the NAT gateway.
   * 
   * The description must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The mode in which the NAT gateway is associated with an elastic IP address (EIP). You can leave this parameter empty. If you want to specify a value for this parameter, set the value to **NAT**, which indicates that the NAT gateway is associated with the EIP in NAT mode.
   * 
   * **
   * 
   * **Description**
   * 
   * *   If EipBindMode is set to MULTI_BINDED when the NAT gateway is created, you can change the value of this parameter from **MULTI_BINDED** to **NAT**. If EipBindMode is set to NAT when the NAT gateway is created, you cannot change the value of this parameter from **NAT** to **MULTI_BINDED**. For more information about **MULTI_BINDED**, see [CreateNatGateway](https://help.aliyun.com/document_detail/120219.html).
   * 
   * *   When the mode in which the NAT gateway is associated with an EIP is being changed, a transient connection that lasts a few seconds may occur. If the number of EIPs with which the NAT gateway is associated increases, the transient connection lasts longer. You can change the mode only for a NAT gateway that is associated with up to five EIPs. We recommend that you change the mode during off-peak hours.
   * *   After the mode is changed to **NAT**, the Internet NAT gateway is compatible with the IPv4 gateway. However, if you associate an EIP with the NAT gateway, the EIP occupies one private IP address on the vSwitch of the NAT gateway. Make sure that the vSwitch has sufficient private IP addresses. Otherwise, the EIP fails to be associated with the NAT gateway.
   * 
   * @example
   * NAT
   */
  eipBindMode?: string;
  enableSessionLog?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the Internet Control Message Protocol (ICMP) non-retrieval feature. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * @example
   * false
   */
  icmpReplyEnabled?: boolean;
  logDeliveryShrink?: string;
  /**
   * @remarks
   * The name of the NAT gateway.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * nat123
   */
  name?: string;
  /**
   * @remarks
   * The ID of the NAT gateway.
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
   * The region ID of the NAT gateway.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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

