// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePvtzStatisticsGlobalOverviewResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The average resolution latency for all VPCs with traffic analysis enabled. The average resolution latency is the average time from when an Alibaba Cloud DNS server receives a DNS query to when it returns a response.
   * 
   * @example
   * 15
   */
  avgResolveLatency?: number;
  /**
   * @remarks
   * The trend in the average resolution latency for all VPCs with traffic analysis enabled.
   * 
   * @example
   * -2
   */
  avgResolveLatencyTrend?: number;
  /**
   * @remarks
   * The average resolution success rate for all VPCs with traffic analysis enabled.
   * 
   * @example
   * 98
   */
  avgSuccessRatio?: number;
  /**
   * @remarks
   * The trend in the average resolution success rate for all VPCs with traffic analysis enabled.
   * 
   * @example
   * 1
   */
  avgSuccessRatioTrend?: number;
  /**
   * @remarks
   * The total number of resolutions for all VPCs with traffic analysis enabled.
   * 
   * @example
   * 100000
   */
  totalResolveCount?: number;
  /**
   * @remarks
   * The trend in the resolution volume for all VPCs with traffic analysis enabled.
   * 
   * @example
   * 5
   */
  totalResolveCountTrend?: number;
  static names(): { [key: string]: string } {
    return {
      avgResolveLatency: 'AvgResolveLatency',
      avgResolveLatencyTrend: 'AvgResolveLatencyTrend',
      avgSuccessRatio: 'AvgSuccessRatio',
      avgSuccessRatioTrend: 'AvgSuccessRatioTrend',
      totalResolveCount: 'TotalResolveCount',
      totalResolveCountTrend: 'TotalResolveCountTrend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgResolveLatency: 'number',
      avgResolveLatencyTrend: 'number',
      avgSuccessRatio: 'number',
      avgSuccessRatioTrend: 'number',
      totalResolveCount: 'number',
      totalResolveCountTrend: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePvtzStatisticsGlobalOverviewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistical results.
   */
  data?: DescribePvtzStatisticsGlobalOverviewResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B7AD377-7E86-44A8-B9A8-53E8666E72FE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribePvtzStatisticsGlobalOverviewResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

