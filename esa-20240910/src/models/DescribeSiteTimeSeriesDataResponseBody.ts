// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteTimeSeriesDataResponseBodyDataDetailData extends $dara.Model {
  /**
   * @example
   * 2023-04-08T16:00:00Z
   */
  timeStamp?: string;
  /**
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
  detailData?: DescribeSiteTimeSeriesDataResponseBodyDataDetailData[];
  /**
   * @example
   * ALL
   */
  dimensionName?: string;
  /**
   * @example
   * ALL
   */
  dimensionValue?: string;
  /**
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
   * @example
   * sum
   */
  aggMethod?: string;
  /**
   * @example
   * ALL
   */
  dimensionName?: string;
  /**
   * @example
   * ALL
   */
  dimensionValue?: string;
  /**
   * @example
   * Traffic
   */
  fieldName?: string;
  /**
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

