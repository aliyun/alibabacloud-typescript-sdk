// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRuleResponseBodyRuleDatabases } from "./GetRuleResponseBodyRuleDatabases";
import { GetRuleResponseBodyRuleHostGroups } from "./GetRuleResponseBodyRuleHostGroups";
import { GetRuleResponseBodyRuleHosts } from "./GetRuleResponseBodyRuleHosts";
import { GetRuleResponseBodyRuleUserGroups } from "./GetRuleResponseBodyRuleUserGroups";
import { GetRuleResponseBodyRuleUsers } from "./GetRuleResponseBodyRuleUsers";


export class GetRuleResponseBodyRule extends $dara.Model {
  /**
   * @remarks
   * The remarks of the authorization rule.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The databases on which permissions are granted by using the authorization rule.
   */
  databases?: GetRuleResponseBodyRuleDatabases[];
  /**
   * @remarks
   * The end time of the validity period of the authorization rule. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1698720972
   */
  effectiveEndTime?: string;
  /**
   * @remarks
   * The start time of the validity period of the authorization rule. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1687140883
   */
  effectiveStartTime?: string;
  /**
   * @remarks
   * The asset groups on which permissions are granted by using the authorization rule.
   */
  hostGroups?: GetRuleResponseBodyRuleHostGroups[];
  /**
   * @remarks
   * The information about the hosts that the policy authorizes users to manage.
   */
  hosts?: GetRuleResponseBodyRuleHosts[];
  /**
   * @remarks
   * The ID of the authorization rule.
   * 
   * @example
   * 3
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the authorization rule.
   * 
   * @example
   * rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The authorized user groups.
   */
  userGroups?: GetRuleResponseBodyRuleUserGroups[];
  /**
   * @remarks
   * The authorized users.
   */
  users?: GetRuleResponseBodyRuleUsers[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      databases: 'Databases',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      hostGroups: 'HostGroups',
      hosts: 'Hosts',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      userGroups: 'UserGroups',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      databases: { 'type': 'array', 'itemType': GetRuleResponseBodyRuleDatabases },
      effectiveEndTime: 'string',
      effectiveStartTime: 'string',
      hostGroups: { 'type': 'array', 'itemType': GetRuleResponseBodyRuleHostGroups },
      hosts: { 'type': 'array', 'itemType': GetRuleResponseBodyRuleHosts },
      ruleId: 'string',
      ruleName: 'string',
      userGroups: { 'type': 'array', 'itemType': GetRuleResponseBodyRuleUserGroups },
      users: { 'type': 'array', 'itemType': GetRuleResponseBodyRuleUsers },
    };
  }

  validate() {
    if(Array.isArray(this.databases)) {
      $dara.Model.validateArray(this.databases);
    }
    if(Array.isArray(this.hostGroups)) {
      $dara.Model.validateArray(this.hostGroups);
    }
    if(Array.isArray(this.hosts)) {
      $dara.Model.validateArray(this.hosts);
    }
    if(Array.isArray(this.userGroups)) {
      $dara.Model.validateArray(this.userGroups);
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

