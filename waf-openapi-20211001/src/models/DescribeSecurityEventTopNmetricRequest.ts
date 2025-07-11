// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventTopNMetricRequestFilterConditions extends $dara.Model {
  /**
   * @remarks
   * The field name. This operation supports all fields. For more information, see the **Supported field names** section below.
   * 
   * @example
   * matched_host
   */
  key?: string;
  /**
   * @remarks
   * The operator. For more information, see the **Supported operators** section below.
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

export class DescribeSecurityEventTopNMetricRequestFilterDateRange extends $dara.Model {
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

export class DescribeSecurityEventTopNMetricRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter conditions. Each object describes a filter condition.
   */
  conditions?: DescribeSecurityEventTopNMetricRequestFilterConditions[];
  /**
   * @remarks
   * The time range for the query.
   * 
   * This parameter is required.
   */
  dateRange?: DescribeSecurityEventTopNMetricRequestFilterDateRange;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      dateRange: 'DateRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': DescribeSecurityEventTopNMetricRequestFilterConditions },
      dateRange: DescribeSecurityEventTopNMetricRequestFilterDateRange,
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

export class DescribeSecurityEventTopNMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions for the query. Multiple conditions are evaluated by using a logical AND.
   * 
   * This parameter is required.
   */
  filter?: DescribeSecurityEventTopNMetricRequestFilter;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * >  You can call the [DescribeInstanceInfo](https://help.aliyun.com/document_detail/140857.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of data entries that can be returned. Data entries are sorted in descending order before they are returned. Maximum value: 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The metric whose top N data entries you want to return. The following metrics are supported:
   * 
   * >  For more information about attack requests, see the "Operation description" section of this topic.
   * 
   * *   real_client_ip: The system aggregates the source IP addresses of attack requests to collect statistics, sorts the statistical results in descending order, and returns top N data entries.
   * *   http_user_agent: The system aggregates the User-Agent header field of attack requests to collect statistics, sorts the statistical results in descending order, and returns top N data entries.
   * *   matched_host: The system aggregates the protected objects that are matched by attack requests to collect statistics, sorts the statistical results in descending order, and returns top N data entries.
   * *   remote_region_id: The system aggregates the countries to which the source IP addresses of attack requests belong to collect statistics, sorts the statistical results in descending order, and returns top N data entries.
   * *   request_path: The system aggregates the URLs of attack requests to collect statistics, sorts the statistical results in descending order, and returns top N data entries. The URLs exclude query strings.
   * *   block_defense_scene: The system aggregates the protection modules that block attack requests to collect statistics, sorts the statistical results in descending order, and returns top N data entries. The requests match protection rules whose actions are not set to Monitor.
   * *   defense_scene: The system aggregates the protection modules that are matched by attack requests to collect statistics, sorts the statistical results in descending order, and returns top N data entries.
   * *   defense_scene_rule_id: The system returns the IDs of top N protection rules that are matched by attack requests and also the related protection modules. Only protection rules whose actions are not set to Monitor are counted. The system returns the value in the following format:\\
   *     `{ "Attribute": "waf_base", "Value": 140, "Name": "111034" }`
   * *   defense_scene_with_rule_id: The system returns the IDs of top N protection rules that are matched by attack requests and also the related protection modules. The IDs and protection modules are connected by using hyphens (-). Protection rules whose actions are set to Monitor and Block are counted. The system returns the value in the following format:\\
   *     `{ "Attribute": "", "Value": 1, "Name": "120075-waf_base" }`
   * *   defense_scene_top_rule_id: The system returns top N matched protection rules of a specific protection module. You can specify Conditions in Filter to configure filter conditions. For example, you can use the following condition to query top N matched protection rules of the custom rule module:\\
   *     `{ "Key": "defense_scene_map", "OpValue": "contain", "Values": "custom_acl" }`
   * *   defense_scene_rule_type: The system returns top N matched protection rules of the core web protection module. This metric is supported only by the core web protection module because only this module supports subtypes of protection rules. You must specify Conditions in Filter to configure filter conditions. Example:\\
   *     `{ "Key": "defense_scene", "OpValue": "eq", "Values": "waf_base" }`
   * 
   * This parameter is required.
   * 
   * @example
   * real_client_ip
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
      limit: 'Limit',
      metric: 'Metric',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: DescribeSecurityEventTopNMetricRequestFilter,
      instanceId: 'string',
      limit: 'number',
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

