// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the project. The description can be up to 500 characters in length.
   * 
   * @example
   * Bastionhost demo
   */
  description?: string;
  /**
   * @remarks
   * The instance ID of the bastion host for which you want to modify project information.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-7mz2v120f0y
   */
  instanceId?: string;
  /**
   * @remarks
   * The UIDs of the member accounts to associate with the project after modification.
   * > You can call the ListMembersNotForProject operation to obtain this parameter. If you do not specify this parameter, no changes are made.
   * 
   * @example
   * 160****5312
   */
  memberIds?: string;
  /**
   * @remarks
   * The new name of the project. The name must be 1 to 128 characters in length, cannot start with a special character, and can contain only the following special characters: periods (.), underscores (_), hyphens (-), backslashes (\\), and spaces.
   * 
   * @example
   * projectname
   */
  name?: string;
  /**
   * @remarks
   * The ID of the project that you want to modify.
   * > You can call the ListProjects operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
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
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      memberIds: 'MemberIds',
      name: 'Name',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      memberIds: 'string',
      name: 'string',
      projectId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

