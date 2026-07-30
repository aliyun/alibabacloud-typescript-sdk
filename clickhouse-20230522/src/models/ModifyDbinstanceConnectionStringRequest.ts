// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceConnectionStringRequest extends $dara.Model {
  /**
   * @remarks
   * The computing group ID.
   * 
   * @example
   * cc-2ze34****-clickhouse
   */
  computingGroupId?: string;
  /**
   * @remarks
   * The connection string.
   * 
   * @example
   * cc-2ze34****-clickhouse..clickhouseserver.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The connection string prefix.
   * 
   * @example
   * cc-****-clickhouse
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-xxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * - `Vpc`: VPC
   * 
   * - `Public`: public network
   * 
   * @example
   * Public
   */
  DBInstanceNetType?: string;
  /**
   * @remarks
   * - The database ports to disable. You can specify multiple ports, separated by commas.
   * 
   * - This parameter is supported only for clusters with a kernel version of 24.10.1.11098_1 or later.
   * 
   * 
   *   >Notice: 
   * 
   *   This parameter is not supported for clusters that were upgraded to kernel version 24.10.1.11098_1 or later from an earlier version.
   * 
   * @example
   * 9001,8123
   */
  disablePorts?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      computingGroupId: 'ComputingGroupId',
      connectionString: 'ConnectionString',
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBInstanceId: 'DBInstanceId',
      DBInstanceNetType: 'DBInstanceNetType',
      disablePorts: 'DisablePorts',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computingGroupId: 'string',
      connectionString: 'string',
      connectionStringPrefix: 'string',
      DBInstanceId: 'string',
      DBInstanceNetType: 'string',
      disablePorts: 'string',
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

