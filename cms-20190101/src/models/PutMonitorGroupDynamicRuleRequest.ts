// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutMonitorGroupDynamicRuleRequestGroupRulesFilters extends $dara.Model {
  /**
   * @remarks
   * The filter condition for instances. Valid values of N: 1 to 3. Valid values:
   * - contains: Contains.
   * - notContains: Does not contain.
   * - startWith: Prefix.
   * - endWith: Suffix.
   * 
   * This parameter is required.
   * 
   * @example
   * contains
   */
  function?: string;
  /**
   * @remarks
   * The field name for instance matching. Valid values of N: 1 to 3.
   * 
   * Currently, only the hostname is supported, such as hostName.
   * 
   * This parameter is required.
   * 
   * @example
   * hostName
   */
  name?: string;
  /**
   * @remarks
   * The value that meets the matching condition. Valid values of N: 1 to 3.
   * 
   * This parameter is required.
   * 
   * @example
   * nginx
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMonitorGroupDynamicRuleRequestGroupRules extends $dara.Model {
  /**
   * @remarks
   * The type of Alibaba Cloud service for the dynamic alert rule. Valid values of N: 1 to 3. Valid values:
   * 
   * - ecs: Elastic Compute Service (ECS) server.
   * 
   * - rds: relational database.
   * 
   * - slb: load balancing.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  category?: string;
  /**
   * @remarks
   * The combination condition for dynamic matching rules. Valid values of N: 1 to 3. Valid values:
   * 
   * - and: Only instances that meet all matching rules are automatically added to the application group.
   * 
   * - or: Instances that meet any matching rule are automatically added to the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * and
   */
  filterRelation?: string;
  /**
   * @remarks
   * None.
   * 
   * This parameter is required.
   */
  filters?: PutMonitorGroupDynamicRuleRequestGroupRulesFilters[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      filterRelation: 'FilterRelation',
      filters: 'Filters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      filterRelation: 'string',
      filters: { 'type': 'array', 'itemType': PutMonitorGroupDynamicRuleRequestGroupRulesFilters },
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutMonitorGroupDynamicRuleRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck this request. Valid values:
   * - **true**: sends a check request. No security group is associated with the instance. The check items include whether required parameters are specified, the request format, and service limits. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * - **false** (default): sends a normal request. If the check succeeds, an HTTP 2xx status code is returned and the operation is directly performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  groupId?: number;
  /**
   * @remarks
   * None.
   * 
   * This parameter is required.
   */
  groupRules?: PutMonitorGroupDynamicRuleRequestGroupRules[];
  /**
   * @remarks
   * The mode for creating the dynamic matching rule. Valid values:
   * 
   * - true: Asynchronous creation.
   * - false (default): Synchronous creation.
   * 
   * @example
   * false
   */
  isAsync?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      groupId: 'GroupId',
      groupRules: 'GroupRules',
      isAsync: 'IsAsync',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      groupId: 'number',
      groupRules: { 'type': 'array', 'itemType': PutMonitorGroupDynamicRuleRequestGroupRules },
      isAsync: 'boolean',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupRules)) {
      $dara.Model.validateArray(this.groupRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

