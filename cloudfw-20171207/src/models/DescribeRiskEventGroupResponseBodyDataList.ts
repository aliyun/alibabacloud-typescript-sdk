// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRiskEventGroupResponseBodyDataListIPLocationInfo } from "./DescribeRiskEventGroupResponseBodyDataListIplocationInfo";
import { DescribeRiskEventGroupResponseBodyDataListResourcePrivateIPList } from "./DescribeRiskEventGroupResponseBodyDataListResourcePrivateIplist";
import { DescribeRiskEventGroupResponseBodyDataListVpcDstInfo } from "./DescribeRiskEventGroupResponseBodyDataListVpcDstInfo";
import { DescribeRiskEventGroupResponseBodyDataListVpcSrcInfo } from "./DescribeRiskEventGroupResponseBodyDataListVpcSrcInfo";


export class DescribeRiskEventGroupResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The name of the attacked application.
   * 
   * @example
   * MySql
   */
  attackApp?: string;
  /**
   * @remarks
   * The attack type of the intrusion event. Valid values:
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
   * @example
   * 1
   */
  attackType?: number;
  /**
   * @remarks
   * The description of the intrusion event.
   * 
   * @example
   * Path traversal attacks are detected in the web access requests over HTTP.
   */
  description?: string;
  /**
   * @remarks
   * The direction of the traffic for the intrusion event. Valid values:
   * 
   * *   **in**: inbound
   * *   **out**: outbound
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The destination IP address that is included in the intrusion event.
   * 
   * @example
   * 192.0.XX.XX
   */
  dstIP?: string;
  /**
   * @remarks
   * The number of intrusion events.
   * 
   * @example
   * 100
   */
  eventCount?: number;
  /**
   * @remarks
   * The ID of the intrusion event.
   * 
   * @example
   * 2b58efae-4c4b-4d96-9544-a586fb1f****
   */
  eventId?: string;
  /**
   * @remarks
   * The name of the intrusion event.
   * 
   * @example
   * Path traversal attack
   */
  eventName?: string;
  /**
   * @remarks
   * The time when the intrusion event was first detected. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1534408189
   */
  firstEventTime?: number;
  /**
   * @remarks
   * The geographical information about the IP address. The value is a struct that contains the following parameters: **CityId**, **CityName**, **CountryId**, and **CountryName**.\\
   * ****************
   */
  IPLocationInfo?: DescribeRiskEventGroupResponseBodyDataListIPLocationInfo;
  /**
   * @remarks
   * The time when the intrusion event was last detected. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1534408267
   */
  lastEventTime?: number;
  /**
   * @remarks
   * The information about the private IP address in the intrusion event. The value is an array that contains the following parameters: **RegionNo**, **ResourceInstanceId**, **ResourceInstanceName**, and **ResourcePrivateIP**.\\
   * ****************
   */
  resourcePrivateIPList?: DescribeRiskEventGroupResponseBodyDataListResourcePrivateIPList[];
  /**
   * @remarks
   * The type of the public IP address in the intrusion event. Valid values:
   * 
   * *   **EIP**: the elastic IP address (EIP)
   * *   **EcsPublicIP**: the public IP address of an Elastic Compute Service (ECS) instance
   * *   **EcsEIP**: the EIP of an ECS instance
   * *   **NatPublicIP**: the public IP address of a NAT gateway
   * *   **NatEIP**: the EIP of a NAT gateway
   * 
   * @example
   * EcsPublicIP
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the rule that is used to detect the intrusion event.
   * 
   * @example
   * 1000****
   */
  ruleId?: string;
  /**
   * @remarks
   * The status of the firewall. Valid values:
   * 
   * *   **1**: alerting
   * *   **2**: blocking
   * 
   * @example
   * 2
   */
  ruleResult?: number;
  /**
   * @remarks
   * The module of the rule that is used to detect the intrusion event. Valid values:
   * 
   * *   **1**: basic protection
   * *   **2**: virtual patching
   * *   **4**: threat intelligence
   * 
   * @example
   * 1
   */
  ruleSource?: number;
  /**
   * @remarks
   * The source IP address that is included in the intrusion event.
   * 
   * @example
   * 192.0.XX.XX
   */
  srcIP?: string;
  /**
   * @remarks
   * The tag added to the source IP address. The tag helps identify whether the source IP address is a back-to-origin IP address for a cloud service.
   * 
   * @example
   * WAF Back-to-origin Address
   * 
   * @deprecated
   */
  srcIPTag?: string;
  /**
   * @remarks
   * An array that consists of the source private IP addresses in the intrusion event.
   */
  srcPrivateIPList?: string[];
  /**
   * @remarks
   * The tag added to the threat intelligence that is provided for major events.
   * 
   * @example
   * Threat intelligence provided for major events
   */
  tag?: string;
  /**
   * @remarks
   * The information about the destination VPC of the intrusion event. The value is a struct that contains the following parameters: **EcsInstanceId**, **EcsInstanceName**, **NetworkInstanceId**, **NetworkInstanceName**, and **RegionNo**.\\
   * ********************
   */
  vpcDstInfo?: DescribeRiskEventGroupResponseBodyDataListVpcDstInfo;
  /**
   * @remarks
   * The information about the source VPC of the intrusion event. The value is a struct that contains the following parameters: **EcsInstanceId**, **EcsInstanceName**, **NetworkInstanceId**, **NetworkInstanceName**, and **RegionNo**.\\
   * ********************
   */
  vpcSrcInfo?: DescribeRiskEventGroupResponseBodyDataListVpcSrcInfo;
  /**
   * @remarks
   * The risk level of the intrusion event. Valid values:
   * 
   * *   **1**: low
   * *   **2**: medium
   * *   **3**: high
   * 
   * @example
   * 1
   */
  vulLevel?: number;
  static names(): { [key: string]: string } {
    return {
      attackApp: 'AttackApp',
      attackType: 'AttackType',
      description: 'Description',
      direction: 'Direction',
      dstIP: 'DstIP',
      eventCount: 'EventCount',
      eventId: 'EventId',
      eventName: 'EventName',
      firstEventTime: 'FirstEventTime',
      IPLocationInfo: 'IPLocationInfo',
      lastEventTime: 'LastEventTime',
      resourcePrivateIPList: 'ResourcePrivateIPList',
      resourceType: 'ResourceType',
      ruleId: 'RuleId',
      ruleResult: 'RuleResult',
      ruleSource: 'RuleSource',
      srcIP: 'SrcIP',
      srcIPTag: 'SrcIPTag',
      srcPrivateIPList: 'SrcPrivateIPList',
      tag: 'Tag',
      vpcDstInfo: 'VpcDstInfo',
      vpcSrcInfo: 'VpcSrcInfo',
      vulLevel: 'VulLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackApp: 'string',
      attackType: 'number',
      description: 'string',
      direction: 'string',
      dstIP: 'string',
      eventCount: 'number',
      eventId: 'string',
      eventName: 'string',
      firstEventTime: 'number',
      IPLocationInfo: DescribeRiskEventGroupResponseBodyDataListIPLocationInfo,
      lastEventTime: 'number',
      resourcePrivateIPList: { 'type': 'array', 'itemType': DescribeRiskEventGroupResponseBodyDataListResourcePrivateIPList },
      resourceType: 'string',
      ruleId: 'string',
      ruleResult: 'number',
      ruleSource: 'number',
      srcIP: 'string',
      srcIPTag: 'string',
      srcPrivateIPList: { 'type': 'array', 'itemType': 'string' },
      tag: 'string',
      vpcDstInfo: DescribeRiskEventGroupResponseBodyDataListVpcDstInfo,
      vpcSrcInfo: DescribeRiskEventGroupResponseBodyDataListVpcSrcInfo,
      vulLevel: 'number',
    };
  }

  validate() {
    if(this.IPLocationInfo && typeof (this.IPLocationInfo as any).validate === 'function') {
      (this.IPLocationInfo as any).validate();
    }
    if(Array.isArray(this.resourcePrivateIPList)) {
      $dara.Model.validateArray(this.resourcePrivateIPList);
    }
    if(Array.isArray(this.srcPrivateIPList)) {
      $dara.Model.validateArray(this.srcPrivateIPList);
    }
    if(this.vpcDstInfo && typeof (this.vpcDstInfo as any).validate === 'function') {
      (this.vpcDstInfo as any).validate();
    }
    if(this.vpcSrcInfo && typeof (this.vpcSrcInfo as any).validate === 'function') {
      (this.vpcSrcInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

