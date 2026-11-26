// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNatGatewayAttributeRequestIpv6Config extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable IPv6. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  ipv6Enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      ipv6Enabled: 'Ipv6Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNatGatewayAttributeRequestLogDelivery extends $dara.Model {
  /**
   * @remarks
   * The destination type for session logs. Valid value: **sls**, which indicates Simple Log Service.
   * 
   * @example
   * sls
   */
  logDeliveryType?: string;
  /**
   * @remarks
   * The destination address for session logs. Format: acs:log:${regionName}:${projectOwnerAliUid}:project/${projectName}/logstore/${logstoreName}.
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
   * The EIP attach mode of the NAT gateway. Valid values: Leave this parameter empty or set it to **NAT**, which indicates the standard EIP mode.
   * 
   * 
   * > - You can only change the mode from **MULTI_BINDED** to **NAT**. You cannot change the mode from **NAT** to **MULTI_BINDED**. For more information about the **MULTI_BINDED** mode, see [CreateNatGateway](https://help.aliyun.com/document_detail/120219.html).
   * - During the EIP attach mode switch procedure, network connectivity may experience a transient connection that lasts for a few seconds (the duration of the transient connection increases with the number of EIPs. Currently, configuration changes are supported only for NAT gateways with up to five EIPs attached). We recommend that you execute the switch operation during off-peak hours.
   * - After the EIP attach mode is changed to **NAT**, the Internet NAT gateway becomes compatible with the IPv4 gateway. However, attaching a public EIP consumes a private IP address from the vSwitch where the NAT gateway resides. Ensure that the vSwitch has sufficient private IP addresses. If no idle private IP address is available in the vSwitch, you cannot attach new EIPs.
   * 
   * @example
   * NAT
   */
  eipBindMode?: string;
  /**
   * @remarks
   * Specifies whether to enable the session log feature. Valid values:
   * 
   * - **true**: The session log feature is enabled.
   * 
   * - **false**: The session log feature is disabled.
   * 
   * @example
   * true
   */
  enableSessionLog?: boolean;
  /**
   * @remarks
   * Specifies whether to enable ICMP echo reply. Valid values:
   * 
   * - **true** (default): Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  icmpReplyEnabled?: boolean;
  /**
   * @remarks
   * The IPv6 configuration.
   */
  ipv6Config?: ModifyNatGatewayAttributeRequestIpv6Config;
  /**
   * @remarks
   * The session log configuration.
   */
  logDelivery?: ModifyNatGatewayAttributeRequestLogDelivery;
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
      ipv6Config: 'Ipv6Config',
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
      ipv6Config: ModifyNatGatewayAttributeRequestIpv6Config,
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
    if(this.ipv6Config && typeof (this.ipv6Config as any).validate === 'function') {
      (this.ipv6Config as any).validate();
    }
    if(this.logDelivery && typeof (this.logDelivery as any).validate === 'function') {
      (this.logDelivery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

