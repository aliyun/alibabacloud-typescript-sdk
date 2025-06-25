// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyRuleRequestDatabases } from "./ModifyRuleRequestDatabases";
import { ModifyRuleRequestHostGroups } from "./ModifyRuleRequestHostGroups";
import { ModifyRuleRequestHosts } from "./ModifyRuleRequestHosts";


export class ModifyRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The new remarks of the authorization rule. It can be up to 500 characters in length.
   */
  comment?: string;
  /**
   * @remarks
   * The databases and database accounts that a user associated with the modified rule can manage.
   */
  databases?: ModifyRuleRequestDatabases[];
  /**
   * @remarks
   * The end time of the new validity period of the authorization rule. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1672502400
   */
  effectiveEndTime?: number;
  /**
   * @remarks
   * The start time of the new validity period of the authorization rule. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1669630029
   */
  effectiveStartTime?: number;
  /**
   * @remarks
   * The asset groups and asset accounts that a user associated with the modified rule can manage.
   */
  hostGroups?: ModifyRuleRequestHostGroups[];
  /**
   * @remarks
   * An array that consists of the host IDs and host account IDs with which the modified authorization rule is associated.
   */
  hosts?: ModifyRuleRequestHosts[];
  /**
   * @remarks
   * The ID of the bastion host whose authorization rule you want to modify.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-zmb2y9ydw08
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the bastion host to which the authorization rule to modify belongs.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the authorization rule to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * 68
   */
  ruleId?: string;
  /**
   * @remarks
   * The new name of the authorization rule. The name must be 1 to 128 characters in length and can contain periods (.), underscores (_), hyphens (-), single quotation marks (\\"), and spaces. It cannot start with a special character.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The IDs of the user groups with which the modified authorization rule is associated.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The IDs of the users with whom the modified authorization rule is associated.
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

