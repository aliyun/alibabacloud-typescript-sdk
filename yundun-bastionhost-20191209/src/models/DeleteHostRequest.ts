// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHostRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the host that you want to delete.
   * > You can call the [ListHosts](https://help.aliyun.com/document_detail/200665.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  hostId?: string;
  /**
   * @remarks
   * The instance ID of the bastion host where the host that you want to delete resides.
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
   * The project ID.
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the bastion host instance where the host that you want to delete resides.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
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

