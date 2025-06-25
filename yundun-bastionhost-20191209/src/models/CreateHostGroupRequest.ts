// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHostGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks of the asset group. The remarks can be up to 500 characters in length.
   * 
   * @example
   * Local host group.
   */
  comment?: string;
  /**
   * @remarks
   * The name of the asset group. The name can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * HostGroup01
   */
  hostGroupName?: string;
  /**
   * @remarks
   * The ID of the bastion host on which you want to create an asset group.
   * 
   * >  You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the bastion host on which you want to create an asset group.
   * 
   * >  For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      hostGroupName: 'HostGroupName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      hostGroupName: 'string',
      instanceId: 'string',
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

