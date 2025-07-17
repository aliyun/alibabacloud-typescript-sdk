// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourcesResponseBodyPagingInfoDataSourcesDataSource extends $dara.Model {
  /**
   * @remarks
   * The connection configurations of the data source, including the connection address, access identity, and environment information. The envType parameter specifies the environment in which the data source is used. Valid values of the envType parameter:
   * 
   * *   Dev: development environment
   * *   Prod: production environment
   * 
   * The parameters that you need to configure for the data source vary based on the mode in which the data source is added. For more information, see [Data source connection information (ConnectionProperties)](https://help.aliyun.com/document_detail/2852465.html).
   * 
   * @example
   * {
   * 	"envType": "Prod",
   * 	"regionId": "cn-beijing",
   *     "instanceId": "hgprecn-cn-x0r3oun4k001",
   *     "database": "testdb",
   *     "securityProtocol": "authTypeNone",
   *     "authType": "Executor",
   *     "authIdentity": "1107550004253538"
   * }
   */
  connectionProperties?: any;
  /**
   * @remarks
   * The mode in which the data source is added. The mode varies based on the data source type. Valid values:
   * 
   * *   InstanceMode: instance mode
   * *   UrlMode: connection string mode
   * 
   * @example
   * UrlMode
   */
  connectionPropertiesMode?: string;
  /**
   * @remarks
   * The time when the data source was added. This value is a UNIX timestamp.
   * 
   * @example
   * 1648711113000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the user who adds the data source.
   * 
   * @example
   * 1624387842781448
   */
  createUser?: string;
  /**
   * @remarks
   * The description of the data source.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * 16035
   */
  id?: number;
  /**
   * @remarks
   * The time when the data source was last modified. This value is a UNIX timestamp.
   * 
   * @example
   * 1648711113000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The ID of the user who modifies the data source.
   * 
   * @example
   * 1624387842781448
   */
  modifyUser?: string;
  /**
   * @remarks
   * The unique business key of the data source. For example, the unique business key of a Hologres data source is in the `${tenantOwnerId}:${regionId}:${type}:${instanceId}:${database}` format.
   * 
   * @example
   * 1648711121000:cn-beijing:odps:yongxunQA_beijing_standard
   */
  qualifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionProperties: 'ConnectionProperties',
      connectionPropertiesMode: 'ConnectionPropertiesMode',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      description: 'Description',
      id: 'Id',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      qualifiedName: 'QualifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionProperties: 'any',
      connectionPropertiesMode: 'string',
      createTime: 'number',
      createUser: 'string',
      description: 'string',
      id: 'number',
      modifyTime: 'number',
      modifyUser: 'string',
      qualifiedName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBodyPagingInfoDataSources extends $dara.Model {
  /**
   * @remarks
   * The data sources. Each element is the information of a single data source with a unique data source ID.
   */
  dataSource?: ListDataSourcesResponseBodyPagingInfoDataSourcesDataSource[];
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * mysql
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataSource: 'DataSource',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: { 'type': 'array', 'itemType': ListDataSourcesResponseBodyPagingInfoDataSourcesDataSource },
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSource)) {
      $dara.Model.validateArray(this.dataSource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The data source groups. Each element in the array indicates a data source group. Each data source group contains data sources in the development environment (if any) and the production environment.
   */
  dataSources?: ListDataSourcesResponseBodyPagingInfoDataSources[];
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 131
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
      dataSources: { 'type': 'array', 'itemType': ListDataSourcesResponseBodyPagingInfoDataSources },
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
   * The pagination information.
   */
  pagingInfo?: ListDataSourcesResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7BE1433F-6D55-5D86-9344-CA6F7DD19B13
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDataSourcesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

