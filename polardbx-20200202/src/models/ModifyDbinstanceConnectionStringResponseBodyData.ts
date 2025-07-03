// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceConnectionStringResponseBodyData extends $dara.Model {
  /**
   * @example
   * test2.polarx.huhehaote.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @example
   * pxc-unrf5ssig0ecg8
   */
  DBInstanceName?: string;
  /**
   * @example
   * 1
   */
  DBInstanceNetType?: string;
  /**
   * @example
   * 3300
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceName: 'DBInstanceName',
      DBInstanceNetType: 'DBInstanceNetType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceName: 'string',
      DBInstanceNetType: 'string',
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

