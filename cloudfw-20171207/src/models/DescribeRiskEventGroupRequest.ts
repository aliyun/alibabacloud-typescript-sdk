// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskEventGroupRequest extends $dara.Model {
  /**
   * @remarks
   * A list of names of the attacked applications. Use the `["AttackApp1","AttackApp2"]` format.
   * 
   * @example
   * ["MySql","DNS"]
   */
  attackApp?: string[];
  /**
   * @remarks
   * A list of categories of the attacked applications. Use the ["AttackAppCategory1","AttackAppCategory2"] format.
   */
  attackAppCategory?: string[];
  /**
   * @remarks
   * The type of the attack. Valid values:
   * 
   * - **1**: abnormal connection
   * 
   * - **2**: command execution
   * 
   * - **3**: brute-force attack
   * 
   * - **4**: scan
   * 
   * - **5**: other
   * 
   * - **6**: information leakage
   * 
   * - **7**: DoS attack
   * 
   * - **8**: overflow attack
   * 
   * - **9**: web attack
   * 
   * - **10**: backdoor trojan
   * 
   * - **11**: virus or worm
   * 
   * - **12**: mining behavior
   * 
   * - **13**: reverse shell
   * 
   * > If you do not set this parameter, events of all attack types are queried.
   * 
   * @example
   * 1
   */
  attackType?: string;
  /**
   * @remarks
   * The edition of Cloud Firewall. Valid values:
   * 
   * - **2**: Premium Edition
   * 
   * - **3**: Enterprise Edition
   * 
   * - **4**: Ultimate Edition
   * 
   * - **10**: pay-as-you-go
   * 
   * @example
   * 10
   */
  buyVersion?: number;
  /**
   * @remarks
   * The page number of the returned data.
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The type of the risk event.<br>
   * Set the value to **session**, which indicates intrusion prevention events.<br>
   * 
   * This parameter is required.
   * 
   * @example
   * session
   */
  dataType?: string;
  /**
   * @remarks
   * The traffic direction of the intrusion prevention event. Valid values:
   * 
   * - **in**: inbound
   * 
   * - **out**: outbound
   * 
   * > If you do not set this parameter, events in all traffic directions are queried.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The destination IP address to query. If you set this parameter, only intrusion prevention events that contain the specified destination IP address are queried.
   * 
   * @example
   * 192.0.XX.XX
   */
  dstIP?: string;
  /**
   * @remarks
   * The ID of the destination VPC.
   * 
   * > This parameter is required only when \\`FirewallType\\` is set to \\`VpcFirewall\\`.
   * 
   * @example
   * vpc-uf6e9a9zyokj2ywuo****
   */
  dstNetworkInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1534408267
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the intrusion prevention event.
   * 
   * @example
   * wooden horse rear door communication
   */
  eventName?: string;
  /**
   * @remarks
   * The type of the firewall. Valid values:
   * 
   * - **VpcFirewall**: VPC firewall
   * 
   * - **InternetFirewall** (default): Internet firewall
   * 
   * @example
   * InternetFirewall
   */
  firewallType?: string;
  /**
   * @remarks
   * Specifies whether to query only the data that is traced to private IP addresses.
   * 
   * @example
   * true
   */
  isOnlyPrivateAssoc?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to query the IP address location information. Valid values:
   * 
   * - **true**: Does not query the IP geolocation information.
   * 
   * - **false** (default): Queries the IP geolocation information.
   * 
   * @example
   * false
   */
  noLocation?: string;
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * - **asc**: ascending
   * 
   * - **desc** (default): descending
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: **6**. Maximum value: **10**.
   * 
   * @example
   * 6
   */
  pageSize?: string;
  /**
   * @remarks
   * The handling status of Cloud Firewall. Valid values:
   * 
   * - **1**: Alert
   * 
   * - **2**: Block
   * 
   * > If you do not set this parameter, events in all handling statuses are queried.
   * 
   * @example
   * 1
   */
  ruleResult?: string;
  /**
   * @remarks
   * The source of the rule that is used to detect the intrusion prevention event. Valid values:
   * 
   * - **1**: basic protection
   * 
   * - **2**: virtual patching
   * 
   * - **4**: threat intelligence
   * 
   * > If you do not set this parameter, events detected based on all types of rules are queried.
   * 
   * @example
   * 1
   */
  ruleSource?: string;
  /**
   * @remarks
   * The field to use for sorting. Valid values:
   * 
   * - **VulLevel** (default): Sorts by risk level.
   * 
   * - **LastTime**: Sorts by the most recent occurrence time.
   * 
   * @example
   * LastTime
   */
  sort?: string;
  /**
   * @remarks
   * The source IP address to query. If you set this parameter, only intrusion prevention events that contain the specified source IP address are queried.
   * 
   * @example
   * 192.0.XX.XX
   */
  srcIP?: string;
  /**
   * @remarks
   * The ID of the source VPC.
   * 
   * > This parameter is required only when \\`FirewallType\\` is set to \\`VpcFirewall\\`.
   * 
   * @example
   * vpc-uf6e9a9zyokj2ywuo****
   */
  srcNetworkInstanceId?: string;
  /**
   * @remarks
   * The start of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1534408189
   */
  startTime?: string;
  /**
   * @remarks
   * The risk level of the intrusion prevention event. Valid values:
   * 
   * - **1**: low
   * 
   * - **2**: medium
   * 
   * - **3**: high
   * 
   * > If you do not set this parameter, events of all risk levels are queried.
   * 
   * @example
   * 1
   */
  vulLevel?: string;
  static names(): { [key: string]: string } {
    return {
      attackApp: 'AttackApp',
      attackAppCategory: 'AttackAppCategory',
      attackType: 'AttackType',
      buyVersion: 'BuyVersion',
      currentPage: 'CurrentPage',
      dataType: 'DataType',
      direction: 'Direction',
      dstIP: 'DstIP',
      dstNetworkInstanceId: 'DstNetworkInstanceId',
      endTime: 'EndTime',
      eventName: 'EventName',
      firewallType: 'FirewallType',
      isOnlyPrivateAssoc: 'IsOnlyPrivateAssoc',
      lang: 'Lang',
      noLocation: 'NoLocation',
      order: 'Order',
      pageSize: 'PageSize',
      ruleResult: 'RuleResult',
      ruleSource: 'RuleSource',
      sort: 'Sort',
      srcIP: 'SrcIP',
      srcNetworkInstanceId: 'SrcNetworkInstanceId',
      startTime: 'StartTime',
      vulLevel: 'VulLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackApp: { 'type': 'array', 'itemType': 'string' },
      attackAppCategory: { 'type': 'array', 'itemType': 'string' },
      attackType: 'string',
      buyVersion: 'number',
      currentPage: 'string',
      dataType: 'string',
      direction: 'string',
      dstIP: 'string',
      dstNetworkInstanceId: 'string',
      endTime: 'string',
      eventName: 'string',
      firewallType: 'string',
      isOnlyPrivateAssoc: 'string',
      lang: 'string',
      noLocation: 'string',
      order: 'string',
      pageSize: 'string',
      ruleResult: 'string',
      ruleSource: 'string',
      sort: 'string',
      srcIP: 'string',
      srcNetworkInstanceId: 'string',
      startTime: 'string',
      vulLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attackApp)) {
      $dara.Model.validateArray(this.attackApp);
    }
    if(Array.isArray(this.attackAppCategory)) {
      $dara.Model.validateArray(this.attackAppCategory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

