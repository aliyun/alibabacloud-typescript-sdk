// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNatGatewayAttributeRequestLogDelivery extends $dara.Model {
  /**
   * @remarks
   * Session log write type. Value: **sls**, Alibaba Cloud Log Service SLS.
   * 
   * @example
   * sls
   */
  logDeliveryType?: string;
  /**
   * @remarks
   * Session log write address. Value: acs:log:${regionName}:${projectOwnerAliUid}:project/${projectName}/logstore/${logstoreName}
   * 
   * @example
   * acs:log:cn-hangzhou:0000:project/nat_session_log_project/logstore/session_log_test
   */
  logDestination?: string;
  static names(): { [key: string]: string } {
    return {
      logDeliveryType: 'LogDeliveryType',
      logDestination: 'LogDestination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logDeliveryType: 'string',
      logDestination: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNatGatewayAttributeRequest extends $dara.Model {
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
   * Modifies the mode in which the EIP is associated with the NAT gateway. The value can be empty or **NAT**, which specifies the NAT mode.
   * 
   * > 
   * 
   * *   You can only change **MULTI_BINDED** to **NAT**. You cannot change **NAT** to **MULTI_BINDED**. For more information about the **MULTI_BINDED** mode, see [CreateNatGateway](https://help.aliyun.com/document_detail/120219.html).
   * 
   * *   When you change the association mode, your network may be interrupted for seconds. The duration increases with the number of EIPs. You can change the association mode for at most 5 EIPs at the same time. We recommend changing the association mode during off-peak hours.
   * *   After the association mode is changed to **NAT**, the Internet NAT gateway is compatible with an IPv4 gateway. If an EIP is associated with a NAT gateway in NAT mode, the EIP occupies a private IP address of the vSwitch to which the NAT gateway belongs. Ensure the vSwitch has sufficient private IP addresses for EIPs to be associated with the NAT gateway.
   * 
   * @example
   * NAT
   */
  eipBindMode?: string;
  /**
   * @remarks
   * Whether to enable session logging, with values:
   * - **true**: Session logging is enabled. 
   * - **false**: Session logging is disabled.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * Session log configuration information.
   */
  logDelivery?: ModifyNatGatewayAttributeRequestLogDelivery;
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
      logDelivery: 'LogDelivery',
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
      logDelivery: ModifyNatGatewayAttributeRequestLogDelivery,
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
    if(this.logDelivery && typeof (this.logDelivery as any).validate === 'function') {
      (this.logDelivery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

