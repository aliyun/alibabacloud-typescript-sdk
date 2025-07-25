// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRuleRequestDatabases } from "./CreateRuleRequestDatabases";
import { CreateRuleRequestHostGroups } from "./CreateRuleRequestHostGroups";
import { CreateRuleRequestHosts } from "./CreateRuleRequestHosts";


export class CreateRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks of the authorization rule. The remarks can be up to 500 characters in length.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The information about the database that runs on your server.
   */
  databases?: CreateRuleRequestDatabases[];
  /**
   * @remarks
   * The end time of the validity period of the authorization rule. Specify a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1672502400
   */
  effectiveEndTime?: number;
  /**
   * @remarks
   * The start time of the validity period of the authorization rule. Specify a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1669630029
   */
  effectiveStartTime?: number;
  /**
   * @remarks
   * The information about the asset group that you want to authorize to manage.
   */
  hostGroups?: CreateRuleRequestHostGroups[];
  /**
   * @remarks
   * The host information.
   */
  hosts?: CreateRuleRequestHosts[];
  /**
   * @remarks
   * The bastion host ID.
   * 
   * >  You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-5yd2ymfsa0e
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the authorization rule. The name can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * rule
   */
  ruleName?: string;
  /**
   * @remarks
   * An array that consists of user group IDs.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * An array that consists of user IDs.
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

