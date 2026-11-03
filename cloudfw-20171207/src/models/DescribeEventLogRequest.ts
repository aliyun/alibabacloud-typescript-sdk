// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventLogRequest extends $dara.Model {
  /**
   * @remarks
   * The attack type of the intrusion prevention event. Valid values:
   * - **1**: Abnormal connection.
   * - **2**: Command execution.
   * - **3**: Brute-force attack.
   * - **4**: Scanning.
   * - **5**: Other.
   * - **6**: Information leakage.
   * - **7**: DoS attack.
   * - **8**: Overflow attack.
   * - **9**: Web attack.
   * - **10**: Trojan backdoor.
   * - **11**: Viruses and worms.
   * - **12**: Mining behavior.
   * - **13**: Reverse shell.
   * 
   * > If you do not specify this parameter, all attack types are queried.
   * 
   * @example
   * 13
   */
  attackType?: number;
  /**
   * @remarks
   * The page number for a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The destination IP address to query. If you specify this parameter, the system queries intrusion prevention events that involve this destination IP address.
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
   * The type of the Cloud Firewall. Valid values:
   * - **VpcFirewall**: virtual private cloud (VPC) firewalls.
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
   * The language of the response message.
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
   * The number of entries to return on each page.
   * 
   * Default value: **6**, which indicates that 6 entries are returned on each page. Maximum value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The defense status of the Cloud Firewall. Valid values:
   * - **1**: Alert.
   * - **2**: Block.
   * 
   * > If you do not specify this parameter, all defense statuses are queried.
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
   * The source IP address of the requester.
   * 
   * @example
   * 60.182.79.XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The source IP address to query. If you specify this parameter, the system queries intrusion prevention events that involve this source IP address.
   * 
   * @example
   * 47.92.x.x
   */
  srcIP?: string;
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
      ruleResult: 'RuleResult',
      sourceCode: 'SourceCode',
      sourceIp: 'SourceIp',
      srcIP: 'SrcIP',
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
      ruleResult: 'string',
      sourceCode: 'string',
      sourceIp: 'string',
      srcIP: 'string',
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

