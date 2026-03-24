// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventTopNMetricRequestFilterConditions extends $dara.Model {
  /**
   * @remarks
   * The field to filter by. This operation supports all fields.
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

export class DescribeSecurityEventTopNMetricRequestFilterDateRange extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1713888600
   */
  endDate?: number;
  /**
   * @remarks
   * The start of the time range to query. The value is a UNIX timestamp. Unit: seconds. You can query data within the last 30 days.
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

export class DescribeSecurityEventTopNMetricRequestFilter extends $dara.Model {
  /**
   * @remarks
   * A list of filter conditions. Each object in the array represents a filter condition.
   */
  conditions?: DescribeSecurityEventTopNMetricRequestFilterConditions[];
  /**
   * @remarks
   * The time range to query.
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
   * The filter conditions for the query. A logical AND operator is used between multiple filter conditions.
   * 
   * This parameter is required.
   */
  filter?: DescribeSecurityEventTopNMetricRequestFilter;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries to return. The entries are sorted in descending order. Maximum value: 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * Specifies the content of the returned data. Different metrics correspond to different data content. This operation supports the following metrics:
   * 
   * > For the definition of an attack request, see the Description section of this topic. The following descriptions use this definition.
   * 
   * - real_client_ip: Aggregates the source IP addresses of attack requests, sorts them in descending order, and returns the top N results.
   * 
   * - http_user_agent: Aggregates the User-Agent headers of attack requests, sorts them in descending order, and returns the top N results.
   * 
   * - matched_host: Aggregates the protected objects that are hit by attack requests, sorts them in descending order, and returns the top N results.
   * 
   * - remote_region_id: Aggregates the countries of origin for the source IP addresses of attack requests, sorts them in descending order, and returns the top N results.
   * 
   * - request_path: Aggregates the URLs of attack requests, excluding query strings, sorts them in descending order, and returns the top N results.
   * 
   * - block_defense_scene: Aggregates the final protection modules that handled blocked requests, sorts them in descending order, and returns the top N results. Blocked requests are requests whose action is not Monitor.
   * 
   * - defense_scene: Aggregates all protection modules that are hit by attack requests, sorts them in descending order, and returns the top N results.
   * 
   * - defense_scene_rule_id: Queries the top rule IDs of hit rules that are not in Monitor mode and their corresponding protection modules. This query returns statistics only for rules that are not in Monitor mode. The data is returned in the following format:<br>
   *   `{ "Attribute": "waf_base", "Value": 140, "Name": "111034" }`<br>
   * 
   * - defense_scene_with_rule_id: Returns the top N rule IDs based on the number of hits and their corresponding protection modules. The rule ID and module are connected by a hyphen (-). This query includes rules in both Monitor and Block modes. The data is returned in the following format:<br>
   *   `{ "Attribute": "", "Value": 1, "Name": "120075-waf_base" }`<br>
   * 
   * - defense_scene_top_rule_id: Queries the top rules that are hit in a specific protection module. Specify a filter condition in the Conditions field of the Filter parameter. For example, to query the top rules that are hit in the custom access control list (ACL) module, set the Conditions field as follows:<br>
   *   `{ "Key": "defense_scene_map", "OpValue": "contain", "Values": "custom_acl" }`<br>
   * 
   * - defense_scene_rule_type: Queries the top rule types that are hit in the core web protection module. Only the core web protection module supports this query because it is the only module that has rule subtypes. Specify a filter condition in the Conditions field of the Filter parameter as follows:<br>
   *   `{ "Key": "defense_scene", "OpValue": "eq", "Values": "waf_base" }`<br>
   * 
   * This parameter is required.
   * 
   * @example
   * real_client_ip
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
   * The ID of the resource group.
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

