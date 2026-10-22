// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRuleRequestDatabases extends $dara.Model {
  /**
   * @remarks
   * The list of database account IDs.
   */
  databaseAccountIds?: string[];
  /**
   * @remarks
   * The database instance ID.
   * 
   * @example
   * 2
   */
  databaseId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountIds: 'DatabaseAccountIds',
      databaseId: 'DatabaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountIds: { 'type': 'array', 'itemType': 'string' },
      databaseId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databaseAccountIds)) {
      $dara.Model.validateArray(this.databaseAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleRequestHostGroups extends $dara.Model {
  /**
   * @remarks
   * The list of asset account names.
   */
  hostAccountNames?: string[];
  /**
   * @remarks
   * The asset group ID.
   * 
   * @example
   * 1
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

export class ModifyRuleRequestHosts extends $dara.Model {
  /**
   * @remarks
   * The list of host account IDs.
   */
  hostAccountIds?: string[];
  /**
   * @remarks
   * The host ID.
   * 
   * @example
   * 1
   */
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      hostAccountIds: 'HostAccountIds',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountIds: { 'type': 'array', 'itemType': 'string' },
      hostId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hostAccountIds)) {
      $dara.Model.validateArray(this.hostAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The new remarks for the authorization rule. The remarks can be up to 500 characters in length.
   * 
   * @example
   * TEST
   */
  comment?: string;
  /**
   * @remarks
   * The new list of database instances and database accounts associated with the authorization rule.
   */
  databases?: ModifyRuleRequestDatabases[];
  /**
   * @remarks
   * The new end time of the validity period for the authorization rule. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1672502400
   */
  effectiveEndTime?: number;
  /**
   * @remarks
   * The new start time of the validity period for the authorization rule. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1669630029
   */
  effectiveStartTime?: number;
  /**
   * @remarks
   * The new list of asset groups and accounts associated with the authorization rule.
   */
  hostGroups?: ModifyRuleRequestHostGroups[];
  /**
   * @remarks
   * The new array of host IDs and host account IDs associated with the authorization rule.
   */
  hosts?: ModifyRuleRequestHosts[];
  /**
   * @remarks
   * The ID of the Bastionhost instance to which the authorization rule to be updated belongs. > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-zmb2y9ydw08
   */
  instanceId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the Bastionhost instance to which the authorization rule to be updated belongs. > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the authorization rule to be updated.
   * 
   * This parameter is required.
   * 
   * @example
   * 68
   */
  ruleId?: string;
  /**
   * @remarks
   * The new name of the authorization rule. The name must be 1 to 128 characters in length and cannot start with a special character. It can contain only periods (.), underscores (_), hyphens (-), single quotation marks (\\"), and spaces.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The new list of user group IDs associated with the authorization rule.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The new list of user IDs associated with the authorization rule.
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      databases: 'Databases',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      hostGroups: 'HostGroups',
      hosts: 'Hosts',
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      userGroupIds: 'UserGroupIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      databases: { 'type': 'array', 'itemType': ModifyRuleRequestDatabases },
      effectiveEndTime: 'number',
      effectiveStartTime: 'number',
      hostGroups: { 'type': 'array', 'itemType': ModifyRuleRequestHostGroups },
      hosts: { 'type': 'array', 'itemType': ModifyRuleRequestHosts },
      instanceId: 'string',
      projectId: 'number',
      regionId: 'string',
      ruleId: 'string',
      ruleName: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

