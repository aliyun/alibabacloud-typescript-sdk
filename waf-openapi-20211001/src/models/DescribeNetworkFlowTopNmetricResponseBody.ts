// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkFlowTopNMetricResponseBodyNetworkFlowTopNValues extends $dara.Model {
  /**
   * @remarks
   * The additional attribute associated with the entry. For example, when the Metric is set to real_client_ip, this parameter indicates the country or region to which the IP address belongs.
   * 
   * @example
   * CN
   */
  attribute?: string;
  /**
   * @remarks
   * The dimension value that corresponds to the specified Metric request parameter. For example, if the Metric is set to real_client_ip, this parameter indicates the source IP address.
   * 
   * @example
   * 127.0.0.1
   */
  name?: string;
  /**
   * @remarks
   * The total number of requests or the QPS value, depending on the specified Metric. This value is used for top N ranking.
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
   * The end of the time range. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1713888600
   */
  endDate?: number;
  /**
   * @remarks
   * The beginning of the time range. This value is a UNIX timestamp. Unit: seconds.
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
   * The unit of the returned statistical data.
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
   * An array of the top N statistics.
   */
  networkFlowTopNValues?: DescribeNetworkFlowTopNMetricResponseBodyNetworkFlowTopNValues[];
  /**
   * @remarks
   * The ID of the request.
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

