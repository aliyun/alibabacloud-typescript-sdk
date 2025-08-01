// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the database to query.
   * 
   * >  You can call the [ListDatabases](https://help.aliyun.com/document_detail/2758822.html) operation to query the database ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 21
   */
  databaseId?: string;
  /**
   * @remarks
   * The ID of the bastion host that manages the database to query.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the ID of the bastion host.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-wwo36qbv601
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the bastion host that manages the database to query.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
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

