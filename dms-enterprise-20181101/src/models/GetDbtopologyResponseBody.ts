// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDBTopologyResponseBodyDBTopologyDBTopologyInfoList extends $dara.Model {
  /**
   * @remarks
   * The name of the catalog to which the database belongs.
   * 
   * > If the database is a PostgreSQL database, the value of this parameter is the name of the database.
   * 
   * @example
   * def
   */
  catalogName?: string;
  /**
   * @remarks
   * The ID of the database for which the schema design is executed.
   * 
   * @example
   * 423532
   */
  dbId?: number;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * polardb
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment to which the database belongs. Valid values:
   * 
   * *   product: production environment
   * *   dev: development environment
   * *   pre: staging environment
   * *   test: test environment
   * *   sit: SIT environment
   * *   uat: user acceptance testing (UAT) environment
   * *   pet: stress testing environment
   * *   stag: STAG environment
   * 
   * @example
   * dev
   */
  envType?: string;
  /**
   * @remarks
   * The ID of the instance. The valid value is returned if you call the ListInstances operation. The instance ID is not the ID of the RDS instance.
   * 
   * @example
   * 4325325
   */
  instanceId?: number;
  /**
   * @remarks
   * Instance resource ID.
   * 
   * @example
   * rm-xxx
   */
  instanceResourceId?: string;
  /**
   * @remarks
   * The source of the database instance. Valid values:
   * 
   * *   **PUBLIC_OWN:** a self-managed database instance that is deployed on the Internet
   * *   **RDS:** an ApsaraDB RDS instance
   * *   **ECS_OWN:** a self-managed database that is deployed on an Elastic Compute Service (ECS) instance
   * *   **VPC_IDC:** a self-managed database instance that is deployed in a data center connected over a virtual private cloud (VPC)
   * 
   * @example
   * RDS
   */
  instanceSource?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the logical database.
   * 
   * > If the database is a PostgreSQL database, the value of this parameter is the name of the database schema.
   * 
   * @example
   * db_test@rm-xxx:3306
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the saved search.
   * 
   * @example
   * db_test
   */
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      dbId: 'DbId',
      dbType: 'DbType',
      envType: 'EnvType',
      instanceId: 'InstanceId',
      instanceResourceId: 'InstanceResourceId',
      instanceSource: 'InstanceSource',
      regionId: 'RegionId',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      dbId: 'number',
      dbType: 'string',
      envType: 'string',
      instanceId: 'number',
      instanceResourceId: 'string',
      instanceSource: 'string',
      regionId: 'string',
      schemaName: 'string',
      searchName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBTopologyResponseBodyDBTopology extends $dara.Model {
  /**
   * @remarks
   * The alias of the access point.
   * 
   * @example
   * logic_db_test
   */
  alias?: string;
  /**
   * @remarks
   * The list of database splitting topology information.
   */
  DBTopologyInfoList?: GetDBTopologyResponseBodyDBTopologyDBTopologyInfoList[];
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * polardb
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment in which the database instance is deployed. Valid values:
   * 
   * *   product: production environment
   * *   dev: development environment
   * *   pre: pre-release environment
   * *   test: test environment
   * *   sit: system integration testing (SIT) environment
   * *   uat: user acceptance testing (UAT) environment
   * *   pet: stress testing environment
   * *   stag: staging environment
   * 
   * @example
   * dev
   */
  envType?: string;
  /**
   * @remarks
   * The ID of the logical database.
   * 
   * @example
   * 1234
   */
  logicDbId?: number;
  /**
   * @remarks
   * Logical database name.
   * 
   * @example
   * logic_db_test
   */
  logicDbName?: string;
  /**
   * @remarks
   * The name of the saved search.
   * 
   * @example
   * logic_db_test
   */
  searchName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      DBTopologyInfoList: 'DBTopologyInfoList',
      dbType: 'DbType',
      envType: 'EnvType',
      logicDbId: 'LogicDbId',
      logicDbName: 'LogicDbName',
      searchName: 'SearchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      DBTopologyInfoList: { 'type': 'array', 'itemType': GetDBTopologyResponseBodyDBTopologyDBTopologyInfoList },
      dbType: 'string',
      envType: 'string',
      logicDbId: 'number',
      logicDbName: 'string',
      searchName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBTopologyInfoList)) {
      $dara.Model.validateArray(this.DBTopologyInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBTopologyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The topology of the data table.
   */
  DBTopology?: GetDBTopologyResponseBodyDBTopology;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C5B8E84B-42B6-4374-AD5A-6264E1753378
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBTopology: 'DBTopology',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBTopology: GetDBTopologyResponseBodyDBTopology,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.DBTopology && typeof (this.DBTopology as any).validate === 'function') {
      (this.DBTopology as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

