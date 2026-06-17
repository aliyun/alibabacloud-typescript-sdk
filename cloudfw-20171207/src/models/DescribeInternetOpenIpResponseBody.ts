// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetOpenIpResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The reason why no intelligent policy is recommended. Valid values:
   * 
   * - No intelligent policy is recommended.
   * 
   * - This feature is available only to specific users.
   * 
   * - The policy configuration has been modified. No intelligent policy is recommended.
   * 
   * - An intelligent policy has been configured. No new intelligent policy is recommended.
   * 
   * @example
   * No recommended intelligent policies are available.
   */
  aclRecommendDetail?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp1ix9w22kv6aew9****
   */
  assetsInstanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * launch-advisor-2023****
   */
  assetsName?: string;
  /**
   * @remarks
   * The asset type of the instance.
   * 
   * @example
   * EcsEIP
   */
  assetsType?: string;
  /**
   * @remarks
   * The total number of port details.
   * 
   * @example
   * 5
   */
  detailNum?: number;
  /**
   * @remarks
   * Indicates whether an access control list (ACL) is recommended. Valid values:
   * 
   * - **true**: yes
   * 
   * - **false**: no
   * 
   * @example
   * true
   */
  hasAclRecommend?: boolean;
  /**
   * @remarks
   * The inbound network throughput, which indicates the total number of bytes received. Unit: bytes.
   * 
   * @example
   * 235
   */
  inBytes?: number;
  /**
   * @remarks
   * The UID of the Cloud Firewall member account.
   * 
   * @example
   * 14151892****7022
   */
  memberUid?: number;
  /**
   * @remarks
   * The outbound network throughput, which indicates the total number of bytes sent. Unit: bytes.
   * 
   * @example
   * 1123
   */
  outBytes?: number;
  /**
   * @remarks
   * The list of ports.
   */
  portList?: string[];
  /**
   * @remarks
   * The public IP address of the instance.
   * 
   * @example
   * 203.0.113.1
   */
  publicIp?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * - **3**: high
   * 
   * - **2**: medium
   * 
   * - **1**: low
   * 
   * - **0**: none
   * 
   * @example
   * 3
   */
  riskLevel?: number;
  /**
   * @remarks
   * The reason for the risk.
   * 
   * @example
   * Previous traffic is all malicious traffic.
   */
  riskReason?: string;
  /**
   * @remarks
   * The list of applications.
   */
  serviceNameList?: string[];
  /**
   * @remarks
   * The number of source IP addresses.
   * 
   * @example
   * 22
   */
  srcIpCnt?: number;
  /**
   * @remarks
   * The total traffic. Unit: bytes.
   * 
   * @example
   * 253023143
   */
  totalBytes?: number;
  /**
   * @remarks
   * The total response traffic in the last 7 days.
   * 
   * @example
   * 100000
   */
  totalReplyBytes?: number;
  /**
   * @remarks
   * For details about the traffic, see the TotalBytes field.
   * 
   * @example
   * 0
   */
  trafficPercent1Day?: string;
  /**
   * @remarks
   * For details about the traffic, see the TotalBytes field.
   * 
   * @example
   * 0
   */
  trafficPercent30Day?: string;
  /**
   * @remarks
   * For details about the traffic, see the TotalBytes field.
   * 
   * @example
   * 0
   */
  trafficPercent7Day?: string;
  /**
   * @remarks
   * The reason why the protocol is not identified when the protocol is Unknown.
   */
  unknownReason?: string[];
  static names(): { [key: string]: string } {
    return {
      aclRecommendDetail: 'AclRecommendDetail',
      assetsInstanceId: 'AssetsInstanceId',
      assetsName: 'AssetsName',
      assetsType: 'AssetsType',
      detailNum: 'DetailNum',
      hasAclRecommend: 'HasAclRecommend',
      inBytes: 'InBytes',
      memberUid: 'MemberUid',
      outBytes: 'OutBytes',
      portList: 'PortList',
      publicIp: 'PublicIp',
      regionNo: 'RegionNo',
      riskLevel: 'RiskLevel',
      riskReason: 'RiskReason',
      serviceNameList: 'ServiceNameList',
      srcIpCnt: 'SrcIpCnt',
      totalBytes: 'TotalBytes',
      totalReplyBytes: 'TotalReplyBytes',
      trafficPercent1Day: 'TrafficPercent1Day',
      trafficPercent30Day: 'TrafficPercent30Day',
      trafficPercent7Day: 'TrafficPercent7Day',
      unknownReason: 'UnknownReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclRecommendDetail: 'string',
      assetsInstanceId: 'string',
      assetsName: 'string',
      assetsType: 'string',
      detailNum: 'number',
      hasAclRecommend: 'boolean',
      inBytes: 'number',
      memberUid: 'number',
      outBytes: 'number',
      portList: { 'type': 'array', 'itemType': 'string' },
      publicIp: 'string',
      regionNo: 'string',
      riskLevel: 'number',
      riskReason: 'string',
      serviceNameList: { 'type': 'array', 'itemType': 'string' },
      srcIpCnt: 'number',
      totalBytes: 'number',
      totalReplyBytes: 'number',
      trafficPercent1Day: 'string',
      trafficPercent30Day: 'string',
      trafficPercent7Day: 'string',
      unknownReason: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.portList)) {
      $dara.Model.validateArray(this.portList);
    }
    if(Array.isArray(this.serviceNameList)) {
      $dara.Model.validateArray(this.serviceNameList);
    }
    if(Array.isArray(this.unknownReason)) {
      $dara.Model.validateArray(this.unknownReason);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInternetOpenIpResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 40
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInternetOpenIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned data.
   */
  dataList?: DescribeInternetOpenIpResponseBodyDataList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeInternetOpenIpResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6B780BD6-282C-51A9-A8E6-59F636BAFA54
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeInternetOpenIpResponseBodyDataList },
      pageInfo: DescribeInternetOpenIpResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

