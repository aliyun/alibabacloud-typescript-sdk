// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreCheckCreateGadOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the active geo-redundancy instance group.
   * 
   * @example
   * gad-bp1i99e8l7913****
   */
  instanceId?: string;
  masterDatabaseName?: string;
  masterEngineArchType?: string;
  masterShardAccountName?: string;
  masterShardAccountPassword?: string;
  ownerId?: string;
  /**
   * @remarks
   * The region in which the DTS instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfntftbiobqyky
   */
  resourceGroupId?: string;
  slaveDatabaseName?: string;
  /**
   * @remarks
   * The instance ID of the database instance that assumes the secondary role.
   * 
   * @example
   * rm-bp17562h64****
   */
  slaveDbInstanceId?: string;
  /**
   * @remarks
   * The region of the database instance that assumes the secondary role.
   * 
   * @example
   * cn-hangzhou
   */
  slaveDbInstanceRegion?: string;
  slaveEngineArchType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      masterDatabaseName: 'MasterDatabaseName',
      masterEngineArchType: 'MasterEngineArchType',
      masterShardAccountName: 'MasterShardAccountName',
      masterShardAccountPassword: 'MasterShardAccountPassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      slaveDatabaseName: 'SlaveDatabaseName',
      slaveDbInstanceId: 'SlaveDbInstanceId',
      slaveDbInstanceRegion: 'SlaveDbInstanceRegion',
      slaveEngineArchType: 'SlaveEngineArchType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      masterDatabaseName: 'string',
      masterEngineArchType: 'string',
      masterShardAccountName: 'string',
      masterShardAccountPassword: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      slaveDatabaseName: 'string',
      slaveDbInstanceId: 'string',
      slaveDbInstanceRegion: 'string',
      slaveEngineArchType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

