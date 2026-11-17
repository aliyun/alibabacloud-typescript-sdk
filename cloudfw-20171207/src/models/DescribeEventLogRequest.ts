// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventLogRequest extends $dara.Model {
  /**
   * @remarks
   * The attack type of the intrusion prevention event. Valid values:
   * - **1**: Abnormal connection.
   * - **2**: execute commands.
   * - **3**: brute-force attacks.
   * - **4**: Scan.
   * - **5**: Other.
   * - **6**: Information leak.
   * - **7**: DoS attack.
   * - **8**: Overflow attack.
   * - **9**: Web attack.
   * - **10**: Trojan backdoor.
   * - **11**: Virus and worm.
   * - **12**: Mining behavior.
   * - **13**: Reverse shell.
   * 
   * > If you do not specify the Settings for this parameter, events of all attack types are queried.
   * 
   * @example
   * 13
   */
  attackType?: number;
  /**
   * @remarks
   * The page number for paging in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The destination IP address to query. If you specify this parameter, the intrusion prevention events that involve this destination IP address are queried.
   * 
   * @example
   * 10.0.XX.XX
   */
  dstIP?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1731551104
   */
  endTime?: string;
  /**
   * @remarks
   * The type of Cloud Firewall. Valid values:
   * - **VpcFirewall**: virtual private cloud (VPC) firewalls at the border.
   * - **InternetFirewall** (default): the Internet Border firewall.
   * 
   * @example
   * [
   *   "internet",
   *   "vpc",
   *   "nat"
   * ]
   */
  firewallType?: string;
  /**
   * @remarks
   * The language for receiving messages.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The log type.
   * 
   * @example
   * 1
   */
  logType?: string;
  /**
   * @remarks
   * Specifies the number of results per page for a paginated query.
   * 
   * Default value: **6**, which indicates that 6 results are returned per page. Maximum value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Filters event logs by rule hits. The value must be the same as the RuleId value in the response. If LogType is set to ips, pass the UUID of the IPS rule (the RuleUuid value returned by DescribeIPSRules) instead of the numeric format (font style) of the RuleId. If both RuleId and AttackType are specified, records that meet both conditions are returned. This parameter takes effect for ips, app_ctl, web_filter, and threat_intelligence. If LogType is set to tls and this parameter is specified, a parameter fault is returned. If no matching records are found, TotalCount is 0. If you do not specify this parameter, event logs are not filtered by rule hit.
   * 
   * @example
   * c0f5caed-d6a5-11e8-8298-00163e109533
   */
  ruleId?: string;
  /**
   * @remarks
   * The defense status of Cloud Firewall. Valid values:
   * - **1**: Alert.
   * - **2**: Block.
   * 
   * > If you do not specify this parameter, events of all defense statuses are queried.
   * 
   * @example
   * 0
   */
  ruleResult?: string;
  /**
   * @remarks
   * The tracing code.
   * 
   * This parameter is required.
   * 
   * @example
   * yundun
   */
  sourceCode?: string;
  /**
   * @remarks
   * The source IP address of the visitor.
   * 
   * @example
   * 60.182.79.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The source IP address to query. If you specify this parameter, the intrusion prevention events that involve this source IP address are queried.
   * 
   * @example
   * 47.92.x.x
   */
  srcIP?: string;
  /**
   * @remarks
   * Filters by the exact TLS handshake result. This parameter takes effect only when LogType is set to tls and is ignored for other types. Valid values: bypass, alert, and failed (handshake failure). If this parameter is not specified, records of the bypass, alert, and failed types are returned, and normal traffic with successful handshakes (success) is not returned.
   * 
   * @example
   * failed
   */
  sslHandshakeRes?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1692504764000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      attackType: 'AttackType',
      currentPage: 'CurrentPage',
      dstIP: 'DstIP',
      endTime: 'EndTime',
      firewallType: 'FirewallType',
      lang: 'Lang',
      logType: 'LogType',
      pageSize: 'PageSize',
      ruleId: 'RuleId',
      ruleResult: 'RuleResult',
      sourceCode: 'SourceCode',
      sourceIp: 'SourceIp',
      srcIP: 'SrcIP',
      sslHandshakeRes: 'SslHandshakeRes',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackType: 'number',
      currentPage: 'string',
      dstIP: 'string',
      endTime: 'string',
      firewallType: 'string',
      lang: 'string',
      logType: 'string',
      pageSize: 'string',
      ruleId: 'string',
      ruleResult: 'string',
      sourceCode: 'string',
      sourceIp: 'string',
      srcIP: 'string',
      sslHandshakeRes: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

