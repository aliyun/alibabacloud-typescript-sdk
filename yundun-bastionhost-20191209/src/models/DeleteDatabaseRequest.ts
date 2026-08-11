// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the database that you want to delete.
   * > You can invoke the [ListDatabases](https://help.aliyun.com/document_detail/2758822.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  databaseId?: string;
  /**
   * @remarks
   * The instance ID of the bastion host where the database instance that you want to delete resides.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-78v1ghxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The project ID.
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
      databaseId: 'DatabaseId',
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
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

