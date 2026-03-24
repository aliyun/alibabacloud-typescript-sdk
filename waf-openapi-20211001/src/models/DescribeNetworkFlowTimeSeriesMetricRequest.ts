// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkFlowTimeSeriesMetricRequestFilterConditions extends $dara.Model {
  /**
   * @remarks
   * The field to use for the filter operation. This API operation supports the following values for Key:
   * 
   * - matched_host
   * 
   * - cluster
   * 
   * @example
   * matched_host
   */
  key?: string;
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * eq
   */
  opValue?: string;
  /**
   * @remarks
   * The filter value.
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
   * The end of the time range to query. This value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1713888600
   */
  endDate?: number;
  /**
   * @remarks
   * The query period cannot exceed the last 30 days. The start of the time range to query. This value is a UNIX timestamp. Unit: seconds.
   * 
   * > ## The start time must be within the last 30 days.
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
   * A list of filter conditions. Each item in the list describes a filter condition.
   */
  conditions?: DescribeNetworkFlowTimeSeriesMetricRequestFilterConditions[];
  /**
   * @remarks
   * The time range to query.
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
   * The filter conditions for the query. Multiple filter conditions are combined with a logical AND.
   * 
   * This parameter is required.
   */
  filter?: DescribeNetworkFlowTimeSeriesMetricRequestFilter;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies the type of data to return. Different values for Metric correspond to different data. This API operation supports the following values:
   * 
   * - qps: The number of requests that WAF processes per second. A queries per second (QPS) value is calculated every 10 seconds. The peak QPS value within the specified time granularity is returned.
   * 
   * - total_requests: The total number of requests processed by WAF.
   * 
   * - top5_status: The top five response status codes that WAF returns to the client, and the corresponding time series statistics.
   * 
   * - top 5_upstream_status: The top five response status codes that the origin server returns to the client, and the corresponding time series statistics.
   * 
   * This parameter is required.
   * 
   * @example
   * total_requests
   */
  metric?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
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

