// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHostGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the asset group to be deleted.
   * > You can call the [ListHostGroups](https://help.aliyun.com/document_detail/201307.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  hostGroupId?: string;
  /**
   * @remarks
   * The instance ID of the bastion host to which the asset group to be deleted belongs.
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
   * The region ID of the bastion host to which the asset group to be deleted belongs.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroupId: 'HostGroupId',
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroupId: 'string',
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

