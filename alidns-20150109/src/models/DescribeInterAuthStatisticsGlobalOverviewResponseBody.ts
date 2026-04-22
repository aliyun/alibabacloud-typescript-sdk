// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInterAuthStatisticsGlobalOverviewResponseBodyData extends $dara.Model {
  /**
   * @example
   * 72
   */
  avgSuccessRatio?: number;
  /**
   * @example
   * 75
   */
  avgSuccessRatioTrend?: number;
  /**
   * @example
   * 18349
   */
  totalResolveCount?: number;
  /**
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
  data?: DescribeInterAuthStatisticsGlobalOverviewResponseBodyData;
  /**
   * @remarks
   * Id of the request
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

