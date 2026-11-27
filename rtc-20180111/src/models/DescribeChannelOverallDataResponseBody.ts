// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChannelOverallDataResponseBodyCallInfo extends $dara.Model {
  /**
   * @remarks
   * Application ID.
   * 
   * @example
   * rjdhtnqy
   */
  appId?: string;
  /**
   * @remarks
   * Communication status. Valid values:  
   * 
   * - **IN**: In progress.  
   * 
   * - **OUT**: Ended.
   * 
   * @example
   * IN
   */
  callStatus?: string;
  /**
   * @remarks
   * Channel ID.
   * 
   * @example
   * 123456
   */
  channelId?: string;
  /**
   * @remarks
   * The UNIX timestamp when the channel was created, in seconds.
   * 
   * @example
   * 1615860711
   */
  createdTs?: number;
  /**
   * @remarks
   * The UNIX timestamp when the channel was released, in seconds.
   * 
   * @example
   * 1615860811
   */
  destroyedTs?: number;
  /**
   * @remarks
   * Channel duration, in seconds.
   * 
   * @example
   * 100
   */
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callStatus: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponseBodyMetricDatasNodes extends $dara.Model {
  /**
   * @remarks
   * Extension data.
   */
  ext?: { [key: string]: any };
  /**
   * @remarks
   * X-axis coordinate in the Trend Indicator.
   * 
   * @example
   * 1612418625
   */
  x?: string;
  /**
   * @remarks
   * Y-axis coordinate in the Trend Indicator.
   * 
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

export class DescribeChannelOverallDataResponseBodyMetricDatas extends $dara.Model {
  /**
   * @remarks
   * List of coordinate points for the Trend Indicator.
   */
  nodes?: DescribeChannelOverallDataResponseBodyMetricDatasNodes[];
  /**
   * @remarks
   * Metric Type. Valid values:
   * - **CALL_QUALITY**: Call quality.
   * - **CONN_NUM**: Distribution of time intervals for successful channel joins.
   * 
   * @example
   * CALL_QUALITY
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
      nodes: { 'type': 'array', 'itemType': DescribeChannelOverallDataResponseBodyMetricDatasNodes },
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

export class DescribeChannelOverallDataResponseBodyOverallData extends $dara.Model {
  /**
   * @remarks
   * Average communication connection time, in seconds.
   * 
   * @example
   * 0.5
   */
  connAvgTime?: number;
  /**
   * @remarks
   * Connection success rate within 5 seconds, represented as a decimal. For example, 1.0 indicates a 100% connection success rate.
   * 
   * @example
   * 0.91
   */
  fiveSecJoinRate?: number;
  /**
   * @remarks
   * Overall audio stuttering rate, represented as a decimal. For example, 0.02 indicates an audio stuttering rate of 2%.
   * 
   * @example
   * 0.02
   */
  totalAudioStuckRate?: number;
  /**
   * @remarks
   * Overall video stuttering rate, represented as a decimal. For example, 0.02 indicates a video stuttering rate of 2%.
   * 
   * @example
   * 0.02
   */
  totalVideoStuckRate?: number;
  /**
   * @remarks
   * Overall video blur rate, represented as a decimal. For example, 0.02 indicates a video blur rate of 2%.
   * 
   * @example
   * 0.02
   */
  totalVideoVagueRate?: number;
  static names(): { [key: string]: string } {
    return {
      connAvgTime: 'ConnAvgTime',
      fiveSecJoinRate: 'FiveSecJoinRate',
      totalAudioStuckRate: 'TotalAudioStuckRate',
      totalVideoStuckRate: 'TotalVideoStuckRate',
      totalVideoVagueRate: 'TotalVideoVagueRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connAvgTime: 'number',
      fiveSecJoinRate: 'number',
      totalAudioStuckRate: 'number',
      totalVideoStuckRate: 'number',
      totalVideoVagueRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeChannelOverallDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * Basic communication information.
   */
  callInfo?: DescribeChannelOverallDataResponseBodyCallInfo;
  /**
   * @remarks
   * List of metric data.
   */
  metricDatas?: DescribeChannelOverallDataResponseBodyMetricDatas[];
  /**
   * @remarks
   * Overview data.
   */
  overallData?: DescribeChannelOverallDataResponseBodyOverallData;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callInfo: 'CallInfo',
      metricDatas: 'MetricDatas',
      overallData: 'OverallData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInfo: DescribeChannelOverallDataResponseBodyCallInfo,
      metricDatas: { 'type': 'array', 'itemType': DescribeChannelOverallDataResponseBodyMetricDatas },
      overallData: DescribeChannelOverallDataResponseBodyOverallData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.callInfo && typeof (this.callInfo as any).validate === 'function') {
      (this.callInfo as any).validate();
    }
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

