// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutMonitorGroupDynamicRuleRequestGroupRulesFilters extends $dara.Model {
  /**
   * @remarks
   * The method that is used to filter instances. Valid values of N: 1 to 3. Valid values:
   * 
   * *   contains: contains
   * *   notContains: does not contain
   * *   startWith: starts with a prefix
   * *   endWith: ends with a suffix
   * 
   * This parameter is required.
   * 
   * @example
   * contains
   */
  function?: string;
  /**
   * @remarks
   * The name of the field based on which instances are filtered. Valid values of N: 1 to 3.
   * 
   * Only hostnames are supported. Example: hostName.
   * 
   * This parameter is required.
   * 
   * @example
   * hostName
   */
  name?: string;
  /**
   * @remarks
   * The value to be matched with the specified field. Valid values of N: 1 to 3.
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
   * The cloud service to which the alert rule is applied. Valid values of N: 1 to 3. Valid values:
   * 
   * *   ecs: Elastic Compute Service (ECS)
   * *   rds: ApsaraDB RDS
   * *   slb: Server Load Balancer (SLB)
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  category?: string;
  /**
   * @remarks
   * The logical operator used between conditional expressions in the alert rule. Valid values of N: 1 to 3. Valid values:
   * 
   * *   and: The instances that meet all the conditional expressions are automatically added to the application group.
   * *   or: The instances that meet one of the conditional expressions are automatically added to the application group.
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
   * The mode for creating the alert rule. Valid values:
   * 
   * *   true: creates asynchronously
   * *   false (default): creates synchronously
   * 
   * @example
   * false
   */
  isAsync?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupRules: 'GroupRules',
      isAsync: 'IsAsync',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

