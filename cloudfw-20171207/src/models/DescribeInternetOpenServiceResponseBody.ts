// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetOpenServiceResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 5
   */
  detailNum?: number;
  /**
   * @example
   * 447458.0
   */
  inBytes?: number;
  /**
   * @example
   * 1123
   */
  outBytes?: number;
  portList?: string[];
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
   * 3
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
  /**
   * @example
   * SMB
   */
  serviceName?: number;
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
   * 0
   */
  trafficPercent1Day?: string;
  /**
   * @example
   * 0
   */
  trafficPercent30Day?: string;
  /**
   * @example
   * 77
   */
  trafficPercent7Day?: string;
  unknownReason?: string[];
  static names(): { [key: string]: string } {
    return {
      detailNum: 'DetailNum',
      inBytes: 'InBytes',
      outBytes: 'OutBytes',
      portList: 'PortList',
      probRisk: 'ProbRisk',
      probRiskDesc: 'ProbRiskDesc',
      protocol: 'Protocol',
      publicIpNum: 'PublicIpNum',
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
      detailNum: 'number',
      inBytes: 'number',
      outBytes: 'number',
      portList: { 'type': 'array', 'itemType': 'string' },
      probRisk: 'string',
      probRiskDesc: 'string',
      protocol: 'string',
      publicIpNum: 'number',
      riskLevel: 'number',
      riskReason: 'string',
      serviceName: 'number',
      suggestLevel: 'number',
      totalBytes: 'number',
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
    if(Array.isArray(this.unknownReason)) {
      $dara.Model.validateArray(this.unknownReason);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInternetOpenServiceResponseBodyPageInfo extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 10
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

export class DescribeInternetOpenServiceResponseBody extends $dara.Model {
  dataList?: DescribeInternetOpenServiceResponseBodyDataList[];
  pageInfo?: DescribeInternetOpenServiceResponseBodyPageInfo;
  /**
   * @example
   * 99A65AA0-C5B5-5092-BFCF-8111B436****
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
      dataList: { 'type': 'array', 'itemType': DescribeInternetOpenServiceResponseBodyDataList },
      pageInfo: DescribeInternetOpenServiceResponseBodyPageInfo,
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

