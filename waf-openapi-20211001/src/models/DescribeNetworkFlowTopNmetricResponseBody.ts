// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkFlowTopNMetricResponseBodyNetworkFlowTopNValues extends $dara.Model {
  /**
   * @remarks
   * Returns additional information, such as the country, province, or city to which an IP address belongs.
   * 
   * @example
   * ""
   */
  attribute?: string;
  /**
   * @remarks
   * The value of this field varies depending on the queried Metric.
   * 
   * @example
   * 127.0.0.1
   */
  name?: string;
  /**
   * @remarks
   * Counts for top ranking.
   * 
   * @example
   * 1123
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

export class DescribeNetworkFlowTopNMetricResponseBodyTopNMetaDataDateRange extends $dara.Model {
  /**
   * @remarks
   * The end time of the query range (Unix timestamp, seconds). Same as the EndDate request parameter.
   * 
   * @example
   * 1713888600
   */
  endDate?: number;
  /**
   * @remarks
   * The start time of the query range (Unix timestamp, seconds). Same as the StartDate request parameter.
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

export class DescribeNetworkFlowTopNMetricResponseBodyTopNMetaData extends $dara.Model {
  /**
   * @remarks
   * The query time range.
   */
  dateRange?: DescribeNetworkFlowTopNMetricResponseBodyTopNMetaDataDateRange;
  /**
   * @remarks
   * The unit of the returned data. It is fixed as requests.
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
      dateRange: DescribeNetworkFlowTopNMetricResponseBodyTopNMetaDataDateRange,
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

export class DescribeNetworkFlowTopNMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The top statistical data array returned.
   */
  networkFlowTopNValues?: DescribeNetworkFlowTopNMetricResponseBodyNetworkFlowTopNValues[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D827FCFE-90A7-4330-9326-D33C8B4C7726
   */
  requestId?: string;
  /**
   * @remarks
   * The metadata of the returned data.
   */
  topNMetaData?: DescribeNetworkFlowTopNMetricResponseBodyTopNMetaData;
  static names(): { [key: string]: string } {
    return {
      networkFlowTopNValues: 'NetworkFlowTopNValues',
      requestId: 'RequestId',
      topNMetaData: 'TopNMetaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkFlowTopNValues: { 'type': 'array', 'itemType': DescribeNetworkFlowTopNMetricResponseBodyNetworkFlowTopNValues },
      requestId: 'string',
      topNMetaData: DescribeNetworkFlowTopNMetricResponseBodyTopNMetaData,
    };
  }

  validate() {
    if(Array.isArray(this.networkFlowTopNValues)) {
      $dara.Model.validateArray(this.networkFlowTopNValues);
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

