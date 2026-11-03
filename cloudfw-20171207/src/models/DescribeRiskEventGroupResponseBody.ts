// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskEventGroupResponseBodyDataListIPLocationInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the city.
   * 
   * @example
   * 510100
   */
  cityId?: string;
  /**
   * @remarks
   * The name of the city.
   * 
   * @example
   * Chengdu
   */
  cityName?: string;
  /**
   * @remarks
   * The ID of the country.
   * 
   * @example
   * CN
   */
  countryId?: string;
  /**
   * @remarks
   * The name of the country.
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
   * The region ID. This parameter indicates the ID of the region to which the private IP address belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The instance ID.
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
   * The instance ID of the ECS instance.
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
   * The instance ID of the VPC-connected instance.
   * 
   * @example
   * vpc-uf6e9a9zyokj2ywuo****
   */
  networkInstanceId?: string;
  /**
   * @remarks
   * The name of the VPC-connected instance.
   * 
   * @example
   * VPC-SH-TX****
   */
  networkInstanceName?: string;
  /**
   * @remarks
   * The region ID. This parameter indicates the ID of the region to which the destination VPC-connected instance belongs.
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
   * The instance ID of the ECS instance.
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
   * The instance ID of the VPC-connected instance.
   * 
   * @example
   * vpc-uf6e9a9zyokj2ywuo****
   */
  networkInstanceId?: string;
  /**
   * @remarks
   * The name of the VPC-connected instance.
   * 
   * @example
   * VPC-SH-TX****
   */
  networkInstanceName?: string;
  /**
   * @remarks
   * The region ID. This parameter indicates the ID of the region to which the source VPC-connected instance belongs.
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
   * The attack type of the intrusion prevention event. Valid values:
   * - **1**: Abnormal connection.
   * - **2**: Execute commands.
   * - **3**: Brute-force attacks.
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
   * - **in**: Inbound.
   * - **out**: Outbound.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The queried destination IP address. This indicates that the intrusion prevention event includes this destination IP address.
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
   * The time when the intrusion event first occurred. The value is a UNIX timestamp accurate to seconds.
   * 
   * @example
   * 1534408189
   */
  firstEventTime?: number;
  /**
   * @remarks
   * The IP geolocation information. The struct includes the **CityId**, **CityName**, **CountryId**, and **CountryName** parameters.  
   * **CityId** indicates the ID of the city to which the IP address belongs. **CityName** indicates the name of the city to which the IP address belongs. **CountryId** indicates the ID of the country to which the IP address belongs. **CountryName** indicates the name of the country to which the IP address belongs.
   */
  IPLocationInfo?: DescribeRiskEventGroupResponseBodyDataListIPLocationInfo;
  /**
   * @remarks
   * The time when the intrusion prevention event last occurred. The value is a UNIX timestamp accurate to seconds.
   * 
   * @example
   * 1534408267
   */
  lastEventTime?: number;
  /**
   * @remarks
   * The private IP address information of the intrusion prevention event. The IP address information is returned as an array that includes the **RegionNo**, **ResourceInstanceId**, **ResourceInstanceName**, and **ResourcePrivateIP** parameters.  
   * **RegionNo** indicates instance ID of the region to which the IP address belongs. **ResourceInstanceId** indicates instance ID of the instance to which the IP address belongs. **ResourceInstanceName** indicates the name of the instance to which the IP address belongs. **ResourcePrivateIP** indicates the IP address.
   */
  resourcePrivateIPList?: DescribeRiskEventGroupResponseBodyDataListResourcePrivateIPList[];
  /**
   * @remarks
   * The public IP address type of the intrusion prevention event. Valid values:
   *  -  **EIP**: Elastic IP address.
   *  - **EcsPublicIP**: The public IP addresses of Elastic Compute Service (ECS) instances.
   *  - **EcsEIP**: EIP of an ECS instance.
   *  - **NatPublicIP**: Public IP address of a NAT gateway.
   *  - **NatEIP**: EIP of a NAT gateway.
   *  - **SlbPublicIp**: Public IP address of an SLB instance.
   * 
   * @example
   * EcsPublicIP
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the protection rule for the intrusion prevention event.
   * 
   * @example
   * 1000****
   */
  ruleId?: string;
  /**
   * @remarks
   * The defense status. Valid values:
   * - **1**: Alert.
   * - **2**: Block.
   * 
   * @example
   * 2
   */
  ruleResult?: number;
  /**
   * @remarks
   * The source of the detection rule for the intrusion prevention event. Valid values:
   * - **1**: Basic protection.
   * - **2**: Virtual Patches.
   * - **4**: Threat intelligence.
   * 
   * @example
   * 1
   */
  ruleSource?: number;
  /**
   * @remarks
   * The queried source IP address. This indicates that the intrusion prevention event includes this source IP address.
   * 
   * @example
   * 192.0.XX.XX
   */
  srcIP?: string;
  /**
   * @remarks
   * The source IP address label, which serves as the identity indicating whether the IP address is one of the back-to-origin IP addresses of a cloud service.
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
   * The list of source private IP addresses for the intrusion prevention event.
   */
  srcPrivateIPList?: string[];
  /**
   * @remarks
   * The label of intelligence tags for critical event protection.
   * 
   * @example
   * test-tag
   */
  tag?: string;
  /**
   * @remarks
   * The destination VPC information of the intrusion prevention event. The structure includes the **EcsInstanceId**, **EcsInstanceName**, **NetworkInstanceId**, **NetworkInstanceName**, and **RegionNo** parameters.  
   * **EcsInstanceId** indicates the instance ID of the ECS instance in the VPC. **EcsInstanceName** indicates the name of the ECS instance in the VPC. **NetworkInstanceId** indicates the instance ID of the VPC-connected instance. **NetworkInstanceName** indicates the name of the VPC-connected instance. **RegionNo** indicates the ID of the region to which the VPC-connected instance belongs.
   */
  vpcDstInfo?: DescribeRiskEventGroupResponseBodyDataListVpcDstInfo;
  /**
   * @remarks
   * The source VPC information of the intrusion prevention event. The structure includes the **EcsInstanceId**, **EcsInstanceName**, **NetworkInstanceId**, **NetworkInstanceName**, and **RegionNo** parameters.  
   * **EcsInstanceId** indicates the instance ID of the ECS instance in the VPC. **EcsInstanceName** indicates the name of the ECS instance in the VPC. **NetworkInstanceId** indicates the instance ID of the VPC-connected instance. **NetworkInstanceName** indicates the name of the VPC-connected instance. **RegionNo** indicates the ID of the region to which the VPC-connected instance belongs.
   */
  vpcSrcInfo?: DescribeRiskEventGroupResponseBodyDataListVpcSrcInfo;
  /**
   * @remarks
   * The security level of the intrusion prevention event. Valid values:
   * - **1**: Low-risk.
   * - **2**: Medium-risk.
   * - **3**: High-risk.
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

