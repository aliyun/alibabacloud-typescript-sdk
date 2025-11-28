// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceDeploymentModeRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances in the specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The deployment mode. Valid values:
   * 
   * *   multiple: Multi-zone development.
   * *   single: Single-zone deployment.
   * 
   * This parameter is required.
   * 
   * @example
   * multiple
   */
  deployMode?: string;
  /**
   * @remarks
   * The vSwitch ID of the secondary zone.
   * 
   * > 
   * 
   * *   This parameter must be specified only when DeployMode is set to multiple.
   * 
   * *   The vSwitch must be deployed in the zone that is specified by the StandbyZoneId parameter.
   * 
   * @example
   * vsw-bp1cpq8mr64paltkb****
   */
  standbyVSwitchId?: string;
  /**
   * @remarks
   * The ID of the secondary zone.
   * 
   * > 
   * 
   * *   This parameter must be specified only when DeployMode is set to multiple.
   * 
   * *   You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query the available zone list.
   * 
   * *   The ID of the secondary zone must be different from the ID of the primary zone.
   * 
   * @example
   * cn-hangzhou-j
   */
  standbyZoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      deployMode: 'DeployMode',
      standbyVSwitchId: 'StandbyVSwitchId',
      standbyZoneId: 'StandbyZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      deployMode: 'string',
      standbyVSwitchId: 'string',
      standbyZoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

