// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInterAuthStatisticsGlobalOverviewResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The average success ratio.
   * 
   * @example
   * 72
   */
  avgSuccessRatio?: number;
  /**
   * @remarks
   * The change in the average success ratio compared to the previous statistical period.
   * 
   * @example
   * 75
   */
  avgSuccessRatioTrend?: number;
  /**
   * @remarks
   * The total resolve count.
   * 
   * @example
   * 18349
   */
  totalResolveCount?: number;
  /**
   * @remarks
   * The change in the total resolve count compared to the previous statistical period.
   * 
   * @example
   * 2341
   */
  totalResolveCountTrend?: number;
  static names(): { [key: string]: string } {
    return {
      avgSuccessRatio: 'AvgSuccessRatio',
      avgSuccessRatioTrend: 'AvgSuccessRatioTrend',
      totalResolveCount: 'TotalResolveCount',
      totalResolveCountTrend: 'TotalResolveCountTrend',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeInterAuthStatisticsGlobalOverviewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistical data.
   */
  data?: DescribeInterAuthStatisticsGlobalOverviewResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 389DFFA3-77A5-4A9E-BF3D-147C6F98A5BA
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
      data: DescribeInterAuthStatisticsGlobalOverviewResponseBodyData,
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

