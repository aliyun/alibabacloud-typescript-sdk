// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreCheckCreateGadOrderRequest extends $dara.Model {
  /**
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
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfntftbiobqyky
   */
  resourceGroupId?: string;
  slaveDatabaseName?: string;
  /**
   * @example
   * rm-bp17562h64****
   */
  slaveDbInstanceId?: string;
  /**
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

