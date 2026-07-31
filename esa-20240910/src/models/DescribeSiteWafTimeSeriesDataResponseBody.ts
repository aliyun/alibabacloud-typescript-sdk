// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteWafTimeSeriesDataResponseBodyDataDetailData extends $dara.Model {
  /**
   * @remarks
   * The start time of the time slice.
   * 
   * The time is in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is in UTC+0.
   * 
   * @example
   * 2023-04-08T16:00:00Z
   */
  timeStamp?: string;
  /**
   * @remarks
   * The value.
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

export class DescribeSiteWafTimeSeriesDataResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  detailData?: DescribeSiteWafTimeSeriesDataResponseBodyDataDetailData[];
  /**
   * @remarks
   * The query dimensions.
   * 
   * @example
   * ALL
   */
  dimensionName?: string;
  /**
   * @remarks
   * The dimension value.
   * 
   * @example
   * ALL
   */
  dimensionValue?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * Requests
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
      detailData: { 'type': 'array', 'itemType': DescribeSiteWafTimeSeriesDataResponseBodyDataDetailData },
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

export class DescribeSiteWafTimeSeriesDataResponseBodySummarizedData extends $dara.Model {
  /**
   * @remarks
   * The aggregation method.
   * 
   * @example
   * sum
   */
  aggMethod?: string;
  /**
   * @remarks
   * The summarized dimension name.
   * 
   * @example
   * ALL
   */
  dimensionName?: string;
  /**
   * @remarks
   * The summarized dimension value.
   * 
   * @example
   * ALL
   */
  dimensionValue?: string;
  /**
   * @remarks
   * The summarized metric name.
   * 
   * @example
   * Requests
   */
  fieldName?: string;
  /**
   * @remarks
   * The aggregated value.
   * 
   * @example
   * 123456
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

export class DescribeSiteWafTimeSeriesDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeSiteWafTimeSeriesDataResponseBodyData[];
  /**
   * @remarks
   * The end of the time range for the returned data.
   * 
   * The time is in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is in UTC+0.
   * 
   * @example
   * 2023-04-09T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The data granularity. Unit: seconds.
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
   * 93652946-2687-5428-8254-533B1E6A***
   */
  requestId?: string;
  /**
   * @remarks
   * The sampling rate. Unit: %.
   * 
   * @example
   * 100
   */
  samplingRate?: number;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC+0.
   * 
   * @example
   * 2023-04-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The summarized data.
   */
  summarizedData?: DescribeSiteWafTimeSeriesDataResponseBodySummarizedData[];
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
      data: { 'type': 'array', 'itemType': DescribeSiteWafTimeSeriesDataResponseBodyData },
      endTime: 'string',
      interval: 'number',
      requestId: 'string',
      samplingRate: 'number',
      startTime: 'string',
      summarizedData: { 'type': 'array', 'itemType': DescribeSiteWafTimeSeriesDataResponseBodySummarizedData },
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

