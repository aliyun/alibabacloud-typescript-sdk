// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventTimeSeriesMetricRequestFilterConditions extends $dara.Model {
  /**
   * @remarks
   * The field name. This operation supports all fields. For details, see the **Supported field names** section below.
   * 
   * @example
   * matched_host
   */
  key?: string;
  /**
   * @remarks
   * The operator. For details, see the **Supported operators** section below.
   * 
   * @example
   * eq
   */
  opValue?: string;
  /**
   * @remarks
   * The field content.
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
   * The end of the time range to query. The value is a Unix timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1713888600
   */
  endDate?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a Unix timestamp. Unit: seconds.
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
   * The filter conditions. Each object describes a filter condition.
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
   * The filter conditions for the query. Multiple conditions are evaluated by using a logical AND.
   * 
   * This parameter is required.
   */
  filter?: DescribeSecurityEventTimeSeriesMetricRequestFilter;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstanceInfo](https://help.aliyun.com/document_detail/140857.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-tl32ast****
   */
  instanceId?: string;
  /**
   * @remarks
   * The metric whose time series data you want to return. The following metrics are supported:
   * 
   * *   mitigated_requests: The system returns the time series data of requests that are blocked.
   * *   monitored_requests: The system returns the time series data of requests that match Monitor protection rules.
   * *   mitigated_requests_group_by_defense_scene: The system returns the number of requests that match each protection module. The returned results are grouped by protection module and can be used to generate time series charts. A request can match multiple protection modules. Therefore, the total number of matched requests is inconsistent with the total number of requests.
   * *   mitigated_requests_group_by_block_defense_scene: The system returns the number of requests that are blocked by each protection module. The returned results are grouped by protection module and can be used to generate time series charts. A request can be blocked by only one protection module. Therefore, the total number of blocked requests is consistent with the total number of requests.
   * 
   * This parameter is required.
   * 
   * @example
   * mitigated_requests
   */
  metric?: string;
  /**
   * @remarks
   * The region ID of the WAF instance. Valid values:
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

