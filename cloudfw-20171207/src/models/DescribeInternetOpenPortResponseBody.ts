// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInternetOpenPortResponseBodyDataList extends $dara.Model {
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
   * 1456536639.0
   */
  inBytes?: number;
  /**
   * @remarks
   * The outbound traffic.
   * 
   * @example
   * 117200.0
   */
  outBytes?: number;
  /**
   * @remarks
   * The open port.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The security threat.
   * 
   * @example
   * test
   */
  probRisk?: string;
  /**
   * @remarks
   * The description of the security threat.
   * 
   * @example
   * desc
   */
  probRiskDesc?: string;
  /**
   * @remarks
   * The protocol.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * The number of public IP addresses that have the port open.
   * 
   * @example
   * 10
   */
  publicIpNum?: number;
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
   * The description of the risk.
   * 
   * @example
   * test
   */
  riskReason?: string;
  /**
   * @remarks
   * The list of applications.
   */
  serviceNameList?: string[];
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
   * The total traffic. Unit: bytes.
   * 
   * @example
   * 621404
   */
  totalBytes?: number;
  /**
   * @remarks
   * The percentage of traffic in the last 24 hours. Valid values: **1** to **100**.
   * 
   * @example
   * 10
   */
  trafficPercent1Day?: string;
  /**
   * @remarks
   * The percentage of traffic in the last 30 days.
   * 
   * @example
   * 48
   */
  trafficPercent30Day?: string;
  /**
   * @remarks
   * The percentage of traffic in the last 7 days.
   * 
   * @example
   * 30
   */
  trafficPercent7Day?: string;
  /**
   * @remarks
   * The reason why the protocol is not identified when the protocol is detected as Unknown.
   */
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
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
  /**
   * @remarks
   * The list of returned data.
   */
  dataList?: DescribeInternetOpenPortResponseBodyDataList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeInternetOpenPortResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
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

