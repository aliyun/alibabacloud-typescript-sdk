// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMigrationJobStatusResponseBodySourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the migration object in the source instance belongs.
   * 
   * @example
   * dtstestdatabase
   */
  databaseName?: string;
  /**
   * @remarks
   * The database type of the source instance.
   * 
   * @example
   * MySQL
   */
  engineName?: string;
  /**
   * @remarks
   * The endpoint of the source instance.
   * 
   * @example
   * 172.16.88.***
   */
  IP?: string;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * @example
   * rm-bp1i99e8l7913****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the source instance.
   * 
   * *   **RDS**: ApsaraDB RDS instance
   * *   **ECS**: self-managed database that is hosted on Elastic Compute Service (ECS)
   * *   **LocalInstance**: self-managed database with a public IP address
   * *   **Express**: self-managed database that is connected over Express Connect, VPN Gateway, or Smart Access Gateway
   * *   **MongoDB**: ApsaraDB for MongoDB instance
   * *   **POLARDB**: PolarDB for MySQL cluster (available only for the China site)
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The database service port of the source instance.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The database account of the source instance.
   * 
   * @example
   * dtstest
   */
  userName?: string;
  /**
   * @remarks
   * The SID of the Oracle database.
   * 
   * >  This parameter is returned only if the database type of the source instance is **Oracle**.
   * 
   * @example
   * dtstestdatabase
   */
  oracleSID?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      engineName: 'EngineName',
      IP: 'IP',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      port: 'Port',
      userName: 'UserName',
      oracleSID: 'oracleSID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      engineName: 'string',
      IP: 'string',
      instanceId: 'string',
      instanceType: 'string',
      port: 'string',
      userName: 'string',
      oracleSID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

