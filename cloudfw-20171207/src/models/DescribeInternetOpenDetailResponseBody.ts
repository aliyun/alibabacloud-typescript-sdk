// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetOpenDetailResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * i-bp1ix9w22kv6aew9****
   */
  assetsInstanceId?: string;
  /**
   * @example
   * launch-advisor-2023****
   */
  assetsName?: string;
  /**
   * @example
   * EcsEIP
   */
  assetsType?: string;
  /**
   * @example
   * 1123
   */
  id?: string;
  /**
   * @example
   * 0.0
   */
  inBytes?: number;
  /**
   * @example
   * 0.0
   */
  outBytes?: number;
  /**
   * @example
   * 3389
   */
  port?: number;
  /**
   * @example
   * test
   */
  probRisk?: string;
  /**
   * @example
   * test
   */
  probRiskDesc?: string;
  /**
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @example
   * 39.101.167.XX
   */
  publicIp?: string;
  /**
   * @example
   * cn-shenzhen
   */
  regionNo?: string;
  /**
   * @example
   * 3
   */
  riskLevel?: number;
  /**
   * @example
   * test
   */
  riskReason?: string;
  /**
   * @example
   * Redis
   */
  serviceName?: string;
  /**
   * @example
   * 20
   */
  suggestLevel?: number;
  /**
   * @example
   * 0
   */
  totalBytes?: number;
  /**
   * @example
   * 10
   */
  trafficPercent1Day?: string;
  /**
   * @example
   * 48
   */
  trafficPercent30Day?: string;
  /**
   * @example
   * 30
   */
  trafficPercent7Day?: string;
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
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
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
  dataList?: DescribeInternetOpenDetailResponseBodyDataList[];
  pageInfo?: DescribeInternetOpenDetailResponseBodyPageInfo;
  /**
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

