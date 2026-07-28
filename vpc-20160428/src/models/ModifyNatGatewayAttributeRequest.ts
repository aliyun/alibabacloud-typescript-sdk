// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNatGatewayAttributeRequestLogDelivery extends $dara.Model {
  /**
   * @remarks
   * The type of session log delivery. Valid values: **sls**, which indicates Simple Log Service.
   * 
   * @example
   * sls
   */
  logDeliveryType?: string;
  /**
   * @remarks
   * The destination address for session log delivery. Value: acs:log:${regionName}:${projectOwnerAliUid}:project/${projectName}/logstore/${logstoreName}
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
   * The description must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The EIP attach pattern of the NAT gateway. Valid values: The value can be empty. If the value is not empty, only **NAT** is allowed, which indicates that the attach pattern is EIP Normal pattern.
   * 
   * 
   * > - You can only change the pattern from **MULTI_BINDED** to **NAT**. You cannot change the pattern from **NAT** to **MULTI_BINDED**. For more information about the **MULTI_BINDED** pattern, see [CreateNatGateway](https://help.aliyun.com/document_detail/120219.html).
   * - During the EIP attach pattern switchover procedure, network connectivity may experience second-level transient connections (the transient connection duration increases as the number of EIPs increases. Currently, configuration changes are supported for NAT gateways with up to 5 EIPs attached). Execute the switchover during off-peak hours.
   * - After the EIP attach pattern is changed to **NAT**, the Internet NAT gateway is compatible with the IPv4 gateway. However, attaching a public EIP occupies a private IP in the vSwitch where the NAT gateway resides. Make sure that sufficient private IP addresses are available in the vSwitch. If no available idle private IP addresses exist in the vSwitch, new EIPs cannot be attached.
   * 
   * @example
   * NAT
   */
  eipBindMode?: string;
  /**
   * @remarks
   * Specifies whether to enable session logging. Valid values:
   * 
   * - **true**: Session logging is enabled.
   * 
   * - **false**: Session logging is disabled.
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
   * The session log configuration.
   */
  logDelivery?: ModifyNatGatewayAttributeRequestLogDelivery;
  /**
   * @remarks
   * The name of the NAT gateway that you want to modify.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
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

