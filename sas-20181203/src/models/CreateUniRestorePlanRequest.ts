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
   * The unique identifier of the database backup client on the destination server for restoration.
   * >Call the [DescribeUniBackupDatabase](~~DescribeUniBackupDatabase~~) operation to obtain this parameter.
   * 
   * @example
   * ac457b30598d11ed800000163e02****
   */
  instanceUuid?: string;
  /**
   * @remarks
   * The ID of the database anti-ransomware backup policy.
   * >Call the [DescribeUniBackupPolicies](~~DescribeUniBackupPolicies~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  policyId?: number;
  /**
   * @remarks
   * The **reset_scn** value of the selected record from the recoverable points in time when you query backups for an Oracle database.
   * >Call the [DescribeUniRecoverableList](~~DescribeUniRecoverableList~~) operation to obtain this parameter.
   * 
   * @example
   * 925702.0
   */
  resetScn?: string;
  /**
   * @remarks
   * The **reset_time** value of the selected record from the recoverable points in time when you query backups for an Oracle database.
   * >Call the [DescribeUniRecoverableList](~~DescribeUniRecoverableList~~) operation to obtain this parameter.
   * 
   * @example
   * 2022-10-29 01:06:24
   */
  resetTime?: string;
  /**
   * @remarks
   * The database restoration information when the database type is MSSQL. The value is a JSON string. Valid values:
   * - **name**: the name of the database.
   * - **files**: the file path of the database.
   * >Call the [DescribeUniRecoverableList](~~DescribeUniRecoverableList~~) operation to obtain this parameter.
   * 
   * @example
   * {"files": {"qtc":"F:\\\\database\\\\qtc.mdf","qtc_log":"F:\\\\database\\\\qtc_0.ldf"},
   * "name":"qtc"}
   */
  restoreInfo?: string;
  /**
   * @remarks
   * The point in time to which you want to restore the database.
   * >Call the [DescribeRestorePlans](~~DescribeRestorePlans~~) operation to obtain this parameter.
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

