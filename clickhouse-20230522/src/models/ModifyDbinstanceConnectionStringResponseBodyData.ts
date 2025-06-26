// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceConnectionStringResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the cluster.
   * 
   * @example
   * cc-2ze34****-clickhouse..clickhouseserver.pre.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-xxxxx
   */
  DBInstanceID?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * cc-xxxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The disabled database ports.
   * 
   * @example
   * 9001,8123
   */
  disabledPorts?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
      disabledPorts: 'DisabledPorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBInstanceID: 'number',
      DBInstanceName: 'string',
      disabledPorts: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

