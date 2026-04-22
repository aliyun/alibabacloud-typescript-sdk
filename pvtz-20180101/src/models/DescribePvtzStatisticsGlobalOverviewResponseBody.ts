// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePvtzStatisticsGlobalOverviewResponseBodyData extends $dara.Model {
  /**
   * @example
   * 15
   */
  avgResolveLatency?: number;
  /**
   * @example
   * -2
   */
  avgResolveLatencyTrend?: number;
  /**
   * @example
   * 98
   */
  avgSuccessRatio?: number;
  /**
   * @example
   * 1
   */
  avgSuccessRatioTrend?: number;
  /**
   * @example
   * 100000
   */
  totalResolveCount?: number;
  /**
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
  data?: DescribePvtzStatisticsGlobalOverviewResponseBodyData;
  /**
   * @remarks
   * Id of the request
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

