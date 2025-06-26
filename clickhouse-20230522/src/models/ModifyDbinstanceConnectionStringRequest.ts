// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceConnectionStringRequest extends $dara.Model {
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
   * The prefix of the endpoint that is used to connect to the database.
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
  DBInstanceNetType?: string;
  /**
   * @remarks
   * *   The database ports that you want to disable. Separate multiple ports with commas (,).
   * 
   * *   This parameter is supported only for clusters whose minor engine version is 24.10.1.11098_1 or later.
   * 
   *     **
   * 
   *     **Note** If you create a cluster whose minor engine version is earlier than 24.10.1.11098_1 and you update the minor engine version to 24.10.1.11098_1 or later, the cluster still does not support this parameter.
   * 
   * @example
   * 9001,8123
   */
  disablePorts?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
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

