// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectTrafficQosRuleResponseBodyRuleList extends $dara.Model {
  /**
   * @remarks
   * The destination IP address IPv4 CIDR block for traffic matching of the QoS rule.
   * 
   * > This parameter cannot be specified together with **SrcIPv6Cidr** or **DstIPv6Cidr**.
   * 
   * @example
   * ``1.1.**.**``/24
   */
  dstCidr?: string;
  /**
   * @remarks
   * The destination IP address IPv6 CIDR block for traffic matching of the QoS rule.
   * 
   * > This parameter cannot be specified together with **SrcCidr** or **DstCidr**.
   * 
   * @example
   * 2001:0db8:1234:****::/64
   */
  dstIPv6Cidr?: string;
  /**
   * @remarks
   * The destination port range for traffic matching of the QoS rule. Valid values: **0** to **65535**. A value of -1 indicates no match. Currently, only a single port number can be specified, and the start and end port numbers must be the same. The destination port range is fixed for different protocol types. Valid values:
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
   * The DSCP value for traffic matching of the QoS rule. Valid values: **0** to **63**. A value of -1 indicates no match.
   * 
   * @example
   * 1
   */
  matchDscp?: number;
  /**
   * @remarks
   * The priority of the QoS rule. Valid values: **1** to **9000**. A larger value indicates a higher priority. The priority must be unique within the same QoS policy.
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
   * @example
   * qos-pksbqfmotl5hzq****
   */
  qosId?: string;
  /**
   * @remarks
   * The QoS queue ID.
   * 
   * @example
   * qos-queue-9nyx2u7n71s2rc****
   */
  queueId?: string;
  /**
   * @remarks
   * The DSCP value to remark in the traffic. Valid values: **0** to **63**. A value of -1 indicates no remarking.
   * 
   * @example
   * 1
   */
  remarkingDscp?: number;
  /**
   * @remarks
   * The description of the QoS rule.
   * 
   * The description is 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * qos-rule-test
   */
  ruleDescription?: string;
  /**
   * @remarks
   * The QoS rule ID.
   * 
   * @example
   * qos-rule-iugg0l9x27f2noc****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the QoS rule.
   * 
   * The name is 0 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * qos-rule-test
   */
  ruleName?: string;
  /**
   * @remarks
   * The source IPv4 CIDR block for traffic matching of the QoS rule.
   * 
   * > This parameter cannot be specified together with **SrcIPv6Cidr** or **DstIPv6Cidr**.
   * 
   * @example
   * ``1.1.**.**``/24
   */
  srcCidr?: string;
  /**
   * @remarks
   * The source IPv6 CIDR block for traffic matching of the QoS rule.
   * 
   * > This parameter cannot be specified together with **SrcCidr** or **DstCidr**.
   * 
   * @example
   * 2001:0db8:1234:****::/64
   */
  srcIPv6Cidr?: string;
  /**
   * @remarks
   * The source port range for traffic matching of the QoS rule. Valid values: **0** to **65535**. A value of -1 indicates no match. Currently, only a single port number can be specified, and the start and end port numbers must be the same.
   * 
   * @example
   * -1/-1
   */
  srcPortRange?: string;
  /**
   * @remarks
   * The status of the QoS rule. Valid values:
   * 
   * - **Normal**: active.
   * 
   * - **Configuring**: being configured.
   * 
   * - **Deleting**: being deleted.
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

