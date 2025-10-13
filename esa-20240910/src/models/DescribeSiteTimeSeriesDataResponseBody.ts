// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteTimeSeriesDataResponseBodyDataDetailData extends $dara.Model {
  /**
   * @remarks
   * Start timestamp of the time slice.
   * 
   * @example
   * 2023-04-08T16:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * Value.
   * 
   * @example
   * 123
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteTimeSeriesDataResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Returned data.
   */
  detailData?: DescribeSiteTimeSeriesDataResponseBodyDataDetailData[];
  /**
   * @remarks
   * Query dimension.
   * 
   * @example
   * ALL
   */
  dimensionName?: string;
  /**
   * @remarks
   * Query dimension value.
   * 
   * @example
   * ALL
   */
  dimensionValue?: string;
  /**
   * @remarks
   * Query metric value.
   * 
   * @example
   * Traffic
   */
  fieldName?: string;
  static names(): { [key: string]: string } {
    return {
      detailData: 'DetailData',
      dimensionName: 'DimensionName',
      dimensionValue: 'DimensionValue',
      fieldName: 'FieldName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailData: { 'type': 'array', 'itemType': DescribeSiteTimeSeriesDataResponseBodyDataDetailData },
      dimensionName: 'string',
      dimensionValue: 'string',
      fieldName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detailData)) {
      $dara.Model.validateArray(this.detailData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteTimeSeriesDataResponseBodySummarizedData extends $dara.Model {
  /**
   * @remarks
   * The aggregation method used.
   * 
   * @example
   * sum
   */
  aggMethod?: string;
  /**
   * @remarks
   * The dimension of the aggregated data being queried.
   * 
   * @example
   * ALL
   */
  dimensionName?: string;
  /**
   * @remarks
   * The value of the aggregated dimension being queried.
   * 
   * @example
   * ALL
   */
  dimensionValue?: string;
  /**
   * @remarks
   * The value of the aggregated metric being queried.
   * 
   * @example
   * Traffic
   */
  fieldName?: string;
  /**
   * @remarks
   * The aggregated value.
   * 
   * @example
   * 12345
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      aggMethod: 'AggMethod',
      dimensionName: 'DimensionName',
      dimensionValue: 'DimensionValue',
      fieldName: 'FieldName',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggMethod: 'string',
      dimensionName: 'string',
      dimensionValue: 'string',
      fieldName: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteTimeSeriesDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned data.
   */
  data?: DescribeSiteTimeSeriesDataResponseBodyData[];
  /**
   * @remarks
   * The end time for fetching the data.
   * 
   * The date format follows ISO8601 notation and uses UTC+0, formatted as yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2023-04-09T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The granularity of the data, in seconds.
   * 
   * @example
   * 300
   */
  interval?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The sampling rate, in %.
   * 
   * @example
   * 100
   */
  samplingRate?: number;
  /**
   * @remarks
   * The start time for fetching the data.
   * 
   * The date format follows ISO8601 notation and uses UTC+0, formatted as yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2023-04-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * Aggregated query data.
   */
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

