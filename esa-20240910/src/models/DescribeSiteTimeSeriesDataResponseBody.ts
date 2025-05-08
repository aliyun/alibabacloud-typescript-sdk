// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSiteTimeSeriesDataResponseBodyData } from "./DescribeSiteTimeSeriesDataResponseBodyData";
import { DescribeSiteTimeSeriesDataResponseBodySummarizedData } from "./DescribeSiteTimeSeriesDataResponseBodySummarizedData";


export class DescribeSiteTimeSeriesDataResponseBody extends $dara.Model {
  data?: DescribeSiteTimeSeriesDataResponseBodyData[];
  /**
   * @example
   * 2023-04-09T16:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 300
   */
  interval?: number;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  samplingRate?: number;
  /**
   * @example
   * 2023-04-08T16:00:00Z
   */
  startTime?: string;
  summarizedData?: DescribeSiteTimeSeriesDataResponseBodySummarizedData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      endTime: 'EndTime',
      interval: 'Interval',
      requestId: 'RequestId',
      samplingRate: 'SamplingRate',
      startTime: 'StartTime',
      summarizedData: 'SummarizedData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeSiteTimeSeriesDataResponseBodyData },
      endTime: 'string',
      interval: 'number',
      requestId: 'string',
      samplingRate: 'number',
      startTime: 'string',
      summarizedData: { 'type': 'array', 'itemType': DescribeSiteTimeSeriesDataResponseBodySummarizedData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(Array.isArray(this.summarizedData)) {
      $dara.Model.validateArray(this.summarizedData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

