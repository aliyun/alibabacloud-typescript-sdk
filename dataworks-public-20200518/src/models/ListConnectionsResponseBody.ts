// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectionsResponseBodyDataConnections extends $dara.Model {
  /**
   * @remarks
   * The ID of the compute engine with which the data source is associated.
   * 
   * @example
   * 123
   */
  bindingCalcEngineId?: number;
  /**
   * @remarks
   * The status of the data source. Valid values:
   * 
   * *   1: The data source is normal.
   * *   2: The data source is disabled.
   * 
   * @example
   * 1
   */
  connectStatus?: number;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   odps
   * *   mysql
   * *   rds
   * *   oss
   * *   sqlserver
   * *   polardb
   * *   oracle
   * *   mongodb
   * *   emr
   * *   postgresql
   * *   analyticdb_for_mysql
   * *   hybriddb_for_postgresql
   * *   holo
   * 
   * @example
   * mysql
   */
  connectionType?: string;
  /**
   * @remarks
   * The details of the data source. Examples of details of some common data sources:
   * 
   * *   odps
   * 
   * <!---->
   * 
   *     {
   *       "accessId": "xssssss",
   *       "accessKey": "xsaxsaxsa",
   *       "authType": 2,
   *       "endpoint": "http://service.odps.aliyun.com/api",
   *       "project": "xsaxsax",
   *       "tag": "public"
   *     }
   * 
   * *   mysql
   * 
   * <!---->
   * 
   *     {
   *       "database": "xsaxsa",
   *       "instanceName": "rm-xsaxsa",
   *       "password": "xsaxsa",
   *       "rdsOwnerId": "xasxsa",
   *       "regionId": "cn-shanghai",
   *       "tag": "rds",
   *       "username": "xsaxsa"
   *     }
   * 
   * *   rds
   * 
   * <!---->
   * 
   *     {
   *       "configType": 1,
   *       "tag": "rds",
   *       "database": "xsaxsa",
   *       "username": "xsaxsa",
   *       "password": "xssaxsa$32050",
   *       "instanceName": "rm-xsaxs",
   *       "rdsOwnerId": "11111111"
   *     }
   * 
   * *   oss
   * 
   * <!---->
   * 
   *     {
   *       "accessId": "sssssxx",
   *       "accessKey": "xsaxaxsaxs",
   *       "bucket": "xsa-xs-xs",
   *       "endpoint": "http://oss-cn-shanghai.aliyuncs.com",
   *       "tag": "public"
   *     }
   * 
   * *   sqlserver
   * 
   * <!---->
   * 
   *     {
   *       "jdbcUrl": "jdbc:sqlserver://xsaxsa-xsaxsa.database.xxx.cn:123;DatabaseName=xsxs-xsxs",
   *       "password": "sdasda$fs",
   *       "tag": "public",
   *       "username": "sxaxacdacdd"
   *     }
   * 
   * *   polardb
   * 
   * <!---->
   * 
   *     {
   *       "clusterId": "pc-sdadsadsa",
   *       "database": "dsadsadsa",
   *       "ownerId": "121212122",
   *       "password": "sdasdafssa",
   *       "region": "cn-shanghai",
   *       "tag": "polardb",
   *       "username": "asdadsads"
   *     }
   * 
   * *   oracle
   * 
   * <!---->
   * 
   *     {
   *       "jdbcUrl": "jdbc:oracle:saaa:@xxxxx:1521:PROD",
   *       "password": "sxasaxsa",
   *       "tag": "public",
   *       "username": "sasfadfa"
   *     }
   * 
   * *   mongodb
   * 
   * <!---->
   * 
   *     {
   *       "address": "[\\"xsaxxsa.mongodb.rds.aliyuncs.com:3717\\"]",
   *       "database": "admin",
   *       "password": "sadsda@",
   *       "tag": "public",
   *       "username": "dsadsadas"
   *     }
   * 
   * *   emr
   * 
   * <!---->
   * 
   *     {
   *       "accessId": "xsaxsa",
   *       "emrClusterId": "C-dsads",
   *       "emrResourceQueueName": "default",
   *       "emrEndpoint": "emr.aliyuncs.com",
   *       "accessKey": "dsadsad",
   *       "emrUserId": "224833315798889783",
   *       "name": "sasdsadsa",
   *       "emrAccessMode": "simple",
   *       "region": "cn-shanghai",
   *       "authType": "2",
   *       "emrProjectId": "FP-sdadsad"
   *     }
   * 
   * *   postgresql
   * 
   * <!---->
   * 
   *     {
   *       "jdbcUrl": "jdbc:postgresql://xxxx:1921/ssss",
   *       "password": "sdadsads",
   *       "tag": "public",
   *       "username": "sdsasda"
   *     }
   * 
   * *   analyticdb_for_mysql
   * 
   * <!---->
   * 
   *     {
   *       "instanceId": "am-sadsada",
   *       "database": "xsxsx",
   *       "username": "xsxsa",
   *       "password": "asdadsa",
   *       "connectionString": "am-xssxsxs.ads.aliyuncs.com:3306"
   *     }
   * 
   * *   hybriddb_for_postgresql
   * 
   * <!---->
   * 
   *     {
   *       "connectionString": "gp-xsaxsaxa-master.gpdbmaster.rds.aliyuncs.com",
   *       "database": "xsaxsaxas",
   *       "password": "xsaxsaxsa@11",
   *       "instanceId": "gp-xsaxsaxsa",
   *       "port": "541132",
   *       "ownerId": "xsaxsaxsas",
   *       "username": "sadsad"
   *     }
   * 
   * *   holo
   * 
   * <!---->
   * 
   *     {
   *       "accessId": "xsaxsaxs",
   *       "accessKey": "xsaxsaxsa",
   *       "database": "xsaxsaxsa",
   *       "instanceId": "xsaxa",
   *       "tag": "aliyun"
   *     }
   * 
   * *   kafka
   * 
   * <!---->
   * 
   *     {
   *       "instanceId": "xsax-cn-xsaxsa",
   *       "regionId": "cn-shanghai",
   *       "tag": "aliyun",
   *       "ownerId": "1212121212112"
   *     }
   * 
   * @example
   * {\\"database\\":\\"xxx\\",\\"instanceName\\":\\"xxx\\",\\"password\\":\\"xxx\\",\\"rdsOwnerId\\":\\"xxx\\",\\"tag\\":\\"rds\\",\\"username\\":\\"xxx\\"}
   */
  content?: string;
  /**
   * @remarks
   * Indicates whether the compute engine that is associated with the data source is the default compute engine used by data sources of the same type.
   * 
   * @example
   * false
   */
  defaultEngine?: boolean;
  /**
   * @remarks
   * The description of the data source.
   * 
   * @example
   * a connection
   */
  description?: string;
  /**
   * @remarks
   * The environment in which the data source is used. Valid values:
   * 
   * *   0: development environment
   * *   1: production environment
   * 
   * @example
   * 1
   */
  envType?: number;
  /**
   * @remarks
   * The time when the data source was created. Example: Mar 17, 2021 4:09:32 PM.
   * 
   * @example
   * Mar 17, 2021 4:09:32 PM
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the data source was last modified. Example: Mar 17, 2021 4:09:32 PM.
   * 
   * @example
   * Mar 17, 2021 4:09:32 PM
   */
  gmtModified?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to last modify the data source.
   * 
   * @example
   * 193543050****
   */
  operator?: string;
  /**
   * @remarks
   * The ID of the workspace with which the data source is associated.
   * 
   * @example
   * 123
   */
  projectId?: number;
  /**
   * @remarks
   * The field that is used to sort data sources. Data sources are sorted in descending order based on the value of this parameter.
   * 
   * @example
   * 300
   */
  sequence?: number;
  /**
   * @remarks
   * Indicates whether the data source is a shared data source.
   * 
   * @example
   * false
   */
  shared?: boolean;
  /**
   * @remarks
   * The status of the data source. Valid values:
   * 
   * *   1: The data source is normal.
   * *   2: The data source is disabled.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The subtype of the data source. This parameter is used in scenarios where a type includes subtypes. The following type and subtypes are supported:
   * 
   * *   Type: `rds`
   * *   Subtypes: `mysql`, `sqlserver`, and `postgresql`.
   * 
   * @example
   * mysql
   */
  subType?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1234567
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      bindingCalcEngineId: 'BindingCalcEngineId',
      connectStatus: 'ConnectStatus',
      connectionType: 'ConnectionType',
      content: 'Content',
      defaultEngine: 'DefaultEngine',
      description: 'Description',
      envType: 'EnvType',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      operator: 'Operator',
      projectId: 'ProjectId',
      sequence: 'Sequence',
      shared: 'Shared',
      status: 'Status',
      subType: 'SubType',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingCalcEngineId: 'number',
      connectStatus: 'number',
      connectionType: 'string',
      content: 'string',
      defaultEngine: 'boolean',
      description: 'string',
      envType: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      operator: 'string',
      projectId: 'number',
      sequence: 'number',
      shared: 'boolean',
      status: 'number',
      subType: 'string',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data sources.
   */
  connections?: ListConnectionsResponseBodyDataConnections[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of data sources returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': ListConnectionsResponseBodyDataConnections },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.connections)) {
      $dara.Model.validateArray(this.connections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query results for data sources that are returned on multiple pages.
   */
  data?: ListConnectionsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc14115159376359****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListConnectionsResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

