// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHostGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the asset group. The description can be up to 500 characters in length.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the asset group that you want to modify.
   * > You can call the [ListHostGroups](https://help.aliyun.com/document_detail/201307.html) operation to query the asset group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  hostGroupId?: string;
  /**
   * @remarks
   * The new name of the asset group. The name can be up to 128 characters in length.
   * 
   * @example
   * Group01
   */
  hostGroupName?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance to which the asset group belongs.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the instance ID.
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
   * The region ID of the Bastionhost instance to which the asset group belongs.
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      hostGroupId: 'HostGroupId',
      hostGroupName: 'HostGroupName',
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      hostGroupId: 'string',
      hostGroupName: 'string',
      instanceId: 'string',
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

