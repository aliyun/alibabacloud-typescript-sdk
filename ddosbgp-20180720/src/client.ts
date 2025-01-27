// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AddRdMemberListRequestMemberList extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * @example
   * 19510843762****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAssetGroupToInstanceRequestAssetGroupList extends $dara.Model {
  /**
   * @remarks
   * The UID of the member to which the asset belongs.
   * 
   * @example
   * 1743970208320***
   */
  memberUid?: string;
  /**
   * @remarks
   * The ID of the asset that you want to add. If the asset is a Web Application Firewall (WAF) instance, specify the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-test-001
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The type of the asset.
   * 
   * This parameter is required.
   * 
   * @example
   * waf
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      memberUid: 'MemberUid',
      name: 'Name',
      region: 'Region',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberUid: 'string',
      name: 'string',
      region: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachToPolicyRequestIpPortProtocolList extends $dara.Model {
  /**
   * @remarks
   * The IP address of the protected object.
   * 
   * This parameter is required.
   * 
   * @example
   * 112.124.241.***
   */
  ip?: string;
  /**
   * @remarks
   * The port number of the protected object.
   * 
   * >  This parameter is available for only port-specific mitigation policies.
   * 
   * @example
   * 8*
   */
  port?: number;
  /**
   * @remarks
   * The protocol type of the protected object. Valid values:
   * 
   * *   **tcp**
   * *   **udp**
   * 
   * >  This parameter is available for only port-specific mitigation policies.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRdMemberListRequestMemberList extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * @example
   * 136548010379****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetGroupResponseBodyAssetGroupList extends $dara.Model {
  /**
   * @remarks
   * The ID of the asset.
   * 
   * @example
   * waf_v2_public_cn-lbj382l****
   */
  name?: string;
  /**
   * @remarks
   * The region to which the asset belongs.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The type of the asset.
   * 
   * @example
   * waf
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      region: 'Region',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      region: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetGroupToInstanceResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance of a paid edition.
   * 
   * @example
   * ddosbgp-cn-7212zaa5v***
   */
  instanceId?: string;
  /**
   * @remarks
   * The UID of the member to which the asset belongs.
   * 
   * @example
   * 170858869679****
   */
  memberUid?: string;
  /**
   * @remarks
   * The ID of the asset.
   * 
   * @example
   * waf_v2_public_cn-lbj382l****
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The type of the asset.
   * 
   * @example
   * waf
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      memberUid: 'MemberUid',
      name: 'Name',
      region: 'Region',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      memberUid: 'string',
      name: 'string',
      region: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The time when the DDoS attack stopped. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1637554335
   */
  endTime?: number;
  /**
   * @remarks
   * The attacked IP address.
   * 
   * @example
   * 47.89.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The volume of the request traffic at the start of the DDoS attack. Unit: Mbit/s.
   * 
   * @example
   * 0
   */
  mbps?: number;
  /**
   * @remarks
   * The number of packets at the start of the DDoS attack. Unit: packets per second (PPS).
   * 
   * @example
   * 456
   */
  pps?: number;
  /**
   * @remarks
   * The time when the DDoS attack started. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1637554034
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the DDoS attack event. Valid values:
   * 
   * *   **hole_begin**: indicates that blackhole filtering is triggered for the attacked IP address.
   * *   **hole_end**: indicates that blackhole filtering is deactivated for the attacked IP address.
   * *   **defense_begin**: indicates that attack traffic is being scrubbed.
   * *   **defense_end**: indicates that attack traffic is scrubbed.
   * 
   * @example
   * defense_end
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ip: 'Ip',
      mbps: 'Mbps',
      pps: 'Pps',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      ip: 'string',
      mbps: 'number',
      pps: 'number',
      startTime: 'number',
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

export class DescribeDdosOriginInstanceBillResponseBodyFlowList extends $dara.Model {
  /**
   * @remarks
   * The traffic distribution by region. The JSON struct contains the following fields:
   * 
   * *   **bytes**: the traffic volume of EIPs with Anti-DDoS (Enhanced) enabled in a region. Unit: bytes.
   * *   **memberUid**: the owner account.
   * *   **instanceId**: the ID of the pay-as-you-go instance that protects the EIPs with Anti-DDoS (Enhanced) enabled.
   * *   **ip**: the EIPs with Anti-DDoS (Enhanced) enabled.
   * *   **region**: the region.
   * 
   * >  If the memberUid field in the JSON struct is empty, the information about the current account is returned. The value of the bytes parameter in the outermost level of the JSON struct indicates the total traffic, and the values of the bytes parameters in inner levels indicate the traffic of the account.
   * 
   * @example
   * [{\\"bytes\\":79282719,\\"memberUid\\":\\"\\",\\"regionFlows\\":{\\"cn-hangzhou\\":[{\\"bytes\\":79282719,\\"instanceId\\":\\"ddosorigin_cn-u7c3lcr9r02\\",\\"ip\\":\\"47.118.168.57\\",\\"region\\":\\"cn-hangzhou\\"}]}}]
   */
  memberFlow?: string;
  /**
   * @remarks
   * The traffic distribution by region. The JSON struct contains the following fields:
   * 
   * *   **bytes**: the traffic volume of EIPs with Anti-DDoS (Enhanced) enabled in a region. Unit: bytes.
   * *   **instanceId**: the ID of the pay-as-you-go instance that protects the EIPs with Anti-DDoS (Enhanced) enabled.
   * *   **ip**: the EIPs with Anti-DDoS (Enhanced) enabled.
   * *   **region**: the region.
   * 
   * @example
   * {\\"cn-hangzhou\\":[{\\"bytes\\":0,\\"instanceId\\":\\"ddosorigin_cn-u7c3lcr9r02\\",\\"ip\\":\\"47.118.168.124\\",\\"region\\":\\"cn-hangzhou\\"}]}
   */
  regionFlow?: string;
  /**
   * @remarks
   * The timestamp. Unit: milliseconds.
   * 
   * @example
   * 1620951900
   */
  time?: number;
  totalBillFlow?: number;
  /**
   * @remarks
   * The traffic of EIPs with Anti-DDoS (Enhanced) enabled. Unit: bytes.
   * 
   * @example
   * 6302081067
   */
  totalFlow?: number;
  static names(): { [key: string]: string } {
    return {
      memberFlow: 'MemberFlow',
      regionFlow: 'RegionFlow',
      time: 'Time',
      totalBillFlow: 'TotalBillFlow',
      totalFlow: 'TotalFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberFlow: 'string',
      regionFlow: 'string',
      time: 'number',
      totalBillFlow: 'number',
      totalFlow: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosOriginInstanceBillResponseBodyIpCountOrFunctionList extends $dara.Model {
  /**
   * @remarks
   * The application scope of the instance. Valid values:
   * 
   * *   **only_mainland_china**: regions in the Chinese mainland.
   * *   **global**: all regions.
   * *   **international_and_hmt**: regions outside the Chinese mainland.
   * 
   * @example
   * global
   */
  coverage?: string;
  /**
   * @remarks
   * The number of IP addresses protected by the pay-as-you-go instance in the Chinese mainland.
   * 
   * @example
   * 5
   */
  ipCntCn?: number;
  /**
   * @remarks
   * The number of IP addresses protected by the pay-as-you-go instance outside the Chinese mainland.
   * 
   * @example
   * 5
   */
  ipCntOv?: number;
  /**
   * @remarks
   * The bill distribution by account. The JSON struct contains the following fields:
   * 
   * *   **eipCnIpCount**: the number of EIPs with Anti-DDoS (Enhanced) enabled in the Chinese mainland.
   * *   **eipOvIpCount**: the number of EIPs with Anti-DDoS (Enhanced) enabled outside the Chinese mainland.
   * *   **memberUid**: the owner account.
   * *   **standardAssetsCnIpCount**: the number of IP addresses of regular Alibaba Cloud services in the Chinese mainland.
   * *   **standardAssetsOvIpCount**: the number of IP addresses of regular Alibaba Cloud services outside the Chinese mainland.
   * 
   * >  If the memberUid field in the JSON struct is empty, the information about the current account is returned.
   * 
   * @example
   * [{\\"eipCnIpCount\\":3,\\"eipOvIpCount\\":18,\\"memberUid\\":\\"\\",\\"standardAssetsCnIpCount\\":2,\\"standardAssetsOvIpCount\\":0},{\\"eipCnIpCount\\":3,\\"eipOvIpCount\\":0,\\"memberUid\\":\\"1776997906319249\\",\\"standardAssetsCnIpCount\\":0,\\"standardAssetsOvIpCount\\":0}]
   */
  memberIpCnt?: string;
  /**
   * @remarks
   * The billing time. Unit: milliseconds.
   * 
   * @example
   * 1680278400000
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      coverage: 'Coverage',
      ipCntCn: 'IpCntCn',
      ipCntOv: 'IpCntOv',
      memberIpCnt: 'MemberIpCnt',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverage: 'string',
      ipCntCn: 'number',
      ipCntOv: 'number',
      memberIpCnt: 'string',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosOriginInstanceBillResponseBodyMonthlySummaryList extends $dara.Model {
  /**
   * @remarks
   * The number of days that the instance is activated.
   * 
   * @example
   * 30
   */
  enableDays?: number;
  /**
   * @remarks
   * The total traffic of EIPs with Anti-DDoS (Enhanced) enabled in the Chinese mainland. Unit: bytes.
   * 
   * @example
   * 123456
   */
  flowCn?: number;
  /**
   * @remarks
   * The total traffic of EIPs with Anti-DDoS (Enhanced) enabled outside the Chinese mainland. Unit: bytes.
   * 
   * @example
   * 123456
   */
  flowIntl?: number;
  /**
   * @remarks
   * The total number of protected IP addresses in the Chinese mainland.
   * 
   * >  The total number of protected IP addresses is the sum of the daily numbers of protected IP addresses in a month.
   * 
   * @example
   * 28
   */
  ipCountCn?: number;
  /**
   * @remarks
   * The total number of protected IP addresses outside the Chinese mainland.
   * 
   * >  The total number of protected IP addresses is the sum of the daily numbers of protected IP addresses in a month.
   * 
   * @example
   * 30
   */
  ipCountIntl?: number;
  /**
   * @remarks
   * The ID of the member.
   * 
   * @example
   * 112873971277****
   */
  memberUid?: string;
  /**
   * @remarks
   * The total traffic of regular Alibaba Cloud services in the Chinese mainland. Unit: bytes.
   * 
   * @example
   * 123456
   */
  standardAssetsFlowCn?: number;
  /**
   * @remarks
   * The total traffic of regular Alibaba Cloud services outside the Chinese mainland. Unit: bytes.
   * 
   * @example
   * 123456
   */
  standardAssetsFlowIntl?: number;
  /**
   * @remarks
   * The ID of the administrator account.
   * 
   * @example
   * 102518028277****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      enableDays: 'EnableDays',
      flowCn: 'FlowCn',
      flowIntl: 'FlowIntl',
      ipCountCn: 'IpCountCn',
      ipCountIntl: 'IpCountIntl',
      memberUid: 'MemberUid',
      standardAssetsFlowCn: 'StandardAssetsFlowCn',
      standardAssetsFlowIntl: 'StandardAssetsFlowIntl',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableDays: 'number',
      flowCn: 'number',
      flowIntl: 'number',
      ipCountCn: 'number',
      ipCountIntl: 'number',
      memberUid: 'string',
      standardAssetsFlowCn: 'number',
      standardAssetsFlowIntl: 'number',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosOriginInstanceBillResponseBodyStandardAssetsFlowList extends $dara.Model {
  /**
   * @remarks
   * The traffic distribution by region. The JSON struct contains the following fields:
   * 
   * *   **bytes**: the traffic volume of regular Alibaba Cloud services in a region. Unit: bytes.
   * *   **memberUid**: the owner account.
   * *   **instanceId**: the ID of the pay-as-you-go instance that protects the regular Alibaba Cloud services.
   * *   **ip**: the IP address of the regular Alibaba Cloud service protected by the Anti-DDoS Origin instance.
   * *   **region**: the region.
   * 
   * >  If the memberUid field in the JSON struct is empty, the information about the current account is returned. The value of the bytes parameter in the outermost level of the JSON struct indicates the total traffic, and the values of the bytes parameters in inner levels indicate the traffic of the account.
   * 
   * @example
   * [{\\"bytes\\":79282719,\\"memberUid\\":\\"\\",\\"regionFlows\\":{\\"cn-hangzhou\\":[{\\"bytes\\":79282719,\\"instanceId\\":\\"ddosorigin_cn-u7c3lcr9r02\\",\\"ip\\":\\"47.118.168.57\\",\\"region\\":\\"cn-hangzhou\\"}]}}]
   */
  memberFlow?: string;
  /**
   * @remarks
   * The traffic distribution by region. The JSON struct contains the following fields:
   * 
   * *   **bytes**: the traffic volume of regular Alibaba Cloud services in a region. Unit: bytes.
   * *   **instanceId**: the ID of the pay-as-you-go instance that protects the regular Alibaba Cloud services.
   * *   **ip**: the IP address protected by the Anti-DDoS Origin instance.
   * *   **region**: the region.
   * 
   * @example
   * {\\"cn-hangzhou\\":[{\\"bytes\\":0,\\"instanceId\\":\\"ddosorigin_cn-u7c3lcr9r02\\",\\"ip\\":\\"47.118.168.124\\",\\"region\\":\\"cn-hangzhou\\"}]}
   */
  regionFlow?: string;
  /**
   * @remarks
   * The timestamp. Unit: milliseconds.
   * 
   * @example
   * 1679846400000
   */
  time?: number;
  /**
   * @remarks
   * The traffic of regular Alibaba Cloud services. Unit: bytes.
   * 
   * @example
   * 6302081067
   */
  totalFlow?: number;
  static names(): { [key: string]: string } {
    return {
      memberFlow: 'MemberFlow',
      regionFlow: 'RegionFlow',
      time: 'Time',
      totalFlow: 'TotalFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberFlow: 'string',
      regionFlow: 'string',
      time: 'number',
      totalFlow: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceListRequestTag extends $dara.Model {
  /**
   * @remarks
   * The mitigation plan of the Anti-DDoS Origin instance.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The mitigation plan of the Anti-DDoS Origin instance. Valid values:
   * 
   * *   0: the Professional mitigation plan.
   * *   1: the Enterprise mitigation plan.
   * 
   * @example
   * test-value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceListResponseBodyInstanceListAutoProtectCondition extends $dara.Model {
  /**
   * @remarks
   * Events which result in auto binding.
   */
  events?: string[];
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceListResponseBodyInstanceList extends $dara.Model {
  /**
   * @remarks
   * The event that triggers automatic association. Valid values:
   * 
   * *   **any**: The instance is automatically associated with an object based on traffic scrubbing events or blackhole filtering events.
   * *   **clean**: The instance is automatically associated with an object based on traffic scrubbing events.
   * *   **blackhole**: The instance is automatically associated with an object based on blackhole filtering events.
   */
  autoProtectCondition?: DescribeInstanceListResponseBodyInstanceListAutoProtectCondition;
  /**
   * @remarks
   * The time when the instance expires. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The type of the instance.
   * 
   * *   **ddos_ddosorigin_public_cn**: Anti-DDoS Origin 2.0 (Pay-as-you-go) on the China site (aliyun.com).
   * *   **ddos_ddosorigin_public_intl**: Anti-DDoS Origin 2.0 (Pay-as-you-go) on the International site (alibabacloud.com).
   * 
   * @example
   * 0
   */
  blackholdingCount?: string;
  /**
   * @remarks
   * The condition that triggers automatic association of the instance with an object.
   * 
   * @example
   * ddos_ddosorigin_public_cn
   */
  commodityType?: string;
  /**
   * @remarks
   * Indicates whether overdue payments exist. Valid values:
   * 
   * *   **0**: Overdue payments do not exist.
   * *   **1**: Overdue payments exist.
   * 
   * @example
   * 1
   */
  coverageType?: number;
  /**
   * @remarks
   * The events that trigger automatic association.
   * 
   * @example
   * 0
   */
  debtStatus?: number;
  /**
   * @remarks
   * The time when the instance was purchased. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1640275200000
   */
  expireTime?: number;
  /**
   * @remarks
   * The mitigation plan of the instance. Valid values:
   * 
   * *   **0**: the Professional mitigation plan
   * *   **1**: the Enterprise mitigation plan
   * 
   * @example
   * 1592886047000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The number of protected public IP addresses for which blackhole filtering is triggered.
   * 
   * >  You can call the [DeleteBlackhole](https://help.aliyun.com/document_detail/118692.html) operation to deactivate blackhole filtering for a protected IP address.
   * 
   * @example
   * ddosbgp-cn-oew1pjrk****
   */
  instanceId?: string;
  /**
   * @remarks
   * The application scope of the instance.
   * 
   * *   **1**: The instance supports public IP addresses in all regions.
   * *   **2**: The instance supports public IP addresses in regions in the Chinese mainland.
   * *   **3**: The instance supports public IP addresses in regions outside the Chinese mainland.
   * *   **4**: The instance supports public IP addresses in a region in or outside the Chinese mainland.
   * 
   * @example
   * 1
   */
  instanceType?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * IPv4
   */
  ipType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * gamebox
   */
  product?: string;
  /**
   * @remarks
   * The type of the cloud service that is associated with the Anti-DDoS Origin instance By default, this parameter is not returned. If the Anti-DDoS Origin instance is created by using a different cloud service, the code of the cloud service is returned.
   * 
   * Valid values:
   * 
   * *   **gamebox**: The Anti-DDoS Origin instance is created by using Game Security Box.
   * *   **eip**: The Anti-DDoS Origin instance is created by using an elastic IP address (EIP) for which Anti-DDoS (Enhanced Edition) is enabled.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek3ccjxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      autoProtectCondition: 'AutoProtectCondition',
      autoRenewal: 'AutoRenewal',
      blackholdingCount: 'BlackholdingCount',
      commodityType: 'CommodityType',
      coverageType: 'CoverageType',
      debtStatus: 'DebtStatus',
      expireTime: 'ExpireTime',
      gmtCreate: 'GmtCreate',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ipType: 'IpType',
      product: 'Product',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProtectCondition: DescribeInstanceListResponseBodyInstanceListAutoProtectCondition,
      autoRenewal: 'boolean',
      blackholdingCount: 'string',
      commodityType: 'string',
      coverageType: 'number',
      debtStatus: 'number',
      expireTime: 'number',
      gmtCreate: 'number',
      instanceId: 'string',
      instanceType: 'string',
      ipType: 'string',
      product: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.autoProtectCondition && typeof (this.autoProtectCondition as any).validate === 'function') {
      (this.autoProtectCondition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponseBodyInstanceSpecsPackConfig extends $dara.Model {
  /**
   * @remarks
   * The bandwidth. Unit: Gbit/s.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The number of IP addresses that are protected by the Anti-DDoS Origin Enterprise instance.
   * 
   * @example
   * 0
   */
  bindIpCount?: number;
  /**
   * @remarks
   * The burstable clean bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  elasticBwMbps?: number;
  /**
   * @remarks
   * The metering method of burstable clean bandwidth. Valid values:
   * 
   * *   **month**: the monthly 95th percentile metering method.
   * *   **day**: the daily 95th percentile metering method.
   * 
   * @example
   * day
   */
  elasticBwMode?: string;
  /**
   * @remarks
   * The burstable protection bandwidth of each protected IP address. Unit: Gbit/s.
   * 
   * @example
   * 300
   */
  ipAdvanceThre?: number;
  /**
   * @remarks
   * The basic protection bandwidth of each protected IP address. Unit: Gbit/s.
   * 
   * @example
   * 20
   */
  ipBasicThre?: number;
  /**
   * @remarks
   * The number of IP addresses that can be protected by the Anti-DDoS Origin Enterprise instance.
   * 
   * @example
   * 100
   */
  ipSpec?: number;
  /**
   * @remarks
   * The clean bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 200
   */
  normalBandwidth?: number;
  /**
   * @remarks
   * The burstable protection bandwidth of the Anti-DDoS Origin instance. Unit: Gbit/s.
   * 
   * @example
   * 300
   */
  packAdvThre?: number;
  /**
   * @remarks
   * The basic protection bandwidth of the Anti-DDoS Origin instance. Unit: Gbit/s.
   * 
   * @example
   * 20
   */
  packBasicThre?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      bindIpCount: 'BindIpCount',
      elasticBwMbps: 'ElasticBwMbps',
      elasticBwMode: 'ElasticBwMode',
      ipAdvanceThre: 'IpAdvanceThre',
      ipBasicThre: 'IpBasicThre',
      ipSpec: 'IpSpec',
      normalBandwidth: 'NormalBandwidth',
      packAdvThre: 'PackAdvThre',
      packBasicThre: 'PackBasicThre',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      bindIpCount: 'number',
      elasticBwMbps: 'number',
      elasticBwMode: 'string',
      ipAdvanceThre: 'number',
      ipBasicThre: 'number',
      ipSpec: 'number',
      normalBandwidth: 'number',
      packAdvThre: 'number',
      packBasicThre: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponseBodyInstanceSpecs extends $dara.Model {
  /**
   * @remarks
   * The available best-effort protection sessions.
   * 
   * @example
   * 2
   */
  availableDefenseTimes?: number;
  /**
   * @remarks
   * The number of times that blackhole filtering can be deactivated.
   * 
   * @example
   * 100
   */
  availableDeleteBlackholeCount?: string;
  /**
   * @remarks
   * The percentage of the used best-effort protection sessions. Unit: %.
   * 
   * @example
   * 30
   */
  defenseTimesPercent?: number;
  /**
   * @remarks
   * Indicates whether the instance is downgraded. Valid value:
   * 
   * *   **8**: The instance is downgraded due to excessive bandwidth usage.
   * 
   * @example
   * 8
   */
  downgradeStatus?: number;
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance.
   * 
   * @example
   * ddosbgp-cn-n6w1r7nz****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether best-effort protection is enabled. Valid values:
   * 
   * *   **0**: Best-effort protection is disabled.
   * *   **1**: Best-effort protection is enabled.
   * 
   * @example
   * 1
   */
  isFullDefenseMode?: number;
  /**
   * @remarks
   * The configurations of the Anti-DDoS Origin instance, including the number of protected IP addresses and protection bandwidth.
   */
  packConfig?: DescribeInstanceSpecsResponseBodyInstanceSpecsPackConfig;
  /**
   * @remarks
   * The region ID of the Anti-DDoS Origin instance.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the name of the region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The total best-effort protection sessions.
   * 
   * @example
   * 2
   */
  totalDefenseTimes?: number;
  static names(): { [key: string]: string } {
    return {
      availableDefenseTimes: 'AvailableDefenseTimes',
      availableDeleteBlackholeCount: 'AvailableDeleteBlackholeCount',
      defenseTimesPercent: 'DefenseTimesPercent',
      downgradeStatus: 'DowngradeStatus',
      instanceId: 'InstanceId',
      isFullDefenseMode: 'IsFullDefenseMode',
      packConfig: 'PackConfig',
      region: 'Region',
      totalDefenseTimes: 'TotalDefenseTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableDefenseTimes: 'number',
      availableDeleteBlackholeCount: 'string',
      defenseTimesPercent: 'number',
      downgradeStatus: 'number',
      instanceId: 'string',
      isFullDefenseMode: 'number',
      packConfig: DescribeInstanceSpecsResponseBodyInstanceSpecsPackConfig,
      region: 'string',
      totalDefenseTimes: 'number',
    };
  }

  validate() {
    if(this.packConfig && typeof (this.packConfig as any).validate === 'function') {
      (this.packConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandDdosEventResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The time when the DDoS attack stopped. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1557891306
   */
  endTime?: number;
  /**
   * @remarks
   * The attacked IP address.
   * 
   * @example
   * 192.XX.XX.1
   */
  ip?: string;
  /**
   * @remarks
   * The attack traffic. Unit: Mbit/s.
   * 
   * @example
   * 110000
   */
  mbps?: number;
  /**
   * @remarks
   * The packet forwarding rate of the DDoS attack. Unit: packets per second (PPS).
   * 
   * @example
   * 0
   */
  pps?: number;
  /**
   * @remarks
   * The time when the DDoS attack started. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1557889506
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the DDoS attack event. Valid values:
   * 
   * *   **hole_begin**: indicates that blackhole filtering is triggered.
   * *   **hole_end**: indicates that tblackhole filtering is deactivated.
   * *   **defense_begin**: indicates that traffic scrubbing is in progress.
   * *   **defense_end**: indicates that traffic scrubbing is complete.
   * 
   * @example
   * defense_end
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ip: 'Ip',
      mbps: 'Mbps',
      pps: 'Pps',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      ip: 'string',
      mbps: 'number',
      pps: 'number',
      startTime: 'number',
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

export class DescribeOnDemandInstanceStatusResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The details of route advertisement for data centers outside the Chinese mainland. This parameter is a JSON string. The following fields are included in the value:
   * 
   * *   **region**: The code of the data center outside the Chinese mainland. The value is of the string type. For more information, see **Codes of data centers outside the Chinese mainland**.
   * *   **declared**: indicates whether the data center advertised the route. The value is of the string type. Valid values: **0** and **1**. The value of 0 indicates that the data center did not advertise the route. The value of 1 indicates that the data center advertised the route.
   * 
   * @example
   * [{\\"region\\":\\"oe24\\",\\"declared\\":0},{\\"region\\":\\"oe26\\",\\"declared\\":0},{\\"region\\":\\"oe28\\",\\"declared\\":0},{\\"region\\":\\"oi39\\",\\"declared\\":0},{\\"region\\":\\"us50\\",\\"declared\\":0},{\\"region\\":\\"jp141\\",\\"declared\\":0}]
   */
  declared?: string;
  /**
   * @remarks
   * The description of the anti-DDoS diversion instance.
   * 
   * > This parameter is returned only when the information about multiple anti-DDoS diversion instances are returned. The value of this parameter is not returned because the information about only one anti-DDoS diversion instance is returned.
   * 
   * @example
   * test
   */
  desc?: string;
  /**
   * @remarks
   * The ID of the anti-DDoS diversion instance.
   * 
   * > This parameter is returned only when the information about multiple anti-DDoS diversion instances are returned. The value of this parameter is not returned because the information about only one anti-DDoS diversion instance is returned.
   * 
   * @example
   * ddosbgp-cn-z2q1qzxb****
   */
  instanceId?: string;
  /**
   * @remarks
   * The mode that is used to enable traffic rerouting to the anti-DDoS diversion instance. Valid values:
   * 
   * *   **manual**: The instance is manually started.
   * *   **netflow-auto**: The instance is automatically started by using NetFlow that monitors network traffic.
   * 
   * @example
   * netflow-auto
   */
  mode?: string;
  /**
   * @remarks
   * The CIDR block of the anti-DDoS diversion instance.
   * 
   * @example
   * 47.***.***.0/24
   */
  net?: string;
  /**
   * @remarks
   * The number of the autonomous system (AS). Set the value to **0**, which indicates that AS is disabled.
   * 
   * @example
   * 0
   */
  registedAs?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 171986973287****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      declared: 'Declared',
      desc: 'Desc',
      instanceId: 'InstanceId',
      mode: 'Mode',
      net: 'Net',
      registedAs: 'RegistedAs',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      declared: 'string',
      desc: 'string',
      instanceId: 'string',
      mode: 'string',
      net: 'string',
      registedAs: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponseBodyOpEntities extends $dara.Model {
  /**
   * @remarks
   * The operation object, which is the ID of the instance.
   * 
   * @example
   * ddosbgp-cn-n6w1r7nz****
   */
  entityObject?: string;
  /**
   * @remarks
   * The type of the operation object. The value is fixed as **1**, which indicates Anti-DDoS Origin instances.
   * 
   * @example
   * 1
   */
  entityType?: number;
  /**
   * @remarks
   * The time when the log was generated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1635818114000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that performs the operation.
   * 
   * > If the value is **system**, the operation is performed by Anti-DDoS Origin.
   * 
   * @example
   * 171986973287****
   */
  opAccount?: string;
  /**
   * @remarks
   * The type of operation. Valid values:
   * 
   * *   **3**: indicates an operation to add an IP address to the Anti-DDoS Origin instance for protection.
   * *   **4**: indicates an operation to remove a protected IP address from the Anti-DDoS Origin instance.
   * *   **5**: indicates an operation to downgrade the Anti-DDoS Origin instance.
   * *   **6**: indicates an operation to deactivate blackhole filtering for an IP address.
   * *   **7**: indicates an operation to reset the number of times that you can deactivate blackhole filtering.
   * *   **8**: indicates an operation to enable burstable protection.
   * 
   * @example
   * 8
   */
  opAction?: number;
  /**
   * @remarks
   * The details of the operation. The value is a string that consists of a JSON struct. The JSON struct contains the following fields:
   * 
   * *   **entity**: the operation object. Data type: object. The fields that are included in the value of the **entity** parameter vary based on the value of the **OpAction** parameter. Valid values:
   * 
   *     *   If the value of the **OpAction** parameter is **3**, the value of the **entity** parameter consists of the following field:
   * 
   *         *   **ips**: the public IP addresses that are protected by the Anti-DDoS Origin instance. Data type: array
   * 
   *     *   If the value of the **OpAction** parameter is **4**, the value of the **entity** parameter consists of the following field:
   * 
   *         *   **ips**: the public IP addresses that are no longer protected by the Anti-DDoS Origin instance. Data type: array.
   * 
   *     *   If the value of the **OpAction** parameter is **5**, the value of the **entity** parameter consists of the following fields:
   * 
   *         *   **baseBandwidth**: the basic protection bandwidth. Unit: Gbit/s. Data type: integer.
   *         *   **elasticBandwidth**: the burstable protection bandwidth. Unit: Gbit/s. Data type: integer.
   *         *   **opSource**: the source of the operation. The value is fixed as **1**, indicating that the operation is performed by Anti-DDoS Origin. Data type: integer.
   * 
   *     *   If the value of the **OpAction** parameter is **6**, the value of the **entity** parameter consists of the following field:
   * 
   *         *   **ips**: the public IP addresses for which to deactivate blackhole filtering. Data type: array.
   * 
   *     *   If the value of the **OpAction** parameter is **7**, the **entity** parameter is not returned.
   * 
   *     *   If the value of the **OpAction** parameter is **8**, the value of the **entity** parameter consists of the following fields:
   * 
   *         *   **baseBandwidth**: the basic protection bandwidth. Unit: Gbit/s. Data type: integer.
   *         *   **elasticBandwidth**: the burstable protection bandwidth. Unit: Gbit/s. Data type: integer.
   * 
   * @example
   * {"entity":{"baseBandwidth":20,"elasticBandwidth":20}}
   */
  opDesc?: string;
  static names(): { [key: string]: string } {
    return {
      entityObject: 'EntityObject',
      entityType: 'EntityType',
      gmtCreate: 'GmtCreate',
      opAccount: 'OpAccount',
      opAction: 'OpAction',
      opDesc: 'OpDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityObject: 'string',
      entityType: 'number',
      gmtCreate: 'number',
      opAccount: 'string',
      opAction: 'number',
      opDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackIpListResponseBodyIpList extends $dara.Model {
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 47.98.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the member.
   * 
   * @example
   * 170858869679****
   */
  memberUid?: string;
  /**
   * @remarks
   * The time when the near-origin traffic diversion feature was disabled.
   * 
   * @example
   * 1715658000
   */
  nsmExpireAt?: number;
  /**
   * @remarks
   * The time when the near-origin traffic diversion feature was enabled.
   * 
   * @example
   * 1715655000
   */
  nsmStartAt?: number;
  /**
   * @remarks
   * The status of the near-origin traffic diversion feature. Valid values:
   * 
   * *   **1**: The near-origin traffic diversion feature is enabled.
   * *   **0**: The near-origin traffic diversion feature is disabled.
   * 
   * @example
   * 0
   */
  nsmStatus?: number;
  /**
   * @remarks
   * The type of the cloud asset to which the IP address belongs. Valid values:
   * 
   * *   **ECS**: an ECS instance.
   * *   **SLB**: a CLB (formerly SLB) instance.
   * *   **EIP**: an EIP. If the IP address belongs to an ALB instance, the value EIP is returned.
   * *   **WAF**: a WAF instance.
   * 
   * @example
   * ECS
   */
  product?: string;
  /**
   * @remarks
   * The region to which the protected IP address belongs.
   * 
   * >  If the protected IP address is in the same region as the instance, this parameter is not returned.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The description of the cloud asset to which the IP address belongs. The asset can be an ECS instance or an SLB instance.
   * 
   * >  If no descriptions are provided for the asset, this parameter is not returned.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The status of the IP address. Valid values:
   * 
   * *   **normal**: The IP address is not under attack.
   * *   **hole_begin**: Blackhole filtering is triggered for the IP address.
   * 
   * @example
   * normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      memberUid: 'MemberUid',
      nsmExpireAt: 'NsmExpireAt',
      nsmStartAt: 'NsmStartAt',
      nsmStatus: 'NsmStatus',
      product: 'Product',
      region: 'Region',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      memberUid: 'string',
      nsmExpireAt: 'number',
      nsmStartAt: 'number',
      nsmStatus: 'number',
      product: 'string',
      region: 'string',
      remark: 'string',
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

export class DescribeRdMemberListResponseBodyMemberList extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1624954942000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The name of the member.
   * 
   * @example
   * test1
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * @example
   * 1960279802016267
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      name: 'Name',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      name: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * The English name of the region.
   * 
   * @example
   * China (Hangzhou)
   */
  regionEnName?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Chinese name of the region.
   * 
   * @example
   * 华东1（杭州）
   */
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      regionEnName: 'RegionEnName',
      regionId: 'RegionId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionEnName: 'string',
      regionId: 'string',
      regionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficResponseBodyFlowList extends $dara.Model {
  /**
   * @remarks
   * The bandwidth of attack traffic. Unit: bit/s.
   * 
   * >  This parameter is returned only if attack traffic exists.
   * 
   * @example
   * 0
   */
  attackBps?: number;
  /**
   * @remarks
   * The packet forwarding rate of attack traffic. Unit: packets per second.
   * 
   * >  This parameter is returned only if attack traffic exists.
   * 
   * @example
   * 0
   */
  attackPps?: number;
  /**
   * @remarks
   * The type of the traffic statistics. Valid values:
   * 
   * *   **max**: the peak traffic within the specified interval
   * *   **avg**: the average traffic within the specified interval
   * 
   * @example
   * max
   */
  flowType?: string;
  /**
   * @remarks
   * The bandwidth of the total traffic. Unit: Kbit/s.
   * 
   * @example
   * 417
   */
  kbps?: number;
  /**
   * @remarks
   * The ID of the traffic statistics.
   * 
   * @example
   * 8e33f19e-5644-11eb-b5c1-d89d67182200
   */
  name?: string;
  /**
   * @remarks
   * The packet forwarding rate of the total traffic. Unit: packets per second.
   * 
   * @example
   * 274
   */
  pps?: number;
  /**
   * @remarks
   * The time when the traffic statistics are calculated. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1620951900
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      attackBps: 'AttackBps',
      attackPps: 'AttackPps',
      flowType: 'FlowType',
      kbps: 'Kbps',
      name: 'Name',
      pps: 'Pps',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackBps: 'number',
      attackPps: 'number',
      flowType: 'string',
      kbps: 'number',
      name: 'string',
      pps: 'number',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachFromPolicyRequestIpPortProtocolList extends $dara.Model {
  /**
   * @remarks
   * The IP address of the protected object.
   * 
   * This parameter is required.
   * 
   * @example
   * 47.118.172.***
   */
  ip?: string;
  /**
   * @remarks
   * The port of the protected object.
   * 
   * @example
   * 8*
   */
  port?: number;
  /**
   * @remarks
   * The protocol type of the protected object. Valid values:
   * 
   * *   **tcp**
   * *   **udp**
   * 
   * @example
   * tcp
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DettachAssetGroupToInstanceRequestAssetGroupList extends $dara.Model {
  /**
   * @remarks
   * The ID of the asset. If the asset is a Web Application Firewall (WAF) instance, specify the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-lbj382l****
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   **waf**: WAF instance
   * *   **ga**: Global Accelerator (GA) instance
   * 
   * This parameter is required.
   * 
   * @example
   * waf
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      region: 'Region',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      region: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenedAccessLogInstancesResponseBodySlsConfigStatus extends $dara.Model {
  /**
   * @remarks
   * Indicates whether log analysis was enabled for the Anti-DDoS Origin instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance.
   * 
   * @example
   * ddosbgp-cn-m7r1zce2****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyResponseBodyPolicyListContentFingerPrintRuleList extends $dara.Model {
  /**
   * @remarks
   * The end of the destination port range. Valid values: **0** to **65535**.
   * 
   * @example
   * 65535
   */
  dstPortEnd?: number;
  /**
   * @remarks
   * The start of the destination port range. Valid values: **0** to **65535**.
   * 
   * @example
   * 0
   */
  dstPortStart?: number;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 2c0b09cd-a565-4481-9acb-418b********
   */
  id?: string;
  /**
   * @remarks
   * The action triggered if the rule is matched. Valid values:
   * 
   * *   **accept**: allows the traffic that matches the conditions in the byte-match filter rule.
   * *   **drop**: discards the traffic that matches the conditions in the byte-match filter rule.
   * *   **ip_rate**: limits rates on the source IP address whose traffic matches the conditions in the byte-match filter rule. The rate limit is specified by **RateValue**.
   * *   **session_rate**: limits the number of sessions from the source IP address whose traffic matches the conditions in the byte-match filter rule. The rate limit is specified by **RateValue**.
   * 
   * @example
   * drop
   */
  matchAction?: string;
  /**
   * @remarks
   * The maximum packet length. Valid values: **1** to **1500**.
   * 
   * @example
   * 1500
   */
  maxPktLen?: number;
  /**
   * @remarks
   * The minimum packet length. Valid values: **1** to **1500**.
   * 
   * @example
   * 1
   */
  minPktLen?: number;
  /**
   * @remarks
   * The offset. Valid values: **0** to **1500**.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The payload. The value is a hexadecimal string.
   * 
   * @example
   * abcd
   */
  payloadBytes?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * *   **tcp**
   * *   **udp**
   * 
   * @example
   * udp
   */
  protocol?: string;
  /**
   * @remarks
   * The rate limit. Valid values: **1** to **100000**.
   * 
   * >  This parameter is required when **MatchAction** is set to **ip_rate** or **session_rate**.
   * 
   * @example
   * 1000
   */
  rateValue?: number;
  /**
   * @remarks
   * The sequence number that indicates the order for the rule to take effect. The value is an integer.
   * 
   * @example
   * 1
   */
  seqNo?: number;
  /**
   * @remarks
   * The end of the source port range. Valid values: **0** to **65535**.
   * 
   * @example
   * 65535
   */
  srcPortEnd?: number;
  /**
   * @remarks
   * The start of the source port range. Valid values: **0** to **65535**.
   * 
   * @example
   * 0
   */
  srcPortStart?: number;
  static names(): { [key: string]: string } {
    return {
      dstPortEnd: 'DstPortEnd',
      dstPortStart: 'DstPortStart',
      id: 'Id',
      matchAction: 'MatchAction',
      maxPktLen: 'MaxPktLen',
      minPktLen: 'MinPktLen',
      offset: 'Offset',
      payloadBytes: 'PayloadBytes',
      protocol: 'Protocol',
      rateValue: 'RateValue',
      seqNo: 'SeqNo',
      srcPortEnd: 'SrcPortEnd',
      srcPortStart: 'SrcPortStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstPortEnd: 'number',
      dstPortStart: 'number',
      id: 'string',
      matchAction: 'string',
      maxPktLen: 'number',
      minPktLen: 'number',
      offset: 'number',
      payloadBytes: 'string',
      protocol: 'string',
      rateValue: 'number',
      seqNo: 'number',
      srcPortEnd: 'number',
      srcPortStart: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyResponseBodyPolicyListContentL4RuleListConditionList extends $dara.Model {
  /**
   * @remarks
   * The term that is used for matching.
   * 
   * >  If Method is set to **char**, the value of this parameter must be ASCII strings. If Method is set to **hex**, the value of this parameter must be hexadecimal strings. Maximum length: 2,048.
   * 
   * @example
   * test
   */
  arg?: string;
  /**
   * @remarks
   * The number of bytes from the start position for matching. Valid values: **1** to **2048**.
   * 
   * @example
   * 32
   */
  depth?: number;
  /**
   * @remarks
   * The start position for matching. Valid values: **0** to **2047**.
   * 
   * @example
   * 0
   */
  position?: number;
  static names(): { [key: string]: string } {
    return {
      arg: 'Arg',
      depth: 'Depth',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      depth: 'number',
      position: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyResponseBodyPolicyListContentL4RuleList extends $dara.Model {
  /**
   * @remarks
   * The action that is specified in the rule. Valid value:
   * 
   * *   **2**: The traffic is discarded.
   * 
   * @example
   * 2
   */
  action?: string;
  /**
   * @remarks
   * The match conditions.
   */
  conditionList?: ListPolicyResponseBodyPolicyListContentL4RuleListConditionList[];
  /**
   * @remarks
   * The minimum number of bytes in a session to trigger matching. Valid values: **0** to **2048**.
   * 
   * @example
   * 0
   */
  limited?: number;
  /**
   * @remarks
   * The condition based on which an action is performed. Valid values:
   * 
   * *   **0**: If the rule is matched, the action specified in the rule is performed.
   * *   **1**: If the rule is not matched, the action specified in the rule is performed.
   * 
   * @example
   * 1
   */
  match?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   **char**: string match.
   * *   **hex**: hexadecimal string match.
   * 
   * @example
   * char
   */
  method?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * test**
   */
  name?: string;
  /**
   * @remarks
   * The priority of the rule.
   * 
   * @example
   * 1
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      conditionList: 'ConditionList',
      limited: 'Limited',
      match: 'Match',
      method: 'Method',
      name: 'Name',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      conditionList: { 'type': 'array', 'itemType': ListPolicyResponseBodyPolicyListContentL4RuleListConditionList },
      limited: 'number',
      match: 'string',
      method: 'string',
      name: 'string',
      priority: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.conditionList)) {
      $dara.Model.validateArray(this.conditionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyResponseBodyPolicyListContentPortRuleList extends $dara.Model {
  /**
   * @remarks
   * The end of the destination port range. Valid values: **0** to **65535**.
   * 
   * @example
   * 65535
   */
  dstPortEnd?: number;
  /**
   * @remarks
   * The start of the destination port range. Valid values: **0** to **65535**.
   * 
   * @example
   * 0
   */
  dstPortStart?: number;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 8f3c3062-6c20-425d-8405-2bd1********
   */
  id?: string;
  /**
   * @remarks
   * The action triggered if the rule is matched. Valid value:
   * 
   * *   **drop**: The traffic is discarded.
   * 
   * @example
   * drop
   */
  matchAction?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * *   **tcp**
   * *   **udp**
   * 
   * @example
   * udp
   */
  protocol?: string;
  /**
   * @remarks
   * The sequence number that indicates the order for the rule to take effect. The value is an integer.
   * 
   * @example
   * 1
   */
  seqNo?: number;
  /**
   * @remarks
   * The end of the source port range. Valid values: **0** to **65535**.
   * 
   * @example
   * 65535
   */
  srcPortEnd?: number;
  /**
   * @remarks
   * The start of the source port range. Valid values: **0** to **65535**.
   * 
   * @example
   * 0
   */
  srcPortStart?: number;
  static names(): { [key: string]: string } {
    return {
      dstPortEnd: 'DstPortEnd',
      dstPortStart: 'DstPortStart',
      id: 'Id',
      matchAction: 'MatchAction',
      protocol: 'Protocol',
      seqNo: 'SeqNo',
      srcPortEnd: 'SrcPortEnd',
      srcPortStart: 'SrcPortStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstPortEnd: 'number',
      dstPortStart: 'number',
      id: 'string',
      matchAction: 'string',
      protocol: 'string',
      seqNo: 'number',
      srcPortEnd: 'number',
      srcPortStart: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyResponseBodyPolicyListContentSourceBlockList extends $dara.Model {
  /**
   * @remarks
   * The validity period of the blacklist to which the source IP address is added. Unit: seconds.
   * 
   * @example
   * 120
   */
  blockExpireSeconds?: number;
  /**
   * @remarks
   * The statistical period during which the system collects data on source IP addresses to determine whether to add the source IP addresses to the blacklist. Unit: seconds.
   * 
   * @example
   * 60
   */
  everySeconds?: number;
  /**
   * @remarks
   * The number of times that the source IP address exceeds a limit in a statistical period.
   * 
   * @example
   * 5
   */
  exceedLimitTimes?: number;
  /**
   * @remarks
   * The type of the source rate limit. Valid values:
   * 
   * *   **3**: the PPS limit on source IP addresses.
   * *   **4**: the bandwidth limit on source IP addresses.
   * *   **5**: the PPS limit on source SYN packets.
   * *   **6**: the bandwidth limit on source SYN packets.
   * 
   * @example
   * 3
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      blockExpireSeconds: 'BlockExpireSeconds',
      everySeconds: 'EverySeconds',
      exceedLimitTimes: 'ExceedLimitTimes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockExpireSeconds: 'number',
      everySeconds: 'number',
      exceedLimitTimes: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyResponseBodyPolicyListContentSourceLimit extends $dara.Model {
  /**
   * @remarks
   * The bandwidth limit on source IP addresses. Unit: bytes per second.
   * 
   * @example
   * 2048
   */
  bps?: number;
  /**
   * @remarks
   * The packets per second (PPS) limit on source IP addresses.
   * 
   * @example
   * 64
   */
  pps?: number;
  /**
   * @remarks
   * The bandwidth limit on source SYN packets. Unit: bytes per second.
   * 
   * @example
   * 2048
   */
  synBps?: number;
  /**
   * @remarks
   * The PPS limit on source SYN packets.
   * 
   * @example
   * 64
   */
  synPps?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      pps: 'Pps',
      synBps: 'SynBps',
      synPps: 'SynPps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      pps: 'number',
      synBps: 'number',
      synPps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyResponseBodyPolicyListContent extends $dara.Model {
  /**
   * @remarks
   * The validity period of the IP address blacklist. The value is a UNIX timestamp.
   * 
   * @example
   * 1716878000
   */
  blackIpListExpireAt?: number;
  /**
   * @remarks
   * Indicates whether ICMP blocking is enabled.
   * 
   * @example
   * false
   */
  enableDropIcmp?: boolean;
  /**
   * @remarks
   * Indicates whether intelligent protection is enabled.
   * 
   * @example
   * true
   */
  enableIntelligence?: boolean;
  /**
   * @remarks
   * Indicates whether port-specific mitigation is enabled.
   * 
   * @example
   * true
   */
  enableL4Defense?: boolean;
  /**
   * @remarks
   * The byte-match filter rules.
   */
  fingerPrintRuleList?: ListPolicyResponseBodyPolicyListContentFingerPrintRuleList[];
  /**
   * @remarks
   * The level of intelligent protection. Valid values:
   * 
   * *   **default**: normal.
   * *   **hard**: strict.
   * *   **weak**: loose.
   * 
   * @example
   * default
   */
  intelligenceLevel?: string;
  /**
   * @remarks
   * The port-specific mitigation rules.
   */
  l4RuleList?: ListPolicyResponseBodyPolicyListContentL4RuleList[];
  /**
   * @remarks
   * The port blocking rules.
   */
  portRuleList?: ListPolicyResponseBodyPolicyListContentPortRuleList[];
  /**
   * @remarks
   * The ports whose traffic is filtered out by the filtering policies for UDP reflection attacks.
   */
  reflectBlockUdpPortList?: number[];
  /**
   * @remarks
   * The countries in the location blacklist.
   */
  regionBlockCountryList?: number[];
  /**
   * @remarks
   * The provinces in the location blacklist.
   */
  regionBlockProvinceList?: number[];
  /**
   * @remarks
   * The source IP addresses that are added to the blacklist.
   */
  sourceBlockList?: ListPolicyResponseBodyPolicyListContentSourceBlockList[];
  /**
   * @remarks
   * The settings for source rate limiting.
   */
  sourceLimit?: ListPolicyResponseBodyPolicyListContentSourceLimit;
  /**
   * @remarks
   * Indicates whether back-to-origin CIDR blocks of Anti-DDoS Proxy are added to the whitelist.
   * 
   * @example
   * false
   */
  whitenGfbrNets?: boolean;
  static names(): { [key: string]: string } {
    return {
      blackIpListExpireAt: 'BlackIpListExpireAt',
      enableDropIcmp: 'EnableDropIcmp',
      enableIntelligence: 'EnableIntelligence',
      enableL4Defense: 'EnableL4Defense',
      fingerPrintRuleList: 'FingerPrintRuleList',
      intelligenceLevel: 'IntelligenceLevel',
      l4RuleList: 'L4RuleList',
      portRuleList: 'PortRuleList',
      reflectBlockUdpPortList: 'ReflectBlockUdpPortList',
      regionBlockCountryList: 'RegionBlockCountryList',
      regionBlockProvinceList: 'RegionBlockProvinceList',
      sourceBlockList: 'SourceBlockList',
      sourceLimit: 'SourceLimit',
      whitenGfbrNets: 'WhitenGfbrNets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackIpListExpireAt: 'number',
      enableDropIcmp: 'boolean',
      enableIntelligence: 'boolean',
      enableL4Defense: 'boolean',
      fingerPrintRuleList: { 'type': 'array', 'itemType': ListPolicyResponseBodyPolicyListContentFingerPrintRuleList },
      intelligenceLevel: 'string',
      l4RuleList: { 'type': 'array', 'itemType': ListPolicyResponseBodyPolicyListContentL4RuleList },
      portRuleList: { 'type': 'array', 'itemType': ListPolicyResponseBodyPolicyListContentPortRuleList },
      reflectBlockUdpPortList: { 'type': 'array', 'itemType': 'number' },
      regionBlockCountryList: { 'type': 'array', 'itemType': 'number' },
      regionBlockProvinceList: { 'type': 'array', 'itemType': 'number' },
      sourceBlockList: { 'type': 'array', 'itemType': ListPolicyResponseBodyPolicyListContentSourceBlockList },
      sourceLimit: ListPolicyResponseBodyPolicyListContentSourceLimit,
      whitenGfbrNets: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.fingerPrintRuleList)) {
      $dara.Model.validateArray(this.fingerPrintRuleList);
    }
    if(Array.isArray(this.l4RuleList)) {
      $dara.Model.validateArray(this.l4RuleList);
    }
    if(Array.isArray(this.portRuleList)) {
      $dara.Model.validateArray(this.portRuleList);
    }
    if(Array.isArray(this.reflectBlockUdpPortList)) {
      $dara.Model.validateArray(this.reflectBlockUdpPortList);
    }
    if(Array.isArray(this.regionBlockCountryList)) {
      $dara.Model.validateArray(this.regionBlockCountryList);
    }
    if(Array.isArray(this.regionBlockProvinceList)) {
      $dara.Model.validateArray(this.regionBlockProvinceList);
    }
    if(Array.isArray(this.sourceBlockList)) {
      $dara.Model.validateArray(this.sourceBlockList);
    }
    if(this.sourceLimit && typeof (this.sourceLimit as any).validate === 'function') {
      (this.sourceLimit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyResponseBodyPolicyList extends $dara.Model {
  /**
   * @remarks
   * The number of protected objects that are added to the policy.
   * 
   * @example
   * 0
   */
  attachedCount?: number;
  /**
   * @remarks
   * The content of the policy.
   */
  content?: ListPolicyResponseBodyPolicyListContent;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * 877afbdf-3982-4d36-9886-f043********
   */
  id?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * test**
   */
  name?: string;
  /**
   * @remarks
   * The remarks of the policy.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   **default**: the default mitigation policy.
   * *   **l3**: IP-specific mitigation policies.
   * *   **l4**: port-specific mitigation policies.
   * 
   * @example
   * l3
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attachedCount: 'AttachedCount',
      content: 'Content',
      id: 'Id',
      name: 'Name',
      remark: 'Remark',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedCount: 'number',
      content: ListPolicyResponseBodyPolicyListContent,
      id: 'string',
      name: 'string',
      remark: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentRequestIpPortProtocolList extends $dara.Model {
  /**
   * @remarks
   * The IP address of the protected object.
   * 
   * This parameter is required.
   * 
   * @example
   * 47.118.172.***
   */
  ip?: string;
  /**
   * @remarks
   * The port number of the protected object.
   * 
   * @example
   * 8*
   */
  port?: number;
  /**
   * @remarks
   * The protocol type of the protected object. Valid values:
   * 
   * *   **tcp**
   * *   **udp**
   * 
   * @example
   * tcp
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentResponseBodyAttachmentList extends $dara.Model {
  /**
   * @remarks
   * The IP address of the protected object.
   * 
   * @example
   * 147.139.183.***
   */
  ip?: string;
  /**
   * @remarks
   * The UID of the member to which the IP address of the protected object belongs.
   * 
   * @example
   * 177699790631****
   */
  memberUid?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * 1b43f44e-65e1-411a-b0c0-d6c1********
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * test**
   */
  policyName?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * test
   */
  policyRemark?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   **l3**: IP-specific mitigation policies.
   * *   **l4**: port-specific mitigation policies.
   * 
   * @example
   * l3
   */
  policyType?: string;
  /**
   * @remarks
   * The port number of the protected object.
   * 
   * @example
   * 8*
   */
  port?: number;
  /**
   * @remarks
   * The protocol type of the protected object. Valid values:
   * 
   * *   **tcp**
   * *   **udp**
   * 
   * @example
   * udp
   */
  protocol?: string;
  /**
   * @remarks
   * The region to which the IP address of the protected object belongs.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      memberUid: 'MemberUid',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      policyRemark: 'PolicyRemark',
      policyType: 'PolicyType',
      port: 'Port',
      protocol: 'Protocol',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      memberUid: 'string',
      policyId: 'string',
      policyName: 'string',
      policyRemark: 'string',
      policyType: 'string',
      port: 'number',
      protocol: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBodyTagKeys extends $dara.Model {
  /**
   * @remarks
   * The total number of tag values that correspond to each key.
   * 
   * @example
   * 1
   */
  tagCount?: number;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * a
   */
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagCount: 'TagCount',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagCount: 'number',
      tagKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag to query.
   * 
   * >  The **ResourceId** parameter and the **key-value pair for the Tag parameter** cannot be left empty at the same time.
   * 
   * @example
   * testKey1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag to query.
   * 
   * >  The **ResourceId** parameter and the **key-value pair for the Tag parameter** cannot be left empty at the same time.
   * 
   * @example
   * testValue1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance.
   * 
   * @example
   * ddosbgp-cn-n6w1r7nz****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. The value is set to **INSTANCE**.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag that is added to the instance.
   * 
   * @example
   * testKey1
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag that is added to the instance.
   * 
   * @example
   * testValue1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  validate() {
    if(Array.isArray(this.tagResource)) {
      $dara.Model.validateArray(this.tagResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyRequestContentFingerPrintRuleList extends $dara.Model {
  /**
   * @remarks
   * The end of the destination port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 65535
   */
  dstPortEnd?: number;
  /**
   * @remarks
   * The start of the destination port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  dstPortStart?: number;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 5fbe941f-a0cf-4a49-9c7c-8fac********
   */
  id?: string;
  /**
   * @remarks
   * The action triggered if the rule is matched. Valid values:
   * 
   * *   **accept**: allows the traffic that matches the conditions in the byte-match filter rule.
   * *   **drop**: discards the traffic that matches the conditions in the byte-match filter rule.
   * *   **ip_rate**: limits rates on the source IP address whose traffic matches the conditions in the byte-match filter rule. The rate limit is specified by **RateValue**.
   * *   **session_rate**: limits the number of sessions from the source IP address whose traffic matches the conditions in the byte-match filter rule. The rate limit is specified by **RateValue**.
   * 
   * This parameter is required.
   * 
   * @example
   * drop
   */
  matchAction?: string;
  /**
   * @remarks
   * The maximum packet length. Valid values: **1** to **1500**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1500
   */
  maxPktLen?: number;
  /**
   * @remarks
   * The minimum packet length. Valid values: **1** to **1500**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  minPktLen?: number;
  /**
   * @remarks
   * The offset. Valid values: **0** to **1500**.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The payload. The value is a hexadecimal string.
   * 
   * @example
   * abcd
   */
  payloadBytes?: string;
  /**
   * @remarks
   * The type of the protocol. Valid values:
   * 
   * *   **tcp**
   * *   **udp**
   * 
   * This parameter is required.
   * 
   * @example
   * udp
   */
  protocol?: string;
  /**
   * @remarks
   * The rate limit. Valid values: **1** to **100000**.
   * 
   * >  This parameter is required when **MatchAction** is set to **ip_rate** or **session_rate**.
   * 
   * @example
   * 100
   */
  rateValue?: number;
  /**
   * @remarks
   * The sequence number that indicates the order for the rule to take effect. The value is an integer.
   * 
   * >  A smaller number indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  seqNo?: number;
  /**
   * @remarks
   * The end of the source port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 65535
   */
  srcPortEnd?: number;
  /**
   * @remarks
   * The start of the source port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  srcPortStart?: number;
  static names(): { [key: string]: string } {
    return {
      dstPortEnd: 'DstPortEnd',
      dstPortStart: 'DstPortStart',
      id: 'Id',
      matchAction: 'MatchAction',
      maxPktLen: 'MaxPktLen',
      minPktLen: 'MinPktLen',
      offset: 'Offset',
      payloadBytes: 'PayloadBytes',
      protocol: 'Protocol',
      rateValue: 'RateValue',
      seqNo: 'SeqNo',
      srcPortEnd: 'SrcPortEnd',
      srcPortStart: 'SrcPortStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstPortEnd: 'number',
      dstPortStart: 'number',
      id: 'string',
      matchAction: 'string',
      maxPktLen: 'number',
      minPktLen: 'number',
      offset: 'number',
      payloadBytes: 'string',
      protocol: 'string',
      rateValue: 'number',
      seqNo: 'number',
      srcPortEnd: 'number',
      srcPortStart: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyRequestContentL4RuleListConditionList extends $dara.Model {
  /**
   * @remarks
   * The term that is used for matching.
   * 
   * >  If Method is set to **char**, the value of this parameter must be ASCII strings. If Method is set to **hex**, the value of this parameter must be hexadecimal strings. Maximum length: 2,048.
   * 
   * This parameter is required.
   * 
   * @example
   * abcd
   */
  arg?: string;
  /**
   * @remarks
   * The number of bytes from the start position for matching. Valid values: **1** to **2048**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1200
   */
  depth?: number;
  /**
   * @remarks
   * The start position for matching. Valid values: **0** to **2047**.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  position?: number;
  static names(): { [key: string]: string } {
    return {
      arg: 'Arg',
      depth: 'Depth',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      depth: 'number',
      position: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyRequestContentL4RuleList extends $dara.Model {
  /**
   * @remarks
   * The action that is specified in the rule. Valid value:
   * 
   * *   **2**: The traffic is discarded.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  action?: string;
  /**
   * @remarks
   * The match conditions.
   * 
   * This parameter is required.
   */
  conditionList?: ModifyPolicyRequestContentL4RuleListConditionList[];
  /**
   * @remarks
   * The minimum number of bytes in a session to trigger matching. Valid values: **0** to **2048**.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  limited?: number;
  /**
   * @remarks
   * The condition based on which an action is performed. Valid values:
   * 
   * *   **0**: If the rule is matched, the action specified in the rule is performed.
   * *   **1**: If the rule is not matched, the action specified in the rule is performed.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  match?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   **char**: string match.
   * *   **hex**: hexadecimal string match.
   * 
   * This parameter is required.
   * 
   * @example
   * char
   */
  method?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * test****
   */
  name?: string;
  /**
   * @remarks
   * The priority of the rule. Valid values: **1** to **100**.
   * 
   * >  A smaller value indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      conditionList: 'ConditionList',
      limited: 'Limited',
      match: 'Match',
      method: 'Method',
      name: 'Name',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      conditionList: { 'type': 'array', 'itemType': ModifyPolicyRequestContentL4RuleListConditionList },
      limited: 'number',
      match: 'string',
      method: 'string',
      name: 'string',
      priority: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.conditionList)) {
      $dara.Model.validateArray(this.conditionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyRequestContentPortRuleList extends $dara.Model {
  /**
   * @remarks
   * The end of the destination port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 65535
   */
  dstPortEnd?: number;
  /**
   * @remarks
   * The start of the destination port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  dstPortStart?: number;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * c52c2fa6-fdac-40c4-8753-be7c*********
   */
  id?: string;
  /**
   * @remarks
   * The action triggered if the rule is matched. Valid values:
   * 
   * *   **drop**: The traffic is discarded.
   * 
   * This parameter is required.
   * 
   * @example
   * drop
   */
  matchAction?: string;
  /**
   * @remarks
   * The type of the protocol. Valid values:
   * 
   * *   **tcp**
   * *   **udp**
   * 
   * This parameter is required.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * The sequence number that indicates the order for the rule to take effect. The value is an integer.
   * 
   * >  A smaller number indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  seqNo?: number;
  /**
   * @remarks
   * The end of the source port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 65535
   */
  srcPortEnd?: number;
  /**
   * @remarks
   * The start of the source port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  srcPortStart?: number;
  static names(): { [key: string]: string } {
    return {
      dstPortEnd: 'DstPortEnd',
      dstPortStart: 'DstPortStart',
      id: 'Id',
      matchAction: 'MatchAction',
      protocol: 'Protocol',
      seqNo: 'SeqNo',
      srcPortEnd: 'SrcPortEnd',
      srcPortStart: 'SrcPortStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstPortEnd: 'number',
      dstPortStart: 'number',
      id: 'string',
      matchAction: 'string',
      protocol: 'string',
      seqNo: 'number',
      srcPortEnd: 'number',
      srcPortStart: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyRequestContentSourceBlockList extends $dara.Model {
  /**
   * @remarks
   * The validity period of the blacklist to which the source IP address is added. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 120
   */
  blockExpireSeconds?: number;
  /**
   * @remarks
   * The statistical period during which the system collects data on source IP addresses to determine whether to add the source IP addresses to the blacklist. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  everySeconds?: number;
  /**
   * @remarks
   * The number of times that the source IP address exceeds a limit in a statistical period.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  exceedLimitTimes?: number;
  /**
   * @remarks
   * The type of the source rate limit. Valid values:
   * 
   * *   **3**: the pps limit on source IP addresses.
   * *   **4**: the bandwidth limit on source IP addresses.
   * *   **5**: the pps limit on source SYN packets.
   * *   **6**: the bandwidth limit on source SYN packets.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      blockExpireSeconds: 'BlockExpireSeconds',
      everySeconds: 'EverySeconds',
      exceedLimitTimes: 'ExceedLimitTimes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockExpireSeconds: 'number',
      everySeconds: 'number',
      exceedLimitTimes: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyRequestContentSourceLimit extends $dara.Model {
  /**
   * @remarks
   * The bandwidth limit on source IP addresses. Unit: bytes per second.
   * 
   * @example
   * 2048
   */
  bps?: number;
  /**
   * @remarks
   * The packets per second (pps) limit on source IP addresses.
   * 
   * @example
   * 64
   */
  pps?: number;
  /**
   * @remarks
   * The bandwidth limit on source SYN packets. Unit: bytes per second.
   * 
   * @example
   * 2048
   */
  synBps?: number;
  /**
   * @remarks
   * The pps limit on source SYN packets.
   * 
   * @example
   * 64
   */
  synPps?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      pps: 'Pps',
      synBps: 'SynBps',
      synPps: 'SynPps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      pps: 'number',
      synBps: 'number',
      synPps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyRequestContent extends $dara.Model {
  /**
   * @remarks
   * The IP addresses in the blacklist.
   */
  blackIpList?: string[];
  /**
   * @remarks
   * The validity period of the IP address blacklist. The value is a UNIX timestamp.
   * 
   * @example
   * 1716878000
   */
  blackIpListExpireAt?: number;
  /**
   * @remarks
   * Specifies whether to enable ICMP blocking.
   * 
   * @example
   * true
   */
  enableDropIcmp?: boolean;
  /**
   * @remarks
   * Specifies whether to enable intelligent protection.
   * 
   * @example
   * true
   */
  enableIntelligence?: boolean;
  /**
   * @remarks
   * Specifies whether to enable port-specific mitigation.
   * 
   * @example
   * true
   */
  enableL4Defense?: boolean;
  /**
   * @remarks
   * The byte-match filter rules.
   */
  fingerPrintRuleList?: ModifyPolicyRequestContentFingerPrintRuleList[];
  /**
   * @remarks
   * The level of intelligent protection. Valid values:
   * 
   * *   **default**: normal.
   * *   **hard**: strict.
   * *   **weak**: loose.
   * 
   * @example
   * default
   */
  intelligenceLevel?: string;
  /**
   * @remarks
   * The port-specific mitigation rules.
   */
  l4RuleList?: ModifyPolicyRequestContentL4RuleList[];
  /**
   * @remarks
   * The port blocking rules.
   */
  portRuleList?: ModifyPolicyRequestContentPortRuleList[];
  /**
   * @remarks
   * The ports whose traffic is filtered out by the filtering policies for UDP reflection attacks.
   */
  reflectBlockUdpPortList?: number[];
  /**
   * @remarks
   * The countries in the location blacklist.
   */
  regionBlockCountryList?: number[];
  /**
   * @remarks
   * The provinces in the location blacklist.
   */
  regionBlockProvinceList?: number[];
  /**
   * @remarks
   * The source IP addresses that are added to the blacklist.
   */
  sourceBlockList?: ModifyPolicyRequestContentSourceBlockList[];
  /**
   * @remarks
   * The settings for source rate limiting.
   */
  sourceLimit?: ModifyPolicyRequestContentSourceLimit;
  /**
   * @remarks
   * The IP addresses in the whitelist.
   */
  whiteIpList?: string[];
  /**
   * @remarks
   * Specifies whether to add back-to-origin CIDR blocks of Anti-DDoS Proxy to the whitelist.
   * 
   * @example
   * false
   */
  whitenGfbrNets?: boolean;
  static names(): { [key: string]: string } {
    return {
      blackIpList: 'BlackIpList',
      blackIpListExpireAt: 'BlackIpListExpireAt',
      enableDropIcmp: 'EnableDropIcmp',
      enableIntelligence: 'EnableIntelligence',
      enableL4Defense: 'EnableL4Defense',
      fingerPrintRuleList: 'FingerPrintRuleList',
      intelligenceLevel: 'IntelligenceLevel',
      l4RuleList: 'L4RuleList',
      portRuleList: 'PortRuleList',
      reflectBlockUdpPortList: 'ReflectBlockUdpPortList',
      regionBlockCountryList: 'RegionBlockCountryList',
      regionBlockProvinceList: 'RegionBlockProvinceList',
      sourceBlockList: 'SourceBlockList',
      sourceLimit: 'SourceLimit',
      whiteIpList: 'WhiteIpList',
      whitenGfbrNets: 'WhitenGfbrNets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackIpList: { 'type': 'array', 'itemType': 'string' },
      blackIpListExpireAt: 'number',
      enableDropIcmp: 'boolean',
      enableIntelligence: 'boolean',
      enableL4Defense: 'boolean',
      fingerPrintRuleList: { 'type': 'array', 'itemType': ModifyPolicyRequestContentFingerPrintRuleList },
      intelligenceLevel: 'string',
      l4RuleList: { 'type': 'array', 'itemType': ModifyPolicyRequestContentL4RuleList },
      portRuleList: { 'type': 'array', 'itemType': ModifyPolicyRequestContentPortRuleList },
      reflectBlockUdpPortList: { 'type': 'array', 'itemType': 'number' },
      regionBlockCountryList: { 'type': 'array', 'itemType': 'number' },
      regionBlockProvinceList: { 'type': 'array', 'itemType': 'number' },
      sourceBlockList: { 'type': 'array', 'itemType': ModifyPolicyRequestContentSourceBlockList },
      sourceLimit: ModifyPolicyRequestContentSourceLimit,
      whiteIpList: { 'type': 'array', 'itemType': 'string' },
      whitenGfbrNets: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.blackIpList)) {
      $dara.Model.validateArray(this.blackIpList);
    }
    if(Array.isArray(this.fingerPrintRuleList)) {
      $dara.Model.validateArray(this.fingerPrintRuleList);
    }
    if(Array.isArray(this.l4RuleList)) {
      $dara.Model.validateArray(this.l4RuleList);
    }
    if(Array.isArray(this.portRuleList)) {
      $dara.Model.validateArray(this.portRuleList);
    }
    if(Array.isArray(this.reflectBlockUdpPortList)) {
      $dara.Model.validateArray(this.reflectBlockUdpPortList);
    }
    if(Array.isArray(this.regionBlockCountryList)) {
      $dara.Model.validateArray(this.regionBlockCountryList);
    }
    if(Array.isArray(this.regionBlockProvinceList)) {
      $dara.Model.validateArray(this.regionBlockProvinceList);
    }
    if(Array.isArray(this.sourceBlockList)) {
      $dara.Model.validateArray(this.sourceBlockList);
    }
    if(this.sourceLimit && typeof (this.sourceLimit as any).validate === 'function') {
      (this.sourceLimit as any).validate();
    }
    if(Array.isArray(this.whiteIpList)) {
      $dara.Model.validateArray(this.whiteIpList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequestContentFingerPrintRuleList extends $dara.Model {
  /**
   * @remarks
   * The end of the destination port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 65535
   */
  dstPortEnd?: number;
  /**
   * @remarks
   * The start of the destination port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  dstPortStart?: number;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 83967609-7ea5-4f6d-a6ea-380b09e****
   */
  id?: string;
  /**
   * @remarks
   * The action triggered if the rule is matched. Valid values:
   * 
   * *   **permit**: allows the traffic that matches the conditions in the byte-match filter rule.
   * *   **drop**: discards the traffic that matches the conditions in the byte-match filter rule.
   * *   **ip_rate**: limits rates on the source IP address whose traffic matches the conditions in the byte-match filter rule. The rate limit is specified by **RateValue**.
   * *   **session_rate**: limits the number of sessions from the source IP address whose traffic matches the conditions in the byte-match filter rule. The rate limit is specified by **RateValue**.
   * 
   * This parameter is required.
   * 
   * @example
   * drop
   */
  matchAction?: string;
  /**
   * @remarks
   * The maximum packet length. Valid values: **1** to **1500**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1500
   */
  maxPktLen?: number;
  /**
   * @remarks
   * The minimum packet length. Valid values: **1** to **1500**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  minPktLen?: number;
  /**
   * @remarks
   * The offset. Valid values: **0** to **1500**.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The payload. The value is a hexadecimal string.
   * 
   * @example
   * abcd
   */
  payloadBytes?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * *   **tcp**
   * *   **udp**
   * 
   * This parameter is required.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * The rate limit. Valid values: **1** to **100000**.
   * 
   * >  This parameter is required when **MatchAction** is set to **ip_rate** or **session_rate**.
   * 
   * @example
   * 100
   */
  rateValue?: number;
  /**
   * @remarks
   * The sequence number that indicates the order for the rule to take effect. The value is an integer.
   * 
   * >  A smaller number indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  seqNo?: number;
  /**
   * @remarks
   * The end of the source port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 65535
   */
  srcPortEnd?: number;
  /**
   * @remarks
   * The start of the source port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  srcPortStart?: number;
  static names(): { [key: string]: string } {
    return {
      dstPortEnd: 'DstPortEnd',
      dstPortStart: 'DstPortStart',
      id: 'Id',
      matchAction: 'MatchAction',
      maxPktLen: 'MaxPktLen',
      minPktLen: 'MinPktLen',
      offset: 'Offset',
      payloadBytes: 'PayloadBytes',
      protocol: 'Protocol',
      rateValue: 'RateValue',
      seqNo: 'SeqNo',
      srcPortEnd: 'SrcPortEnd',
      srcPortStart: 'SrcPortStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstPortEnd: 'number',
      dstPortStart: 'number',
      id: 'string',
      matchAction: 'string',
      maxPktLen: 'number',
      minPktLen: 'number',
      offset: 'number',
      payloadBytes: 'string',
      protocol: 'string',
      rateValue: 'number',
      seqNo: 'number',
      srcPortEnd: 'number',
      srcPortStart: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequestContentL4RuleListConditionList extends $dara.Model {
  /**
   * @remarks
   * The term that is used for matching.
   * 
   * >  If Method is set to **char**, the value of this parameter must be ASCII strings. If Method is set to **hex**, the value of this parameter must be hexadecimal strings. Maximum length: 2,048.
   * 
   * This parameter is required.
   * 
   * @example
   * abcd
   */
  arg?: string;
  /**
   * @remarks
   * The number of bytes from the start position for matching. Valid values: **1** to **2048**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1200
   */
  depth?: number;
  /**
   * @remarks
   * The start position for matching. Valid values: **0** to **2047**.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  position?: number;
  static names(): { [key: string]: string } {
    return {
      arg: 'Arg',
      depth: 'Depth',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      depth: 'number',
      position: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequestContentL4RuleList extends $dara.Model {
  /**
   * @remarks
   * The action that is specified in the rule. Valid value:
   * 
   * *   **2**: The traffic is discarded.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  action?: string;
  /**
   * @remarks
   * The match conditions.
   * 
   * This parameter is required.
   */
  conditionList?: ModifyPolicyContentRequestContentL4RuleListConditionList[];
  /**
   * @remarks
   * The minimum number of bytes in a session to trigger matching. Valid values: **0** to **2048**.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  limited?: number;
  /**
   * @remarks
   * The condition based on which an action is performed. Valid values:
   * 
   * *   **0**: If the rule is matched, the action specified in the rule is performed.
   * *   **1**: If the rule is not matched, the action specified in the rule is performed.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  match?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   **char**: string match.
   * *   **hex**: hexadecimal string match.
   * 
   * This parameter is required.
   * 
   * @example
   * char
   */
  method?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * test**
   */
  name?: string;
  /**
   * @remarks
   * The priority of the rule. Valid values: 1 to 100.
   * 
   * >  A smaller value indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      conditionList: 'ConditionList',
      limited: 'Limited',
      match: 'Match',
      method: 'Method',
      name: 'Name',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      conditionList: { 'type': 'array', 'itemType': ModifyPolicyContentRequestContentL4RuleListConditionList },
      limited: 'number',
      match: 'string',
      method: 'string',
      name: 'string',
      priority: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.conditionList)) {
      $dara.Model.validateArray(this.conditionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequestContentPortRuleList extends $dara.Model {
  /**
   * @remarks
   * The end of the destination port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 65535
   */
  dstPortEnd?: number;
  /**
   * @remarks
   * The start of the destination port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  dstPortStart?: number;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 412a7312-58ff-4e32-a202-0ab0*******
   */
  id?: string;
  /**
   * @remarks
   * The action triggered if the rule is matched. Valid values:
   * 
   * *   **drop**: The traffic is discarded.
   * 
   * This parameter is required.
   * 
   * @example
   * drop
   */
  matchAction?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * *   **tcp**
   * *   **udp**
   * 
   * This parameter is required.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * The sequence number that indicates the order for the rule to take effect. The value is an integer.
   * 
   * >  A smaller number indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  seqNo?: number;
  /**
   * @remarks
   * The end of the source port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 65535
   */
  srcPortEnd?: number;
  /**
   * @remarks
   * The start of the source port range. Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  srcPortStart?: number;
  static names(): { [key: string]: string } {
    return {
      dstPortEnd: 'DstPortEnd',
      dstPortStart: 'DstPortStart',
      id: 'Id',
      matchAction: 'MatchAction',
      protocol: 'Protocol',
      seqNo: 'SeqNo',
      srcPortEnd: 'SrcPortEnd',
      srcPortStart: 'SrcPortStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstPortEnd: 'number',
      dstPortStart: 'number',
      id: 'string',
      matchAction: 'string',
      protocol: 'string',
      seqNo: 'number',
      srcPortEnd: 'number',
      srcPortStart: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequestContentSourceBlockList extends $dara.Model {
  /**
   * @remarks
   * The validity period of the blacklist to which the source IP address is added. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 120
   */
  blockExpireSeconds?: number;
  /**
   * @remarks
   * The statistical period during which the system collects data on source IP addresses to determine whether to add the source IP addresses to the blacklist. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  everySeconds?: number;
  /**
   * @remarks
   * The number of times that the source IP address exceeds a limit in a statistical period.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  exceedLimitTimes?: number;
  /**
   * @remarks
   * The type of the source rate limit. Valid values:
   * 
   * *   **3**: the pps limit on source IP addresses.
   * *   **4**: the bandwidth limit on source IP addresses.
   * *   **5**: the pps limit on source SYN packets.
   * *   **6**: the bandwidth limit on source SYN packets.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      blockExpireSeconds: 'BlockExpireSeconds',
      everySeconds: 'EverySeconds',
      exceedLimitTimes: 'ExceedLimitTimes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockExpireSeconds: 'number',
      everySeconds: 'number',
      exceedLimitTimes: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequestContentSourceLimit extends $dara.Model {
  /**
   * @remarks
   * The bandwidth limit on source IP addresses. Unit: bytes per second.
   * 
   * @example
   * 2048
   */
  bps?: number;
  /**
   * @remarks
   * The packets per second (pps) limit on source IP addresses.
   * 
   * @example
   * 64
   */
  pps?: number;
  /**
   * @remarks
   * The bandwidth limit on source SYN packets. Unit: bytes per second.
   * 
   * @example
   * 2048
   */
  synBps?: number;
  /**
   * @remarks
   * The pps limit on source SYN packets.
   * 
   * @example
   * 64
   */
  synPps?: number;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      pps: 'Pps',
      synBps: 'SynBps',
      synPps: 'SynPps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      pps: 'number',
      synBps: 'number',
      synPps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequestContent extends $dara.Model {
  /**
   * @remarks
   * The validity period of the IP address blacklist. The value is a UNIX timestamp.
   * 
   * @example
   * 1716878000
   */
  blackIpListExpireAt?: number;
  /**
   * @remarks
   * Specifies whether to enable ICMP blocking.
   * 
   * @example
   * true
   */
  enableDropIcmp?: boolean;
  /**
   * @remarks
   * Specifies whether to enable intelligent protection.
   * 
   * @example
   * true
   */
  enableIntelligence?: boolean;
  /**
   * @remarks
   * Specifies whether to enable port-specific mitigation.
   * 
   * @example
   * true
   */
  enableL4Defense?: boolean;
  /**
   * @remarks
   * The byte-match filter rules.
   */
  fingerPrintRuleList?: ModifyPolicyContentRequestContentFingerPrintRuleList[];
  /**
   * @remarks
   * The level of intelligent protection. Valid values:
   * 
   * *   **default**: normal.
   * *   **hard**: strict.
   * *   **weak**: loose.
   * 
   * @example
   * default
   */
  intelligenceLevel?: string;
  /**
   * @remarks
   * The port-specific mitigation rules.
   */
  l4RuleList?: ModifyPolicyContentRequestContentL4RuleList[];
  /**
   * @remarks
   * The port blocking rules.
   */
  portRuleList?: ModifyPolicyContentRequestContentPortRuleList[];
  /**
   * @remarks
   * The ports whose traffic is filtered out by the filtering policies for UDP reflection attacks.
   */
  reflectBlockUdpPortList?: number[];
  /**
   * @remarks
   * The countries in the location blacklist.
   */
  regionBlockCountryList?: number[];
  /**
   * @remarks
   * The provinces in the location blacklist.
   */
  regionBlockProvinceList?: number[];
  /**
   * @remarks
   * The source IP addresses that are added to the blacklist.
   */
  sourceBlockList?: ModifyPolicyContentRequestContentSourceBlockList[];
  /**
   * @remarks
   * The settings for source rate limiting.
   */
  sourceLimit?: ModifyPolicyContentRequestContentSourceLimit;
  /**
   * @remarks
   * Specifies whether to add back-to-origin CIDR blocks of Anti-DDoS Proxy to the whitelist.
   * 
   * @example
   * false
   */
  whitenGfbrNets?: boolean;
  static names(): { [key: string]: string } {
    return {
      blackIpListExpireAt: 'BlackIpListExpireAt',
      enableDropIcmp: 'EnableDropIcmp',
      enableIntelligence: 'EnableIntelligence',
      enableL4Defense: 'EnableL4Defense',
      fingerPrintRuleList: 'FingerPrintRuleList',
      intelligenceLevel: 'IntelligenceLevel',
      l4RuleList: 'L4RuleList',
      portRuleList: 'PortRuleList',
      reflectBlockUdpPortList: 'ReflectBlockUdpPortList',
      regionBlockCountryList: 'RegionBlockCountryList',
      regionBlockProvinceList: 'RegionBlockProvinceList',
      sourceBlockList: 'SourceBlockList',
      sourceLimit: 'SourceLimit',
      whitenGfbrNets: 'WhitenGfbrNets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackIpListExpireAt: 'number',
      enableDropIcmp: 'boolean',
      enableIntelligence: 'boolean',
      enableL4Defense: 'boolean',
      fingerPrintRuleList: { 'type': 'array', 'itemType': ModifyPolicyContentRequestContentFingerPrintRuleList },
      intelligenceLevel: 'string',
      l4RuleList: { 'type': 'array', 'itemType': ModifyPolicyContentRequestContentL4RuleList },
      portRuleList: { 'type': 'array', 'itemType': ModifyPolicyContentRequestContentPortRuleList },
      reflectBlockUdpPortList: { 'type': 'array', 'itemType': 'number' },
      regionBlockCountryList: { 'type': 'array', 'itemType': 'number' },
      regionBlockProvinceList: { 'type': 'array', 'itemType': 'number' },
      sourceBlockList: { 'type': 'array', 'itemType': ModifyPolicyContentRequestContentSourceBlockList },
      sourceLimit: ModifyPolicyContentRequestContentSourceLimit,
      whitenGfbrNets: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.fingerPrintRuleList)) {
      $dara.Model.validateArray(this.fingerPrintRuleList);
    }
    if(Array.isArray(this.l4RuleList)) {
      $dara.Model.validateArray(this.l4RuleList);
    }
    if(Array.isArray(this.portRuleList)) {
      $dara.Model.validateArray(this.portRuleList);
    }
    if(Array.isArray(this.reflectBlockUdpPortList)) {
      $dara.Model.validateArray(this.reflectBlockUdpPortList);
    }
    if(Array.isArray(this.regionBlockCountryList)) {
      $dara.Model.validateArray(this.regionBlockCountryList);
    }
    if(Array.isArray(this.regionBlockProvinceList)) {
      $dara.Model.validateArray(this.regionBlockProvinceList);
    }
    if(Array.isArray(this.sourceBlockList)) {
      $dara.Model.validateArray(this.sourceBlockList);
    }
    if(this.sourceLimit && typeof (this.sourceLimit as any).validate === 'function') {
      (this.sourceLimit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySchedruleOnDemandResponseBodyRuleConfig extends $dara.Model {
  /**
   * @remarks
   * The scheduling action. The value is set to **declare**, which indicates that the route is advertised.
   * 
   * @example
   * declare
   */
  ruleAction?: string;
  /**
   * @remarks
   * If the inbound bandwidth or packets consecutively exceed the threshold for the specified number of times, the scheduling rule is triggered and traffic is rerouted to the on-demand instance. The specified number of times is the value of this parameter.
   * 
   * >  The threshold of inbound bandwidth is the value of **RuleConditionMbps**. The threshold of inbound packets is the value of **RuleConditionKpps**.
   * 
   * @example
   * 3
   */
  ruleConditionCnt?: string;
  /**
   * @remarks
   * The threshold of inbound packets. Unit: kilo packets per second (Kpps). Minimum value: **10**.
   * 
   * @example
   * 10
   */
  ruleConditionKpps?: string;
  /**
   * @remarks
   * The threshold of inbound bandwidth. Unit: Mbit/s. Minimum value: **100**.
   * 
   * @example
   * 100
   */
  ruleConditionMbps?: string;
  /**
   * @remarks
   * The name of the scheduling rule.
   * 
   * @example
   * ddosbgp-cn-z2q1qzxb****
   */
  ruleName?: string;
  /**
   * @remarks
   * Indicates whether the scheduling rule is enabled. Valid values:
   * 
   * *   **on**: enabled.
   * *   **off**: disabled.
   * 
   * @example
   * on
   */
  ruleSwitch?: string;
  /**
   * @remarks
   * The start time of the period during which the scheduling rule is automatically stopped. The time must be in the 24-hour clock and in the `hh:mm` format.
   * 
   * If the system detects that DDoS attacks stop, the system no longer reroutes traffic to the on-demand instance from the time you specified. We recommend that you set this parameter to a value that is defined as off-peak hours.
   * 
   * >  This parameter takes effect only when the value of **RuleUndoMode** is **auto**.
   * 
   * @example
   * 03:00
   */
  ruleUndoBeginTime?: string;
  /**
   * @remarks
   * The end time of the period during which the scheduling rule is automatically stopped. The time must be in the 24-hour clock and in the `hh:mm` format.
   * 
   * @example
   * 03:05
   */
  ruleUndoEndTime?: string;
  /**
   * @remarks
   * The stop method of the scheduling rule. Valid values:
   * 
   * *   **auto**
   * *   **manual**
   * 
   * @example
   * auto
   */
  ruleUndoMode?: string;
  /**
   * @remarks
   * The time zone of the time when the scheduling rule automatically stops. The time zone must be in the `GMT-hh:mm` format.
   * 
   * For example, the value `GMT-08:00` indicates that the time zone is UTC+8.
   * 
   * >  This parameter takes effect only when the value of **RuleUndoMode** is **auto**.
   * 
   * @example
   * GMT-08:00
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      ruleAction: 'RuleAction',
      ruleConditionCnt: 'RuleConditionCnt',
      ruleConditionKpps: 'RuleConditionKpps',
      ruleConditionMbps: 'RuleConditionMbps',
      ruleName: 'RuleName',
      ruleSwitch: 'RuleSwitch',
      ruleUndoBeginTime: 'RuleUndoBeginTime',
      ruleUndoEndTime: 'RuleUndoEndTime',
      ruleUndoMode: 'RuleUndoMode',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleAction: 'string',
      ruleConditionCnt: 'string',
      ruleConditionKpps: 'string',
      ruleConditionMbps: 'string',
      ruleName: 'string',
      ruleSwitch: 'string',
      ruleUndoBeginTime: 'string',
      ruleUndoEndTime: 'string',
      ruleUndoMode: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySchedruleOnDemandResponseBodyRuleStatus extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the on-demand instance.
   * 
   * @example
   * 47.***.***.0/24
   */
  net?: string;
  /**
   * @remarks
   * The scheduling status. Valid values:
   * 
   * *   **scheduled**
   * *   **unscheduled**
   * 
   * @example
   * unscheduled
   */
  ruleSchedStatus?: string;
  static names(): { [key: string]: string } {
    return {
      net: 'Net',
      ruleSchedStatus: 'RuleSchedStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      net: 'string',
      ruleSchedStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag to add.
   * 
   * > If the specified key does not exist, a key is created.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag to add.
   * 
   * > If the specified tag value does not exist, the tag value is created.
   * 
   * @example
   * test-value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIpRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance.
   * 
   * >  You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-npk1z7t9****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP addresses that you want to add to the Anti-DDoS Origin instance. This parameter is a string consisting of JSON arrays. Each element in a JSON array is a JSON struct that includes the following fields:
   * 
   * *   **ip**: required. The IP address that you want to add. Data type: string.
   * *   **member_uid**: optional. The member to which the asset belongs. Data type: string. This field is required only if the asset of a member is queried. Example: [{"ip":"121.41.XX.XX","member_uid":"120100811162\\*\\*\\*\\*"}].
   * 
   * This parameter is required.
   * 
   * @example
   * [{"ip":"1.XX.XX.1"},{"ip":"2.XX.XX.2"}]
   */
  ipList?: string;
  /**
   * @remarks
   * The ID of the region where the Anti-DDoS Origin instance resides.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management. This parameter is empty by default, which indicates that the Anti-DDoS Origin instance belongs to the default resource group.
   * 
   * For information about resource groups, see [Create a resource group](https://help.aliyun.com/document_detail/94485.html).
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipList: 'IpList',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipList: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddIpResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddIpResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRdMemberListRequest extends $dara.Model {
  /**
   * @remarks
   * The list of the members.
   * 
   * This parameter is required.
   */
  memberList?: AddRdMemberListRequestMemberList[];
  static names(): { [key: string]: string } {
    return {
      memberList: 'MemberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberList: { 'type': 'array', 'itemType': AddRdMemberListRequestMemberList },
    };
  }

  validate() {
    if(Array.isArray(this.memberList)) {
      $dara.Model.validateArray(this.memberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRdMemberListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of the members.
   * 
   * This parameter is required.
   */
  memberListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      memberListShrink: 'MemberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRdMemberListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C467B38-3910-447D-87BC-AC049166F216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRdMemberListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddRdMemberListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddRdMemberListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAssetGroupToInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the asset to be associated.
   * 
   * This parameter is required.
   */
  assetGroupList?: AttachAssetGroupToInstanceRequestAssetGroupList[];
  /**
   * @remarks
   * The ID of the instance to query.
   * 
   * >  You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances of paid editions.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-n6w1r7nz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      assetGroupList: 'AssetGroupList',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetGroupList: { 'type': 'array', 'itemType': AttachAssetGroupToInstanceRequestAssetGroupList },
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assetGroupList)) {
      $dara.Model.validateArray(this.assetGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAssetGroupToInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the asset to be associated.
   * 
   * This parameter is required.
   */
  assetGroupListShrink?: string;
  /**
   * @remarks
   * The ID of the instance to query.
   * 
   * >  You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances of paid editions.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-n6w1r7nz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      assetGroupListShrink: 'AssetGroupList',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetGroupListShrink: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAssetGroupToInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 52B49F64-5A36-5CE0-BD00-765792C26AA9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAssetGroupToInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachAssetGroupToInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachAssetGroupToInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachToPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The protected objects.
   * 
   * This parameter is required.
   */
  ipPortProtocolList?: AttachToPolicyRequestIpPortProtocolList[];
  /**
   * @remarks
   * The policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cd8b4d70-e4e0-413a-b390-e71d********
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      ipPortProtocolList: 'IpPortProtocolList',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPortProtocolList: { 'type': 'array', 'itemType': AttachToPolicyRequestIpPortProtocolList },
      policyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipPortProtocolList)) {
      $dara.Model.validateArray(this.ipPortProtocolList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachToPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The protected objects.
   * 
   * This parameter is required.
   */
  ipPortProtocolListShrink?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cd8b4d70-e4e0-413a-b390-e71d********
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      ipPortProtocolListShrink: 'IpPortProtocolList',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPortProtocolListShrink: 'string',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachToPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC245DEE-9800-5579-BF99-189D6A5****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachToPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachToPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachToPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccessLogAuthRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the Anti-DDoS Origin instance resides.
   * 
   * For more information about the valid values of this parameter, see [Regions and zones](https://help.aliyun.com/document_detail/188196.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management. This parameter is empty by default, which indicates that the Anti-DDoS Origin instance belongs to the default resource group.
   * 
   * For more information about resource groups, see [Create a resource group](https://help.aliyun.com/document_detail/94485.html).
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccessLogAuthResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Anti-DDoS Origin was authorized to access Simple Log Service. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  accessLogAuth?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 864FE2F4-CB2E-4024-B9EF-D59FD08ABD41
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessLogAuth: 'AccessLogAuth',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogAuth: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAccessLogAuthResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckAccessLogAuthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckAccessLogAuthResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckGrantRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow Anti-DDoS Origin to check the service-linked role. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isSlr?: boolean;
  /**
   * @remarks
   * The ID of the region where the Anti-DDoS Origin instance resides.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management.
   * 
   * If you do not specify this parameter, the instance belongs to the default resource group.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      isSlr: 'IsSlr',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSlr: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckGrantResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DB002CE5-5E6C-5F11-AE15-B525299A40F6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether Anti-DDoS Origin is authorized to obtain information about the assets within the current Alibaba Cloud account. Valid values:
   * 
   * *   **1**: Anti-DDoS Origin is authorized to obtain information about the assets within the current Alibaba Cloud account.
   * *   **0**: Anti-DDoS Origin is not authorized to obtain information about the assets within the current Alibaba Cloud account.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckGrantResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckGrantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckGrantResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigSchedruleOnDemandRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the on-demand instance.
   * 
   * >  You can call the [DescribeOnDemandInstance](https://help.aliyun.com/document_detail/152120.html) operation to query the IDs of all on-demand instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-z2q1qzxb****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the on-demand instance.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The scheduling action. Set the value to **declare**, which indicates that the route is advertised.
   * 
   * This parameter is required.
   * 
   * @example
   * declare
   */
  ruleAction?: string;
  /**
   * @remarks
   * If the inbound bandwidth or packets consecutively exceed the threshold for the specified number of times, the scheduling rule is triggered and traffic is rerouted to the on-demand instance. The specified number of times is the value of this parameter.
   * 
   * >  The threshold of inbound bandwidth is the value of **RuleConditionMbps**. The threshold of inbound packets is the value of **RuleConditionKpps**.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  ruleConditionCnt?: string;
  /**
   * @remarks
   * The threshold of inbound packets. Unit: kilo packets per second (Kpps). Minimum value: **10**.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  ruleConditionKpps?: string;
  /**
   * @remarks
   * The threshold of inbound bandwidth. Unit: Mbit/s. Minimum value: **100**.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  ruleConditionMbps?: string;
  /**
   * @remarks
   * The name of the scheduling rule.
   * 
   * The name can contain lowercase letters, digits, hyphens (-), and underscores (_). The name can be up to 32 characters in length. We recommend that you use the ID of the on-demand instance as the name. Example: `ddosbgp-cn-z2q1qzxb****`.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-z2q1qzxb****
   */
  ruleName?: string;
  /**
   * @remarks
   * Specifies whether the scheduling rule is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  ruleSwitch?: string;
  /**
   * @remarks
   * The start time of the period during which the scheduling rule is automatically stopped. The time must be in the 24-hour clock and in the `hh:mm` format.
   * 
   * If the system detects that DDoS attacks stop, the system no longer reroutes traffic to the on-demand instance from the time you specified. We recommend that you set this parameter to a value that is defined as off-peak hours.
   * 
   * >  This parameter takes effect only when the value of **RuleUndoMode** is **auto**.
   * 
   * This parameter is required.
   * 
   * @example
   * 03:00
   */
  ruleUndoBeginTime?: string;
  /**
   * @remarks
   * The end time of the period during which the scheduling rule is automatically stopped. The time must be in the 24-hour clock and in the `hh:mm` format.
   * 
   * @example
   * 03:05
   */
  ruleUndoEndTime?: string;
  /**
   * @remarks
   * The stop method of the scheduling rule. Valid values:
   * 
   * *   **auto**
   * *   **manual**
   * 
   * This parameter is required.
   * 
   * @example
   * manual
   */
  ruleUndoMode?: string;
  /**
   * @remarks
   * The time zone of the time when the scheduling rule automatically stops. The time zone must be in the `GMT-hh:mm` format.
   * 
   * For example, the value `GMT-08:00` indicates that the time zone is UTC+8.
   * 
   * >  This parameter takes effect only when the value of **RuleUndoMode** is **auto**.
   * 
   * This parameter is required.
   * 
   * @example
   * GMT-08:00
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ruleAction: 'RuleAction',
      ruleConditionCnt: 'RuleConditionCnt',
      ruleConditionKpps: 'RuleConditionKpps',
      ruleConditionMbps: 'RuleConditionMbps',
      ruleName: 'RuleName',
      ruleSwitch: 'RuleSwitch',
      ruleUndoBeginTime: 'RuleUndoBeginTime',
      ruleUndoEndTime: 'RuleUndoEndTime',
      ruleUndoMode: 'RuleUndoMode',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      ruleAction: 'string',
      ruleConditionCnt: 'string',
      ruleConditionKpps: 'string',
      ruleConditionMbps: 'string',
      ruleName: 'string',
      ruleSwitch: 'string',
      ruleUndoBeginTime: 'string',
      ruleUndoEndTime: 'string',
      ruleUndoMode: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigSchedruleOnDemandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD06F539-2FBE-450D-9391-7EFF787128F5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigSchedruleOnDemandResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConfigSchedruleOnDemandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConfigSchedruleOnDemandResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   **l3**: IP-specific mitigation policies.
   * *   **l4**: port-specific mitigation policies.
   * 
   * This parameter is required.
   * 
   * @example
   * l3
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * 83967609-7ea5-4f6d-a6ea-380b09e****
   */
  id?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 864FE2F4-CB2E-4024-B9EF-D59FD08A****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchedruleOnDemandRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the on-demand instance.
   * 
   * >  You can call the [DescribeOnDemandInstance](https://help.aliyun.com/document_detail/152120.html) operation to query the IDs of all on-demand instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-z2q1qzxb****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the on-demand instance.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The scheduling action. Set the value to **declare**, which indicates that the route is advertised.
   * 
   * This parameter is required.
   * 
   * @example
   * declare
   */
  ruleAction?: string;
  /**
   * @remarks
   * If the inbound bandwidth or packets consecutively exceed the threshold for the specified number of times, the scheduling rule is triggered and traffic is rerouted to the on-demand instance. The specified number of times is the value of this parameter.
   * 
   * >  The threshold of inbound bandwidth is the value of **RuleConditionMbps**. The threshold of inbound packets is the value of **RuleConditionKpps**.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  ruleConditionCnt?: string;
  /**
   * @remarks
   * The threshold of inbound packets. Unit: kilo packets per second (Kpps). Minimum value: **10**.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  ruleConditionKpps?: string;
  /**
   * @remarks
   * The threshold of inbound bandwidth. Unit: Mbit/s. Minimum value: **100**.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  ruleConditionMbps?: string;
  /**
   * @remarks
   * The name of the scheduling rule.
   * 
   * The name can contain lowercase letters, digits, hyphens (-), and underscores (_). The name can be up to 32 characters in length. We recommend that you use the ID of the on-demand instance as the name. Example: `ddosbgp-cn-z2q1qzxb****`.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-z2q1qzxb****
   */
  ruleName?: string;
  /**
   * @remarks
   * Specifies whether the scheduling rule is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  ruleSwitch?: string;
  /**
   * @remarks
   * The start time of the period during which the scheduling rule is automatically stopped. The time must be in the 24-hour clock and in the `hh:mm` format.
   * 
   * If the system detects that DDoS attacks stop, the system no longer reroutes traffic to the on-demand instance from the time you specified. We recommend that you set this parameter to a value that is defined as off-peak hours.
   * 
   * >  This parameter takes effect only when the value of **RuleUndoMode** is **auto**.
   * 
   * This parameter is required.
   * 
   * @example
   * 03:00
   */
  ruleUndoBeginTime?: string;
  /**
   * @remarks
   * The end time of the period during which the scheduling rule is automatically stopped. The time must be in the 24-hour clock and in the `hh:mm` format.
   * 
   * @example
   * 03:05
   */
  ruleUndoEndTime?: string;
  /**
   * @remarks
   * The stop method of the scheduling rule. Valid values:
   * 
   * *   **auto**
   * *   **manual**
   * 
   * This parameter is required.
   * 
   * @example
   * auto
   */
  ruleUndoMode?: string;
  /**
   * @remarks
   * The time zone of the time when the scheduling rule automatically stops. The time zone must be in the `GMT-hh:mm` format.
   * 
   * For example, the value `GMT-08:00` indicates that the time zone is UTC+8.
   * 
   * >  This parameter takes effect only when the value of **RuleUndoMode** is **auto**.
   * 
   * This parameter is required.
   * 
   * @example
   * GMT-08:00
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ruleAction: 'RuleAction',
      ruleConditionCnt: 'RuleConditionCnt',
      ruleConditionKpps: 'RuleConditionKpps',
      ruleConditionMbps: 'RuleConditionMbps',
      ruleName: 'RuleName',
      ruleSwitch: 'RuleSwitch',
      ruleUndoBeginTime: 'RuleUndoBeginTime',
      ruleUndoEndTime: 'RuleUndoEndTime',
      ruleUndoMode: 'RuleUndoMode',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      ruleAction: 'string',
      ruleConditionCnt: 'string',
      ruleConditionKpps: 'string',
      ruleConditionMbps: 'string',
      ruleName: 'string',
      ruleSwitch: 'string',
      ruleUndoBeginTime: 'string',
      ruleUndoEndTime: 'string',
      ruleUndoMode: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchedruleOnDemandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD06F539-2FBE-450D-9391-7EFF787128F5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSchedruleOnDemandResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSchedruleOnDemandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSchedruleOnDemandResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBlackholeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance.
   * 
   * >  You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-n6w1r7nz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address for which you want to deactivate blackhole filtering.
   * 
   * >  You can call the [DescribePackIpList](https://help.aliyun.com/document_detail/118701.html) operation to query all the IP addresses that are protected by the Anti-DDoS Origin instance and the protection status of the IP addresses. For example, you can query whether blackhole filtering is triggered for an IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * 47.89.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the region where the Anti-DDoS Origin instance resides.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management.
   * 
   * If you do not specify this parameter, the instance belongs to the default resource group.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ip: 'Ip',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ip: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBlackholeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBlackholeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBlackholeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteBlackholeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance.
   * 
   * >  You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-npk1z7t9****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP addresses that you want to remove from the Anti-DDoS Origin instance. This parameter is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that contains the following fields:
   * 
   * *   **ip**: required. The IP address that you want to remove. Data type: string.
   * 
   *     **
   * 
   *     **Note** The IP addresses that you want to remove must be protected by the Anti-DDoS Origin instance.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"ip":"1.XX.XX.1"},{"ip":"2.XX.XX.2"}]
   */
  ipList?: string;
  /**
   * @remarks
   * The ID of the region where the Anti-DDoS Origin instance resides.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management. This parameter is empty by default, which indicates that the Anti-DDoS Origin instance belongs to the default resource group.
   * 
   * For information about resource groups, see [Create a resource group](https://help.aliyun.com/document_detail/94485.html).
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ipList: 'IpList',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ipList: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIpResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteIpResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 90300b1a-ced8-4437-b4bf-f9a5*******
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD06F539-2FBE-450D-9391-7EFF7871****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRdMemberListRequest extends $dara.Model {
  /**
   * @remarks
   * The list of the members.
   * 
   * This parameter is required.
   */
  memberList?: DeleteRdMemberListRequestMemberList[];
  static names(): { [key: string]: string } {
    return {
      memberList: 'MemberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberList: { 'type': 'array', 'itemType': DeleteRdMemberListRequestMemberList },
    };
  }

  validate() {
    if(Array.isArray(this.memberList)) {
      $dara.Model.validateArray(this.memberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRdMemberListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of the members.
   * 
   * This parameter is required.
   */
  memberListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      memberListShrink: 'MemberList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRdMemberListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A2D6D5FB-FA07-41A8-B093-A2B7B26E72F2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRdMemberListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRdMemberListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRdMemberListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchedruleOnDemandRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the anti-DDoS diversion instance.
   * 
   * >  You can call the [DescribeOnDemandInstance](https://help.aliyun.com/document_detail/152120.html) operation to query the IDs of all anti-DDoS diversion instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-z2q1qzxb****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the anti-DDoS diversion instance.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the scheduling rule that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * testrule
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchedruleOnDemandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD06F539-2FBE-450D-9391-7EFF787128F5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSchedruleOnDemandResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSchedruleOnDemandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSchedruleOnDemandResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the asset. If the asset is a Web Application Firewall (WAF) instance, specify the ID of the WAF instance.
   * 
   * @example
   * waf_v2_public_cn-lbj382l****
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   **waf**: WAF instance
   * *   **ga**: Global Accelerator (GA) instance
   * 
   * This parameter is required.
   * 
   * @example
   * waf
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      region: 'Region',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      region: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the asset.
   */
  assetGroupList?: DescribeAssetGroupResponseBodyAssetGroupList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 487EC0F7-8D14-504E-914E-3A1BC314B581
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      assetGroupList: 'AssetGroupList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetGroupList: { 'type': 'array', 'itemType': DescribeAssetGroupResponseBodyAssetGroupList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.assetGroupList)) {
      $dara.Model.validateArray(this.assetGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAssetGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAssetGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetGroupToInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance to query.
   * 
   * >  You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances of paid editions.
   * 
   * @example
   * ddosbgp-cn-7212zaa5v***
   */
  instanceId?: string;
  /**
   * @remarks
   * The UID of the member to which the asset belongs.
   * 
   * @example
   * 170858869679****
   */
  memberUid?: string;
  /**
   * @remarks
   * The ID of the asset. If the asset is a Web Application Firewall (WAF) instance, specify the ID of the WAF instance.
   * 
   * @example
   * waf_v2_public_cn-lbj382l****
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   **waf**: WAF instance
   * *   **ga**: Global Accelerator (GA) instance
   * 
   * @example
   * waf
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      memberUid: 'MemberUid',
      name: 'Name',
      region: 'Region',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      memberUid: 'string',
      name: 'string',
      region: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetGroupToInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  dataList?: DescribeAssetGroupToInstanceResponseBodyDataList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C73C59B9-9F5C-57FF-A394-13EC8FC3B2FF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeAssetGroupToInstanceResponseBodyDataList },
      requestId: 'string',
      total: 'number',
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

export class DescribeAssetGroupToInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAssetGroupToInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAssetGroupToInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the DDoS attack events to query. This value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1638288000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance to query.
   * 
   * >  You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-n6w1r7nz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The attacked IP address to query.
   * 
   * @example
   * 47.89.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the Anti-DDoS Origin instance resides.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management.
   * 
   * If you do not specify this parameter, the instance belongs to the default resource group.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The start time of the DDoS attack events to query. This value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1633017600
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      ip: 'Ip',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      ip: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the DDoS attack event.
   */
  events?: DescribeDdosEventResponseBodyEvents[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F3B6C3F9-6B21-519D-B976-A1E14166F909
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of DDoS attack events that are returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeDdosEventResponseBodyEvents },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosEventResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDdosEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDdosEventResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosOriginInstanceBillRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a timestamp. Unit: milliseconds. The time span between StartTime and EndTime cannot exceed 30 days.
   * 
   * @example
   * 1711382399410
   */
  endTime?: number;
  /**
   * @remarks
   * Specifies whether to display the bill details. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  isShowList?: boolean;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a timestamp. Unit: milliseconds.
   * 
   * @example
   * 1711209600410
   */
  startTime?: number;
  /**
   * @remarks
   * The bill type. Valid values:
   * 
   * *   **flow_cn**: the bill for the clean bandwidth of elastic IP addresses (EIPs) with Anti-DDoS (Enhanced) enabled in the Chinese mainland.
   * *   **flow_ov**: the bill for the clean bandwidth of EIPs with Anti-DDoS (Enhanced) enabled outside the Chinese mainland.
   * *   **standard_assets_flow_cn**: the bill for the clean bandwidth of regular Alibaba Cloud services in the Chinese mainland.
   * *   **standard_assets_flow_ov**: the bill for the clean bandwidth of regular Alibaba Cloud services outside the Chinese mainland.
   * *   **function**: the bill for the basic fee.
   * *   **ip_count**: the bill for protected IP addresses.
   * *   **monthly_summary**: the monthly summary bill.
   * 
   * @example
   * function
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      isShowList: 'IsShowList',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      isShowList: 'boolean',
      startTime: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosOriginInstanceBillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The asset status.
   * 
   * *   **0**: No asset is added to the instance for protection.
   * *   **1**: Assets are added to the instance for protection.
   * 
   * @example
   * 0
   */
  assetStatus?: number;
  /**
   * @remarks
   * The payment status. Valid values:
   * 
   * *   **0**: The payment is not overdue.
   * *   **1**: The payment is overdue.
   * 
   * @example
   * 0
   */
  debtStatus?: number;
  /**
   * @remarks
   * The details about the traffic of EIPs with Anti-DDoS (Enhanced) enabled.
   */
  flowList?: DescribeDdosOriginInstanceBillResponseBodyFlowList[];
  /**
   * @remarks
   * The traffic distribution of EIPs with Anti-DDoS (Enhanced) enabled by region.
   * 
   * @example
   * {\\"cn-hongkong\\": 166491566}
   */
  flowRegion?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin (Pay-as-you-go) instance to query.
   * 
   * @example
   * ddosorigin_cn-u7c3lcr9r02
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of protected IP addresses.
   * 
   * @example
   * 15
   */
  ipCount?: number;
  /**
   * @remarks
   * The protected IP addresses and enabled features.
   */
  ipCountOrFunctionList?: DescribeDdosOriginInstanceBillResponseBodyIpCountOrFunctionList[];
  /**
   * @remarks
   * The IP address distribution. The JSON struct contains the following fields:
   * 
   * *   **eipCnIpCount**: the number of EIPs with Anti-DDoS (Enhanced) enabled in the Chinese mainland.
   * *   **eipOvIpCount**: the number of EIPs with Anti-DDoS (Enhanced) enabled outside the Chinese mainland.
   * *   **standardAssetsCnIpCount**: the number of IP addresses of regular Alibaba Cloud services in the Chinese mainland.
   * *   **standardAssetsOvIpCount**: the number of IP addresses of regular Alibaba Cloud services outside the Chinese mainland.
   * 
   * @example
   * {\\"eipCnIpCount\\":6,\\"eipOvIpCount\\":17,\\"standardAssetsCnIpCount\\":2,\\"standardAssetsOvIpCount\\":0}
   */
  ipInfo?: string;
  /**
   * @remarks
   * The information about the monthly summary bills.
   */
  monthlySummaryList?: DescribeDdosOriginInstanceBillResponseBodyMonthlySummaryList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 72155560-F343-55C8-82FE-ED4D7E4AA97E
   */
  requestId?: string;
  /**
   * @remarks
   * The details about the traffic of regular Alibaba Cloud services.
   */
  standardAssetsFlowList?: DescribeDdosOriginInstanceBillResponseBodyStandardAssetsFlowList[];
  /**
   * @remarks
   * The traffic distribution of regular Alibaba Cloud services by region.
   * 
   * @example
   * {\\"cn-hongkong\\": 166491566}
   */
  standardAssetsFlowRegion?: { [key: string]: any };
  /**
   * @remarks
   * The total traffic of regular Alibaba Cloud services in the Chinese mainland in the current month.
   * 
   * @example
   * 0
   */
  standardAssetsTotalFlowCn?: number;
  /**
   * @remarks
   * The total traffic of regular Alibaba Cloud services outside the Chinese mainland in the current month.
   * 
   * @example
   * 0
   */
  standardAssetsTotalFlowOv?: number;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * *   **1**: normal
   * *   **2**: expired
   * *   **3**: released
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The total traffic of EIPs with Anti-DDoS (Enhanced) enabled in the Chinese mainland in the current month. Unit: bytes.
   * 
   * @example
   * 6302081067
   */
  totalFlowCn?: number;
  /**
   * @remarks
   * The total traffic of EIPs with Anti-DDoS (Enhanced) enabled outside the Chinese mainland in the current month. Unit: bytes.
   * 
   * @example
   * 6204918019
   */
  totalFlowOv?: number;
  static names(): { [key: string]: string } {
    return {
      assetStatus: 'AssetStatus',
      debtStatus: 'DebtStatus',
      flowList: 'FlowList',
      flowRegion: 'FlowRegion',
      instanceId: 'InstanceId',
      ipCount: 'IpCount',
      ipCountOrFunctionList: 'IpCountOrFunctionList',
      ipInfo: 'IpInfo',
      monthlySummaryList: 'MonthlySummaryList',
      requestId: 'RequestId',
      standardAssetsFlowList: 'StandardAssetsFlowList',
      standardAssetsFlowRegion: 'StandardAssetsFlowRegion',
      standardAssetsTotalFlowCn: 'StandardAssetsTotalFlowCn',
      standardAssetsTotalFlowOv: 'StandardAssetsTotalFlowOv',
      status: 'Status',
      totalFlowCn: 'TotalFlowCn',
      totalFlowOv: 'TotalFlowOv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetStatus: 'number',
      debtStatus: 'number',
      flowList: { 'type': 'array', 'itemType': DescribeDdosOriginInstanceBillResponseBodyFlowList },
      flowRegion: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceId: 'string',
      ipCount: 'number',
      ipCountOrFunctionList: { 'type': 'array', 'itemType': DescribeDdosOriginInstanceBillResponseBodyIpCountOrFunctionList },
      ipInfo: 'string',
      monthlySummaryList: { 'type': 'array', 'itemType': DescribeDdosOriginInstanceBillResponseBodyMonthlySummaryList },
      requestId: 'string',
      standardAssetsFlowList: { 'type': 'array', 'itemType': DescribeDdosOriginInstanceBillResponseBodyStandardAssetsFlowList },
      standardAssetsFlowRegion: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      standardAssetsTotalFlowCn: 'number',
      standardAssetsTotalFlowOv: 'number',
      status: 'number',
      totalFlowCn: 'number',
      totalFlowOv: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.flowList)) {
      $dara.Model.validateArray(this.flowList);
    }
    if(this.flowRegion) {
      $dara.Model.validateMap(this.flowRegion);
    }
    if(Array.isArray(this.ipCountOrFunctionList)) {
      $dara.Model.validateArray(this.ipCountOrFunctionList);
    }
    if(Array.isArray(this.monthlySummaryList)) {
      $dara.Model.validateArray(this.monthlySummaryList);
    }
    if(Array.isArray(this.standardAssetsFlowList)) {
      $dara.Model.validateArray(this.standardAssetsFlowList);
    }
    if(this.standardAssetsFlowRegion) {
      $dara.Model.validateMap(this.standardAssetsFlowRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosOriginInstanceBillResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDdosOriginInstanceBillResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDdosOriginInstanceBillResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcpetionCountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the Anti-DDoS Origin instance resides.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management.
   * 
   * If you do not specify this parameter, the instance belongs to the default resource group.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcpetionCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of assets that are in an abnormal state.
   * 
   * @example
   * 0
   */
  exceptionIpCount?: number;
  /**
   * @remarks
   * The number of Anti-DDoS Origin instances that are about to expire.
   * 
   * @example
   * 1
   */
  expireTimeCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4B45279A-B1BE-5EEE-87CA-58AF4183EA58
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exceptionIpCount: 'ExceptionIpCount',
      expireTimeCount: 'ExpireTimeCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionIpCount: 'number',
      expireTimeCount: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcpetionCountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExcpetionCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeExcpetionCountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceListRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * ["ddosbgp-cn-oew1pjrk****"]
   */
  instanceIdList?: string;
  /**
   * @remarks
   * The field that is used to sort the Anti-DDoS Origin instances. Set the value to **expireTime**, which indicates that the instances are sorted based on the expiration time.
   * 
   * You can set the **Orderdire** parameter to specify the sorting method.
   * 
   * @example
   * 0
   */
  instanceType?: string;
  /**
   * @remarks
   * The total number of Anti-DDoS Origin instances.
   */
  instanceTypeList?: string[];
  /**
   * @remarks
   * The sorting method. Valid values:
   * 
   * *   **desc**: the descending order. This is the default value.
   * *   **asc**: the ascending order.
   * 
   * @example
   * 47.89.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The IP address of the object that is protected by the Anti-DDoS Origin instance to query.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The ID of the region where the Anti-DDoS Origin instance to query resides.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * expireTime
   */
  orderby?: string;
  /**
   * @remarks
   * The tags that are added to the Anti-DDoS Origin instance.
   * 
   * @example
   * desc
   */
  orderdire?: string;
  /**
   * @remarks
   * The protocol type of the IP address asset that is protected by the Anti-DDoS Origin instance to query. Valid values:
   * 
   * *   **Ipv4**: IPv4
   * *   **Ipv6**: IPv6
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The mitigation plan of the Anti-DDoS Origin instance to query. Valid values:
   * 
   * *   **0**: the Professional mitigation plan
   * *   **1**: the Enterprise mitigation plan
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The tag that is added to the Anti-DDoS Origin instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The remarks of the Anti-DDoS Origin instance to query. Fuzzy match is supported.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The key of the tag that is added to the Anti-DDoS Origin instance.
   */
  tag?: DescribeInstanceListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceIdList: 'InstanceIdList',
      instanceType: 'InstanceType',
      instanceTypeList: 'InstanceTypeList',
      ip: 'Ip',
      ipVersion: 'IpVersion',
      orderby: 'Orderby',
      orderdire: 'Orderdire',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdList: 'string',
      instanceType: 'string',
      instanceTypeList: { 'type': 'array', 'itemType': 'string' },
      ip: 'string',
      ipVersion: 'string',
      orderby: 'string',
      orderdire: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeInstanceListRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypeList)) {
      $dara.Model.validateArray(this.instanceTypeList);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the Anti-DDoS Origin instances.
   */
  instanceList?: DescribeInstanceListResponseBodyInstanceList[];
  /**
   * @remarks
   * The details about the Anti-DDoS Origin instance.
   * 
   * @example
   * 381D5D33-BB8F-395F-8EE4-AE3BB4B523C4
   */
  requestId?: string;
  /**
   * @remarks
   * The details about the Anti-DDoS Origin instances.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      instanceList: 'InstanceList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: { 'type': 'array', 'itemType': DescribeInstanceListResponseBodyInstanceList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceList)) {
      $dara.Model.validateArray(this.instanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance. This parameter is a string that consists of JSON arrays. Each element in a JSON array indicates an instance ID. If you want to query more than one instance, separate instance IDs with commas (,).
   * 
   * >  You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances in a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * ["ddosbgp-cn-n6w1r7nz****"]
   */
  instanceIdList?: string;
  /**
   * @remarks
   * The region ID of the Anti-DDoS Origin instance. Default value: **cn-hangzhou**, which indicates the China (Hangzhou) region.
   * 
   * >  If your instance does not reside in the China (Hangzhou) region, you must set this parameter to the region ID of your instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the regions of assets that can be protected by Anti-DDoS Origin in a specific region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management. This parameter is empty by default, which indicates that the Anti-DDoS Origin instance belongs to the default resource group.
   * 
   * For information about resource groups, see [Create a resource group](https://help.aliyun.com/document_detail/94485.html).
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdList: 'InstanceIdList',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdList: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The specifications of the Anti-DDoS Origin instance, including whether best-effort protection is enabled, the number of available best-effort protection sessions, and the number of used best-effort protection sessions.
   */
  instanceSpecs?: DescribeInstanceSpecsResponseBodyInstanceSpecs[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5840AB9F-1419-4620-807D-5EA476090247
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceSpecs: 'InstanceSpecs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSpecs: { 'type': 'array', 'itemType': DescribeInstanceSpecsResponseBodyInstanceSpecs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceSpecs)) {
      $dara.Model.validateArray(this.instanceSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceSpecsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceSpecsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandDdosEventRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the DDoS attack events to query. This value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1557909844
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the anti-DDoS diversion instance to query.
   * 
   * >  You can call the [DescribeOnDemandInstance](https://help.aliyun.com/document_detail/152120.html) operation to query the IDs of all anti-DDoS diversion instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-n6w1r7nz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the anti-DDoS diversion instance to query.
   * 
   * @example
   * 192.XX.XX.1
   */
  ip?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **50**.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the anti-DDoS diversion instance to query.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management.
   * 
   * If you do not specify this parameter, the instance belongs to the default resource group.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The start time of the DDoS attack events to query. This value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1557305044
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      ip: 'Ip',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      ip: 'string',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandDdosEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the DDoS attack event.
   */
  events?: DescribeOnDemandDdosEventResponseBodyEvents[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6A507DC8-F657-4C13-84E2-D1D1B9400753
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of DDoS attack events that are returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeOnDemandDdosEventResponseBodyEvents },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandDdosEventResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOnDemandDdosEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOnDemandDdosEventResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandInstanceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the anti-DDoS diversion instances.
   * 
   * >  You can call the [DescribeOnDemandInstance](https://help.aliyun.com/document_detail/152120.html) operation to query the IDs of all anti-DDoS diversion instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-z2q1qzxb****
   */
  instanceIdList?: string[];
  /**
   * @remarks
   * The region ID of the anti-DDoS diversion instance.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query all regions that are supported by Anti-DDoS Origin.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdList: 'InstanceIdList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIdList)) {
      $dara.Model.validateArray(this.instanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandInstanceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the anti-DDoS diversion instance.
   */
  instances?: DescribeOnDemandInstanceStatusResponseBodyInstances[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CC49FF51-612F-429B-AB1E-374B3F115396
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeOnDemandInstanceStatusResponseBodyInstances },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnDemandInstanceStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOnDemandInstanceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOnDemandInstanceStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time. Operation logs that were generated before this time are queried.**** The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1640880000000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the instance to query.
   * 
   * > You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all instances.
   * 
   * @example
   * ddosbgp-cn-n6w1r7nz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the operation. Valid values:
   * 
   * *   **3**: Add an IP address to the instance.
   * *   **4**: Remove an IP address from the instance.
   * *   **5**: Downgrade the instance.
   * *   **6**: Deactivate blackhole filtering.
   * *   **7**: Reset the number of times that you can deactivate blackhole filtering.
   * *   **8**: Restore the mitigation capability.
   * *   **9**: Add an asset group.
   * *   **10**: Remove an asset group.
   * *   **11**: Enable the metering method of daily 95th percentile for the burstable clean bandwidth feature.
   * *   **12**: Enable the metering method of monthly 95th percentile for the burstable clean bandwidth feature.
   * *   **13**: Periodically switch between the metering methods of daily 95th percentile and monthly 95th percentile for the burstable clean bandwidth feature.
   * *   **14**: Disable the metering method of daily 95th percentile for the burstable clean bandwidth feature.
   * *   **15**: Disable the metering method of monthly 95th percentile for the burstable clean bandwidth feature.
   * *   **16**: Disable burstable clean bandwidth due to overdue payments.
   * *   **17**: Disable burstable clean bandwidth due to instance expiration.
   * 
   * @example
   * 3
   */
  opAction?: number;
  /**
   * @remarks
   * The sorting method of operation logs. Set the value to **opdate**, which indicates sorting based on the operation time.
   * 
   * @example
   * opdate
   */
  orderBy?: string;
  /**
   * @remarks
   * The sort order of operation logs. Valid values:
   * 
   * *   **ASC**: the ascending order.
   * *   **DESC**: the descending order.
   * 
   * Default value: **DESC**.
   * 
   * @example
   * ASC
   */
  orderDir?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs in Resource Management.
   * 
   * If you do not specify this parameter, the instance belongs to the default resource group.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The start time. Operation logs that were generated after this time are queried.**** The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1609430400000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      opAction: 'OpAction',
      orderBy: 'OrderBy',
      orderDir: 'OrderDir',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      instanceId: 'string',
      opAction: 'number',
      orderBy: 'string',
      orderDir: 'string',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the operation log.
   */
  opEntities?: DescribeOpEntitiesResponseBodyOpEntities[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 52C8ECB0-0B1A-4E66-A31C-B6A855120E82
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of operation logs.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      opEntities: 'OpEntities',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opEntities: { 'type': 'array', 'itemType': DescribeOpEntitiesResponseBodyOpEntities },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.opEntities)) {
      $dara.Model.validateArray(this.opEntities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpEntitiesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOpEntitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOpEntitiesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackIpListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance to query.
   * 
   * >  You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-n6w1r7nz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The protected IP address to query.
   * 
   * @example
   * 47.98.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the member.
   * 
   * @example
   * 170858869679****
   */
  memberUid?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the cloud asset to which the protected IP address to query belongs. Valid values:
   * 
   * *   **ECS**: an Elastic Compute Service (ECS) instance.
   * *   **SLB**: a Classic Load Balancer (CLB) instance, originally called a Server Load Balancer (SLB) instance.
   * *   **EIP**: an elastic IP address (EIP). An Internet-facing Application Load Balancer (ALB) instance uses an EIP. If the IP address belongs to the Internet-facing ALB instance, set this parameter to EIP.
   * *   **WAF**: a Web Application Firewall (WAF) instance.
   * 
   * @example
   * ECS
   */
  productName?: string;
  /**
   * @remarks
   * The ID of the region where the Anti-DDoS Origin instance resides.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management.
   * 
   * If you do not specify this parameter, the instance belongs to the default resource group.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ip: 'Ip',
      memberUid: 'MemberUid',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      productName: 'ProductName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ip: 'string',
      memberUid: 'string',
      pageNo: 'number',
      pageSize: 'number',
      productName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackIpListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code of the request.
   * 
   * For more information about status codes, see [Common parameters](https://help.aliyun.com/document_detail/118841.html).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The IP addresses that are protected by the instance.
   */
  ipList?: DescribePackIpListResponseBodyIpList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4FD1578A-BD77-50B7-A969-45A374A7ED22
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The call is successful.
   * *   **false**: The call fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The number of protected IP addresses.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ipList: 'IpList',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      ipList: { 'type': 'array', 'itemType': DescribePackIpListResponseBodyIpList },
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipList)) {
      $dara.Model.validateArray(this.ipList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePackIpListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePackIpListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePackIpListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdMemberListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * rd-x9bLhd
   */
  resourceDirectoryId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceDirectoryId: 'ResourceDirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      resourceDirectoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdMemberListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of the members.
   */
  memberList?: DescribeRdMemberListResponseBodyMemberList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC245DEE-9800-5579-BF99-189D6A5BA9FE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      memberList: 'MemberList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberList: { 'type': 'array', 'itemType': DescribeRdMemberListResponseBodyMemberList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.memberList)) {
      $dara.Model.validateArray(this.memberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdMemberListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRdMemberListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRdMemberListResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the current account.
   * 
   * @example
   * 125085778340****
   */
  currentUid?: string;
  /**
   * @remarks
   * The type of the Alibaba Cloud account. Valid values:
   * 
   * *   **MasterAccount**: management account.
   * *   **DelegatedAdminAccount**: delegated administrator account.
   * *   **MemberAccount**: member.
   * 
   * @example
   * MemberAccount
   */
  currentUidType?: string;
  /**
   * @remarks
   * Indicates whether the multi-account management feature is enabled for Anti-DDoS Origin.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether the multi-account management feature is enabled for the current account in Anti-DDoS Origin.
   * 
   * @example
   * false
   */
  localEnable?: boolean;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the management account in the resource directory.
   * 
   * @example
   * 125085778340****
   */
  masterUid?: string;
  /**
   * @remarks
   * Indicates whether Resource Directory is enabled in the [Resource Management console](https://resourcemanager.console.aliyun.com).
   * 
   * @example
   * false
   */
  remoteEnable?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1B0F7EC6-51D7-4D70-B0EC-CD8A9E998D86
   */
  requestId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the management account for which the multi-account management feature is enabled in Anti-DDoS Origin.
   * 
   * @example
   * 125085778340****
   */
  rootUid?: string;
  /**
   * @remarks
   * Indicates whether the trusted service is enabled.
   * 
   * @example
   * false
   */
  servicePrincipalEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      currentUid: 'CurrentUid',
      currentUidType: 'CurrentUidType',
      enabled: 'Enabled',
      localEnable: 'LocalEnable',
      masterUid: 'MasterUid',
      remoteEnable: 'RemoteEnable',
      requestId: 'RequestId',
      rootUid: 'RootUid',
      servicePrincipalEnabled: 'ServicePrincipalEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentUid: 'string',
      currentUidType: 'string',
      enabled: 'boolean',
      localEnable: 'boolean',
      masterUid: 'string',
      remoteEnable: 'boolean',
      requestId: 'string',
      rootUid: 'string',
      servicePrincipalEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRdStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRdStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region. The default value is **cn-hangzhou**. If the default value is used, the regions of cloud assets that can be protected by Anti-DDoS Origin in the China (Hangzhou) region are queried.
   * 
   * If you want to specify another value for **RegionId**, see [Regions and Zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management. This parameter is empty by default, which indicates that the Anti-DDoS Origin instance belongs to the default resource group.
   * 
   * For information about resource groups, see [Create a resource group](https://help.aliyun.com/document_detail/94485.html).
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about the regions of cloud assets that can be protected by Anti-DDoS Origin. The information includes region IDs and names.
   */
  regions?: DescribeRegionsResponseBodyRegions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F7CA8B4E-FB15-4336-A351-8DC29D66EA82
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      regions: 'Regions',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * If you do not specify this parameter, the current system time is used as the end time.
   * 
   * @example
   * 1563445054
   */
  endTime?: number;
  /**
   * @remarks
   * The type of the traffic statistics to query. Valid values:
   * 
   * *   **max**: the peak traffic within the specified interval.
   * *   **avg**: the average traffic within the specified interval.
   * 
   * Enumerated values:
   * 
   * *   all
   * *   avg
   * *   max
   * 
   * @example
   * max
   */
  flowType?: string;
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance to query.
   * 
   * >  You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances.
   * 
   * If you specify an on-demand instance, you must configure the **Interval** parameter.
   * 
   * @example
   * ddosbgp-cn-n6w203qg****
   */
  instanceId?: string;
  /**
   * @remarks
   * The interval at which the traffic statistics are calculated. Unit: seconds. Default value: **5**.
   * 
   * @example
   * 5
   */
  interval?: number;
  /**
   * @remarks
   * The public IP address of the asset to query. If you do not specify this parameter, the traffic statistics of all public IP addresses that are protected by the Anti-DDoS Origin instance are queried.
   * 
   * >  The public IP address must be a protected object of the Anti-DDoS Origin instance. You can call the [DescribePackIpList](https://help.aliyun.com/document_detail/118701.html) operation to query all protected objects of the Anti-DDoS Origin instance.
   * 
   * @example
   * 39.XX.XX.96
   */
  ip?: string;
  /**
   * @remarks
   * The Classless Inter-Domain Routing (CIDR) block of the on-demand instance that you want to query.
   * 
   * @example
   * 111.XX.XX.0/24
   */
  ipnet?: string;
  /**
   * @remarks
   * The ID of the region where the Anti-DDoS Origin instance resides.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management.
   * 
   * If you do not specify this parameter, the instance belongs to the default resource group.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1619798400
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      flowType: 'FlowType',
      instanceId: 'InstanceId',
      interval: 'Interval',
      ip: 'Ip',
      ipnet: 'Ipnet',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      flowType: 'string',
      instanceId: 'string',
      interval: 'number',
      ip: 'string',
      ipnet: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried traffic statistics.
   */
  flowList?: DescribeTrafficResponseBodyFlowList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6A507DC8-F657-4C13-84E2-D1D1B9400753
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flowList: 'FlowList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowList: { 'type': 'array', 'itemType': DescribeTrafficResponseBodyFlowList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flowList)) {
      $dara.Model.validateArray(this.flowList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrafficResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTrafficResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTrafficResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachFromPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The protected objects.
   * 
   * This parameter is required.
   */
  ipPortProtocolList?: DetachFromPolicyRequestIpPortProtocolList[];
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   **default**: the default mitigation policies.
   * *   **l3**: IP-specific mitigation policies.
   * *   **l4**: port-specific mitigation policies.
   * 
   * This parameter is required.
   * 
   * @example
   * l3
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      ipPortProtocolList: 'IpPortProtocolList',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPortProtocolList: { 'type': 'array', 'itemType': DetachFromPolicyRequestIpPortProtocolList },
      policyType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipPortProtocolList)) {
      $dara.Model.validateArray(this.ipPortProtocolList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachFromPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The protected objects.
   * 
   * This parameter is required.
   */
  ipPortProtocolListShrink?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   **default**: the default mitigation policies.
   * *   **l3**: IP-specific mitigation policies.
   * *   **l4**: port-specific mitigation policies.
   * 
   * This parameter is required.
   * 
   * @example
   * l3
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      ipPortProtocolListShrink: 'IpPortProtocolList',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPortProtocolListShrink: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachFromPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1B0F7EC6-51D7-4D70-B0EC-CD8A9E99****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachFromPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachFromPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachFromPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DettachAssetGroupToInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the asset that you want to dissociate.
   * 
   * This parameter is required.
   */
  assetGroupList?: DettachAssetGroupToInstanceRequestAssetGroupList[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * >  You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances of paid editions.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      assetGroupList: 'AssetGroupList',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetGroupList: { 'type': 'array', 'itemType': DettachAssetGroupToInstanceRequestAssetGroupList },
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assetGroupList)) {
      $dara.Model.validateArray(this.assetGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DettachAssetGroupToInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the asset that you want to dissociate.
   * 
   * This parameter is required.
   */
  assetGroupListShrink?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * >  You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances of paid editions.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      assetGroupListShrink: 'AssetGroupList',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetGroupListShrink: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DettachAssetGroupToInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E54BA258-9DE8-59BE-B7A8-DAD28E6E8DAF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DettachAssetGroupToInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DettachAssetGroupToInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DettachAssetGroupToInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSlsOpenStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region where the Anti-DDoS Origin instance resides.
   * 
   * For more information about the valid values of this parameter, see [Regions and zones](https://help.aliyun.com/document_detail/188196.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management. This parameter is empty by default, which indicates that the instance belongs to the default resource group.
   * 
   * For more information about resource groups, see [Create a resource group](https://help.aliyun.com/document_detail/94485.html).
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSlsOpenStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D01666F5-541B-4C78-98A6-D29E02DAAC7C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether Simple Log Service was activated. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  slsOpenStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsOpenStatus: 'SlsOpenStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsOpenStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSlsOpenStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSlsOpenStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSlsOpenStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenedAccessLogInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management. This parameter is empty by default, which indicates that the instance belongs to the default resource group.
   * 
   * For more information about resource groups, see [Create a resource group](https://help.aliyun.com/document_detail/94485.html).
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenedAccessLogInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB64811-70A1-41C9-A0CE-CD8B260ED551
   */
  requestId?: string;
  /**
   * @remarks
   * The configuration of log analysis for the Anti-DDoS Origin instance.
   */
  slsConfigStatus?: ListOpenedAccessLogInstancesResponseBodySlsConfigStatus[];
  /**
   * @remarks
   * The number of the Anti-DDoS Origin instances for which log analysis was enabled.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slsConfigStatus: 'SlsConfigStatus',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slsConfigStatus: { 'type': 'array', 'itemType': ListOpenedAccessLogInstancesResponseBodySlsConfigStatus },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.slsConfigStatus)) {
      $dara.Model.validateArray(this.slsConfigStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpenedAccessLogInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOpenedAccessLogInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOpenedAccessLogInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * test**
   */
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * *   **ecs**: Elastic Compute Service (ECS).
   * *   **slb**: Server Load Balancer (SLB).
   * *   **eip**: Elastic IP Address (EIP).
   * *   **gf-eip**: EIP with Anti-DDoS (Enhanced) enabled.
   * 
   * >  This parameter is available only if Type is set to `default`.
   * 
   * @example
   * ecs
   */
  productType?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   **default**: the default mitigation policy.
   * *   **l3**: IP-specific mitigation policies.
   * *   **l4**: port-specific mitigation policies.
   * 
   * @example
   * l3
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      productType: 'ProductType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNo: 'number',
      pageSize: 'number',
      productType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The policies.
   */
  policyList?: ListPolicyResponseBodyPolicyList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4B379C2-9319-4C6B-B579-FE36831B09F4
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of policies.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      policyList: 'PolicyList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyList: { 'type': 'array', 'itemType': ListPolicyResponseBodyPolicyList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policyList)) {
      $dara.Model.validateArray(this.policyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * The protected objects.
   */
  ipPortProtocolList?: ListPolicyAttachmentRequestIpPortProtocolList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * f38f6520-92b7-451e-b520-9ab3********
   */
  policyId?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   **default**: the default mitigation policies.
   * *   **l3**: IP-specific mitigation policies.
   * *   **l4**: port-specific mitigation policies.
   * 
   * @example
   * l3
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      ipPortProtocolList: 'IpPortProtocolList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPortProtocolList: { 'type': 'array', 'itemType': ListPolicyAttachmentRequestIpPortProtocolList },
      pageNo: 'number',
      pageSize: 'number',
      policyId: 'string',
      policyType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipPortProtocolList)) {
      $dara.Model.validateArray(this.ipPortProtocolList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The protected objects.
   */
  ipPortProtocolListShrink?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * f38f6520-92b7-451e-b520-9ab3********
   */
  policyId?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   **default**: the default mitigation policies.
   * *   **l3**: IP-specific mitigation policies.
   * *   **l4**: port-specific mitigation policies.
   * 
   * @example
   * l3
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      ipPortProtocolListShrink: 'IpPortProtocolList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPortProtocolListShrink: 'string',
      pageNo: 'number',
      pageSize: 'number',
      policyId: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The records of attachments to the mitigation policy.
   */
  attachmentList?: ListPolicyAttachmentResponseBodyAttachmentList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4B379C2-9319-4C6B-B579-FE36831B09F4
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of attachments to the mitigation policy.
   * 
   * @example
   * 28
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentList: 'AttachmentList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentList: { 'type': 'array', 'itemType': ListPolicyAttachmentResponseBodyAttachmentList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attachmentList)) {
      $dara.Model.validateArray(this.attachmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyAttachmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPolicyAttachmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPolicyAttachmentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to **50**. Default value: **10**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource type. Set the value to **INSTANCE**.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 97935DF1-0289-4AA2-9DD1-72377838B16B
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the tags.
   */
  tagKeys?: ListTagKeysResponseBodyTagKeys[];
  /**
   * @remarks
   * The total number of tags returned.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tagKeys: 'TagKeys',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      tagKeys: { 'type': 'array', 'itemType': ListTagKeysResponseBodyTagKeys },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tagKeys)) {
      $dara.Model.validateArray(this.tagKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagKeysResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of **NextToken**.
   * 
   * @example
   * RGuYpqDdKhzXb8C3.D1BwQgc1tMBsoxdGiEKHHUUCf****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where the Anti-DDoS Origin instance resides.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management.
   * 
   * If you do not specify this parameter, the instance belongs to the default resource group.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IDs of the Anti-DDoS Origin instances to query.
   * 
   * >  The **ResourceId** parameter and the **key-value pair for the Tag parameter** cannot be left empty at the same time.
   * 
   * @example
   * ddosbgp-cn-v0h1fmwbc024
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource to query. Set the value to **INSTANCE**.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The key-value pair of the tag to query.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * RGuYpqDdKhzXb8C3.D1BwQgc1tMBsoxdGiEKHHUUCf****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C3F7E6AE-43B2-4730-B6A3-FD17552B8F65
   */
  requestId?: string;
  /**
   * @remarks
   * The tags that are added to the Anti-DDoS Origin instance.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  validate() {
    if(this.tagResources && typeof (this.tagResources as any).validate === 'function') {
      (this.tagResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the action. Valid values:
   * 
   * *   **10**: modifies the name. If you specify this value, `Name` is required.
   * *   **11**: modifies the blacklist validity period. If you specify this value, `BlackIpListExpireAt` is required. Only IP-specific mitigation policies support this value.
   * *   **12**: changes the status of the feature of adding back-to-origin CIDR blocks of Anti-DDoS Proxy to the whitelist. If you specify this value, `WhitenGfbrNets` is required. Only IP-specific mitigation policies support this value.
   * *   **13**: changes the status of the ICMP blocking feature. If you specify this value, `EnableDropIcmp` is required. Only IP-specific mitigation policies support this value.
   * *   **20**: adds IP addresses to the blacklist or the whitelist. If you specify this value, you must specify at least one of `WhiteIpList` and `BlackIpList`. Only IP-specific mitigation policies support this value.
   * *   **21**: removes IP addresses from the blacklist or the whitelist. If you specify this value, at least one of `WhiteIpList` and `BlackIpList` is required. Only IP-specific mitigation policies support this value.
   * *   **22**: clears the whitelist. Only IP-specific mitigation policies support this value.
   * *   **23**: clears the blacklist. Only IP-specific mitigation policies support this value.
   * *   **30**: modifies the status and level of intelligent protection. If you specify this value, `EnableIntelligence` and `IntelligenceLevel` are required. Only IP-specific mitigation policies support this value.
   * *   **31**: modifies the location blacklist settings. If you specify this value, one of `RegionBlockCountryList` and `RegionBlockProvinceList` is required. Only IP-specific mitigation policies support this value.
   * *   **32**: modifies the settings for source rate limiting. If you specify this value, `SourceLimit` and `SourceBlockList` are required. Only IP-specific mitigation policies support this value.
   * *   **33**: modifies the settings for reflection attack filtering. If you specify this value, `ReflectBlockUdpPortList` is required. Only IP-specific mitigation policies support this value.
   * *   **40**: creates a port blocking rule. If you specify this value, `PortRuleList` is required. Only IP-specific mitigation policies support this value.
   * *   **41**: modifies the port blocking rule. If you specify this value, `PortRuleList` is required. Only IP-specific mitigation policies support this value.
   * *   **42**: deletes the port blocking rule. If you specify this value, `PortRuleList` is required. Only IP-specific mitigation policies support this value.
   * *   **50**: creates a byte-match filter rule. If you specify this value, `FingerPrintRuleList` is required. Only IP-specific mitigation policies support this value.
   * *   **51**: modifies the byte-match filter rule. If you specify this value, `FingerPrintRuleList` is required. Only IP-specific mitigation policies support this value.
   * *   **52**: deletes the byte-match filter rule. If you specify this value, `FingerPrintRuleList` is required. Only IP-specific mitigation policies support this value.
   * *   **60**: changes the status of the port-specific mitigation feature. If you specify this value, `EnableL4Defense` is required. Only port-specific mitigation policies support this value.
   * *   **61**: creates a port-specific mitigation rule. If you specify this value, `L4RuleList` is required. Only port-specific mitigation policies support this value.
   * *   **62**: modifies the port-specific mitigation rule. If you specify this value, `L4RuleList` is required. Only port-specific mitigation policies support this value.
   * *   **63**: deletes the port-specific mitigation rule. If you specify this value, `L4RuleList` is required. Only port-specific mitigation policies support this value.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  actionType?: number;
  /**
   * @remarks
   * The policy content.
   */
  content?: ModifyPolicyRequestContent;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * c52c2fa6-fdac-40c4-8753-be7c********
   */
  id?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * demo**
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      content: 'Content',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'number',
      content: ModifyPolicyRequestContent,
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the action. Valid values:
   * 
   * *   **10**: modifies the name. If you specify this value, `Name` is required.
   * *   **11**: modifies the blacklist validity period. If you specify this value, `BlackIpListExpireAt` is required. Only IP-specific mitigation policies support this value.
   * *   **12**: changes the status of the feature of adding back-to-origin CIDR blocks of Anti-DDoS Proxy to the whitelist. If you specify this value, `WhitenGfbrNets` is required. Only IP-specific mitigation policies support this value.
   * *   **13**: changes the status of the ICMP blocking feature. If you specify this value, `EnableDropIcmp` is required. Only IP-specific mitigation policies support this value.
   * *   **20**: adds IP addresses to the blacklist or the whitelist. If you specify this value, you must specify at least one of `WhiteIpList` and `BlackIpList`. Only IP-specific mitigation policies support this value.
   * *   **21**: removes IP addresses from the blacklist or the whitelist. If you specify this value, at least one of `WhiteIpList` and `BlackIpList` is required. Only IP-specific mitigation policies support this value.
   * *   **22**: clears the whitelist. Only IP-specific mitigation policies support this value.
   * *   **23**: clears the blacklist. Only IP-specific mitigation policies support this value.
   * *   **30**: modifies the status and level of intelligent protection. If you specify this value, `EnableIntelligence` and `IntelligenceLevel` are required. Only IP-specific mitigation policies support this value.
   * *   **31**: modifies the location blacklist settings. If you specify this value, one of `RegionBlockCountryList` and `RegionBlockProvinceList` is required. Only IP-specific mitigation policies support this value.
   * *   **32**: modifies the settings for source rate limiting. If you specify this value, `SourceLimit` and `SourceBlockList` are required. Only IP-specific mitigation policies support this value.
   * *   **33**: modifies the settings for reflection attack filtering. If you specify this value, `ReflectBlockUdpPortList` is required. Only IP-specific mitigation policies support this value.
   * *   **40**: creates a port blocking rule. If you specify this value, `PortRuleList` is required. Only IP-specific mitigation policies support this value.
   * *   **41**: modifies the port blocking rule. If you specify this value, `PortRuleList` is required. Only IP-specific mitigation policies support this value.
   * *   **42**: deletes the port blocking rule. If you specify this value, `PortRuleList` is required. Only IP-specific mitigation policies support this value.
   * *   **50**: creates a byte-match filter rule. If you specify this value, `FingerPrintRuleList` is required. Only IP-specific mitigation policies support this value.
   * *   **51**: modifies the byte-match filter rule. If you specify this value, `FingerPrintRuleList` is required. Only IP-specific mitigation policies support this value.
   * *   **52**: deletes the byte-match filter rule. If you specify this value, `FingerPrintRuleList` is required. Only IP-specific mitigation policies support this value.
   * *   **60**: changes the status of the port-specific mitigation feature. If you specify this value, `EnableL4Defense` is required. Only port-specific mitigation policies support this value.
   * *   **61**: creates a port-specific mitigation rule. If you specify this value, `L4RuleList` is required. Only port-specific mitigation policies support this value.
   * *   **62**: modifies the port-specific mitigation rule. If you specify this value, `L4RuleList` is required. Only port-specific mitigation policies support this value.
   * *   **63**: deletes the port-specific mitigation rule. If you specify this value, `L4RuleList` is required. Only port-specific mitigation policies support this value.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  actionType?: number;
  /**
   * @remarks
   * The policy content.
   */
  contentShrink?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * c52c2fa6-fdac-40c4-8753-be7c********
   */
  id?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * demo**
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      contentShrink: 'Content',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'number',
      contentShrink: 'string',
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4B379C2-9319-4C6B-B579-FE36831****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentRequest extends $dara.Model {
  /**
   * @remarks
   * The policy content.
   */
  content?: ModifyPolicyContentRequestContent;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 83967609-7ea5-4f6d-a6ea-380b09e****
   */
  id?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * demo**
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: ModifyPolicyContentRequestContent,
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The policy content.
   */
  contentShrink?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 83967609-7ea5-4f6d-a6ea-380b09e****
   */
  id?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * demo**
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      contentShrink: 'Content',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentShrink: 'string',
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3777EF25-940B-51F4-BB1D-99B5********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyContentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPolicyContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyPolicyContentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRemarkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance for which you want to add remarks.
   * 
   * >  You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-n6w1r7nz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the Anti-DDoS Origin instance resides.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks for the Anti-DDoS Origin instance.
   * 
   * This parameter is required.
   * 
   * @example
   * test-remark
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management.
   * 
   * If you do not specify this parameter, the instance belongs to the default resource group.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      remark: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRemarkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6AC3597B-7FD5-5E68-97C3-E11F4D010732
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRemarkResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyRemarkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyRemarkResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group to which you want to move the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-acfm3peow3k****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ddos_originpre_public_cn-7213kxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The resource type. Set the value to **instance**.
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A78396-936F-5481-91D7-591BF7981246
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveResourceGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySchedruleOnDemandRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the on-demand instance.
   * 
   * >  You can call the [DescribeOnDemandInstance](https://help.aliyun.com/document_detail/152120.html) operation to query the IDs of all on-demand instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-z2q1qzxb****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the on-demand instance.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySchedruleOnDemandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the on-demand instance.
   * 
   * @example
   * ddosbgp-cn-z2q1qzxb****
   */
  instanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4A8F9980-5ACB-497F-9F15-48E9D6B29028
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations of the scheduling rule.
   */
  ruleConfig?: QuerySchedruleOnDemandResponseBodyRuleConfig[];
  /**
   * @remarks
   * The status of the scheduling rule.
   */
  ruleStatus?: QuerySchedruleOnDemandResponseBodyRuleStatus[];
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 171986973287****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      ruleConfig: 'RuleConfig',
      ruleStatus: 'RuleStatus',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
      ruleConfig: { 'type': 'array', 'itemType': QuerySchedruleOnDemandResponseBodyRuleConfig },
      ruleStatus: { 'type': 'array', 'itemType': QuerySchedruleOnDemandResponseBodyRuleStatus },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ruleConfig)) {
      $dara.Model.validateArray(this.ruleConfig);
    }
    if(Array.isArray(this.ruleStatus)) {
      $dara.Model.validateArray(this.ruleStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySchedruleOnDemandResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySchedruleOnDemandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySchedruleOnDemandResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseDdosOriginInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Origin instance that you want to release.
   * 
   * >  You can call the [DescribeInstanceList](https://help.aliyun.com/document_detail/118698.html) operation to query the IDs of all Anti-DDoS Origin instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosorigin_cn-pe335v7gs01
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseDdosOriginInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4B379C2-9319-4C6B-B579-FE36831B09F4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseDdosOriginInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseDdosOriginInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseDdosOriginInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstanceModeOnDemandRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of on-demand instances.
   * 
   * > You can call the [DescribeOnDemandInstance](https://help.aliyun.com/document_detail/152120.html) operation to query the IDs of all on-demand instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-z2q1qzxb****
   */
  instanceIdList?: string[];
  /**
   * @remarks
   * Specifies the scheduling mode for on-demand instances. Valid values:
   * 
   * *   **manual**: manual scheduling
   * *   **netflow-auto**: automatic scheduling
   * 
   * This parameter is required.
   * 
   * @example
   * netflow-auto
   */
  mode?: string;
  /**
   * @remarks
   * The region ID of the on-demand instance.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query all regions that are supported by Anti-DDoS Origin.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdList: 'InstanceIdList',
      mode: 'Mode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIdList)) {
      $dara.Model.validateArray(this.instanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstanceModeOnDemandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BD06F539-2FBE-450D-9391-7EFF787128F5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstanceModeOnDemandResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetInstanceModeOnDemandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetInstanceModeOnDemandResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/118703.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs in Resource Management.
   * 
   * If you do not specify this parameter, the instance belongs to the default resource group.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IDs of the instances to which you want to add tags. You can specify up to 51 IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-v0h1fmwb****
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource to which you want to add tags. Set the value to **INSTANCE**, which indicates instances.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags to add. You can specify up to 21 tags.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7078CD1E-F609-47A4-9C39-B288CC27C686
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the instances. Default value: No.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The ID of the region in which the instances reside.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IDs of the instances. Valid values of N: 0 to 49. You can specify up to 50 instances at a time. Example: ResourceId.0, ResourceId.1, ... , ResourceId.49.
   * 
   * This parameter is required.
   * 
   * @example
   * ddosbgp-cn-v0h1fmwbc024
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Set the value to **INSTANCE**.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The keys of the tag that you want to remove. Valid values of N: 0 to 19. You can specify up to 20 tag keys at a time. Example: Tag.0.Key, Tag.1.Key, ... , Tag.19.Key.
   * 
   * @example
   * testKey1
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F2D86AED-BA27-4584-BADC-B43BDA7EEBCA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-qingdao': "ddosbgp.aliyuncs.com",
      'cn-beijing': "ddosbgp.aliyuncs.com",
      'cn-zhangjiakou': "ddosbgp.aliyuncs.com",
      'cn-huhehaote': "ddosbgp.aliyuncs.com",
      'cn-hangzhou': "ddosbgp.aliyuncs.com",
      'cn-shanghai': "ddosbgp.aliyuncs.com",
      'cn-shenzhen': "ddosbgp.aliyuncs.com",
      'ap-northeast-1': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'cn-chengdu': "ddosbgp.aliyuncs.com",
      'eu-central-1': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'me-east-1': "ddosbgp.ap-southeast-1.aliyuncs.com",
      'cn-hangzhou-finance': "ddosbgp.aliyuncs.com",
      'cn-shenzhen-finance-1': "ddosbgp.aliyuncs.com",
      'cn-shanghai-finance-1': "ddosbgp.aliyuncs.com",
      'cn-north-2-gov-1': "ddosbgp.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ddosbgp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Adds IP addresses to an Anti-DDoS Origin instance.
   * 
   * @param request - AddIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddIpResponse
   */
  async addIpWithOptions(request: AddIpRequest, runtime: $dara.RuntimeOptions): Promise<AddIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ipList)) {
      query["IpList"] = request.ipList;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddIp",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AddIpResponse>(await this.callApi(params, req, runtime), new AddIpResponse({}));
  }

  /**
   * Adds IP addresses to an Anti-DDoS Origin instance.
   * 
   * @param request - AddIpRequest
   * @returns AddIpResponse
   */
  async addIp(request: AddIpRequest): Promise<AddIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addIpWithOptions(request, runtime);
  }

  /**
   * Adds members to a resource directory.
   * 
   * @remarks
   * Only a delegated administrator account or the management account of a resource directory can be used to add members to the resource directory.
   * 
   * @param tmpReq - AddRdMemberListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRdMemberListResponse
   */
  async addRdMemberListWithOptions(tmpReq: AddRdMemberListRequest, runtime: $dara.RuntimeOptions): Promise<AddRdMemberListResponse> {
    tmpReq.validate();
    let request = new AddRdMemberListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.memberList)) {
      request.memberListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.memberList, "MemberList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.memberListShrink)) {
      query["MemberList"] = request.memberListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddRdMemberList",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AddRdMemberListResponse>(await this.callApi(params, req, runtime), new AddRdMemberListResponse({}));
  }

  /**
   * Adds members to a resource directory.
   * 
   * @remarks
   * Only a delegated administrator account or the management account of a resource directory can be used to add members to the resource directory.
   * 
   * @param request - AddRdMemberListRequest
   * @returns AddRdMemberListResponse
   */
  async addRdMemberList(request: AddRdMemberListRequest): Promise<AddRdMemberListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addRdMemberListWithOptions(request, runtime);
  }

  /**
   * Associates an asset with an Anti-DDoS Origin instance of a paid edition.
   * 
   * @param tmpReq - AttachAssetGroupToInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachAssetGroupToInstanceResponse
   */
  async attachAssetGroupToInstanceWithOptions(tmpReq: AttachAssetGroupToInstanceRequest, runtime: $dara.RuntimeOptions): Promise<AttachAssetGroupToInstanceResponse> {
    tmpReq.validate();
    let request = new AttachAssetGroupToInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assetGroupList)) {
      request.assetGroupListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assetGroupList, "AssetGroupList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.assetGroupListShrink)) {
      query["AssetGroupList"] = request.assetGroupListShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachAssetGroupToInstance",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AttachAssetGroupToInstanceResponse>(await this.callApi(params, req, runtime), new AttachAssetGroupToInstanceResponse({}));
  }

  /**
   * Associates an asset with an Anti-DDoS Origin instance of a paid edition.
   * 
   * @param request - AttachAssetGroupToInstanceRequest
   * @returns AttachAssetGroupToInstanceResponse
   */
  async attachAssetGroupToInstance(request: AttachAssetGroupToInstanceRequest): Promise<AttachAssetGroupToInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachAssetGroupToInstanceWithOptions(request, runtime);
  }

  /**
   * Associates a mitigation policy to a protected object.
   * 
   * @param tmpReq - AttachToPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachToPolicyResponse
   */
  async attachToPolicyWithOptions(tmpReq: AttachToPolicyRequest, runtime: $dara.RuntimeOptions): Promise<AttachToPolicyResponse> {
    tmpReq.validate();
    let request = new AttachToPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ipPortProtocolList)) {
      request.ipPortProtocolListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ipPortProtocolList, "IpPortProtocolList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ipPortProtocolListShrink)) {
      query["IpPortProtocolList"] = request.ipPortProtocolListShrink;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachToPolicy",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<AttachToPolicyResponse>(await this.callApi(params, req, runtime), new AttachToPolicyResponse({}));
  }

  /**
   * Associates a mitigation policy to a protected object.
   * 
   * @param request - AttachToPolicyRequest
   * @returns AttachToPolicyResponse
   */
  async attachToPolicy(request: AttachToPolicyRequest): Promise<AttachToPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachToPolicyWithOptions(request, runtime);
  }

  /**
   * Queries whether Anti-DDoS Origin is authorized to access Simple Log Service.
   * 
   * @param request - CheckAccessLogAuthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckAccessLogAuthResponse
   */
  async checkAccessLogAuthWithOptions(request: CheckAccessLogAuthRequest, runtime: $dara.RuntimeOptions): Promise<CheckAccessLogAuthResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckAccessLogAuth",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CheckAccessLogAuthResponse>(await this.callApi(params, req, runtime), new CheckAccessLogAuthResponse({}));
  }

  /**
   * Queries whether Anti-DDoS Origin is authorized to access Simple Log Service.
   * 
   * @param request - CheckAccessLogAuthRequest
   * @returns CheckAccessLogAuthResponse
   */
  async checkAccessLogAuth(request: CheckAccessLogAuthRequest): Promise<CheckAccessLogAuthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkAccessLogAuthWithOptions(request, runtime);
  }

  /**
   * Queries whether Anti-DDoS Origin is authorized to obtain information about the assets within the current Alibaba Cloud account.
   * 
   * @remarks
   * You can call the CheckGrant operation to query whether Anti-DDoS Origin is authorized to obtain information about the assets within the current Alibaba Cloud account.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CheckGrantRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckGrantResponse
   */
  async checkGrantWithOptions(request: CheckGrantRequest, runtime: $dara.RuntimeOptions): Promise<CheckGrantResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckGrant",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CheckGrantResponse>(await this.callApi(params, req, runtime), new CheckGrantResponse({}));
  }

  /**
   * Queries whether Anti-DDoS Origin is authorized to obtain information about the assets within the current Alibaba Cloud account.
   * 
   * @remarks
   * You can call the CheckGrant operation to query whether Anti-DDoS Origin is authorized to obtain information about the assets within the current Alibaba Cloud account.
   * ### Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - CheckGrantRequest
   * @returns CheckGrantResponse
   */
  async checkGrant(request: CheckGrantRequest): Promise<CheckGrantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkGrantWithOptions(request, runtime);
  }

  /**
   * Modifies a scheduling rule of an anti-DDoS diversion instance.
   * 
   * @param request - ConfigSchedruleOnDemandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigSchedruleOnDemandResponse
   */
  async configSchedruleOnDemandWithOptions(request: ConfigSchedruleOnDemandRequest, runtime: $dara.RuntimeOptions): Promise<ConfigSchedruleOnDemandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.ruleAction)) {
      query["RuleAction"] = request.ruleAction;
    }

    if (!$dara.isNull(request.ruleConditionCnt)) {
      query["RuleConditionCnt"] = request.ruleConditionCnt;
    }

    if (!$dara.isNull(request.ruleConditionKpps)) {
      query["RuleConditionKpps"] = request.ruleConditionKpps;
    }

    if (!$dara.isNull(request.ruleConditionMbps)) {
      query["RuleConditionMbps"] = request.ruleConditionMbps;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleSwitch)) {
      query["RuleSwitch"] = request.ruleSwitch;
    }

    if (!$dara.isNull(request.ruleUndoBeginTime)) {
      query["RuleUndoBeginTime"] = request.ruleUndoBeginTime;
    }

    if (!$dara.isNull(request.ruleUndoEndTime)) {
      query["RuleUndoEndTime"] = request.ruleUndoEndTime;
    }

    if (!$dara.isNull(request.ruleUndoMode)) {
      query["RuleUndoMode"] = request.ruleUndoMode;
    }

    if (!$dara.isNull(request.timeZone)) {
      query["TimeZone"] = request.timeZone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigSchedruleOnDemand",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ConfigSchedruleOnDemandResponse>(await this.callApi(params, req, runtime), new ConfigSchedruleOnDemandResponse({}));
  }

  /**
   * Modifies a scheduling rule of an anti-DDoS diversion instance.
   * 
   * @param request - ConfigSchedruleOnDemandRequest
   * @returns ConfigSchedruleOnDemandResponse
   */
  async configSchedruleOnDemand(request: ConfigSchedruleOnDemandRequest): Promise<ConfigSchedruleOnDemandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configSchedruleOnDemandWithOptions(request, runtime);
  }

  /**
   * Creates a mitigation policy.
   * 
   * @param request - CreatePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyResponse
   */
  async createPolicyWithOptions(request: CreatePolicyRequest, runtime: $dara.RuntimeOptions): Promise<CreatePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicy",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreatePolicyResponse>(await this.callApi(params, req, runtime), new CreatePolicyResponse({}));
  }

  /**
   * Creates a mitigation policy.
   * 
   * @param request - CreatePolicyRequest
   * @returns CreatePolicyResponse
   */
  async createPolicy(request: CreatePolicyRequest): Promise<CreatePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a scheduling rule for an anti-DDoS diversion instance.
   * 
   * @param request - CreateSchedruleOnDemandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSchedruleOnDemandResponse
   */
  async createSchedruleOnDemandWithOptions(request: CreateSchedruleOnDemandRequest, runtime: $dara.RuntimeOptions): Promise<CreateSchedruleOnDemandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.ruleAction)) {
      query["RuleAction"] = request.ruleAction;
    }

    if (!$dara.isNull(request.ruleConditionCnt)) {
      query["RuleConditionCnt"] = request.ruleConditionCnt;
    }

    if (!$dara.isNull(request.ruleConditionKpps)) {
      query["RuleConditionKpps"] = request.ruleConditionKpps;
    }

    if (!$dara.isNull(request.ruleConditionMbps)) {
      query["RuleConditionMbps"] = request.ruleConditionMbps;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleSwitch)) {
      query["RuleSwitch"] = request.ruleSwitch;
    }

    if (!$dara.isNull(request.ruleUndoBeginTime)) {
      query["RuleUndoBeginTime"] = request.ruleUndoBeginTime;
    }

    if (!$dara.isNull(request.ruleUndoEndTime)) {
      query["RuleUndoEndTime"] = request.ruleUndoEndTime;
    }

    if (!$dara.isNull(request.ruleUndoMode)) {
      query["RuleUndoMode"] = request.ruleUndoMode;
    }

    if (!$dara.isNull(request.timeZone)) {
      query["TimeZone"] = request.timeZone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSchedruleOnDemand",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateSchedruleOnDemandResponse>(await this.callApi(params, req, runtime), new CreateSchedruleOnDemandResponse({}));
  }

  /**
   * Creates a scheduling rule for an anti-DDoS diversion instance.
   * 
   * @param request - CreateSchedruleOnDemandRequest
   * @returns CreateSchedruleOnDemandResponse
   */
  async createSchedruleOnDemand(request: CreateSchedruleOnDemandRequest): Promise<CreateSchedruleOnDemandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSchedruleOnDemandWithOptions(request, runtime);
  }

  /**
   * Deactivates blackhole filtering for a protected IP address.
   * 
   * @remarks
   * You can call the DeleteBlackhole operation to deactivate blackhole filtering for a protected IP address.
   * Before you call this operation, you can call the [DescribePackIpList](https://help.aliyun.com/document_detail/118701.html) operation to query the protection status of the IP addresses that are protected by your Anti-DDoS Origin instance. For example, you can query whether blackhole filtering is triggered for an IP address.
   * ### [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteBlackholeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBlackholeResponse
   */
  async deleteBlackholeWithOptions(request: DeleteBlackholeRequest, runtime: $dara.RuntimeOptions): Promise<DeleteBlackholeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBlackhole",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteBlackholeResponse>(await this.callApi(params, req, runtime), new DeleteBlackholeResponse({}));
  }

  /**
   * Deactivates blackhole filtering for a protected IP address.
   * 
   * @remarks
   * You can call the DeleteBlackhole operation to deactivate blackhole filtering for a protected IP address.
   * Before you call this operation, you can call the [DescribePackIpList](https://help.aliyun.com/document_detail/118701.html) operation to query the protection status of the IP addresses that are protected by your Anti-DDoS Origin instance. For example, you can query whether blackhole filtering is triggered for an IP address.
   * ### [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DeleteBlackholeRequest
   * @returns DeleteBlackholeResponse
   */
  async deleteBlackhole(request: DeleteBlackholeRequest): Promise<DeleteBlackholeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBlackholeWithOptions(request, runtime);
  }

  /**
   * Removes specific IP addresses from an Anti-DDoS Origin instance.
   * 
   * @remarks
   * The Anti-DDoS Origin Enterprise instance no longer protects the IP addresses that are removed.
   * 
   * @param request - DeleteIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIpResponse
   */
  async deleteIpWithOptions(request: DeleteIpRequest, runtime: $dara.RuntimeOptions): Promise<DeleteIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ipList)) {
      query["IpList"] = request.ipList;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIp",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteIpResponse>(await this.callApi(params, req, runtime), new DeleteIpResponse({}));
  }

  /**
   * Removes specific IP addresses from an Anti-DDoS Origin instance.
   * 
   * @remarks
   * The Anti-DDoS Origin Enterprise instance no longer protects the IP addresses that are removed.
   * 
   * @param request - DeleteIpRequest
   * @returns DeleteIpResponse
   */
  async deleteIp(request: DeleteIpRequest): Promise<DeleteIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIpWithOptions(request, runtime);
  }

  /**
   * Deletes a mitigation policy.
   * 
   * @remarks
   * You cannot delete a mitigation policy to which a protected object is added.
   * 
   * @param request - DeletePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyResponse
   */
  async deletePolicyWithOptions(request: DeletePolicyRequest, runtime: $dara.RuntimeOptions): Promise<DeletePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicy",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeletePolicyResponse>(await this.callApi(params, req, runtime), new DeletePolicyResponse({}));
  }

  /**
   * Deletes a mitigation policy.
   * 
   * @remarks
   * You cannot delete a mitigation policy to which a protected object is added.
   * 
   * @param request - DeletePolicyRequest
   * @returns DeletePolicyResponse
   */
  async deletePolicy(request: DeletePolicyRequest): Promise<DeletePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePolicyWithOptions(request, runtime);
  }

  /**
   * Deletes members.
   * 
   * @remarks
   * Only a delegated administrator account or the management account of a resource directory can be used to delete members.
   * 
   * @param tmpReq - DeleteRdMemberListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRdMemberListResponse
   */
  async deleteRdMemberListWithOptions(tmpReq: DeleteRdMemberListRequest, runtime: $dara.RuntimeOptions): Promise<DeleteRdMemberListResponse> {
    tmpReq.validate();
    let request = new DeleteRdMemberListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.memberList)) {
      request.memberListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.memberList, "MemberList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.memberListShrink)) {
      query["MemberList"] = request.memberListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRdMemberList",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteRdMemberListResponse>(await this.callApi(params, req, runtime), new DeleteRdMemberListResponse({}));
  }

  /**
   * Deletes members.
   * 
   * @remarks
   * Only a delegated administrator account or the management account of a resource directory can be used to delete members.
   * 
   * @param request - DeleteRdMemberListRequest
   * @returns DeleteRdMemberListResponse
   */
  async deleteRdMemberList(request: DeleteRdMemberListRequest): Promise<DeleteRdMemberListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRdMemberListWithOptions(request, runtime);
  }

  /**
   * Deletes a scheduling rule of an anti-DDoS diversion instance.
   * 
   * @param request - DeleteSchedruleOnDemandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSchedruleOnDemandResponse
   */
  async deleteSchedruleOnDemandWithOptions(request: DeleteSchedruleOnDemandRequest, runtime: $dara.RuntimeOptions): Promise<DeleteSchedruleOnDemandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSchedruleOnDemand",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteSchedruleOnDemandResponse>(await this.callApi(params, req, runtime), new DeleteSchedruleOnDemandResponse({}));
  }

  /**
   * Deletes a scheduling rule of an anti-DDoS diversion instance.
   * 
   * @param request - DeleteSchedruleOnDemandRequest
   * @returns DeleteSchedruleOnDemandResponse
   */
  async deleteSchedruleOnDemand(request: DeleteSchedruleOnDemandRequest): Promise<DeleteSchedruleOnDemandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSchedruleOnDemandWithOptions(request, runtime);
  }

  /**
   * Queries the association between an asset and an Anti-DDoS Origin instance of a paid edition.
   * 
   * @param request - DescribeAssetGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAssetGroupResponse
   */
  async describeAssetGroupWithOptions(request: DescribeAssetGroupRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAssetGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAssetGroup",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeAssetGroupResponse>(await this.callApi(params, req, runtime), new DescribeAssetGroupResponse({}));
  }

  /**
   * Queries the association between an asset and an Anti-DDoS Origin instance of a paid edition.
   * 
   * @param request - DescribeAssetGroupRequest
   * @returns DescribeAssetGroupResponse
   */
  async describeAssetGroup(request: DescribeAssetGroupRequest): Promise<DescribeAssetGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAssetGroupWithOptions(request, runtime);
  }

  /**
   * Queries the association between an asset and an Anti-DDoS Origin instance of a paid edition.
   * 
   * @param request - DescribeAssetGroupToInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAssetGroupToInstanceResponse
   */
  async describeAssetGroupToInstanceWithOptions(request: DescribeAssetGroupToInstanceRequest, runtime: $dara.RuntimeOptions): Promise<DescribeAssetGroupToInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAssetGroupToInstance",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeAssetGroupToInstanceResponse>(await this.callApi(params, req, runtime), new DescribeAssetGroupToInstanceResponse({}));
  }

  /**
   * Queries the association between an asset and an Anti-DDoS Origin instance of a paid edition.
   * 
   * @param request - DescribeAssetGroupToInstanceRequest
   * @returns DescribeAssetGroupToInstanceResponse
   */
  async describeAssetGroupToInstance(request: DescribeAssetGroupToInstanceRequest): Promise<DescribeAssetGroupToInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAssetGroupToInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the details about the DDoS attack events that occurred on an Anti-DDoS Origin instance.
   * 
   * @remarks
   * You can call the DescribeDdosEvent operation to query the details about the DDoS attack events that occurred on an Anti-DDoS Origin instance by page. The details include the start time, end time, attacked IP address, and status of each event.
   * ### [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDdosEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDdosEventResponse
   */
  async describeDdosEventWithOptions(request: DescribeDdosEventRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDdosEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDdosEvent",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeDdosEventResponse>(await this.callApi(params, req, runtime), new DescribeDdosEventResponse({}));
  }

  /**
   * Queries the details about the DDoS attack events that occurred on an Anti-DDoS Origin instance.
   * 
   * @remarks
   * You can call the DescribeDdosEvent operation to query the details about the DDoS attack events that occurred on an Anti-DDoS Origin instance by page. The details include the start time, end time, attacked IP address, and status of each event.
   * ### [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeDdosEventRequest
   * @returns DescribeDdosEventResponse
   */
  async describeDdosEvent(request: DescribeDdosEventRequest): Promise<DescribeDdosEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDdosEventWithOptions(request, runtime);
  }

  /**
   * Queries the bill of an Anti-DDoS Origin (Pay-as-you-go) instance.
   * 
   * @param request - DescribeDdosOriginInstanceBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDdosOriginInstanceBillResponse
   */
  async describeDdosOriginInstanceBillWithOptions(request: DescribeDdosOriginInstanceBillRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDdosOriginInstanceBillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.isShowList)) {
      query["IsShowList"] = request.isShowList;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDdosOriginInstanceBill",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeDdosOriginInstanceBillResponse>(await this.callApi(params, req, runtime), new DescribeDdosOriginInstanceBillResponse({}));
  }

  /**
   * Queries the bill of an Anti-DDoS Origin (Pay-as-you-go) instance.
   * 
   * @param request - DescribeDdosOriginInstanceBillRequest
   * @returns DescribeDdosOriginInstanceBillResponse
   */
  async describeDdosOriginInstanceBill(request: DescribeDdosOriginInstanceBillRequest): Promise<DescribeDdosOriginInstanceBillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDdosOriginInstanceBillWithOptions(request, runtime);
  }

  /**
   * Queries the number of assets that are in an abnormal state and the number of Anti-DDoS Origin instances that are about to expire. The assets can be elastic IP addresses (EIPs). The assets can also be Elastic Compute Service (ECS) instances or Server Load Balancer (SLB) instances that are assigned public IP addresses.
   * 
   * @remarks
   * ## Usage notes
   * You can call the DescribeExcpetionCount operation to query the number of assets that are in an abnormal state and the number of Anti-DDoS Origin instances that are about to expire in a specific region. For example, if blackhole filtering is triggered for an IP address, the IP address is in an abnormal state. An instance whose remaining validity period is less than seven days is considered as an instance that is about to expire.
   * 
   * @param request - DescribeExcpetionCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExcpetionCountResponse
   */
  async describeExcpetionCountWithOptions(request: DescribeExcpetionCountRequest, runtime: $dara.RuntimeOptions): Promise<DescribeExcpetionCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExcpetionCount",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeExcpetionCountResponse>(await this.callApi(params, req, runtime), new DescribeExcpetionCountResponse({}));
  }

  /**
   * Queries the number of assets that are in an abnormal state and the number of Anti-DDoS Origin instances that are about to expire. The assets can be elastic IP addresses (EIPs). The assets can also be Elastic Compute Service (ECS) instances or Server Load Balancer (SLB) instances that are assigned public IP addresses.
   * 
   * @remarks
   * ## Usage notes
   * You can call the DescribeExcpetionCount operation to query the number of assets that are in an abnormal state and the number of Anti-DDoS Origin instances that are about to expire in a specific region. For example, if blackhole filtering is triggered for an IP address, the IP address is in an abnormal state. An instance whose remaining validity period is less than seven days is considered as an instance that is about to expire.
   * 
   * @param request - DescribeExcpetionCountRequest
   * @returns DescribeExcpetionCountResponse
   */
  async describeExcpetionCount(request: DescribeExcpetionCountRequest): Promise<DescribeExcpetionCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExcpetionCountWithOptions(request, runtime);
  }

  /**
   * Queries the details of all Anti-DDoS Origin instances.
   * 
   * @remarks
   * Queries the details of all Anti-DDoS Origin instances.
   * 
   * @param request - DescribeInstanceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceListResponse
   */
  async describeInstanceListWithOptions(request: DescribeInstanceListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInstanceListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.instanceTypeList)) {
      query["InstanceTypeList"] = request.instanceTypeList;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.ipVersion)) {
      query["IpVersion"] = request.ipVersion;
    }

    if (!$dara.isNull(request.orderby)) {
      query["Orderby"] = request.orderby;
    }

    if (!$dara.isNull(request.orderdire)) {
      query["Orderdire"] = request.orderdire;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceList",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeInstanceListResponse>(await this.callApi(params, req, runtime), new DescribeInstanceListResponse({}));
  }

  /**
   * Queries the details of all Anti-DDoS Origin instances.
   * 
   * @remarks
   * Queries the details of all Anti-DDoS Origin instances.
   * 
   * @param request - DescribeInstanceListRequest
   * @returns DescribeInstanceListResponse
   */
  async describeInstanceList(request: DescribeInstanceListRequest): Promise<DescribeInstanceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceListWithOptions(request, runtime);
  }

  /**
   * Queries the specifications of a specific Anti-DDoS Origin instance.
   * 
   * @param request - DescribeInstanceSpecsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceSpecsResponse
   */
  async describeInstanceSpecsWithOptions(request: DescribeInstanceSpecsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInstanceSpecsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceSpecs",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeInstanceSpecsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceSpecsResponse({}));
  }

  /**
   * Queries the specifications of a specific Anti-DDoS Origin instance.
   * 
   * @param request - DescribeInstanceSpecsRequest
   * @returns DescribeInstanceSpecsResponse
   */
  async describeInstanceSpecs(request: DescribeInstanceSpecsRequest): Promise<DescribeInstanceSpecsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceSpecsWithOptions(request, runtime);
  }

  /**
   * Queries the DDoS attack events recorded for the IP address of an anti-DDoS diversion instance of Anti-DDoS Origin.
   * 
   * @remarks
   * You can use this operation to query the details about the DDoS attack events that occurred on the IP address of an anti-DDoS diversion instance of Anti-DDoS Origin by page. The details include the start time, end time, volume of attack traffic, and status of each event.
   * ### [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeOnDemandDdosEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOnDemandDdosEventResponse
   */
  async describeOnDemandDdosEventWithOptions(request: DescribeOnDemandDdosEventRequest, runtime: $dara.RuntimeOptions): Promise<DescribeOnDemandDdosEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOnDemandDdosEvent",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeOnDemandDdosEventResponse>(await this.callApi(params, req, runtime), new DescribeOnDemandDdosEventResponse({}));
  }

  /**
   * Queries the DDoS attack events recorded for the IP address of an anti-DDoS diversion instance of Anti-DDoS Origin.
   * 
   * @remarks
   * You can use this operation to query the details about the DDoS attack events that occurred on the IP address of an anti-DDoS diversion instance of Anti-DDoS Origin by page. The details include the start time, end time, volume of attack traffic, and status of each event.
   * ### [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeOnDemandDdosEventRequest
   * @returns DescribeOnDemandDdosEventResponse
   */
  async describeOnDemandDdosEvent(request: DescribeOnDemandDdosEventRequest): Promise<DescribeOnDemandDdosEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOnDemandDdosEventWithOptions(request, runtime);
  }

  /**
   * Queries the details of anti-DDoS diversion instances.
   * 
   * @param request - DescribeOnDemandInstanceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOnDemandInstanceStatusResponse
   */
  async describeOnDemandInstanceStatusWithOptions(request: DescribeOnDemandInstanceStatusRequest, runtime: $dara.RuntimeOptions): Promise<DescribeOnDemandInstanceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOnDemandInstanceStatus",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeOnDemandInstanceStatusResponse>(await this.callApi(params, req, runtime), new DescribeOnDemandInstanceStatusResponse({}));
  }

  /**
   * Queries the details of anti-DDoS diversion instances.
   * 
   * @param request - DescribeOnDemandInstanceStatusRequest
   * @returns DescribeOnDemandInstanceStatusResponse
   */
  async describeOnDemandInstanceStatus(request: DescribeOnDemandInstanceStatusRequest): Promise<DescribeOnDemandInstanceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOnDemandInstanceStatusWithOptions(request, runtime);
  }

  /**
   * Queries the operation logs of an Anti-DDoS Origin instance.
   * 
   * @remarks
   * You can call the DescribeOpEntities operation to query the operation logs of an instance by page.
   * ### Limit
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeOpEntitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOpEntitiesResponse
   */
  async describeOpEntitiesWithOptions(request: DescribeOpEntitiesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeOpEntitiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.opAction)) {
      query["OpAction"] = request.opAction;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDir)) {
      query["OrderDir"] = request.orderDir;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOpEntities",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeOpEntitiesResponse>(await this.callApi(params, req, runtime), new DescribeOpEntitiesResponse({}));
  }

  /**
   * Queries the operation logs of an Anti-DDoS Origin instance.
   * 
   * @remarks
   * You can call the DescribeOpEntities operation to query the operation logs of an instance by page.
   * ### Limit
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeOpEntitiesRequest
   * @returns DescribeOpEntitiesResponse
   */
  async describeOpEntities(request: DescribeOpEntitiesRequest): Promise<DescribeOpEntitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOpEntitiesWithOptions(request, runtime);
  }

  /**
   * Queries the IP addresses that are protected by a specific Anti-DDoS Origin instance.
   * 
   * @remarks
   * You can call the DescribePackIpList operation to query the details about each IP address that is protected by a specific Anti-DDoS Origin instance by page. The details include the IP address and the type of the cloud asset to which the IP address belongs. The details also include the status of the IP address, such as whether blackhole filtering is triggered for the IP address.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePackIpListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePackIpListResponse
   */
  async describePackIpListWithOptions(request: DescribePackIpListRequest, runtime: $dara.RuntimeOptions): Promise<DescribePackIpListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.memberUid)) {
      query["MemberUid"] = request.memberUid;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productName)) {
      query["ProductName"] = request.productName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePackIpList",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribePackIpListResponse>(await this.callApi(params, req, runtime), new DescribePackIpListResponse({}));
  }

  /**
   * Queries the IP addresses that are protected by a specific Anti-DDoS Origin instance.
   * 
   * @remarks
   * You can call the DescribePackIpList operation to query the details about each IP address that is protected by a specific Anti-DDoS Origin instance by page. The details include the IP address and the type of the cloud asset to which the IP address belongs. The details also include the status of the IP address, such as whether blackhole filtering is triggered for the IP address.  
   * ## Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribePackIpListRequest
   * @returns DescribePackIpListResponse
   */
  async describePackIpList(request: DescribePackIpListRequest): Promise<DescribePackIpListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePackIpListWithOptions(request, runtime);
  }

  /**
   * Queries members that are managed by using the multi-account management feature.
   * 
   * @param request - DescribeRdMemberListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRdMemberListResponse
   */
  async describeRdMemberListWithOptions(request: DescribeRdMemberListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRdMemberListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceDirectoryId)) {
      query["ResourceDirectoryId"] = request.resourceDirectoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRdMemberList",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeRdMemberListResponse>(await this.callApi(params, req, runtime), new DescribeRdMemberListResponse({}));
  }

  /**
   * Queries members that are managed by using the multi-account management feature.
   * 
   * @param request - DescribeRdMemberListRequest
   * @returns DescribeRdMemberListResponse
   */
  async describeRdMemberList(request: DescribeRdMemberListRequest): Promise<DescribeRdMemberListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRdMemberListWithOptions(request, runtime);
  }

  /**
   * Queries the status of the multi-account management feature.
   * 
   * @param request - DescribeRdStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRdStatusResponse
   */
  async describeRdStatusWithOptions(runtime: $dara.RuntimeOptions): Promise<DescribeRdStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRdStatus",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeRdStatusResponse>(await this.callApi(params, req, runtime), new DescribeRdStatusResponse({}));
  }

  /**
   * Queries the status of the multi-account management feature.
   * @returns DescribeRdStatusResponse
   */
  async describeRdStatus(): Promise<DescribeRdStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRdStatusWithOptions(runtime);
  }

  /**
   * Queries the regions of assets that can be protected by Anti-DDoS Origin Enterprise in a specific region.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * Queries the regions of assets that can be protected by Anti-DDoS Origin Enterprise in a specific region.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries traffic statistics of an Anti-DDoS Origin instance within a specific time period.
   * 
   * @remarks
   * You can call the DescribeTraffic operation to query traffic statistics of an Anti-DDoS Origin instance within a specific time period.  
   * >  When you call this operation, you must configure the **InstanceId** parameter to specify the Anti-DDoS Origin instance whose traffic statistics you want to query.  
   * ## Limits
   * You can call this operation once per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeTrafficRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTrafficResponse
   */
  async describeTrafficWithOptions(request: DescribeTrafficRequest, runtime: $dara.RuntimeOptions): Promise<DescribeTrafficResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.flowType)) {
      query["FlowType"] = request.flowType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.ipnet)) {
      query["Ipnet"] = request.ipnet;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTraffic",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeTrafficResponse>(await this.callApi(params, req, runtime), new DescribeTrafficResponse({}));
  }

  /**
   * Queries traffic statistics of an Anti-DDoS Origin instance within a specific time period.
   * 
   * @remarks
   * You can call the DescribeTraffic operation to query traffic statistics of an Anti-DDoS Origin instance within a specific time period.  
   * >  When you call this operation, you must configure the **InstanceId** parameter to specify the Anti-DDoS Origin instance whose traffic statistics you want to query.  
   * ## Limits
   * You can call this operation once per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeTrafficRequest
   * @returns DescribeTrafficResponse
   */
  async describeTraffic(request: DescribeTrafficRequest): Promise<DescribeTrafficResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTrafficWithOptions(request, runtime);
  }

  /**
   * Removes protected objects from a mitigation policy.
   * 
   * @param tmpReq - DetachFromPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachFromPolicyResponse
   */
  async detachFromPolicyWithOptions(tmpReq: DetachFromPolicyRequest, runtime: $dara.RuntimeOptions): Promise<DetachFromPolicyResponse> {
    tmpReq.validate();
    let request = new DetachFromPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ipPortProtocolList)) {
      request.ipPortProtocolListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ipPortProtocolList, "IpPortProtocolList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ipPortProtocolListShrink)) {
      query["IpPortProtocolList"] = request.ipPortProtocolListShrink;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachFromPolicy",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DetachFromPolicyResponse>(await this.callApi(params, req, runtime), new DetachFromPolicyResponse({}));
  }

  /**
   * Removes protected objects from a mitigation policy.
   * 
   * @param request - DetachFromPolicyRequest
   * @returns DetachFromPolicyResponse
   */
  async detachFromPolicy(request: DetachFromPolicyRequest): Promise<DetachFromPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachFromPolicyWithOptions(request, runtime);
  }

  /**
   * Dissociates an asset from an Anti-DDoS Origin instance of a paid edition.
   * 
   * @param tmpReq - DettachAssetGroupToInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DettachAssetGroupToInstanceResponse
   */
  async dettachAssetGroupToInstanceWithOptions(tmpReq: DettachAssetGroupToInstanceRequest, runtime: $dara.RuntimeOptions): Promise<DettachAssetGroupToInstanceResponse> {
    tmpReq.validate();
    let request = new DettachAssetGroupToInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assetGroupList)) {
      request.assetGroupListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assetGroupList, "AssetGroupList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.assetGroupListShrink)) {
      query["AssetGroupList"] = request.assetGroupListShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DettachAssetGroupToInstance",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DettachAssetGroupToInstanceResponse>(await this.callApi(params, req, runtime), new DettachAssetGroupToInstanceResponse({}));
  }

  /**
   * Dissociates an asset from an Anti-DDoS Origin instance of a paid edition.
   * 
   * @param request - DettachAssetGroupToInstanceRequest
   * @returns DettachAssetGroupToInstanceResponse
   */
  async dettachAssetGroupToInstance(request: DettachAssetGroupToInstanceRequest): Promise<DettachAssetGroupToInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dettachAssetGroupToInstanceWithOptions(request, runtime);
  }

  /**
   * Queries whether Simple Log Service is activated.
   * 
   * @param request - GetSlsOpenStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSlsOpenStatusResponse
   */
  async getSlsOpenStatusWithOptions(request: GetSlsOpenStatusRequest, runtime: $dara.RuntimeOptions): Promise<GetSlsOpenStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSlsOpenStatus",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<GetSlsOpenStatusResponse>(await this.callApi(params, req, runtime), new GetSlsOpenStatusResponse({}));
  }

  /**
   * Queries whether Simple Log Service is activated.
   * 
   * @param request - GetSlsOpenStatusRequest
   * @returns GetSlsOpenStatusResponse
   */
  async getSlsOpenStatus(request: GetSlsOpenStatusRequest): Promise<GetSlsOpenStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSlsOpenStatusWithOptions(request, runtime);
  }

  /**
   * Queries the Anti-DDoS Origin instances for which log analysis is enabled.
   * 
   * @param request - ListOpenedAccessLogInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOpenedAccessLogInstancesResponse
   */
  async listOpenedAccessLogInstancesWithOptions(request: ListOpenedAccessLogInstancesRequest, runtime: $dara.RuntimeOptions): Promise<ListOpenedAccessLogInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOpenedAccessLogInstances",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListOpenedAccessLogInstancesResponse>(await this.callApi(params, req, runtime), new ListOpenedAccessLogInstancesResponse({}));
  }

  /**
   * Queries the Anti-DDoS Origin instances for which log analysis is enabled.
   * 
   * @param request - ListOpenedAccessLogInstancesRequest
   * @returns ListOpenedAccessLogInstancesResponse
   */
  async listOpenedAccessLogInstances(request: ListOpenedAccessLogInstancesRequest): Promise<ListOpenedAccessLogInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOpenedAccessLogInstancesWithOptions(request, runtime);
  }

  /**
   * Queries mitigation policies.
   * 
   * @param request - ListPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicyResponse
   */
  async listPolicyWithOptions(request: ListPolicyRequest, runtime: $dara.RuntimeOptions): Promise<ListPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicy",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListPolicyResponse>(await this.callApi(params, req, runtime), new ListPolicyResponse({}));
  }

  /**
   * Queries mitigation policies.
   * 
   * @param request - ListPolicyRequest
   * @returns ListPolicyResponse
   */
  async listPolicy(request: ListPolicyRequest): Promise<ListPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicyWithOptions(request, runtime);
  }

  /**
   * Queries attachments to mitigation policies.
   * 
   * @param tmpReq - ListPolicyAttachmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicyAttachmentResponse
   */
  async listPolicyAttachmentWithOptions(tmpReq: ListPolicyAttachmentRequest, runtime: $dara.RuntimeOptions): Promise<ListPolicyAttachmentResponse> {
    tmpReq.validate();
    let request = new ListPolicyAttachmentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ipPortProtocolList)) {
      request.ipPortProtocolListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ipPortProtocolList, "IpPortProtocolList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ipPortProtocolListShrink)) {
      query["IpPortProtocolList"] = request.ipPortProtocolListShrink;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicyAttachment",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListPolicyAttachmentResponse>(await this.callApi(params, req, runtime), new ListPolicyAttachmentResponse({}));
  }

  /**
   * Queries attachments to mitigation policies.
   * 
   * @param request - ListPolicyAttachmentRequest
   * @returns ListPolicyAttachmentResponse
   */
  async listPolicyAttachment(request: ListPolicyAttachmentRequest): Promise<ListPolicyAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPolicyAttachmentWithOptions(request, runtime);
  }

  /**
   * Queries all tags.
   * 
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<ListTagKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagKeys",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListTagKeysResponse>(await this.callApi(params, req, runtime), new ListTagKeysResponse({}));
  }

  /**
   * Queries all tags.
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries the relationship between Anti-DDoS Origin instances and tags.
   * 
   * @remarks
   * You can call the ListTagResources operation to query the tags that are added to Anti-DDoS Origin instances at a time.
   * ### [](#qps-)Limits
   * You can call this API operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * Queries the relationship between Anti-DDoS Origin instances and tags.
   * 
   * @remarks
   * You can call the ListTagResources operation to query the tags that are added to Anti-DDoS Origin instances at a time.
   * ### [](#qps-)Limits
   * You can call this API operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifies a mitigation policy.
   * 
   * @remarks
   * Modifies a mitigation policy.
   * 
   * @param tmpReq - ModifyPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPolicyResponse
   */
  async modifyPolicyWithOptions(tmpReq: ModifyPolicyRequest, runtime: $dara.RuntimeOptions): Promise<ModifyPolicyResponse> {
    tmpReq.validate();
    let request = new ModifyPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.content)) {
      request.contentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.content, "Content", "json");
    }

    let query = { };
    if (!$dara.isNull(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    if (!$dara.isNull(request.contentShrink)) {
      query["Content"] = request.contentShrink;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPolicy",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ModifyPolicyResponse>(await this.callApi(params, req, runtime), new ModifyPolicyResponse({}));
  }

  /**
   * Modifies a mitigation policy.
   * 
   * @remarks
   * Modifies a mitigation policy.
   * 
   * @param request - ModifyPolicyRequest
   * @returns ModifyPolicyResponse
   */
  async modifyPolicy(request: ModifyPolicyRequest): Promise<ModifyPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the content of the mitigation policy.
   * 
   * @remarks
   * Make sure that all request parameters are configured when you call this operation. If any parameter is left empty, the configuration is deleted.
   * 
   * @param tmpReq - ModifyPolicyContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPolicyContentResponse
   */
  async modifyPolicyContentWithOptions(tmpReq: ModifyPolicyContentRequest, runtime: $dara.RuntimeOptions): Promise<ModifyPolicyContentResponse> {
    tmpReq.validate();
    let request = new ModifyPolicyContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.content)) {
      request.contentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.content, "Content", "json");
    }

    let query = { };
    if (!$dara.isNull(request.contentShrink)) {
      query["Content"] = request.contentShrink;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPolicyContent",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ModifyPolicyContentResponse>(await this.callApi(params, req, runtime), new ModifyPolicyContentResponse({}));
  }

  /**
   * Modifies the content of the mitigation policy.
   * 
   * @remarks
   * Make sure that all request parameters are configured when you call this operation. If any parameter is left empty, the configuration is deleted.
   * 
   * @param request - ModifyPolicyContentRequest
   * @returns ModifyPolicyContentResponse
   */
  async modifyPolicyContent(request: ModifyPolicyContentRequest): Promise<ModifyPolicyContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPolicyContentWithOptions(request, runtime);
  }

  /**
   * Adds remarks for a single Anti-DDoS Origin instance.
   * 
   * @remarks
   * You can call the ModifyRemark operation to add remarks for a single Anti-DDoS Origin instance.
   * ### [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRemarkResponse
   */
  async modifyRemarkWithOptions(request: ModifyRemarkRequest, runtime: $dara.RuntimeOptions): Promise<ModifyRemarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRemark",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ModifyRemarkResponse>(await this.callApi(params, req, runtime), new ModifyRemarkResponse({}));
  }

  /**
   * Adds remarks for a single Anti-DDoS Origin instance.
   * 
   * @remarks
   * You can call the ModifyRemark operation to add remarks for a single Anti-DDoS Origin instance.
   * ### [](#qps-)Limits
   * You can call this operation up to 10 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - ModifyRemarkRequest
   * @returns ModifyRemarkResponse
   */
  async modifyRemark(request: ModifyRemarkRequest): Promise<ModifyRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRemarkWithOptions(request, runtime);
  }

  /**
   * Changes the resource group to which a cloud resource belongs.
   * 
   * @param request - MoveResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveResourceGroup",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<MoveResourceGroupResponse>(await this.callApi(params, req, runtime), new MoveResourceGroupResponse({}));
  }

  /**
   * Changes the resource group to which a cloud resource belongs.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * Queries the scheduling rule of an anti-DDoS diversion instance.
   * 
   * @param request - QuerySchedruleOnDemandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySchedruleOnDemandResponse
   */
  async querySchedruleOnDemandWithOptions(request: QuerySchedruleOnDemandRequest, runtime: $dara.RuntimeOptions): Promise<QuerySchedruleOnDemandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySchedruleOnDemand",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<QuerySchedruleOnDemandResponse>(await this.callApi(params, req, runtime), new QuerySchedruleOnDemandResponse({}));
  }

  /**
   * Queries the scheduling rule of an anti-DDoS diversion instance.
   * 
   * @param request - QuerySchedruleOnDemandRequest
   * @returns QuerySchedruleOnDemandResponse
   */
  async querySchedruleOnDemand(request: QuerySchedruleOnDemandRequest): Promise<QuerySchedruleOnDemandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySchedruleOnDemandWithOptions(request, runtime);
  }

  /**
   * Releases a pay-as-you-go Anti-DDoS Origin instance.
   * 
   * @param request - ReleaseDdosOriginInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseDdosOriginInstanceResponse
   */
  async releaseDdosOriginInstanceWithOptions(request: ReleaseDdosOriginInstanceRequest, runtime: $dara.RuntimeOptions): Promise<ReleaseDdosOriginInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseDdosOriginInstance",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<ReleaseDdosOriginInstanceResponse>(await this.callApi(params, req, runtime), new ReleaseDdosOriginInstanceResponse({}));
  }

  /**
   * Releases a pay-as-you-go Anti-DDoS Origin instance.
   * 
   * @param request - ReleaseDdosOriginInstanceRequest
   * @returns ReleaseDdosOriginInstanceResponse
   */
  async releaseDdosOriginInstance(request: ReleaseDdosOriginInstanceRequest): Promise<ReleaseDdosOriginInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseDdosOriginInstanceWithOptions(request, runtime);
  }

  /**
   * Specifies the scheduling mode for on-demand instances.
   * 
   * @param request - SetInstanceModeOnDemandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetInstanceModeOnDemandResponse
   */
  async setInstanceModeOnDemandWithOptions(request: SetInstanceModeOnDemandRequest, runtime: $dara.RuntimeOptions): Promise<SetInstanceModeOnDemandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetInstanceModeOnDemand",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<SetInstanceModeOnDemandResponse>(await this.callApi(params, req, runtime), new SetInstanceModeOnDemandResponse({}));
  }

  /**
   * Specifies the scheduling mode for on-demand instances.
   * 
   * @param request - SetInstanceModeOnDemandRequest
   * @returns SetInstanceModeOnDemandResponse
   */
  async setInstanceModeOnDemand(request: SetInstanceModeOnDemandRequest): Promise<SetInstanceModeOnDemandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setInstanceModeOnDemandWithOptions(request, runtime);
  }

  /**
   * Add tags to Anti-DDoS Origin instances.
   * 
   * @remarks
   * You can call the TagResources operation to add tags to instances.
   * ### Limit
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * Add tags to Anti-DDoS Origin instances.
   * 
   * @remarks
   * You can call the TagResources operation to add tags to instances.
   * ### Limit
   * You can call this operation up to 10 times per second per account. If the number of calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from Anti-DDoS Origin instances.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2018-07-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * Removes tags from Anti-DDoS Origin instances.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
