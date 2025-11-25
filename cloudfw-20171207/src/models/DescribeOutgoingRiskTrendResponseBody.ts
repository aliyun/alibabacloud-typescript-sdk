// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingRiskTrendResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 20
   */
  riskDomain?: number;
  /**
   * @example
   * 5
   */
  riskIp?: number;
  /**
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
  dataList?: DescribeOutgoingRiskTrendResponseBodyDataList[];
  /**
   * @example
   * 60
   */
  interval?: number;
  /**
   * @example
   * 1CA8D98E-A71B-5856-A658-3E8B3152E****
   */
  requestId?: string;
  /**
   * @example
   * 7
   */
  totalRiskDomain?: number;
  /**
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

