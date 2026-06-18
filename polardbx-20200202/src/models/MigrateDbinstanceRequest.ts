// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-xxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The zone ID of the primary zone for a multi-zone instance. **This parameter is required if you want to create a multi-zone instance.**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-zhangjiakou-b
   */
  primaryZoneId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The secondary zone ID.
   * > This parameter cannot be set to the same value as ZoneId.
   * 
   * @example
   * cn-beijing-l
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * The switchover mode. Valid values:
   * 
   * - 0: immediately switches over.
   * - 1: switches over within the O&M window.
   * 
   * @example
   * 0
   */
  switchMode?: string;
  /**
   * @remarks
   * The zone ID for Three-zone deployment.
   * 
   * @example
   * cn-beijing-h
   */
  tertiaryZoneId?: string;
  /**
   * @remarks
   * The topology type. Valid values:
   * 
   * - **3azones**: three-zone deployment.
   * - **1azone**: single-zone deployment.
   * 
   * This parameter is required.
   * 
   * @example
   * 3azones
   */
  topologyType?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) where the access endpoint resides.
   * 
   * @example
   * vpc-****
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID. This parameter is required when you create a DRDS instance of the VPC network type.
   * 
   * @example
   * vsw-****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      primaryZoneId: 'PrimaryZoneId',
      regionId: 'RegionId',
      secondaryZoneId: 'SecondaryZoneId',
      switchMode: 'SwitchMode',
      tertiaryZoneId: 'TertiaryZoneId',
      topologyType: 'TopologyType',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      primaryZoneId: 'string',
      regionId: 'string',
      secondaryZoneId: 'string',
      switchMode: 'string',
      tertiaryZoneId: 'string',
      topologyType: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

