// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItemsConnectionIp extends $dara.Model {
  /**
   * @example
   * pxc-xdb-m-pxcdym7g7w********.mysql.singapore.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @example
   * 1
   */
  DBInstanceNetType?: number;
  /**
   * @example
   * 3306
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceNetType: 'DBInstanceNetType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceNetType: 'number',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

