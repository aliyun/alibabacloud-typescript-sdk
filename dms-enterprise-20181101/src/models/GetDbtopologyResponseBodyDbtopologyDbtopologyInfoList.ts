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

