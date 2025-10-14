// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEngineMigrationRequest extends $dara.Model {
  /**
   * @example
   * {\\"pc-bp1m9tt23o5kh834y.rwlb.rds.aliyuncs.com\\":\\"rm-bp1ycl5o6ojs957o0.mysql.rds.aliyuncs.com\\"}
   */
  connectionStrings?: string;
  /**
   * @example
   * pxc-htri0****r4k9p
   */
  DBInstanceName?: string;
  /**
   * @example
   * newmaster789
   */
  newMasterDBInstanceName?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * source456
   */
  sourceDBInstanceName?: string;
  /**
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

