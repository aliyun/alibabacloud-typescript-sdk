// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetOpenIpResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The reason why recommended intelligent policies are unavailable. Valid values:
   * 
   * *   No recommended intelligent policies are available.
   * *   This feature is available only to some users.
   * *   The policy configuration has been modified. No recommended intelligent policies are available.
   * *   The recommended intelligent policies have been configured. No new recommended intelligent policies are available.
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
   * The total number of ports.
   * 
   * @example
   * 5
   */
  detailNum?: number;
  /**
   * @remarks
   * Specifies whether an access control policy is recommended. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  hasAclRecommend?: boolean;
  /**
   * @remarks
   * The inbound network throughput, which indicates the total number of bytes that are sent inbound. Unit: bytes.
   * 
   * @example
   * 235
   */
  inBytes?: number;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
   * 
   * @example
   * 14151892****7022
   */
  memberUid?: number;
  /**
   * @remarks
   * The outbound network throughput, which indicates the total number of bytes that are sent outbound. Unit: bytes.
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
   * *   **3**: high risk
   * *   **2**: medium risk
   * *   **1**: low risk
   * *   **0**: no risk
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
   * Number of source IPs.
   * 
   * @example
   * 22
   */
  srcIpCnt?: number;
  /**
   * @remarks
   * The total inbound and outbound network throughput, which indicates the total number of bytes that are sent inbound and outbound. Unit: bytes.
   * 
   * @example
   * 253023143
   */
  totalBytes?: number;
  /**
   * @remarks
   * Outbound traffic in the last 7 days.
   * 
   * @example
   * 100000
   */
  totalReplyBytes?: number;
  /**
   * @remarks
   * For detailed traffic information, see the TotalBytes field.
   * 
   * @example
   * 0
   */
  trafficPercent1Day?: string;
  /**
   * @remarks
   * For detailed traffic information, see the TotalBytes field.
   * 
   * @example
   * 0
   */
  trafficPercent30Day?: string;
  /**
   * @remarks
   * For detailed traffic information, see the TotalBytes field.
   * 
   * @example
   * 0
   */
  trafficPercent7Day?: string;
  /**
   * @remarks
   * Reasons for not analyzing the protocol when the protocol is identified as Unknown.
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

