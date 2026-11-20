// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkFlowTopNMetricResponseBodyNetworkFlowTopNValues extends $dara.Model {
  /**
   * @remarks
   * The additional information returned, such as the country, province, and city to which an IP address belongs.
   * 
   * @example
   * CN
   */
  attribute?: string;
  /**
   * @remarks
   * The value of a field. The meaning varies depending on the queried metric.
   * 
   * @example
   * 127.0.0.1
   */
  name?: string;
  /**
   * @remarks
   * The statistical count used for top sorting.
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
   * The end time used for the data query. The end time is represented by a UNIX timestamp in seconds. This value is the same as the EndDate request parameter.
   * 
   * @example
   * 1713888600
   */
  endDate?: number;
  /**
   * @remarks
   * The start time used for the data query. The start time is represented by a UNIX timestamp in seconds. This value is the same as the StartDate request parameter.
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
   * The time range used for the query.
   */
  dateRange?: DescribeNetworkFlowTopNMetricResponseBodyTopNMetaDataDateRange;
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
   * The array of returned top statistics.
   */
  networkFlowTopNValues?: DescribeNetworkFlowTopNMetricResponseBodyNetworkFlowTopNValues[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D827FCFE-90A7-4330-9326-******4C7726
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

