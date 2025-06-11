// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDatabasesResponseBodyDatabasesTables } from "./DescribeDatabasesResponseBodyDatabasesTables";
import { DescribeDatabasesResponseBodyDatabasesUsers } from "./DescribeDatabasesResponseBodyDatabasesUsers";


export class DescribeDatabasesResponseBodyDatabases extends $dara.Model {
  /**
   * @remarks
   * The collation.
   * 
   * @example
   * utf8mb4_general_ci
   */
  collation?: string;
  /**
   * @remarks
   * The time when the database was created.
   * 
   * @example
   * 2022-02-21 15:41:06
   */
  createTime?: string;
  /**
   * @remarks
   * The actual data size, in GB. 
   * >Notice: This parameter is no longer used in later versions. RequiredSize is used instead.
   * 
   * @example
   * 5.67 GB
   */
  dataSize?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * sms_pre
   */
  databaseName?: string;
  /**
   * @remarks
   * The database type.
   * 
   * @example
   * mysql
   */
  dbType?: string;
  /**
   * @remarks
   * The description of the database.
   * 
   * @example
   * test db
   */
  description?: string;
  /**
   * @remarks
   * The encoding standard of the database. Encoding standards such as utf8mb4 and GBK are supported.
   * 
   * @example
   * utf8mb4
   */
  encoding?: string;
  /**
   * @remarks
   * The ID of the cluster to which the tenant belongs.
   * 
   * @example
   * obsdh2f****
   */
  instanceId?: string;
  /**
   * @remarks
   * The storage space required, in GB.
   * 
   * @example
   * 5.67 GB
   */
  requiredSize?: number;
  /**
   * @remarks
   * The status of the database. Valid values:    
   * - ONLINE: The database is running.  
   * - DELETING: The database is being deleted.
   * 
   * @example
   * ONLINE
   */
  status?: string;
  /**
   * @remarks
   * The list of database tables.
   */
  tables?: DescribeDatabasesResponseBodyDatabasesTables[];
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * t33h8y08k****
   */
  tenantId?: string;
  /**
   * @remarks
   * The name of the tenant.
   * 
   * @example
   * tenantABC
   */
  tenantName?: string;
  /**
   * @remarks
   * The list of accounts that are granted privileges on this database.
   */
  users?: DescribeDatabasesResponseBodyDatabasesUsers[];
  static names(): { [key: string]: string } {
    return {
      collation: 'Collation',
      createTime: 'CreateTime',
      dataSize: 'DataSize',
      databaseName: 'DatabaseName',
      dbType: 'DbType',
      description: 'Description',
      encoding: 'Encoding',
      instanceId: 'InstanceId',
      requiredSize: 'RequiredSize',
      status: 'Status',
      tables: 'Tables',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collation: 'string',
      createTime: 'string',
      dataSize: 'number',
      databaseName: 'string',
      dbType: 'string',
      description: 'string',
      encoding: 'string',
      instanceId: 'string',
      requiredSize: 'number',
      status: 'string',
      tables: { 'type': 'array', 'itemType': DescribeDatabasesResponseBodyDatabasesTables },
      tenantId: 'string',
      tenantName: 'string',
      users: { 'type': 'array', 'itemType': DescribeDatabasesResponseBodyDatabasesUsers },
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

