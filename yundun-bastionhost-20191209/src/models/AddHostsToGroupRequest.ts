// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddHostsToGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the asset group to which you want to add hosts.
   * 
   * >You can call the [ListHostGroups](https://help.aliyun.com/document_detail/201307.html) operation to query the asset group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  hostGroupId?: string;
  /**
   * @remarks
   * The IDs of the hosts that you want to add to the asset group. Specify a JSON string. You can specify up to 100 host IDs.
   * 
   * > You can call the [ListHosts](https://help.aliyun.com/document_detail/200665.html) operation to query the host IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["1","2","3"]
   */
  hostIds?: string;
  /**
   * @remarks
   * The ID of the bastion host whose asset group you want to add hosts to.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the bastion host whose asset group you want to add hosts to.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroupId: 'HostGroupId',
      hostIds: 'HostIds',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroupId: 'string',
      hostIds: 'string',
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

