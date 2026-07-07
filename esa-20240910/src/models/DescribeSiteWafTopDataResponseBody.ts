// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteWafTopDataResponseBodyDataDetailData extends $dara.Model {
  /**
   * @remarks
   * The query dimension value.
   * 
   * @example
   * ALL
   */
  dimensionValue?: string;
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
      dimensionValue: 'DimensionValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionValue: 'string',
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

export class DescribeSiteWafTopDataResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  detailData?: DescribeSiteWafTopDataResponseBodyDataDetailData[];
  /**
   * @remarks
   * The query dimension.
   * 
   * @example
   * ALL
   */
  dimensionName?: string;
  /**
   * @remarks
   * The query metric value.
   * 
   * @example
   * Requests
   */
  fieldName?: string;
  static names(): { [key: string]: string } {
    return {
      detailData: 'DetailData',
      dimensionName: 'DimensionName',
      fieldName: 'FieldName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailData: { 'type': 'array', 'itemType': DescribeSiteWafTopDataResponseBodyDataDetailData },
      dimensionName: 'string',
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

export class DescribeSiteWafTopDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeSiteWafTopDataResponseBodyData[];
  /**
   * @remarks
   * The end of the time range for the returned data.
   * 
   * The time is in ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is in UTC+0.
   * 
   * @example
   * 2023-04-09T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 64041D4F-B615-5DEB-AC94-F01EE433****
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
   * Specify the time in ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC+0.
   * 
   * @example
   * 2023-04-08T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      endTime: 'EndTime',
      requestId: 'RequestId',
      samplingRate: 'SamplingRate',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeSiteWafTopDataResponseBodyData },
      endTime: 'string',
      requestId: 'string',
      samplingRate: 'number',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

