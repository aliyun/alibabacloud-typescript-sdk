// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBProxyInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-t4n3a****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and does not need to be configured.
   * 
   * @example
   * normal
   */
  DBProxyEngineType?: string;
  /**
   * @remarks
   * The number of proxy instances. A value of 0 indicates that the proxy service of this type is disabled for the instance. Valid values: **1** to **16**.
   * > More proxy instances can process more requests. You can check the load of the proxy instances based on monitoring data and specify an appropriate number of proxy instances.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  DBProxyInstanceNum?: string;
  /**
   * @remarks
   * The type of the database proxy instance. Valid values:
   * - **common**: general-purpose database proxy
   * - **exclusive**: dedicated database proxy (default)
   * 
   * This parameter is required.
   * 
   * @example
   * exclusive
   */
  DBProxyInstanceType?: string;
  /**
   * @remarks
   * The list of proxy nodes.
   * > This parameter is required when the current proxy instance is active in a multi-zone deployment.
   */
  DBProxyNodesShrink?: string;
  /**
   * @remarks
   * The specified time when the modifications take effect. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * > This parameter is required when **EffectiveTime** is set to **SpecificTime**.
   * 
   * @example
   * 2019-07-10T13:15:12Z
   */
  effectiveSpecificTime?: string;
  /**
   * @remarks
   * The time when the modifications take effect. Valid values:
   * 
   * * **Immediate**: The modifications take effect immediately.
   * * **MaintainTime**: The modifications take effect within the maintenance window. For more information, see ModifyDBInstanceMaintainTime.
   * * **SpecificTime**: The modifications take effect at a specified time.
   * 
   * Default value: **MaintainTime**.
   * 
   * @example
   * MaintainTime
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The list of zones to which the proxy is migrated.
   * > Currently, only ApsaraDB RDS for MySQL instances with cloud disks support proxy instance migration across zones.
   */
  migrateAZShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and does not need to be configured.
   * 
   * @example
   * vsw-uf6adz52c2p****
   */
  vSwitchIds?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBProxyEngineType: 'DBProxyEngineType',
      DBProxyInstanceNum: 'DBProxyInstanceNum',
      DBProxyInstanceType: 'DBProxyInstanceType',
      DBProxyNodesShrink: 'DBProxyNodes',
      effectiveSpecificTime: 'EffectiveSpecificTime',
      effectiveTime: 'EffectiveTime',
      migrateAZShrink: 'MigrateAZ',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBProxyEngineType: 'string',
      DBProxyInstanceNum: 'string',
      DBProxyInstanceType: 'string',
      DBProxyNodesShrink: 'string',
      effectiveSpecificTime: 'string',
      effectiveTime: 'string',
      migrateAZShrink: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

