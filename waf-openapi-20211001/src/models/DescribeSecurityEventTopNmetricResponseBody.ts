// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventTopNMetricResponseBodySecurityEventTopNValues extends $dara.Model {
  /**
   * @remarks
   * The additional information, such as the protection module for a protection rule whose ID is returned.
   * 
   * @example
   * waf_base
   */
  attribute?: string;
  /**
   * @remarks
   * The field value, which varies based on the metric.
   * 
   * @example
   * 10000
   */
  name?: string;
  /**
   * @remarks
   * The count for the data entry.
   * 
   * @example
   * 1111
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      name: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventTopNMetricResponseBodyTopNMetaDataDateRange extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a Unix timestamp. Unit: seconds. This value is the same as the value of EndDate in the request parameters.
   * 
   * @example
   * 1713888600
   */
  endDate?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a Unix timestamp. Unit: seconds. This value is the same as the value of StartDate in the request parameters.
   * 
   * @example
   * 1713888000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventTopNMetricResponseBodyTopNMetaData extends $dara.Model {
  /**
   * @remarks
   * The time range that is used for the query.
   */
  dateRange?: DescribeSecurityEventTopNMetricResponseBodyTopNMetaDataDateRange;
  /**
   * @remarks
   * The unit of the statistics returned. It is fixed as requests.
   * 
   * @example
   * requests
   */
  units?: string;
  static names(): { [key: string]: string } {
    return {
      dateRange: 'DateRange',
      units: 'Units',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateRange: DescribeSecurityEventTopNMetricResponseBodyTopNMetaDataDateRange,
      units: 'string',
    };
  }

  validate() {
    if(this.dateRange && typeof (this.dateRange as any).validate === 'function') {
      (this.dateRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventTopNMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D827FCFE-90A7-4330-9326-*****B4C7726
   */
  requestId?: string;
  /**
   * @remarks
   * The top N data entries returned.
   */
  securityEventTopNValues?: DescribeSecurityEventTopNMetricResponseBodySecurityEventTopNValues[];
  /**
   * @remarks
   * The metadata of the data entries returned.
   */
  topNMetaData?: DescribeSecurityEventTopNMetricResponseBodyTopNMetaData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityEventTopNValues: 'SecurityEventTopNValues',
      topNMetaData: 'TopNMetaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityEventTopNValues: { 'type': 'array', 'itemType': DescribeSecurityEventTopNMetricResponseBodySecurityEventTopNValues },
      topNMetaData: DescribeSecurityEventTopNMetricResponseBodyTopNMetaData,
    };
  }

  validate() {
    if(Array.isArray(this.securityEventTopNValues)) {
      $dara.Model.validateArray(this.securityEventTopNValues);
    }
    if(this.topNMetaData && typeof (this.topNMetaData as any).validate === 'function') {
      (this.topNMetaData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

