// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveDatabasesFromGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the databases that you want to remove.
   * 
   * This parameter is required.
   */
  databaseIds?: string[];
  /**
   * @remarks
   * The ID of the asset group from which you want to remove databases.
   * 
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
   * The ID of the bastion host whose asset group you want to manage.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-78v1ghxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the bastion host whose asset group you want to manage.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseIds: 'DatabaseIds',
      hostGroupId: 'HostGroupId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseIds: { 'type': 'array', 'itemType': 'string' },
      hostGroupId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databaseIds)) {
      $dara.Model.validateArray(this.databaseIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

