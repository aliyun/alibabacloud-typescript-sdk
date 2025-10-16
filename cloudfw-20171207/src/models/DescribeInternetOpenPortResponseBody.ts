// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetOpenPortResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 5
   */
  detailNum?: number;
  /**
   * @example
   * 1456536639.0
   */
  inBytes?: number;
  /**
   * @example
   * 117200.0
   */
  outBytes?: number;
  /**
   * @example
   * 80
   */
  port?: number;
  /**
   * @example
   * test
   */
  probRisk?: string;
  /**
   * @example
   * desc
   */
  probRiskDesc?: string;
  /**
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @example
   * 10
   */
  publicIpNum?: number;
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
  serviceNameList?: string[];
  /**
   * @example
   * 20
   */
  suggestLevel?: number;
  /**
   * @example
   * 621404
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
      detailNum: 'DetailNum',
      inBytes: 'InBytes',
      outBytes: 'OutBytes',
      port: 'Port',
      probRisk: 'ProbRisk',
      probRiskDesc: 'ProbRiskDesc',
      protocol: 'Protocol',
      publicIpNum: 'PublicIpNum',
      riskLevel: 'RiskLevel',
      riskReason: 'RiskReason',
      serviceNameList: 'ServiceNameList',
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
      detailNum: 'number',
      inBytes: 'number',
      outBytes: 'number',
      port: 'number',
      probRisk: 'string',
      probRiskDesc: 'string',
      protocol: 'string',
      publicIpNum: 'number',
      riskLevel: 'number',
      riskReason: 'string',
      serviceNameList: { 'type': 'array', 'itemType': 'string' },
      suggestLevel: 'number',
      totalBytes: 'number',
      trafficPercent1Day: 'string',
      trafficPercent30Day: 'string',
      trafficPercent7Day: 'string',
      unknownReason: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
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

export class DescribeInternetOpenPortResponseBodyPageInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 39
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

export class DescribeInternetOpenPortResponseBody extends $dara.Model {
  dataList?: DescribeInternetOpenPortResponseBodyDataList[];
  pageInfo?: DescribeInternetOpenPortResponseBodyPageInfo;
  /**
   * @example
   * F3637663-991B-547F-9163-1A5AC367****
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
      dataList: { 'type': 'array', 'itemType': DescribeInternetOpenPortResponseBodyDataList },
      pageInfo: DescribeInternetOpenPortResponseBodyPageInfo,
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

