// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourcesResponseBodyDataDataSources extends $dara.Model {
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
   * *   1: The data source is accessible.
   * *   2: The data source is inaccessible.
   * 
   * @example
   * 1
   */
  connectStatus?: number;
  /**
   * @remarks
   * The data connection string. The value of this parameter is in the JSON format. Examples of connection strings of common data sources:
   * 
   * *   MaxCompute
   * 
   *         {
   *           "pubEndpoint": "http://service.cn.maxcompute.aliyun.com/api",
   *           "accessId": "xxxxxxx",
   *           "securityToken": null,
   *           "endpoint": "http://service.cn.maxcompute.aliyun-inc.com/api",
   *           "accessKey": "***",
   *           "name": "PRE_PROJECT_A_engine",
   *           "project": "PRE_PROJECT_A",
   *           "vpcEndpoint": "http://service.cn.maxcompute.aliyun-inc.com/api",
   *           "region": "cn-shanghai",
   *           "authType": "2"
   *         }
   * 
   * *   mysql
   * 
   *         {
   *           "configType": "1",
   *           "database": "mysql_d111b",
   *           "instanceName": "rm-xxxxxx",
   *           "password": "***",
   *           "rdsOwnerId": "12133xxxxxx",
   *           "tag": "rds",
   *           "username": "mysql_db111"
   *         }
   * 
   * *   sqlserver
   * 
   *         {
   *           "configType": "1",
   *           "jdbcUrl": "jdbc:sqlserver://rm-xxxxx.sqlserver.rds.aliyuncs.com:1433;DatabaseName=sqlserver_db1",
   *           "password": "***",
   *           "tag": "public",
   *           "username": "sqlserver_db111"
   *         }
   * 
   * *   oss
   * 
   *         {
   *           "accessId": "***********",
   *           "accessKey": "***********",
   *           "bucket": "bigxxx1223",
   *           "configType": "1",
   *           "endpoint": "http://oss-cn-hangzhou.aliyuncs.com",
   *           "tag": "public"
   *         }
   * 
   * *   postgresql
   * 
   *         {
   *           "configType": "1",
   *           "database": "cdp_xxx",
   *           "instanceName": "rm-xxxx",
   *           "password": "***",
   *           "rdsOwnerId": "121xxxxx",
   *           "tag": "rds",
   *           "username": "cdp_xxx"
   *         }
   * 
   * *   ads
   * 
   *         {
   *           "configType": "1",
   *           "password": "***",
   *           "schema": "ads_demo",
   *           "tag": "public",
   *           "url": "ads-xxx-xxxx.cn-hangzhou-1.ads.aliyuncs.com:3029",
   *           "username": "lslslsls"
   *         }
   * 
   * @example
   * {"pubEndpoint":"http://service.cn.maxcompute.aliyun.com/api","accessId":"TMP.3KecGjvzy3i8MYfn2BGHgF7EHGyBFZcHm7GgngrABVRyvvKQrfF5kskR36xP361C3dqwbGo7SGYptAeGyiTwHXqLaBUvYC","securityToken":null,"endpoint":"http://service.cn.maxcompute.aliyun-inc.com/api","accessKey":"***","name":"PRE_PROJECT_A_engine","project":"PRE_PROJECT_A","vpcEndpoint":"http://service.cn.maxcompute.aliyun-inc.com/api","region":"cn-shanghai","authType":"2"}
   */
  content?: string;
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
   * rds
   */
  dataSourceType?: string;
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
   * The ID of the workspace to which the data source belongs.
   * 
   * @example
   * 123
   */
  projectId?: number;
  /**
   * @remarks
   * The sequence number of the data source. Data sources are sorted in descending order based on the value of this parameter.
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
   * *   1: The data source is accessible.
   * *   2: The data source is inaccessible.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The subtype of the data source. This parameter takes effect only when the DataSourceType parameter is set to rds.
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
      content: 'Content',
      dataSourceType: 'DataSourceType',
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
      content: 'string',
      dataSourceType: 'string',
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

export class ListDataSourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data sources.
   */
  dataSources?: ListDataSourcesResponseBodyDataDataSources[];
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
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of data sources.
   * 
   * @example
   * 233
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataSources: 'DataSources',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSources: { 'type': 'array', 'itemType': ListDataSourcesResponseBodyDataDataSources },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query result returned.
   */
  data?: ListDataSourcesResponseBodyData;
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
      data: ListDataSourcesResponseBodyData,
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

