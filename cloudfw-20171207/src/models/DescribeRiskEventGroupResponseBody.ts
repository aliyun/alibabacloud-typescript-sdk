// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskEventGroupResponseBodyDataListIPLocationInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the city to which the IP address belongs.
   * 
   * @example
   * 510100
   */
  cityId?: string;
  /**
   * @remarks
   * The name of the city to which the IP address belongs.
   * 
   * @example
   * Chengdu, Sichuan Province
   */
  cityName?: string;
  /**
   * @remarks
   * The ID of the country to which the IP address belongs.
   * 
   * @example
   * CN
   */
  countryId?: string;
  /**
   * @remarks
   * The name of the country to which the IP address belongs.
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
   * The ID of the region to which the private IP address belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The ID of the instance that uses the private IP address.
   * 
   * @example
   * i-wz92jf4scg2zb74p****
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The name of the instance that uses the private IP address.
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
   * The ID of the region in which the destination VPC resides.
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
   * The ID of the region in which the source VPC resides.
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
  srcIPTags?: string[];
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
   * An array that consists of the details of the intrusion events.
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

