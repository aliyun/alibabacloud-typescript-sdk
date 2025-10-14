// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-xxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-zhangjiakou-b
   */
  primaryZoneId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * cn-beijing-l
   */
  secondaryZoneId?: string;
  /**
   * @example
   * 0
   */
  switchMode?: string;
  /**
   * @example
   * cn-beijing-h
   */
  tertiaryZoneId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3azones
   */
  topologyType?: string;
  /**
   * @example
   * vpc-****
   */
  vpcId?: string;
  /**
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

