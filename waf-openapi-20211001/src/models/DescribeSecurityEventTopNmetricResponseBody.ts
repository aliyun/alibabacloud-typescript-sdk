// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventTopNMetricResponseBodySecurityEventTopNValues extends $dara.Model {
  /**
   * @remarks
   * Additional information, such as the protection module to which a rule ID belongs.
   * 
   * @example
   * waf_base
   */
  attribute?: string;
  /**
   * @remarks
   * The value of a field. The meaning of this parameter varies based on the specified \\`Metric\\`.
   * 
   * @example
   * 10000
   */
  name?: string;
  /**
   * @remarks
   * The statistical count used for top N sorting.
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
   * The end of the time range that was queried. The value is a UNIX timestamp. Unit: seconds. This value is the same as the \\`EndDate\\` request parameter.
   * 
   * @example
   * 1713888600
   */
  endDate?: number;
  /**
   * @remarks
   * The start of the time range that was queried. The value is a UNIX timestamp. Unit: seconds. This value is the same as the \\`StartDate\\` request parameter.
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
   * The time range used for the query.
   */
  dateRange?: DescribeSecurityEventTopNMetricResponseBodyTopNMetaDataDateRange;
  /**
   * @remarks
   * The unit of the returned statistics.
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
   * An array of the top N statistics.
   */
  securityEventTopNValues?: DescribeSecurityEventTopNMetricResponseBodySecurityEventTopNValues[];
  /**
   * @remarks
   * The metadata of the returned data.
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

