// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataDbBaseInfoStandardGroup } from "./GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataDbBaseInfoStandardGroup";


export class GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataDbBaseInfo extends $dara.Model {
  /**
   * @remarks
   * The alias of the database instance.
   * 
   * @example
   * tf-testAccDMSEnterpriseLogicDatabase853****
   */
  alias?: string;
  /**
   * @remarks
   * The timeout period of queries on the database.
   * 
   * @example
   * 600
   */
  alterTimeout?: number;
  /**
   * @remarks
   * Indicates whether access control is enabled for data assets. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  assetControl?: boolean;
  /**
   * @remarks
   * The name of the instance in the instance list.
   * 
   * @example
   * test
   */
  catalogName?: string;
  /**
   * @remarks
   * Indicates whether the instance is added to the DMS whitelist.
   * 
   * @example
   * whitelist_done
   */
  clusterNode?: string;
  /**
   * @remarks
   * The ID of the database. You can call the [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation to query the ID of the database.
   * 
   * >  You can call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) operation to query the ID of a physical database or the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) operation to query the ID of a logical database.
   * 
   * @example
   * 348****
   */
  dbId?: number;
  /**
   * @remarks
   * The type of the database. For information about the valid values of this parameter, see [DbType parameter](https://help.aliyun.com/document_detail/198106.html).
   * 
   * @example
   * MySQL
   */
  dbType?: string;
  /**
   * @remarks
   * The ID of the database administrator (DBA) of the instance.
   * 
   * @example
   * 16****
   */
  dbaId?: number;
  /**
   * @remarks
   * The nickname of the DBA of the instance.
   * 
   * @example
   * DBA
   */
  dbaName?: string;
  /**
   * @remarks
   * The complete endpoint of the database.
   * 
   * @example
   * test@rm-2ze756u8837****.mysql.rds.aliyuncs.com:3306 [test]
   */
  description?: string;
  /**
   * @remarks
   * The encoding format of the database.
   * 
   * @example
   * utf8
   */
  encoding?: string;
  /**
   * @remarks
   * The type of the environment to which the database belongs. Valid values:
   * 
   * *   **product**: production environment
   * *   **dev**: development environment
   * *   **pre**: staging environment
   * *   **test**: test environment
   * *   **sit**: system integration testing (SIT) environment
   * *   **uat**: user acceptance testing (UAT) environment
   * *   **pet**: stress testing environment
   * *   **stag**: STAG environment
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * Indicates whether the instance needs special attention. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  follow?: boolean;
  /**
   * @remarks
   * The endpoint that is used to connect to the database.
   * 
   * @example
   * rm-2ze756u8837****.mysql.rds.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * The region in which the database instance resides.
   * 
   * @example
   * cn-beijing
   */
  idc?: string;
  /**
   * @remarks
   * The name of the region in which the database instance resides.
   * 
   * @example
   * cn-beijing
   */
  idcTitle?: string;
  /**
   * @remarks
   * The ID of the instance to which the database belongs.
   * 
   * @example
   * 175****
   */
  instanceId?: number;
  /**
   * @remarks
   * The source of the database instance.Valid values:
   * 
   * *   **RDS**: an ApsaraDB RDS instance.
   * *   **ECS_OWN**: a self-managed database deployed on an Elastic Compute Service (ECS) instance.
   * *   **PUBLIC_OWN**: a self-managed database instance that is connected over the Internet.
   * *   **VPC_ID**: a self-managed database instance in a virtual private cloud (VPC) that is connected over Express Connect circuits.
   * *   **GATEWAY**: a database instance connected by using a database gateway.
   * 
   * @example
   * RDS
   */
  instanceSource?: string;
  /**
   * @remarks
   * The time when the database information was last obtained.
   * 
   * @example
   * 2023-05-14 18:34:45
   */
  lastSyncTime?: string;
  /**
   * @remarks
   * The instance level.
   * 
   * @example
   * medium
   */
  level?: string;
  /**
   * @remarks
   * Indicates whether the database is logical. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The IDs of the owners of the databases, which are stored as an array. You can call the [GetUser](https://help.aliyun.com/document_detail/147098.html) or [ListUsers](https://help.aliyun.com/document_detail/141938.html) operation to query the IDs of the owners.
   * 
   * >  The value of OwnerIds is the same as the value of UserId
   */
  ownerIds?: number[];
  /**
   * @remarks
   * The usernames of the database owners.
   */
  ownerNames?: string[];
  /**
   * @remarks
   * The port that is used to connect to the database.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test
   */
  schemaName?: string;
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * @example
   * test@rm-2ze756u8837****.mysql.rds.aliyuncs.com:3306 [test]
   */
  searchName?: string;
  /**
   * @remarks
   * The details of the control mode of the instance.
   */
  standardGroup?: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataDbBaseInfoStandardGroup;
  /**
   * @remarks
   * The status of the database. Valid values:
   * 
   * *   **NORMAL**: The database is running as expected.
   * *   **DISABLE**: The database is disabled.
   * *   **OFFLINE**: The database is unpublished.
   * *   **NOT_EXIST**: The database does not exist.
   * 
   * @example
   * NORMAL
   */
  state?: string;
  /**
   * @remarks
   * The number of tables.
   * 
   * @example
   * 201
   */
  tableCount?: number;
  /**
   * @remarks
   * The name of TNS.
   * 
   * @example
   * TNS_4010
   */
  tnsName?: string;
  /**
   * @remarks
   * The unit type.
   * 
   * @example
   * -1
   */
  unitType?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      alterTimeout: 'AlterTimeout',
      assetControl: 'AssetControl',
      catalogName: 'CatalogName',
      clusterNode: 'ClusterNode',
      dbId: 'DbId',
      dbType: 'DbType',
      dbaId: 'DbaId',
      dbaName: 'DbaName',
      description: 'Description',
      encoding: 'Encoding',
      envType: 'EnvType',
      follow: 'Follow',
      host: 'Host',
      idc: 'Idc',
      idcTitle: 'IdcTitle',
      instanceId: 'InstanceId',
      instanceSource: 'InstanceSource',
      lastSyncTime: 'LastSyncTime',
      level: 'Level',
      logic: 'Logic',
      ownerIds: 'OwnerIds',
      ownerNames: 'OwnerNames',
      port: 'Port',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
      standardGroup: 'StandardGroup',
      state: 'State',
      tableCount: 'TableCount',
      tnsName: 'TnsName',
      unitType: 'UnitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      alterTimeout: 'number',
      assetControl: 'boolean',
      catalogName: 'string',
      clusterNode: 'string',
      dbId: 'number',
      dbType: 'string',
      dbaId: 'number',
      dbaName: 'string',
      description: 'string',
      encoding: 'string',
      envType: 'string',
      follow: 'boolean',
      host: 'string',
      idc: 'string',
      idcTitle: 'string',
      instanceId: 'number',
      instanceSource: 'string',
      lastSyncTime: 'string',
      level: 'string',
      logic: 'boolean',
      ownerIds: { 'type': 'array', 'itemType': 'number' },
      ownerNames: { 'type': 'array', 'itemType': 'string' },
      port: 'number',
      schemaName: 'string',
      searchName: 'string',
      standardGroup: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataDbBaseInfoStandardGroup,
      state: 'string',
      tableCount: 'number',
      tnsName: 'string',
      unitType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ownerIds)) {
      $dara.Model.validateArray(this.ownerIds);
    }
    if(Array.isArray(this.ownerNames)) {
      $dara.Model.validateArray(this.ownerNames);
    }
    if(this.standardGroup && typeof (this.standardGroup as any).validate === 'function') {
      (this.standardGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

