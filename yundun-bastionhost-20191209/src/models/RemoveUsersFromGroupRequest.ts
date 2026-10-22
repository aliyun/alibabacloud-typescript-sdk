// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveUsersFromGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Bastionhost instance to which the user group from which you want to remove users belongs.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the value of this parameter.
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
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the Bastionhost instance to which the user group from which you want to remove users belongs.
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user group from which you want to remove users.
   * > You can call the [ListUserGroups](https://help.aliyun.com/document_detail/204509.html) operation to query the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * １
   */
  userGroupId?: string;
  /**
   * @remarks
   * The IDs of the users that you want to remove. The value of this parameter is a JSON string. You can specify up to 100 user IDs. Separate multiple IDs with commas (,).
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

