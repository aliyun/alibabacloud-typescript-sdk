// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportDataSourcesResponseBodyDataDataSources extends $dara.Model {
  /**
   * @remarks
   * The ID of the compute engine that is added as the data source.
   * 
   * @example
   * 123
   */
  bindingCalcEngineId?: number;
  /**
   * @remarks
   * Indicates whether the data source is connected to an exclusive resource group. Valid values:
   * 
   * *   1: The data source is connected to at least one exclusive resource group.
   * *   0: The data source is not connected to any exclusive resource group.
   * 
   * @example
   * 1
   */
  connectStatus?: number;
  /**
   * @remarks
   * The configuration of the data source.
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
   * Indicates whether the compute engine that is added as the data source is the default compute engine. Valid values:
   * 
   * *   true: The compute engine is the default compute engine.
   * *   false: The compute engine is not the default compute engine.
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
   * The environment in which the data source resides. Valid values:
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
   * The ID of the user who exported the data source.
   * 
   * @example
   * 193543050****
   */
  operator?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace to which the data source belongs.
   * 
   * @example
   * 123
   */
  projectId?: number;
  /**
   * @remarks
   * The sequence number of the data source.
   * 
   * @example
   * 300
   */
  sequence?: number;
  /**
   * @remarks
   * Indicates whether the data source can be shared. Valid values:
   * 
   * *   true: The data source can be shared.
   * *   false: The data source cannot be shared.
   * 
   * @example
   * false
   */
  shared?: boolean;
  /**
   * @remarks
   * Indicates whether the data source is available. Valid values:
   * 
   * *   1: The data source is available.
   * *   0: The data source is unavailable.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The subtype of the data source. This parameter takes effect only when the DataSourceType parameter is set to rds.
   * 
   * If the value of the DataSourceType parameter is rds, the value of this parameter can be mysql, sqlserver, or postgresql.
   * 
   * @example
   * mysql
   */
  subType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the data source belongs.
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

export class ExportDataSourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the exported data sources. The value is an array. The following parameters are the elements in the array. The sample values of these parameters show the details of a sample data source.
   */
  dataSources?: ExportDataSourcesResponseBodyDataDataSources[];
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
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
      dataSources: { 'type': 'array', 'itemType': ExportDataSourcesResponseBodyDataDataSources },
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

export class ExportDataSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the exported data sources.
   */
  data?: ExportDataSourcesResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned. Valid values:
   * 
   * *   200: The request was successful.
   * *   Other values: The request failed. You can troubleshoot issues based on the HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * 0bc14115159376359****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
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
      data: ExportDataSourcesResponseBodyData,
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

