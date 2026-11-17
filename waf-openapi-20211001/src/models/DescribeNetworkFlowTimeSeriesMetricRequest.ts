// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkFlowTimeSeriesMetricRequestFilterConditions extends $dara.Model {
  /**
   * @remarks
   * The name of the field on which the filter operation is performed. The Key parameter of this operation supports only the following two fields:
   * 
   * - matched_host: the protected object.
   * - cluster: the protection cluster.
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
   * The filter values.
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
   * The end time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1713888600
   */
  endDate?: number;
  /**
   * @remarks
   * The start time of the query. The time range for the query cannot exceed the past 30 days. The value is a UNIX timestamp in seconds.
   * > The start time must be later than 30 days before the current time.
   * > -
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
   * The time range for the query.
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
   * The query filter conditions. Multiple filter conditions are combined by using the logical AND operator.
   * 
   * This parameter is required.
   */
  filter?: DescribeNetworkFlowTimeSeriesMetricRequestFilter;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The metric used to distinguish the returned data content. Different metrics correspond to different data content. This operation supports the following metrics:
   * 
   * *   qps: returns the number of requests processed by WAF per second. The peak calculation method is used. A QPS value is calculated every 10 seconds, and the maximum peak value among multiple values is used as the QPS value within the current statistical time granularity.
   * *   total_requests: returns the total number of requests processed by WAF.
   * *   top5_status: returns the top 5 response codes returned by WAF to the client and the corresponding time series statistics.
   * *   top 5_upstream_status: returns the top 5 response codes returned by the origin server to the client and the corresponding time series statistics.
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

