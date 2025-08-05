// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskEventGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The names of the attacked applications. Set the value in the `["AttackApp1","AttackApp2"]` format.
   * 
   * @example
   * ["MySql","DNS"]
   */
  attackApp?: string[];
  /**
   * @remarks
   * A list of categories of attacked applications, expressed in the format ["AttackAppCategory1","AttackAppCategory2"].
   */
  attackAppCategory?: string[];
  /**
   * @remarks
   * The attack type of the intrusion events. Valid values:
   * 
   * *   **1**: suspicious connection
   * *   **2**: command execution
   * *   **3**: brute-force attack
   * *   **4**: scanning
   * *   **5**: others
   * *   **6**: information leak
   * *   **7**: DoS attack
   * *   **8**: buffer overflow attack
   * *   **9**: web attack
   * *   **10**: trojan backdoor
   * *   **11**: computer worm
   * *   **12**: mining
   * *   **13**: reverse shell
   * 
   * > If you do not specify this parameter, the intrusion events of all attack types are queried.
   * 
   * @example
   * 1
   */
  attackType?: string;
  /**
   * @remarks
   * The edition of Cloud Firewall that you purchase. Valid values:
   * 
   * *   **2**: Premium Edition
   * *   **3**: Enterprise Edition
   * *   **4**: Ultimate Edition
   * *   **10**: Cloud Firewall that uses the pay-as-you-go billing method
   * 
   * @example
   * 10
   */
  buyVersion?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The type of the risk events.\\
   * Set the value to **session**, which indicates intrusion events.
   * 
   * This parameter is required.
   * 
   * @example
   * session
   */
  dataType?: string;
  /**
   * @remarks
   * The direction of the traffic for the intrusion events. Valid values:
   * 
   * *   **in**: inbound
   * *   **out**: outbound
   * 
   * > If you do not specify this parameter, the intrusion events that are recorded for both inbound and outbound traffic are queried.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The destination IP address to query. If you specify this parameter, all intrusion events with the specified destination IP address are queried.
   * 
   * @example
   * 192.0.XX.XX
   */
  dstIP?: string;
  /**
   * @remarks
   * The ID of the destination VPC.
   * 
   * > If the FirewallType parameter is set to VpcFirewall, you must specify this parameter.
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
   * The name of the intrusion event.
   * 
   * @example
   * Webshell communication
   */
  eventName?: string;
  /**
   * @remarks
   * The type of the firewall. Valid values:
   * 
   * *   **VpcFirewall**: virtual private cloud (VPC) firewall
   * *   **InternetFirewall**: Internet firewall (default)
   * 
   * @example
   * InternetFirewall
   */
  firewallType?: string;
  /**
   * @remarks
   * Whether to query only the data that has completed private network tracing.
   * 
   * @example
   * true
   */
  isOnlyPrivateAssoc?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to query the information about the geographical locations of IP addresses.
   * 
   * *   **true**: does not query the information about the geographical locations of IP addresses.
   * *   **false**: queries the information about the geographical locations of IP addresses. This is the default value.
   * 
   * @example
   * false
   */
  noLocation?: string;
  /**
   * @remarks
   * The order in which you want to sort the results. Valid values:
   * 
   * *   **asc**: the ascending order.
   * *   **desc**: the descending order. This is the default value.
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
   * The status of the firewall. Valid values:
   * 
   * *   **1**: alerting
   * *   **2**: blocking
   * 
   * > If you do not specify this parameter, all intrusion events that are detected by the firewall are queried, regardless of the firewall status.
   * 
   * @example
   * 1
   */
  ruleResult?: string;
  /**
   * @remarks
   * The module of the rule that is used to detect the intrusion events. Valid values:
   * 
   * *   **1**: basic protection
   * *   **2**: virtual patching
   * *   **4**: threat intelligence
   * 
   * > If you do not specify this parameter, the intrusion events that are detected by all rules are queried.
   * 
   * @example
   * 1
   */
  ruleSource?: string;
  /**
   * @remarks
   * The field based on which you want to sort the results. Valid values:
   * 
   * *   **VulLevel**: The results are sorted based on the risk level field. This is the default value.
   * *   **LastTime**: The results are sorted based on the most recent occurrence time.
   * 
   * @example
   * LastTime
   */
  sort?: string;
  /**
   * @remarks
   * The source IP address to query. If you specify this parameter, all intrusion events with the specified source IP address are queried.
   * 
   * @example
   * 192.0.XX.XX
   */
  srcIP?: string;
  /**
   * @remarks
   * The ID of the source VPC.
   * 
   * > If the FirewallType parameter is set to VpcFirewall, you must specify this parameter.
   * 
   * @example
   * vpc-uf6e9a9zyokj2ywuo****
   */
  srcNetworkInstanceId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1534408189
   */
  startTime?: string;
  /**
   * @remarks
   * The risk level of the intrusion events. Valid values:
   * 
   * *   **1**: low
   * *   **2**: medium
   * *   **3**: high
   * 
   * > If you do not specify this parameter, the intrusion events that are at all risk levels are queried.
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

