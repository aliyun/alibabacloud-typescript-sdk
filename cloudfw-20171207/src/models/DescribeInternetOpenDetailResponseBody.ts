// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetOpenDetailResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The asset instance ID.
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
   * The detail ID.
   * 
   * @example
   * 1123
   */
  id?: string;
  /**
   * @remarks
   * The inbound traffic. Unit: bytes.
   * 
   * @example
   * 0
   */
  inBytes?: number;
  /**
   * @remarks
   * The outbound traffic. Unit: bytes.
   * 
   * @example
   * 0
   */
  outBytes?: number;
  /**
   * @remarks
   * The open public port.
   * 
   * @example
   * 3389
   */
  port?: number;
  /**
   * @remarks
   * The security risk.
   * 
   * @example
   * test
   */
  probRisk?: string;
  /**
   * @remarks
   * The description of the security risk.
   * 
   * @example
   * test
   */
  probRiskDesc?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 39.101.167.XX
   */
  publicIp?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * 3
   */
  riskLevel?: number;
  /**
   * @remarks
   * The cause of the risk.
   * 
   * @example
   * test
   */
  riskReason?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * Redis
   */
  serviceName?: string;
  /**
   * @remarks
   * The recommended policy level.
   * 
   * @example
   * 20
   */
  suggestLevel?: number;
  /**
   * @remarks
   * The total traffic.
   * 
   * @example
   * 0
   */
  totalBytes?: number;
  /**
   * @remarks
   * The traffic proportion over the last 1 day.
   * 
   * @example
   * 10
   */
  trafficPercent1Day?: string;
  /**
   * @remarks
   * The traffic proportion over the last 30 days.
   * 
   * @example
   * 48
   */
  trafficPercent30Day?: string;
  /**
   * @remarks
   * The traffic proportion over the last 7 days.
   * 
   * @example
   * 30
   */
  trafficPercent7Day?: string;
  /**
   * @remarks
   * The reason why the protocol is not identified when the recognized protocol is Unknown.
   */
  unknownReason?: string[];
  static names(): { [key: string]: string } {
    return {
      assetsInstanceId: 'AssetsInstanceId',
      assetsName: 'AssetsName',
      assetsType: 'AssetsType',
      id: 'Id',
      inBytes: 'InBytes',
      outBytes: 'OutBytes',
      port: 'Port',
      probRisk: 'ProbRisk',
      probRiskDesc: 'ProbRiskDesc',
      protocol: 'Protocol',
      publicIp: 'PublicIp',
      regionNo: 'RegionNo',
      riskLevel: 'RiskLevel',
      riskReason: 'RiskReason',
      serviceName: 'ServiceName',
      suggestLevel: 'SuggestLevel',
      totalBytes: 'TotalBytes',
      trafficPercent1Day: 'TrafficPercent1Day',
      trafficPercent30Day: 'TrafficPercent30Day',
      trafficPercent7Day: 'TrafficPercent7Day',
      unknownReason: 'UnknownReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsInstanceId: 'string',
      assetsName: 'string',
      assetsType: 'string',
      id: 'string',
      inBytes: 'number',
      outBytes: 'number',
      port: 'number',
      probRisk: 'string',
      probRiskDesc: 'string',
      protocol: 'string',
      publicIp: 'string',
      regionNo: 'string',
      riskLevel: 'number',
      riskReason: 'string',
      serviceName: 'string',
      suggestLevel: 'number',
      totalBytes: 'number',
      trafficPercent1Day: 'string',
      trafficPercent30Day: 'string',
      trafficPercent7Day: 'string',
      unknownReason: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.unknownReason)) {
      $dara.Model.validateArray(this.unknownReason);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInternetOpenDetailResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number.
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
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 5
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

export class DescribeInternetOpenDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned data.
   */
  dataList?: DescribeInternetOpenDetailResponseBodyDataList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeInternetOpenDetailResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3495E758-BB4B-5F5C-8AE0-897489F****
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
      dataList: { 'type': 'array', 'itemType': DescribeInternetOpenDetailResponseBodyDataList },
      pageInfo: DescribeInternetOpenDetailResponseBodyPageInfo,
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

