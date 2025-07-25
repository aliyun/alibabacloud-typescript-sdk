// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectTrafficQosRuleResponseBodyRuleList extends $dara.Model {
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
  /**
   * @remarks
   * The priority of the QoS rule. Valid values: **1** to **9000**. A larger value indicates a higher priority. The priority of each QoS rule must be unique in the same QoS policy.
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
   * @example
   * ALL
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the QoS policy.
   * 
   * @example
   * qos-pksbqfmotl5hzqmhf8
   */
  qosId?: string;
  /**
   * @remarks
   * The ID of the QoS queue.
   * 
   * @example
   * qos-queue-9nyx2u7n71s2rcy4n5
   */
  queueId?: string;
  /**
   * @remarks
   * The new DSCP value. Valid values: **0** to **63**. If you do not change the value, set the value to -1.
   * 
   * @example
   * 1
   */
  remarkingDscp?: number;
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
   * The ID of the QoS rule.
   * 
   * @example
   * qos-rule-iugg0l9x27f2nocouj
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
  /**
   * @remarks
   * The status of the QoS rule. Valid values:
   * 
   * *   **Normal**
   * *   **Configuring**
   * *   **Deleting**
   * 
   * @example
   * Normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      dstCidr: 'DstCidr',
      dstIPv6Cidr: 'DstIPv6Cidr',
      dstPortRange: 'DstPortRange',
      matchDscp: 'MatchDscp',
      priority: 'Priority',
      protocol: 'Protocol',
      qosId: 'QosId',
      queueId: 'QueueId',
      remarkingDscp: 'RemarkingDscp',
      ruleDescription: 'RuleDescription',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      srcCidr: 'SrcCidr',
      srcIPv6Cidr: 'SrcIPv6Cidr',
      srcPortRange: 'SrcPortRange',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstCidr: 'string',
      dstIPv6Cidr: 'string',
      dstPortRange: 'string',
      matchDscp: 'number',
      priority: 'number',
      protocol: 'string',
      qosId: 'string',
      queueId: 'string',
      remarkingDscp: 'number',
      ruleDescription: 'string',
      ruleId: 'string',
      ruleName: 'string',
      srcCidr: 'string',
      srcIPv6Cidr: 'string',
      srcPortRange: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectTrafficQosRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9C7FA9D6-72E0-48A9-A9C3-2DA8569CD5EB
   */
  requestId?: string;
  /**
   * @remarks
   * The list of QoS rules.
   */
  ruleList?: DescribeExpressConnectTrafficQosRuleResponseBodyRuleList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleList: { 'type': 'array', 'itemType': DescribeExpressConnectTrafficQosRuleResponseBodyRuleList },
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

