// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyExpressConnectTrafficQosRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The destination IP address IPv4 CIDR block for traffic matching in the QoS rule.
   * 
   * > This parameter cannot be specified together with **SrcIPv6Cidr** or **DstIPv6Cidr**.
   * 
   * @example
   * ``1.1.**.**``/24
   */
  dstCidr?: string;
  /**
   * @remarks
   * The destination IP address IPv6 CIDR block for traffic matching in the QoS rule.
   * 
   * > This parameter cannot be specified together with **SrcCidr** or **DstCidr**.
   * 
   * @example
   * 2001:0db8:1234:****::/64
   */
  dstIPv6Cidr?: string;
  /**
   * @remarks
   * The destination port range for traffic matching in the QoS rule. Valid values: **0** to **65535**. Set the value to -1 if no matching is required. Currently, only a single port number can be specified. The start and end port numbers must be the same. The destination port range is fixed for each protocol type. Valid values:
   * 
   * - **ALL**: -1/-1. Not editable.
   * 
   * - **ICMP(IPv4)**: -1/-1. Not editable.
   * 
   * - **ICMPv6(IPv6)**: -1/-1. Not editable.
   * 
   * - **TCP**: -1/-1. Editable.
   * 
   * - **UDP**: -1/-1. Editable.
   * 
   * - **GRE**: -1/-1. Not editable.
   * 
   * - **SSH**: 22/22. Not editable.
   * 
   * - **Telnet**: 23/23. Not editable.
   * 
   * - **HTTP**: 80/80. Not editable.
   * 
   * - **HTTPS**: 443/443. Not editable.
   * 
   * - **MS SQL**: 1443/1443. Not editable.
   * 
   * - **Oracle**: 1521/1521. Not editable.
   * 
   * - **MySql**: 3306/3306. Not editable.
   * 
   * - **RDP**: 3389/3389. Not editable.
   * 
   * - **PostgreSQL**: 5432/5432. Not editable.
   * 
   * - **Redis**: 6379/6379. Not editable.
   * 
   * @example
   * -1/-1
   */
  dstPortRange?: string;
  /**
   * @remarks
   * The DSCP value for traffic matching in the QoS rule. Valid values: **0** to **63**. Set the value to -1 if no matching is required.
   * 
   * @example
   * 1
   */
  matchDscp?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The priority of the QoS rule. Valid values: **1** to **9000**. A larger value indicates a higher priority. The priority of each QoS rule must be unique within the same QoS policy.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The protocol type of the QoS rule. Valid values:
   * 
   * - **ALL**
   * 
   * - **ICMP(IPv4)**
   * 
   * - **ICMPv6(IPv6)**
   * 
   * - **TCP**
   * 
   * - **UDP**
   * 
   * - **GRE**
   * 
   * - **SSH**
   * 
   * - **Telnet**
   * 
   * - **HTTP**
   * 
   * - **HTTPS**
   * 
   * - **MS SQL**
   * 
   * - **Oracle**
   * 
   * - **MySql**
   * 
   * - **RDP**
   * 
   * - **PostgreSQL**
   * 
   * - **Redis**
   * 
   * @example
   * ALL
   */
  protocol?: string;
  /**
   * @remarks
   * The QoS policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-2giu0a6vd5x0mv****
   */
  qosId?: string;
  /**
   * @remarks
   * The QoS queue ID.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-queue-9nyx2u7n71s2rc****
   */
  queueId?: string;
  /**
   * @remarks
   * The region ID of the QoS policy.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The new DSCP value to remark in the traffic. Valid values: **0** to **63**. Set the value to -1 if no remarking is required.
   * 
   * @example
   * 1
   */
  remarkingDscp?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The description of the QoS rule.
   * 
   * The description must be 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * qos-rule-test
   */
  ruleDescription?: string;
  /**
   * @remarks
   * The QoS rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-rule-iugg0l9x27f2no****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the QoS rule.
   * 
   * The name must be 0 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * qos-rule-test
   */
  ruleName?: string;
  /**
   * @remarks
   * The source IPv4 CIDR block for traffic matching in the QoS rule.
   * 
   * > This parameter cannot be specified together with **SrcIPv6Cidr** or **DstIPv6Cidr**.
   * 
   * @example
   * ``1.1.**.**``/24
   */
  srcCidr?: string;
  /**
   * @remarks
   * The source IPv6 CIDR block for traffic matching in the QoS rule.
   * 
   * > This parameter cannot be specified together with **SrcCidr** or **DstCidr**.
   * 
   * @example
   * 2001:0db8:1234:****::/64
   */
  srcIPv6Cidr?: string;
  /**
   * @remarks
   * The source port range for traffic matching in the QoS rule. Valid values: **0** to **65535**. Set the value to -1 if no matching is required. Currently, only a single port number can be specified. The start and end port numbers must be the same.
   * 
   * @example
   * -1/-1
   */
  srcPortRange?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dstCidr: 'DstCidr',
      dstIPv6Cidr: 'DstIPv6Cidr',
      dstPortRange: 'DstPortRange',
      matchDscp: 'MatchDscp',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      priority: 'Priority',
      protocol: 'Protocol',
      qosId: 'QosId',
      queueId: 'QueueId',
      regionId: 'RegionId',
      remarkingDscp: 'RemarkingDscp',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      ruleDescription: 'RuleDescription',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      srcCidr: 'SrcCidr',
      srcIPv6Cidr: 'SrcIPv6Cidr',
      srcPortRange: 'SrcPortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dstCidr: 'string',
      dstIPv6Cidr: 'string',
      dstPortRange: 'string',
      matchDscp: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      priority: 'number',
      protocol: 'string',
      qosId: 'string',
      queueId: 'string',
      regionId: 'string',
      remarkingDscp: 'number',
      resourceOwnerAccount: 'string',
      ruleDescription: 'string',
      ruleId: 'string',
      ruleName: 'string',
      srcCidr: 'string',
      srcIPv6Cidr: 'string',
      srcPortRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

