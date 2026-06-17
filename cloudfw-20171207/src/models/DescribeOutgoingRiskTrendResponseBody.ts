// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingRiskTrendResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The number of threat domain names.
   * 
   * @example
   * 20
   */
  riskDomain?: number;
  /**
   * @remarks
   * The number of threat IP addresses.
   * 
   * @example
   * 5
   */
  riskIp?: number;
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 1659405600
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      riskDomain: 'RiskDomain',
      riskIp: 'RiskIp',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskDomain: 'number',
      riskIp: 'number',
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

export class DescribeOutgoingRiskTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned data.
   */
  dataList?: DescribeOutgoingRiskTrendResponseBodyDataList[];
  /**
   * @remarks
   * The time interval.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CA8D98E-A71B-5856-A658-3E8B3152E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of threat domain names.
   * 
   * @example
   * 7
   */
  totalRiskDomain?: number;
  /**
   * @remarks
   * The total number of threat IP addresses.
   * 
   * @example
   * 6
   */
  totalRiskIp?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      interval: 'Interval',
      requestId: 'RequestId',
      totalRiskDomain: 'TotalRiskDomain',
      totalRiskIp: 'TotalRiskIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeOutgoingRiskTrendResponseBodyDataList },
      interval: 'number',
      requestId: 'string',
      totalRiskDomain: 'number',
      totalRiskIp: 'number',
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

