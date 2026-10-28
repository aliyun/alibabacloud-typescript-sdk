// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGadInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the group. The name must be globally unique.
   * 
   * @example
   * gad-sqlserver-hk-set4
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type. Valid values: DR (disaster recovery) and GAD (active geo-redundancy).
   * 
   * @example
   * DR
   */
  instanceType?: string;
  /**
   * @remarks
   * The database engine. Valid values: MySQL, SQL Server, and PostgreSQL.
   * 
   * @example
   * SQLServer
   */
  masterDbEngineType?: string;
  /**
   * @remarks
   * The ID of the primary ApsaraDB RDS instance.
   * 
   * @example
   * rm-j6c685vh0j0y1k***
   */
  masterDbInstanceId?: string;
  /**
   * @remarks
   * The region of the primary instance.
   * 
   * @example
   * cn-hongkong
   */
  masterDbInstanceRegion?: string;
  /**
   * @remarks
   * The zone of the primary instance.
   * 
   * @example
   * cn-hongkong-b
   */
  masterDbZoneId?: string;
  ownerId?: string;
  /**
   * @remarks
   * The region of the primary instance.
   * 
   * @example
   * cn-hongkong
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek3d****4mxya
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      masterDbEngineType: 'MasterDbEngineType',
      masterDbInstanceId: 'MasterDbInstanceId',
      masterDbInstanceRegion: 'MasterDbInstanceRegion',
      masterDbZoneId: 'MasterDbZoneId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      instanceType: 'string',
      masterDbEngineType: 'string',
      masterDbInstanceId: 'string',
      masterDbInstanceRegion: 'string',
      masterDbZoneId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

