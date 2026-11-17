// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetOpenServiceResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The number of details.
   * 
   * @example
   * 5
   */
  detailNum?: number;
  /**
   * @remarks
   * The inbound traffic.
   * 
   * @example
   * 447458
   */
  inBytes?: number;
  /**
   * @remarks
   * The outbound traffic.
   * 
   * @example
   * 1123
   */
  outBytes?: number;
  /**
   * @remarks
   * The list of open ports.
   */
  portList?: string[];
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
   * The number of open public IP addresses.
   * 
   * @example
   * 3
   */
  publicIpNum?: number;
  /**
   * @remarks
   * The risk level. Valid values: -1: Evaluating. 0: None. 1: Low. 2: Medium. 3: High. If you do not specify this parameter, all risk levels are queried.
   * 
   * @example
   * 3
   */
  riskLevel?: number;
  /**
   * @remarks
   * The risk description.
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
   * SMB
   */
  serviceName?: number;
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
   * 621404
   */
  totalBytes?: number;
  /**
   * @remarks
   * The traffic proportion in the last 1 day.
   * 
   * @example
   * 0
   */
  trafficPercent1Day?: string;
  /**
   * @remarks
   * The traffic proportion in the last 30 days.
   * 
   * @example
   * 0
   */
  trafficPercent30Day?: string;
  /**
   * @remarks
   * The traffic proportion in the last 7 days.
   * 
   * @example
   * 77
   */
  trafficPercent7Day?: string;
  /**
   * @remarks
   * The reason why the protocol is not identified when the protocol is recognized as Unknown.
   */
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
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
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
  /**
   * @remarks
   * The data list.
   */
  dataList?: DescribeInternetOpenServiceResponseBodyDataList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeInternetOpenServiceResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
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

