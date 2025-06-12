// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSynDbsResponseBodySynDbs extends $dara.Model {
  /**
   * @remarks
   * *   When the value **true** is returned for the **SynStatus** parameter, the system does not return the ErrorMsg parameter.
   * *   When the value **false** is returned for the **SynStatus** parameter, the system returns for the ErrorMsg parameter the cause why the data synchronization failed.
   * 
   * @example
   * ClickHouse exception, code: 49, host: 100.100.118.132, port: 49670; Code: 49, e.displayText() = DB::Exception: Logical error: there is no global context (version 20.8.17.25)n
   */
  errorMsg?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * rm-wz9d11qg1j0h4****
   */
  rdsId?: string;
  /**
   * @remarks
   * The database account that is used to log on to the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * test
   */
  rdsUserName?: string;
  /**
   * @remarks
   * The internal endpoint of the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * rm-bp16t9h3999xb0a711****.mysql.rds.aliyuncs.com:3306
   */
  rdsVpcUrl?: string;
  /**
   * @remarks
   * The name of the database in the ApsaraDB RDS for MySQL instance.
   * 
   * @example
   * database
   */
  synDb?: string;
  /**
   * @remarks
   * Indicates whether the data synchronization succeeded. Valid values:
   * 
   * *   **true**: The data synchronization succeeded.
   * *   **false**: The data synchronization failed.
   * 
   * @example
   * true
   */
  synStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      rdsId: 'RdsId',
      rdsUserName: 'RdsUserName',
      rdsVpcUrl: 'RdsVpcUrl',
      synDb: 'SynDb',
      synStatus: 'SynStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      rdsId: 'string',
      rdsUserName: 'string',
      rdsVpcUrl: 'string',
      synDb: 'string',
      synStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

