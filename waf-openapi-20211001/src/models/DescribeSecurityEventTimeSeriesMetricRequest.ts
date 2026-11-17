// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventTimeSeriesMetricRequestFilterConditions extends $dara.Model {
  /**
   * @remarks
   * The name of the field on which the filter operation is performed. This operation supports all fields.
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

export class DescribeSecurityEventTimeSeriesMetricRequestFilterDateRange extends $dara.Model {
  /**
   * @remarks
   * The end time of the query. The end time is represented by a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1713888600
   */
  endDate?: number;
  /**
   * @remarks
   * The start time of the query. The data query range cannot exceed the past 30 days. The start time is represented by a UNIX timestamp in seconds.
   * 
   * 
   * > The start time must be later than the current time minus 30 days.
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

export class DescribeSecurityEventTimeSeriesMetricRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The list of filter conditions. Each node describes a filter condition.
   */
  conditions?: DescribeSecurityEventTimeSeriesMetricRequestFilterConditions[];
  /**
   * @remarks
   * The time range for the query.
   * 
   * This parameter is required.
   */
  dateRange?: DescribeSecurityEventTimeSeriesMetricRequestFilterDateRange;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      dateRange: 'DateRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': DescribeSecurityEventTimeSeriesMetricRequestFilterConditions },
      dateRange: DescribeSecurityEventTimeSeriesMetricRequestFilterDateRange,
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

export class DescribeSecurityEventTimeSeriesMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The query filter conditions. Multiple filter conditions are connected by the logical AND operator.
   * 
   * This parameter is required.
   */
  filter?: DescribeSecurityEventTimeSeriesMetricRequestFilter;
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-tl32ast****
   */
  instanceId?: string;
  /**
   * @remarks
   * The metric used to distinguish the returned data content. Different metrics correspond to different data content. This operation supports the following metrics:
   * 
   * - mitigated_requests: returns the time series statistics of blocked requests.
   * - monitored_requests: returns the time series statistics of requests that only hit monitor rules.
   * - mitigated_requests_group_by_defense_scene: returns data grouped by protection module, recording the time series statistics of hits for each module. A single request may hit multiple modules, so the number of module hits returned by this metric may not match the number of requests.
   * - mitigated_requests_group_by_block_defense_scene: returns data grouped by protection module, recording the time series statistics of blocked requests for each module. A single request is blocked by only one module, so the statistical count returned by this metric is consistent with the number of requests.
   * 
   * This parameter is required.
   * 
   * @example
   * mitigated_requests
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
      filter: DescribeSecurityEventTimeSeriesMetricRequestFilter,
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

