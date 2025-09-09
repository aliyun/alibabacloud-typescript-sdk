// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuleResponseBodyRuleDatabasesDatabaseAccounts extends $dara.Model {
  /**
   * @remarks
   * The ID of the database account that the policy authorizes users to manage.
   * 
   * @example
   * 5
   */
  databaseAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountId: 'DatabaseAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyRuleDatabases extends $dara.Model {
  /**
   * @remarks
   * The database accounts on which permissions are granted by using the authorization rule.
   */
  databaseAccounts?: GetRuleResponseBodyRuleDatabasesDatabaseAccounts[];
  /**
   * @remarks
   * The ID of the database that the policy authorizes users to manage.
   * 
   * @example
   * 2
   */
  databaseId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccounts: 'DatabaseAccounts',
      databaseId: 'DatabaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccounts: { 'type': 'array', 'itemType': GetRuleResponseBodyRuleDatabasesDatabaseAccounts },
      databaseId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databaseAccounts)) {
      $dara.Model.validateArray(this.databaseAccounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyRuleHostGroups extends $dara.Model {
  /**
   * @remarks
   * The asset accounts on which permissions are granted by using the authorization rule.
   */
  hostAccountNames?: string[];
  /**
   * @remarks
   * The ID of the asset group that the policy authorizes users to manage.
   * 
   * @example
   * 7
   */
  hostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountNames: 'HostAccountNames',
      hostGroupId: 'HostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountNames: { 'type': 'array', 'itemType': 'string' },
      hostGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hostAccountNames)) {
      $dara.Model.validateArray(this.hostAccountNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyRuleHostsHostAccounts extends $dara.Model {
  /**
   * @remarks
   * The ID of the host account that the policy authorizes users to manage.
   * 
   * @example
   * 9
   */
  hostAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountId: 'HostAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyRuleHosts extends $dara.Model {
  /**
   * @remarks
   * The host accounts that the policy authorizes users to manage.
   */
  hostAccounts?: GetRuleResponseBodyRuleHostsHostAccounts[];
  /**
   * @remarks
   * The ID of the host that the policy authorizes users to manage.
   * 
   * @example
   * 52
   */
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccounts: 'HostAccounts',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccounts: { 'type': 'array', 'itemType': GetRuleResponseBodyRuleHostsHostAccounts },
      hostId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hostAccounts)) {
      $dara.Model.validateArray(this.hostAccounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyRuleUserGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the authorized user group.
   * 
   * @example
   * 2
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyRuleUsers extends $dara.Model {
  /**
   * @remarks
   * The ID of the authorized user.
   * 
   * @example
   * 3
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The returned information about the authorization rule.
   */
  rule?: GetRuleResponseBodyRule;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rule: GetRuleResponseBodyRule,
    };
  }

  validate() {
    if(this.rule && typeof (this.rule as any).validate === 'function') {
      (this.rule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

