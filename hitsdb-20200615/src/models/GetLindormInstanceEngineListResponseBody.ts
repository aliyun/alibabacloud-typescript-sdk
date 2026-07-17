// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormInstanceEngineListResponseBodyEngineListNetInfoList extends $dara.Model {
  /**
   * @remarks
   * The connection method for LindormTable. Valid values:
   * 
   * - **0**: This is the default value and can be ignored.
   * 
   * - **1**: Use the HBase Java API to access LindormTable.
   * 
   * - **2**: Use a non-Java HBase API to access LindormTable.
   * 
   * - **3**: Use CQL to access LindormTable.
   * 
   * - **4**: Use the LindormTable SQL endpoint.
   * 
   * - **5**: Use the S3-compatible endpoint for LindormTable.
   * 
   * - **6**: Use the MySQL-compatible endpoint for LindormTable.
   * 
   * @example
   * 1
   */
  accessType?: number;
  /**
   * @remarks
   * The database endpoint.
   * 
   * @example
   * ld-bp1nq34mv3smk****-proxy-lindorm.lindorm.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The network type of the database endpoint. Valid values:
   * 
   * - **0**: Internet.
   * 
   * - **2**: Virtual private cloud (VPC).
   * 
   * @example
   * 2
   */
  netType?: string;
  /**
   * @remarks
   * The port number of the database endpoint.
   * 
   * @example
   * 30020
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      connectionString: 'ConnectionString',
      netType: 'NetType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'number',
      connectionString: 'string',
      netType: 'string',
      port: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormInstanceEngineListResponseBodyEngineList extends $dara.Model {
  /**
   * @remarks
   * The engine type. Valid values:
   * 
   * - **lindorm**: LindormTable.
   * 
   * - **tsdb**: LindormTSDB.
   * 
   * - **solr**: Search engine.
   * 
   * - **store**: File engine.
   * 
   * @example
   * lindorm
   */
  engineType?: string;
  /**
   * @remarks
   * The list of database connection information for the engine.
   */
  netInfoList?: GetLindormInstanceEngineListResponseBodyEngineListNetInfoList[];
  static names(): { [key: string]: string } {
    return {
      engineType: 'EngineType',
      netInfoList: 'NetInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineType: 'string',
      netInfoList: { 'type': 'array', 'itemType': GetLindormInstanceEngineListResponseBodyEngineListNetInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.netInfoList)) {
      $dara.Model.validateArray(this.netInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormInstanceEngineListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why the access was denied.
   * 
   * @example
   * {"AuthAction":"xxx","AuthPrincipalDisplayName":"222","AuthPrincipalOwnerId":"111","AuthPrincipalType":"SubUser",,"NoPermissionType":"ImplicitDeny","PolicyType":"AccountLevelIdentityBasedPolicy","EncodedDiagnosticMessage":"xxxxxx"}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The list of engine types.
   */
  engineList?: GetLindormInstanceEngineListResponseBodyEngineList[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ld-bp1nq34mv3smk****
   */
  instanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B496BA0E-520C-59FC-BA04-196D8F3B07EF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      engineList: 'EngineList',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      engineList: { 'type': 'array', 'itemType': GetLindormInstanceEngineListResponseBodyEngineList },
      instanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.engineList)) {
      $dara.Model.validateArray(this.engineList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

