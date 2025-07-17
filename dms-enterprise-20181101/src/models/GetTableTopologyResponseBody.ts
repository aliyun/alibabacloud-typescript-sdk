// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableTopologyResponseBodyTableTopologyTableTopologyInfoList extends $dara.Model {
  /**
   * @remarks
   * The ID of the physical database.
   * 
   * @example
   * 43215
   */
  dbId?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * yuyang_test
   */
  dbName?: string;
  /**
   * @remarks
   * The name that is used to search for the database.
   * > We recommend that you do not use this parameter for business development. The format of the parameter value may be modified in later versions.
   * 
   * @example
   * yuyang_test@localhost:3306
   * [yuyang_test_dev]
   */
  dbSearchName?: string;
  /**
   * @remarks
   * The database engine.
   * 
   * @example
   * mysql
   */
  dbType?: string;
  /**
   * @remarks
   * The ID of the instance to which the physical database belongs.
   * 
   * @example
   * 4325325
   */
  instanceId?: number;
  /**
   * @remarks
   * The ID of the resource related to the instance. The resource corresponds with the database instance type returned in the InstanceSource parameter.
   * 
   * *   **RDS**:The ID of the ApsaraDB RDS instance.
   * *   **ECS_OWN**: The ID of the Elastic Compute Service (ECS) instance.
   * *   **PUBLIC_OWN**: This parameter is left empty for self-managed database instances that are connected over the Internet.
   * *   **VPC_ID**:The ID of the virtual private cloud (VPC).
   * *   **GATEWAY**: The ID of the database gateway.
   * 
   * @example
   * rm-xxx
   */
  instanceResourceId?: string;
  /**
   * @remarks
   * The type of the database instance. Valid values:
   * 
   * *   **RDS**: an ApsaraDB RDS instance.
   * *   **ECS_OWN**: a self-managed database that is deployed on an ECS instance
   * *   **PUBLIC_OWN**: a self-managed database instance that is connected over the Internet.
   * *   **VPC_ID**: a self-managed database instance in a VPC that is connected over Express Connect circuits.
   * *   **GATEWAY**: a database instance connected by using a database gateway.
   * 
   * @example
   * RDS
   */
  instanceSource?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of tables.
   * 
   * @example
   * 6
   */
  tableCount?: number;
  /**
   * @remarks
   * The expression of the names of logical tables.
   * 
   * **
   * 
   * **Description** This parameter is not returned for physical tables.
   * 
   * @example
   * test_ch_[0000-0005]
   */
  tableNameExpr?: string;
  /**
   * @remarks
   * The names of tables.
   * 
   * > The table names are separated by commas (,).
   * 
   * @example
   * test_ch_0000,test_ch_0001,test_ch_0002,test_ch_0003,test_ch_0004,test_ch_0005
   */
  tableNameList?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      dbName: 'DbName',
      dbSearchName: 'DbSearchName',
      dbType: 'DbType',
      instanceId: 'InstanceId',
      instanceResourceId: 'InstanceResourceId',
      instanceSource: 'InstanceSource',
      regionId: 'RegionId',
      tableCount: 'TableCount',
      tableNameExpr: 'TableNameExpr',
      tableNameList: 'TableNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbName: 'string',
      dbSearchName: 'string',
      dbType: 'string',
      instanceId: 'number',
      instanceResourceId: 'string',
      instanceSource: 'string',
      regionId: 'string',
      tableCount: 'number',
      tableNameExpr: 'string',
      tableNameList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableTopologyResponseBodyTableTopology extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the table is a logical table. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  logic?: boolean;
  /**
   * @remarks
   * The GUID of the table in DMS.
   * 
   * @example
   * IDB_L_308302.yuyang_test.test_ch
   */
  tableGuid?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test_ch
   */
  tableName?: string;
  /**
   * @remarks
   * Information of the topology of the table.
   */
  tableTopologyInfoList?: GetTableTopologyResponseBodyTableTopologyTableTopologyInfoList[];
  static names(): { [key: string]: string } {
    return {
      logic: 'Logic',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
      tableTopologyInfoList: 'TableTopologyInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logic: 'boolean',
      tableGuid: 'string',
      tableName: 'string',
      tableTopologyInfoList: { 'type': 'array', 'itemType': GetTableTopologyResponseBodyTableTopologyTableTopologyInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.tableTopologyInfoList)) {
      $dara.Model.validateArray(this.tableTopologyInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableTopologyResponseBody extends $dara.Model {
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
   * The error message.
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
   * F5ED6A40-F344-4C7D-A8F0-5685CA584CA7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The topology information.
   */
  tableTopology?: GetTableTopologyResponseBodyTableTopology;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      tableTopology: 'TableTopology',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      tableTopology: GetTableTopologyResponseBodyTableTopology,
    };
  }

  validate() {
    if(this.tableTopology && typeof (this.tableTopology as any).validate === 'function') {
      (this.tableTopology as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

