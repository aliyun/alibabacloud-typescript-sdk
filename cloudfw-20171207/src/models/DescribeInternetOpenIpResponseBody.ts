// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetOpenIpResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The reason why no intelligent policies recommendation is available. Valid values:
   * - No intelligent policies recommendation is available.
   * - This feature is currently available only to selected users.
   * - The policy configuration has been modified. No intelligent policies recommendation is available.
   * - Intelligent policies have been configured. No new intelligent policies recommendation is available.
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
   * Indicates whether a recommended ACL exists. Valid values:
   * 
   * - **true**: A recommended ACL exists.
   * - **false**: No recommended ACL exists.
   * 
   * @example
   * true
   */
  hasAclRecommend?: boolean;
  /**
   * @remarks
   * The inbound network throughput (total bytes sent). Unit: bytes.
   * 
   * @example
   * 235
   */
  inBytes?: number;
  /**
   * @remarks
   * The UID of the Cloud Firewall member account. For more information about member accounts, see multi-account management.
   * 
   * @example
   * 14151892****7022
   */
  memberUid?: number;
  /**
   * @remarks
   * The outbound network throughput (total bytes sent). Unit: bytes.
   * 
   * @example
   * 1123
   */
  outBytes?: number;
  /**
   * @remarks
   * The port list.
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
   * - **3**: high risk
   * - **2**: medium risk
   * - **1**: low risk
   * - **0**: no risk.
   * 
   * @example
   * 3
   */
  riskLevel?: number;
  /**
   * @remarks
   * The risk reason.
   * 
   * @example
   * Previous traffic is all malicious traffic.
   */
  riskReason?: string;
  /**
   * @remarks
   * The application list.
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
   * The total reply traffic over the last 7 days.
   * 
   * @example
   * 100000
   */
  totalReplyBytes?: number;
  /**
   * @remarks
   * For specific traffic information, refer to the TotalBytes field.
   * 
   * @example
   * 0
   */
  trafficPercent1Day?: string;
  /**
   * @remarks
   * For specific traffic information, refer to the TotalBytes field.
   * 
   * @example
   * 0
   */
  trafficPercent30Day?: string;
  /**
   * @remarks
   * For specific traffic information, refer to the TotalBytes field.
   * 
   * @example
   * 0
   */
  trafficPercent7Day?: string;
  /**
   * @remarks
   * The reason why the protocol could not be identified when the identified protocol is Unknown.
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
   * The current page number in the paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page in the paged query.
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
   * The data list.
   */
  dataList?: DescribeInternetOpenIpResponseBodyDataList[];
  /**
   * @remarks
   * The paging information for the paged query.
   */
  pageInfo?: DescribeInternetOpenIpResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
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

