// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectTrafficQosQueueResponseBodyQueueListRuleList extends $dara.Model {
  /**
   * @remarks
   * The destination IP address IPv4 CIDR block that is used for traffic matching by the QoS rule.
   * 
   * > You cannot specify this parameter together with **SrcIPv6Cidr** or **DstIPv6Cidr**.
   * 
   * @example
   * ``1.1.**.**``/24
   */
  dstCidr?: string;
  /**
   * @remarks
   * The destination IP address IPv6 CIDR block that is used for traffic matching by the QoS rule.
   * 
   * > You cannot specify this parameter together with **SrcCidr** or **DstCidr**.
   * 
   * @example
   * 2001:0db8:1234:****::/64
   */
  dstIPv6Cidr?: string;
  /**
   * @remarks
   * The destination port range that is used for traffic matching by the QoS rule. Valid values: **0** to **65535**. A value of -1 indicates that no port is matched. Only a single port number is supported. The start and end port numbers must be the same. The destination port range is fixed for each protocol type. Valid values:
   * 
   * - **ALL**: -1/-1, not editable.
   * 
   * - **ICMP(IPv4)**: -1/-1, not editable.
   * 
   * - **ICMPv6(IPv6)**: -1/-1, not editable.
   * 
   * - **TCP**: -1/-1, editable.
   * 
   * - **UDP**: -1/-1, editable.
   * 
   * - **GRE**: -1/-1, not editable.
   * 
   * - **SSH**: 22/22, not editable.
   * 
   * - **Telnet**: 23/23, not editable.
   * 
   * - **HTTP**: 80/80, not editable.
   * 
   * - **HTTPS**: 443/443, not editable.
   * 
   * - **MS SQL**: 1443/1443, not editable.
   * 
   * - **Oracle**: 1521/1521, not editable.
   * 
   * - **MySql**: 3306/3306, not editable.
   * 
   * - **RDP**: 3389/3389, not editable.
   * 
   * - **PostgreSQL**: 5432/5432, not editable.
   * 
   * - **Redis**: 6379/6379, not editable.
   * 
   * @example
   * -1/-1
   */
  dstPortRange?: string;
  /**
   * @remarks
   * The DSCP value that is used for traffic matching by the QoS rule. Valid values: **0** to **63**. A value of -1 indicates that no DSCP value is matched.
   * 
   * @example
   * 1
   */
  matchDscp?: number;
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
   * - **Redis**.
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
   * qos-91xz9f8zd7yj8x****
   */
  qosId?: string;
  /**
   * @remarks
   * The QoS queue ID.
   * 
   * @example
   * qos-queue-iugg0l9x27f2no****
   */
  queueId?: string;
  /**
   * @remarks
   * The new DSCP value to remark in the traffic. Valid values: **0** to **63**. A value of -1 indicates that the DSCP value is not modified.
   * 
   * @example
   * 1
   */
  remarkingDscp?: number;
  /**
   * @remarks
   * The description of the QoS rule.
   * 
   * The description must be **0** to **256** characters in length and cannot start with `http://` or `https://`.
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
   * qos-rule-iugg0l9x27f2no****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the QoS rule.
   * 
   * The name must be **0** to **128** characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * qos-rule-test
   */
  ruleName?: string;
  /**
   * @remarks
   * The source IPv4 CIDR block that is used for traffic matching by the QoS rule.
   * 
   * > You cannot specify this parameter together with **SrcIPv6Cidr** or **DstIPv6Cidr**.
   * 
   * @example
   * ``1.1.**.**``/24
   */
  srcCidr?: string;
  /**
   * @remarks
   * The source IPv6 CIDR block that is used for traffic matching by the QoS rule.
   * 
   * > You cannot specify this parameter together with **SrcCidr** or **DstCidr**.
   * 
   * @example
   * 2001:0db8:1234:****::/64
   */
  srcIPv6Cidr?: string;
  /**
   * @remarks
   * The source port range that is used for traffic matching by the QoS rule. Valid values: **0** to **65535**. A value of -1 indicates that no port is matched. Only a single port number is supported. The start and end port numbers must be the same.
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

export class DescribeExpressConnectTrafficQosQueueResponseBodyQueueList extends $dara.Model {
  /**
   * @remarks
   * The bandwidth percentage of the QoS queue.
   * 
   * * When the QoS queue type is **Medium**, this field is required. Valid values: **1** to **100**.
   * 
   * * When the QoS queue type is **Default**, this field is "-".
   * 
   * @example
   * 100
   */
  bandwidthPercent?: string;
  /**
   * @remarks
   * The QoS policy ID.
   * 
   * @example
   * qos-ncfgzxg40zks5n****
   */
  qosId?: string;
  /**
   * @remarks
   * The description of the QoS queue.
   * 
   * The description must be **0** to **256** characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * qos-queue-test
   */
  queueDescription?: string;
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
   * The name of the QoS queue.
   * 
   * The name must be **0** to **128** characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * qos-queue-test
   */
  queueName?: string;
  /**
   * @remarks
   * The type of the QoS queue. Valid values:
   * 
   * - **High**: high-priority queue.
   * 
   * - **Medium**: medium-priority queue.
   * 
   * - **Default**: default-priority queue.
   * 
   * > The default-priority queue cannot be created.
   * 
   * @example
   * High
   */
  queueType?: string;
  /**
   * @remarks
   * The list of QoS rules.
   */
  ruleList?: DescribeExpressConnectTrafficQosQueueResponseBodyQueueListRuleList[];
  /**
   * @remarks
   * The status of the QoS queue. Valid values:
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
      bandwidthPercent: 'BandwidthPercent',
      qosId: 'QosId',
      queueDescription: 'QueueDescription',
      queueId: 'QueueId',
      queueName: 'QueueName',
      queueType: 'QueueType',
      ruleList: 'RuleList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPercent: 'string',
      qosId: 'string',
      queueDescription: 'string',
      queueId: 'string',
      queueName: 'string',
      queueType: 'string',
      ruleList: { 'type': 'array', 'itemType': DescribeExpressConnectTrafficQosQueueResponseBodyQueueListRuleList },
      status: 'string',
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

export class DescribeExpressConnectTrafficQosQueueResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of QoS queues.
   */
  queueList?: DescribeExpressConnectTrafficQosQueueResponseBodyQueueList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 606998F0-B94D-48FE-8316-ACA81BB230DA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queueList: 'QueueList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueList: { 'type': 'array', 'itemType': DescribeExpressConnectTrafficQosQueueResponseBodyQueueList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.queueList)) {
      $dara.Model.validateArray(this.queueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

