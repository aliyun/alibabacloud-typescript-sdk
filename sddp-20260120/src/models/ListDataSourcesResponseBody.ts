// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourcesResponseBodyItems extends $dara.Model {
  /**
   * @example
   * Success
   */
  connectStatus?: string;
  /**
   * @example
   * asset-example-001
   */
  dataAssetId?: string;
  /**
   * @example
   * ds-example-001
   */
  dataSourceId?: string;
  /**
   * @example
   * 1024
   */
  dataSourceSize?: number;
  /**
   * @example
   * business_db
   */
  dbName?: string;
  /**
   * @example
   * 业务数据源
   */
  description?: string;
  /**
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @example
   * data_masking_not_running
   */
  errorCode?: string;
  /**
   * @example
   * 实例未处于运行状态
   */
  errorMessage?: string;
  /**
   * @example
   * 1001
   */
  id?: number;
  /**
   * @example
   * Enabled
   */
  identifyStatus?: string;
  /**
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @example
   * 123456789012****
   */
  memberAccount?: number;
  /**
   * @example
   * 3306
   */
  port?: number;
  /**
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @example
   * 5
   */
  productId?: number;
  /**
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @example
   * 华北 3（张家口）
   */
  regionName?: string;
  /**
   * @example
   * rg-acfmexample****
   */
  resourceGroupId?: string;
  /**
   * @example
   * tenant-example
   */
  tenantId?: string;
  /**
   * @example
   * dsc_reader
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      connectStatus: 'ConnectStatus',
      dataAssetId: 'DataAssetId',
      dataSourceId: 'DataSourceId',
      dataSourceSize: 'DataSourceSize',
      dbName: 'DbName',
      description: 'Description',
      engineType: 'EngineType',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      id: 'Id',
      identifyStatus: 'IdentifyStatus',
      instanceId: 'InstanceId',
      memberAccount: 'MemberAccount',
      port: 'Port',
      productCode: 'ProductCode',
      productId: 'ProductId',
      regionId: 'RegionId',
      regionName: 'RegionName',
      resourceGroupId: 'ResourceGroupId',
      tenantId: 'TenantId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectStatus: 'string',
      dataAssetId: 'string',
      dataSourceId: 'string',
      dataSourceSize: 'number',
      dbName: 'string',
      description: 'string',
      engineType: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      id: 'number',
      identifyStatus: 'string',
      instanceId: 'string',
      memberAccount: 'number',
      port: 'number',
      productCode: 'string',
      productId: 'number',
      regionId: 'string',
      regionName: 'string',
      resourceGroupId: 'string',
      tenantId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: ListDataSourcesResponseBodyItems[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * token-example
   */
  nextToken?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': ListDataSourcesResponseBodyItems },
      maxResults: 'number',
      nextToken: 'string',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

