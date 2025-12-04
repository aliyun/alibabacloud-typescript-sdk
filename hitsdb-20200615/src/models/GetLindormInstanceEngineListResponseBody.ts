// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormInstanceEngineListResponseBodyEngineListNetInfoList extends $dara.Model {
  /**
   * @remarks
   * The method by which the connection information can be used to access LindormTable. Valid values:
   * 
   * *   **0**: The default value. This value can be ignored.
   * *   **1**: The connection information can be used to access LindormTable by using ApsaraDB for HBase API for Java.
   * *   **2**: The connection information can be used to access LindormTable by using ApsaraDB for HBase API for a non-Java language.
   * *   **3**: The connection information can be used to access LindormTable by using the LindormTable endpoint for CQL.
   * *   **4**: The connection information can be used to access LindormTable by using the LindormTable endpoint for SQL.
   * *   **5**: The connection information can be used to access Lindorm by using the LindormTable endpoint for Amazon S3.
   * *   **6**: The connection information can be used to access Lindorm by using the LindormTable endpoint for MySQL.
   * 
   * @example
   * 1
   */
  accessType?: number;
  /**
   * @remarks
   * The endpoint that is used to connect to the engine.
   * 
   * @example
   * ld-bp1nq34mv3smk****-proxy-lindorm.lindorm.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The network type of the endpoint. Valid values:
   * 
   * *   **0**: Internet
   * *   **2**: virtual private cloud (VPC)
   * 
   * @example
   * 2
   */
  netType?: string;
  /**
   * @remarks
   * The port number used to connect to the engine.
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
   * The type of engine that can run on the instance. Valid values:
   * 
   * *   **lindorm**: LindormTable.
   * *   **tsdb**: LindormTSDB.
   * *   **solr**: LindormSearch.
   * *   **store**: LindormDFS.
   * 
   * @example
   * lindorm
   */
  engineType?: string;
  /**
   * @remarks
   * The list of connection information about the engine.
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
   * The details about the access denial.
   * 
   * @example
   * {"AuthAction":"xxx","AuthPrincipalDisplayName":"222","AuthPrincipalOwnerId":"111","AuthPrincipalType":"SubUser",,"NoPermissionType":"ImplicitDeny","PolicyType":"AccountLevelIdentityBasedPolicy","EncodedDiagnosticMessage":"xxxxxx"}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The list of engines that can run on the specified instance.
   */
  engineList?: GetLindormInstanceEngineListResponseBodyEngineList[];
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * ld-bp1nq34mv3smk****
   */
  instanceId?: string;
  /**
   * @remarks
   * Request ID.
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

