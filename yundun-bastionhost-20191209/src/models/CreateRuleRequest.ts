// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRuleRequestDatabases extends $dara.Model {
  /**
   * @remarks
   * The array of database account IDs.
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

export class CreateRuleRequestHostGroups extends $dara.Model {
  /**
   * @remarks
   * The array of asset account names.
   */
  hostAccountNames?: string[];
  /**
   * @remarks
   * The asset group ID.
   * 
   * @example
   * 3
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

export class CreateRuleRequestHosts extends $dara.Model {
  /**
   * @remarks
   * The array of host account IDs.
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

export class CreateRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the authorization rule. Maximum length: 500 characters.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The database information.
   */
  databases?: CreateRuleRequestDatabases[];
  /**
   * @remarks
   * The end time of the validity period for the authorization rule, in seconds (timestamp format).
   * 
   * @example
   * 1672502400
   */
  effectiveEndTime?: number;
  /**
   * @remarks
   * The start time of the validity period for the authorization rule, in seconds (timestamp format).
   * 
   * @example
   * 1669630029
   */
  effectiveStartTime?: number;
  /**
   * @remarks
   * The asset group information to authorize.
   */
  hostGroups?: CreateRuleRequestHostGroups[];
  /**
   * @remarks
   * The host information.
   */
  hosts?: CreateRuleRequestHosts[];
  /**
   * @remarks
   * The instance ID of the bastion host.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-5yd2ymfsa0e
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
   * The region ID of the bastion host.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the authorization rule. Maximum length: 128 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The array of user group IDs.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The array of user IDs.
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
      ruleName: 'RuleName',
      userGroupIds: 'UserGroupIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      databases: { 'type': 'array', 'itemType': CreateRuleRequestDatabases },
      effectiveEndTime: 'number',
      effectiveStartTime: 'number',
      hostGroups: { 'type': 'array', 'itemType': CreateRuleRequestHostGroups },
      hosts: { 'type': 'array', 'itemType': CreateRuleRequestHosts },
      instanceId: 'string',
      projectId: 'number',
      regionId: 'string',
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

