// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskEventGroupResponseBodyDataListIPLocationInfo extends $dara.Model {
  /**
   * @remarks
   * The city ID.
   * 
   * @example
   * 510100
   */
  cityId?: string;
  /**
   * @remarks
   * The city name.
   * 
   * @example
   * Chengdu
   */
  cityName?: string;
  /**
   * @remarks
   * The country ID.
   * 
   * @example
   * CN
   */
  countryId?: string;
  /**
   * @remarks
   * The country name.
   * 
   * @example
   * China
   */
  countryName?: string;
  static names(): { [key: string]: string } {
    return {
      cityId: 'CityId',
      cityName: 'CityName',
      countryId: 'CountryId',
      countryName: 'CountryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityId: 'string',
      cityName: 'string',
      countryId: 'string',
      countryName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponseBodyDataListResourcePrivateIPList extends $dara.Model {
  /**
   * @remarks
   * The region ID. This parameter indicates the region ID of the private IP address.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-wz92jf4scg2zb74p****
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * LD-shenzhen-zy****
   */
  resourceInstanceName?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 10.255.XX.XX
   */
  resourcePrivateIP?: string;
  static names(): { [key: string]: string } {
    return {
      regionNo: 'RegionNo',
      resourceInstanceId: 'ResourceInstanceId',
      resourceInstanceName: 'ResourceInstanceName',
      resourcePrivateIP: 'ResourcePrivateIP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionNo: 'string',
      resourceInstanceId: 'string',
      resourceInstanceName: 'string',
      resourcePrivateIP: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponseBodyDataListVpcDstInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-wz92jf4scg2zb74p****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The name of the ECS instance.
   * 
   * @example
   * LD-shenzhen-zy****
   */
  ecsInstanceName?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-uf6e9a9zyokj2ywuo****
   */
  networkInstanceId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * VPC-SH-TX****
   */
  networkInstanceName?: string;
  /**
   * @remarks
   * The region ID. This parameter indicates the region ID of the destination VPC.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      ecsInstanceId: 'EcsInstanceId',
      ecsInstanceName: 'EcsInstanceName',
      networkInstanceId: 'NetworkInstanceId',
      networkInstanceName: 'NetworkInstanceName',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceId: 'string',
      ecsInstanceName: 'string',
      networkInstanceId: 'string',
      networkInstanceName: 'string',
      regionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskEventGroupResponseBodyDataListVpcSrcInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-wz92jf4scg2zb74p****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The name of the ECS instance.
   * 
   * @example
   * LD-shenzhen-zy****
   */
  ecsInstanceName?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-uf6e9a9zyokj2ywuo****
   */
  networkInstanceId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * VPC-SH-TX****
   */
  networkInstanceName?: string;
  /**
   * @remarks
   * The region ID. This parameter indicates the region ID of the source VPC.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      ecsInstanceId: 'EcsInstanceId',
      ecsInstanceName: 'EcsInstanceName',
      networkInstanceId: 'NetworkInstanceId',
      networkInstanceName: 'NetworkInstanceName',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceId: 'string',
      ecsInstanceName: 'string',
      networkInstanceId: 'string',
      networkInstanceName: 'string',
      regionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * @example
   * 1
   */
  attackType?: number;
  /**
   * @remarks
   * The description of the intrusion prevention event.
   * 
   * @example
   * A directory traversal attack was detected in Web access for HTTP requests
   */
  description?: string;
  /**
   * @remarks
   * The traffic direction of the intrusion prevention event. Valid values:
   * 
   * - **in**: inbound
   * 
   * - **out**: outbound
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The destination IP address. The intrusion prevention event contains this destination IP address.
   * 
   * @example
   * 192.0.XX.XX
   */
  dstIP?: string;
  /**
   * @remarks
   * The number of intrusion prevention events.
   * 
   * @example
   * 100
   */
  eventCount?: number;
  /**
   * @remarks
   * The ID of the intrusion prevention event.
   * 
   * @example
   * 2b58efae-4c4b-4d96-9544-a586fb1f****
   */
  eventId?: string;
  /**
   * @remarks
   * The name of the intrusion prevention event.
   * 
   * @example
   * Web Directory Traversal Attack
   */
  eventName?: string;
  /**
   * @remarks
   * The time when the intrusion event first occurred. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1534408189
   */
  firstEventTime?: number;
  /**
   * @remarks
   * The geolocation information of the IP address. This struct contains the **CityId**, **CityName**, **CountryId**, and **CountryName** parameters.<br>
   * **CityId** indicates the city ID of the IP address. **CityName** indicates the city name of the IP address. **CountryId** indicates the country ID of the IP address. **CountryName** indicates the country name of the IP address.<br>
   */
  IPLocationInfo?: DescribeRiskEventGroupResponseBodyDataListIPLocationInfo;
  /**
   * @remarks
   * The time when the intrusion prevention event last occurred. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1534408267
   */
  lastEventTime?: number;
  /**
   * @remarks
   * The information about the private IP address in the intrusion prevention event. The value is an array that consists of the **RegionNo**, **ResourceInstanceId**, **ResourceInstanceName**, and **ResourcePrivateIP** parameters.<br>
   * **RegionNo** indicates the region ID of the IP address. **ResourceInstanceId** indicates the ID of the instance to which the IP address belongs. **ResourceInstanceName** indicates the name of the instance to which the IP address belongs. **ResourcePrivateIP** indicates the IP address.<br>
   */
  resourcePrivateIPList?: DescribeRiskEventGroupResponseBodyDataListResourcePrivateIPList[];
  /**
   * @remarks
   * The type of the public IP address. Valid values:
   * 
   * - **EIP**: an elastic IP address (EIP)
   * 
   * - **EcsPublicIP**: an ECS public IP address
   * 
   * - **EcsEIP**: an ECS EIP
   * 
   * - **NatPublicIP**: a NAT public IP address
   * 
   * - **NatEIP**: a NAT EIP
   * 
   * - **SlbPublicIp**: an SLB public IP address
   * 
   * @example
   * EcsPublicIP
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the rule that is used to defend against the intrusion prevention event.
   * 
   * @example
   * 1000****
   */
  ruleId?: string;
  /**
   * @remarks
   * The handling status. Valid values:
   * 
   * - **1**: Alert
   * 
   * - **2**: Block
   * 
   * @example
   * 2
   */
  ruleResult?: number;
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
   * @example
   * 1
   */
  ruleSource?: number;
  /**
   * @remarks
   * The source IP address. The intrusion prevention event contains this source IP address.
   * 
   * @example
   * 192.0.XX.XX
   */
  srcIP?: string;
  /**
   * @remarks
   * The tag of the source IP address. This tag is used to identify whether the IP address is a back-to-origin IP address of an Alibaba Cloud service.
   * 
   * @example
   * WAF Back-to-origin Address
   * 
   * @deprecated
   */
  srcIPTag?: string;
  /**
   * @remarks
   * The list of IP address tags.
   */
  srcIPTags?: string[];
  /**
   * @remarks
   * The list of source private IP addresses in the intrusion prevention event.
   */
  srcPrivateIPList?: string[];
  /**
   * @remarks
   * The tag for major event support.
   * 
   * @example
   * test-tag
   */
  tag?: string;
  /**
   * @remarks
   * The information about the destination VPC of the intrusion prevention event. This struct contains the **EcsInstanceId**, **EcsInstanceName**, **NetworkInstanceId**, **NetworkInstanceName**, and **RegionNo** parameters.<br>
   * **EcsInstanceId** indicates the ID of the ECS instance in the VPC. **EcsInstanceName** indicates the name of the ECS instance in the VPC. **NetworkInstanceId** indicates the ID of the VPC. **NetworkInstanceName** indicates the name of the VPC. **RegionNo** indicates the region ID of the VPC.<br>
   */
  vpcDstInfo?: DescribeRiskEventGroupResponseBodyDataListVpcDstInfo;
  /**
   * @remarks
   * The information about the source VPC of the intrusion prevention event. This struct contains the **EcsInstanceId**, **EcsInstanceName**, **NetworkInstanceId**, **NetworkInstanceName**, and **RegionNo** parameters.<br>
   * **EcsInstanceId** indicates the ID of the ECS instance in the VPC. **EcsInstanceName** indicates the name of the ECS instance in the VPC. **NetworkInstanceId** indicates the ID of the VPC. **NetworkInstanceName** indicates the name of the VPC. **RegionNo** indicates the region ID of the VPC.<br>
   */
  vpcSrcInfo?: DescribeRiskEventGroupResponseBodyDataListVpcSrcInfo;
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
      srcIPTags: 'SrcIPTags',
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
      srcIPTags: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.srcIPTags)) {
      $dara.Model.validateArray(this.srcIPTags);
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

export class DescribeRiskEventGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned data.
   */
  dataList?: DescribeRiskEventGroupResponseBodyDataList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B14757D0-4640-4B44-AC67-7F558FE7E6EF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of risk events.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeRiskEventGroupResponseBodyDataList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

