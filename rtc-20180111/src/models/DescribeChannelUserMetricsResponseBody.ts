// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChannelUserMetricsResponseBodyMetricDatasNodes extends $dara.Model {
  ext?: { [key: string]: any };
  /**
   * @example
   * 1612418625
   */
  x?: string;
  /**
   * @example
   * 123
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    if(this.ext) {
      $dara.Model.validateMap(this.ext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsResponseBodyMetricDatas extends $dara.Model {
  nodes?: DescribeChannelUserMetricsResponseBodyMetricDatasNodes[];
  /**
   * @example
   * ALL_NUM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeChannelUserMetricsResponseBodyMetricDatasNodes },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsResponseBodyOverallData extends $dara.Model {
  /**
   * @example
   * 0
   */
  totalBadExpNum?: number;
  /**
   * @example
   * 0
   */
  totalJoinFailNum?: number;
  /**
   * @example
   * 1
   */
  totalPubUserNum?: number;
  /**
   * @example
   * 3
   */
  totalSubUserNum?: number;
  /**
   * @example
   * 5
   */
  totalUserNum?: number;
  static names(): { [key: string]: string } {
    return {
      totalBadExpNum: 'TotalBadExpNum',
      totalJoinFailNum: 'TotalJoinFailNum',
      totalPubUserNum: 'TotalPubUserNum',
      totalSubUserNum: 'TotalSubUserNum',
      totalUserNum: 'TotalUserNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalBadExpNum: 'number',
      totalJoinFailNum: 'number',
      totalPubUserNum: 'number',
      totalSubUserNum: 'number',
      totalUserNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelUserMetricsResponseBody extends $dara.Model {
  metricDatas?: DescribeChannelUserMetricsResponseBodyMetricDatas[];
  overallData?: DescribeChannelUserMetricsResponseBodyOverallData;
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metricDatas: 'MetricDatas',
      overallData: 'OverallData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricDatas: { 'type': 'array', 'itemType': DescribeChannelUserMetricsResponseBodyMetricDatas },
      overallData: DescribeChannelUserMetricsResponseBodyOverallData,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metricDatas)) {
      $dara.Model.validateArray(this.metricDatas);
    }
    if(this.overallData && typeof (this.overallData as any).validate === 'function') {
      (this.overallData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

