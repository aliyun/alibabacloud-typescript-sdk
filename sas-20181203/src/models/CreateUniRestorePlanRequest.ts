// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUniRestorePlanRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * qtc
   */
  database?: string;
  /**
   * @remarks
   * The UUID of the Hybrid Backup Recovery (HBR) agent that is used to restore the data of the database on your server.
   * 
   * >  You can call the [DescribeUniBackupDatabase](~~DescribeUniBackupDatabase~~) operation to query the UUID.
   * 
   * @example
   * ac457b30598d11ed800000163e02****
   */
  instanceUuid?: string;
  /**
   * @remarks
   * The ID of the anti-ransomware policy.
   * 
   * >  You can call the [DescribeUniBackupPolicies](~~DescribeUniBackupPolicies~~) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  policyId?: number;
  /**
   * @remarks
   * The identifier of the point in time for restoration in the backup version that you want to use. The database is an Oracle database.****
   * 
   * >  You can call the [DescribeUniRecoverableList](~~DescribeUniRecoverableList~~) operation to query the value.
   * 
   * @example
   * 925702.0
   */
  resetScn?: string;
  /**
   * @remarks
   * The point in time for restoration in the backup version that you want to use. The database is an Oracle database.****
   * 
   * >  You can call the [DescribeUniRecoverableList](~~DescribeUniRecoverableList~~) operation to query the value.
   * 
   * @example
   * 2022-10-29 01:06:24
   */
  resetTime?: string;
  /**
   * @remarks
   * The information about the database. This parameter is available when the database is a Microsoft SQL Server (MSSQL) database. The value is a JSON string. Valid values:
   * 
   * *   **name**: the name of the database
   * *   **files**: the path to the database files
   * 
   * >  You can call the [DescribeUniRecoverableList](~~DescribeUniRecoverableList~~) operation to query the information.
   * 
   * @example
   * {"files": {"qtc":"F:\\\\database\\\\qtc.mdf","qtc_log":"F:\\\\database\\\\qtc_0.ldf"},
   * "name":"qtc"}
   */
  restoreInfo?: string;
  /**
   * @remarks
   * The point in time to which you want to restore data.
   * 
   * >  You can call the [DescribeRestorePlans](~~DescribeRestorePlans~~) operation to query the point in time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1656957664000
   */
  timePoint?: number;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      instanceUuid: 'InstanceUuid',
      policyId: 'PolicyId',
      resetScn: 'ResetScn',
      resetTime: 'ResetTime',
      restoreInfo: 'RestoreInfo',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      instanceUuid: 'string',
      policyId: 'number',
      resetScn: 'string',
      resetTime: 'string',
      restoreInfo: 'string',
      timePoint: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

