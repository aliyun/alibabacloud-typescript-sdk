// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceDeploymentModeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances in a region.
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
   * - multiple: multi-zone deployment.
   * - single: single-zone deployment.
   * 
   * This parameter is required.
   * 
   * @example
   * multiple
   */
  deployMode?: string;
  /**
   * @remarks
   * The vSwitch ID in the secondary zone.
   * 
   * > 
   * > - This parameter is required only for multi-zone deployment.
   * > - The zone of the vSwitch specified by this parameter must be the same as the zone specified by StandbyZoneId.
   * 
   * @example
   * vsw-bp1cpq8mr64paltkb****
   */
  standbyVSwitchId?: string;
  /**
   * @remarks
   * The secondary zone ID.
   * 
   * > 
   * > - This parameter is required only for multi-zone deployment.
   * > - You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query available zone IDs.
   * > - The secondary zone ID must be different from the primary zone ID.
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

