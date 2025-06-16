// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExpressConnectTrafficQosRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate a token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The destination IPv4 CIDR block that matches the QoS rule traffic.
   * 
   * > When this parameter is unavailable, specify **SrcIPv6Cidr** or **DstIPv6Cidr**.
   * 
   * @example
   * 1.1.1.0/24
   */
  dstCidr?: string;
  /**
   * @remarks
   * The destination IPv6 CIDR block that matches the QoS rule traffic.
   * 
   * > When this parameter is unavailable, specify **SrcCidr** or **DstCidr**.
   * 
   * @example
   * 2001:0db8:1234:5678::/64
   */
  dstIPv6Cidr?: string;
  /**
   * @remarks
   * The range of destination ports that match the QoS rule traffic. Valid values: **0** to **65535**. If the traffic does not match, the value is -1. You can specify only one port. The start port number must be the same as the end port number. Different protocols correspond to different ports. Valid values:
   * 
   * *   **ALL** (uneditable): -1/-1.
   * *   **ICMP(IPv4)** (uneditable): -1/-1.
   * *   **ICMPv6(IPv6)** (uneditable): -1/-1.
   * *   **TCP** (editable): -1/-1.
   * *   **UDP** (editable): -1/-1.
   * *   **GRE** (uneditable): -1/-1.
   * *   **SSH** (uneditable): 22/22.
   * *   **Telnet** (uneditable): 23/23.
   * *   **HTTP** (uneditable): 80/80.
   * *   **HTTPS** (uneditable): 443/443.
   * *   **MS SQL** (uneditable): 1443/1443.
   * *   **Oracle** (uneditable): 1521/1521.
   * *   **MySql** (uneditable): 3306/3306.
   * *   **RDP** (uneditable): 3389/3389.
   * *   **PostgreSQL** (uneditable): 5432/5432.
   * *   **Redis** (uneditable): 6379/6379.
   * 
   * @example
   * -1/-1
   */
  dstPortRange?: string;
  /**
   * @remarks
   * The DSCP value that matches the QoS rule traffic. Valid values: **0** to **63**. If no value is matched, the value is -1.
   * 
   * @example
   * 1
   */
  matchDscp?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The priority of the QoS rule. Valid values: **1** to **9000**. A larger value indicates a higher priority. The priority of each QoS rule must be unique in the same QoS policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The protocol of the QoS rule. Valid values:
   * 
   * *   **ALL**
   * *   **ICMP(IPv4)**
   * *   **ICMPv6(IPv6)**
   * *   **TCP**
   * *   **UDP**
   * *   **GRE**
   * *   **SSH**
   * *   **Telnet**
   * *   **HTTP**
   * *   **HTTPS**
   * *   **MS SQL**
   * *   **Oracle**
   * *   **MySql**
   * *   **RDP**
   * *   **PostgreSQL**
   * *   **Redis**
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the QoS policy.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-2giu0a6vd5x0mv4700
   */
  qosId?: string;
  /**
   * @remarks
   * The ID of the QoS queue.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-queue-9nyx2u7n71s2rcy4n5
   */
  queueId?: string;
  /**
   * @remarks
   * The region ID of the QoS policy.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The new DSCP value. Valid values: **0** to **63**. If you do not change the value, set the value to -1.
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
   * The source IPv4 CIDR block that matches the QoS rule traffic.
   * 
   * > When this parameter is unavailable, specify **SrcIPv6Cidr** or **DstIPv6Cidr**.
   * 
   * @example
   * 1.1.1.0/24
   */
  srcCidr?: string;
  /**
   * @remarks
   * The source IPv6 CIDR block that matches the QoS rule traffic.
   * 
   * > When this parameter is unavailable, specify **SrcCidr** or **DstCidr**.
   * 
   * @example
   * 2001:0db8:1234:5678::/64
   */
  srcIPv6Cidr?: string;
  /**
   * @remarks
   * The range of source ports that match the QoS rule traffic. Valid values: **0** to **65535**. If the traffic does not match, the value is -1. You can specify only one port. The start port number must be the same as the end port number.
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

