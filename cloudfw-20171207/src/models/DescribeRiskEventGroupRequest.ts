// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskEventGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The names of the attacked applications. Specify the value in the `["AttackApp1","AttackApp2"]` format.
   * 
   * @example
   * ["MySql","DNS"]
   */
  attackApp?: string[];
  /**
   * @remarks
   * The categories of the attacked applications. Specify the value in the `["AttackAppCategory1","AttackAppCategory2"]` format.
   */
  attackAppCategory?: string[];
  /**
   * @remarks
   * The attack type of the intrusion prevention events. Valid values:
   * - **1**: abnormal connection.
   * - **2**: commands to execute.
   * - **3**: brute-force attacks.
   * - **4**: scan.
   * - **5**: other.
   * - **6**: information leak.
   * - **7**: DoS attack.
   * - **8**: buffer overflow attack.
   * - **9**: web attack.
   * - **10**: trojan backdoor.
   * - **11**: virus or worm.
   * - **12**: mining behavior.
   * - **13**: reverse shell.
   * 
   * > If you do not configure the Settings for this parameter, events of all attack types are queried.
   * 
   * @example
   * 1
   */
  attackType?: string;
  /**
   * @remarks
   * The purchased edition. Valid values:
   * - **2**: Premium Edition.
   * - **3**: Enterprise Edition.
   * - **4**: Ultimate Edition.
   * - **10**: Pay-as-you-go Edition.
   * 
   * @example
   * 10
   */
  buyVersion?: number;
  /**
   * @remarks
   * The paging Settings that specify which page of data to return in a paged query.
   * Default value: **1**, which indicates that the first page is returned.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The risk event type. Valid values:  
   * - **session**: intrusion prevention events. This is the only valid value.
   * 
   * This parameter is required.
   * 
   * @example
   * session
   */
  dataType?: string;
  /**
   * @remarks
   * The traffic direction of the intrusion prevention events. Valid values:
   * - **in**: inbound.
   * - **out**: outbound.
   * 
   * > If you do not specify this parameter, events in all traffic directions are queried.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The destination IP address that you want to query. If you specify this parameter, intrusion prevention events that involve this destination IP address are queried.
   * 
   * @example
   * 192.0.XX.XX
   */
  dstIP?: string;
  /**
   * @remarks
   * The instance ID of the destination VPC-connected instance.
   * > You only need to configure the Settings for this parameter when FirewallType is set to VpcFirewall.
   * 
   * @example
   * vpc-uf6e9a9zyokj2ywuo****
   */
  dstNetworkInstanceId?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp in seconds.
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
   * The type of the cloud firewall. Valid values:
   * - **VpcFirewall**: virtual private cloud (VPC) firewalls.
   * - **InternetFirewall** (default): the Internet Border firewall.
   * 
   * @example
   * InternetFirewall
   */
  firewallType?: string;
  /**
   * @remarks
   * Specifies whether to query only the data for which private network tracing is completed.
   * 
   * @example
   * true
   */
  isOnlyPrivateAssoc?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to query the geolocation information of IP addresses. Valid values:
   * - **true**: does not query the geolocation information of IP addresses.
   * - **false** (default): queries the geolocation information of IP addresses.
   * 
   * @example
   * false
   */
  noLocation?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - **asc**: ascending order.
   * 
   * - **desc** (default): descending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The paging Settings for the number of entries to return on each page in a paged query.
   * 
   * Default value: **6**, which indicates that 6 entries are returned on each page. Maximum value: **10**.
   * 
   * @example
   * 6
   */
  pageSize?: string;
  /**
   * @remarks
   * The defense status of Cloud Firewall. Valid values:
   * - **1**: alert.
   * - **2**: block.
   * 
   * > If you do not specify this parameter, events in all defense statuses are queried.
   * 
   * @example
   * 1
   */
  ruleResult?: string;
  /**
   * @remarks
   * The source of the detection rule for the intrusion prevention events. Valid values:
   * - **1**: basic protection.
   * - **2**: virtual patches.
   * - **4**: threat intelligence.
   * 
   * > If you do not specify this parameter, events from all rule sources are queried.
   * 
   * @example
   * 1
   */
  ruleSource?: string;
  /**
   * @remarks
   * The field based on which the results are sorted. Valid values:
   * 
   * - **VulLevel** (default): sorts the results based on the risk level.
   * 
   * - **LastTime**: sorts the results based on the time when the event last occurred.
   * 
   * @example
   * LastTime
   */
  sort?: string;
  /**
   * @remarks
   * The source IP address that you want to query. If you specify this parameter, intrusion prevention events that involve this source IP address are queried.
   * 
   * @example
   * 192.0.XX.XX
   */
  srcIP?: string;
  /**
   * @remarks
   * The instance ID of the source VPC-connected instance.
   * > You only need to configure the Settings for this parameter when FirewallType is set to VpcFirewall.
   * 
   * @example
   * vpc-uf6e9a9zyokj2ywuo****
   */
  srcNetworkInstanceId?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1534408189
   */
  startTime?: string;
  /**
   * @remarks
   * The security level of the intrusion prevention events. Valid values:
   * - **1**: low risk.
   * - **2**: medium risk.
   * - **3**: high risk.
   * 
   * > If you do not specify this parameter, events at all security levels are queried.
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

