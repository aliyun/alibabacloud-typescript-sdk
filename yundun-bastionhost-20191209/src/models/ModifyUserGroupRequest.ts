// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the user group. The description can be up to 500 characters in length.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost for which you want to modify the user group information.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
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
   * The region ID of the Bastionhost instance for which you want to modify the user group information.
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user group that you want to modify.
   * > You can call the [ListUserGroups](https://help.aliyun.com/document_detail/204509.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  userGroupId?: string;
  /**
   * @remarks
   * The new name of the user group. The name can be up to 128 characters in length.
   * 
   * @example
   * TestUserGroup
   */
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      userGroupId: 'UserGroupId',
      userGroupName: 'UserGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      instanceId: 'string',
      projectId: 'number',
      regionId: 'string',
      userGroupId: 'string',
      userGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

