// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachMembersToProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the bastion host.
   * 
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The UIDs of the member accounts that you want to associate with the project.
   * > You can call the ListMembersNotForProject operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 161****6121
   */
  memberIds?: string;
  /**
   * @remarks
   * The ID of the project with which you want to associate member accounts.
   * > You can call the ListProjects operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      memberIds: 'MemberIds',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      memberIds: 'string',
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

