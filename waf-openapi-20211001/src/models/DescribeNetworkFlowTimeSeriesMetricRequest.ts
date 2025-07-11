// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkFlowTimeSeriesMetricRequestFilterConditions extends $dara.Model {
  /**
   * @remarks
   * The filter fields. Valid values:
   * *   matched_host
   * *   cluster
   * 
   * For details, see the **Filter fields (Key)** section below.
   * 
   * @example
   * matched_host
   */
  key?: string;
  /**
   * @remarks
   * The filter operator. For details, see the **Filter operators (OpValue)** section below.
   * 
   * @example
   * eq
   */
  opValue?: string;
  /**
   * @remarks
   * The filter content.
   * 
   * @example
   * test.waf-top
   */
  values?: any;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      opValue: 'OpValue',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      opValue: 'string',
      values: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkFlowTimeSeriesMetricRequestFilterDateRange extends $dara.Model {
  /**
   * @remarks
   * End time of the query range (Unix timestamp, seconds).
   * 
   * This parameter is required.
   * 
   * @example
   * 1713888600
   */
  endDate?: number;
  /**
   * @remarks
   * Start time of the query range (Unix timestamp, seconds).
   * 
   * This parameter is required.
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

export class DescribeNetworkFlowTimeSeriesMetricRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The list of filter conditions. Each node describes a filter condition.
   */
  conditions?: DescribeNetworkFlowTimeSeriesMetricRequestFilterConditions[];
  /**
   * @remarks
   * Specifies the date range for the query.
   * 
   * This parameter is required.
   */
  dateRange?: DescribeNetworkFlowTimeSeriesMetricRequestFilterDateRange;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      dateRange: 'DateRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': DescribeNetworkFlowTimeSeriesMetricRequestFilterConditions },
      dateRange: DescribeNetworkFlowTimeSeriesMetricRequestFilterDateRange,
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(this.dateRange && typeof (this.dateRange as any).validate === 'function') {
      (this.dateRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkFlowTimeSeriesMetricRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies filtering conditions. Multiple filter parameters use AND logic.
   * 
   * This parameter is required.
   */
  filter?: DescribeNetworkFlowTimeSeriesMetricRequestFilter;
  /**
   * @remarks
   * The Web Application Firewall (WAF) instance ID.
   * > Call the [DescribeInstanceInfo](https://help.aliyun.com/document_detail/140857.html) operation to retrieve the WAF instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies the data type to be returned. Valid values:
   * 
   * *   qps: Returns the queries per second (QPS) processed by WAF. This value is calculated using a peak detection method: QPS is measured every 10 seconds, and the highest value within the specified time range is returned.
   * *   total_requests: Returns the total number of requests processed by WAF.
   * *   top5_status: Returns the top 5 HTTP status codes returned by the WAF to clients, along with their corresponding time series statistics.
   * *   top 5_upstream_status: Returns the top 5 HTTP status codes returned by the origin server to clients, along with their corresponding time series data.
   * 
   * This parameter is required.
   * 
   * @example
   * total_requests
   */
  metric?: string;
  /**
   * @remarks
   * The region ID of WAF instance. Valid values:
   * 
   * *   **cn-hangzhou**: The Chinese mainland.
   * *   **ap-southeast-1**: Outside the Chinese mainland.
   * 
   * @example
   * ap-southeast-1
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      instanceId: 'InstanceId',
      metric: 'Metric',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: DescribeNetworkFlowTimeSeriesMetricRequestFilter,
      instanceId: 'string',
      metric: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

