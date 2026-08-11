// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUsersToGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the bastion host instance to which the user group belongs.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The project ID.
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the bastion host instance to which the user group belongs.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user group to which you want to add users.
   * > You can call the [ListUserGroups](https://help.aliyun.com/document_detail/204509.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * １
   */
  userGroupId?: string;
  /**
   * @remarks
   * The IDs of the users to add to the user group. This parameter is a JSON-formatted string that supports up to 100 user IDs. Separate multiple IDs with commas (,).
   * > You can call the [ListUsers](https://help.aliyun.com/document_detail/204522.html) operation to query user IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["1","2","3"]
   */
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      projectId: 'number',
      regionId: 'string',
      userGroupId: 'string',
      userIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

