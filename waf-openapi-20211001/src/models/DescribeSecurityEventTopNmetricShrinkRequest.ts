// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventTopNMetricShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions for the query. A logical AND operator is used between multiple filter conditions.
   * 
   * This parameter is required.
   */
  filterShrink?: string;
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
      filterShrink: 'Filter',
      instanceId: 'InstanceId',
      limit: 'Limit',
      metric: 'Metric',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterShrink: 'string',
      instanceId: 'string',
      limit: 'number',
      metric: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

