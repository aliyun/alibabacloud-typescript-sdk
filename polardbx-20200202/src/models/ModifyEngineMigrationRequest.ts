// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEngineMigrationRequest extends $dara.Model {
  /**
   * @remarks
   * The specific endpoints to switch. Set this parameter to a JSON string that contains the pairs of endpoints to swap.
   * > This parameter takes effect only when SwapConnectionString is set to true.
   * 
   * @example
   * {\\"pc-bp1m9tt23o5kh834y.rwlb.rds.aliyuncs.com\\":\\"rm-bp1ycl5o6ojs957o0.mysql.rds.aliyuncs.com\\"}
   */
  connectionStrings?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pxc-htri0****r4k9p
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The name of the new primary instance after the migration is complete.
   * 
   * @example
   * newmaster789
   */
  newMasterDBInstanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the source database instance.
   * 
   * @example
   * source456
   */
  sourceDBInstanceName?: string;
  /**
   * @remarks
   * Specifies whether to automatically swap connection strings. Valid values:
   * 
   * - true: The application does not need to modify its configuration. Connections are automatically directed to the new instance.
   * 
   * - false: You must manually update the application endpoint.
   * 
   * @example
   * true
   */
  swapConnectionString?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStrings: 'ConnectionStrings',
      DBInstanceName: 'DBInstanceName',
      newMasterDBInstanceName: 'NewMasterDBInstanceName',
      regionId: 'RegionId',
      sourceDBInstanceName: 'SourceDBInstanceName',
      swapConnectionString: 'SwapConnectionString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStrings: 'string',
      DBInstanceName: 'string',
      newMasterDBInstanceName: 'string',
      regionId: 'string',
      sourceDBInstanceName: 'string',
      swapConnectionString: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

