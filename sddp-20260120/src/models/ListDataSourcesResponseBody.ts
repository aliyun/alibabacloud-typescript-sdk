// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourcesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The connection status of the data source. Valid values:
   * - UnConnected: Not connected.
   * - Processing: Connecting.
   * - Success: Connected.
   * - Failed: Connection failed.
   * 
   * @example
   * Success
   */
  connectStatus?: string;
  /**
   * @remarks
   * The identifier of the data asset in Data Security Center.
   * 
   * @example
   * asset-example-001
   */
  dataAssetId?: string;
  /**
   * @remarks
   * The identifier of the data source in Data Security Center.
   * 
   * @example
   * ds-example-001
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The statistical value of the data source capacity. This field is not used in the column encryption process for relational databases.
   * 
   * @example
   * 1024
   */
  dataSourceSize?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * business_db
   */
  dbName?: string;
  /**
   * @remarks
   * The description of the data source.
   * 
   * @example
   * Business data source
   */
  description?: string;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The business error code of the record or operation. This field can be empty if no error occurs. Evaluate this field together with ErrorMessage.
   * 
   * @example
   * data_masking_not_running
   */
  errorCode?: string;
  /**
   * @remarks
   * The business error message of the record or operation.
   * 
   * @example
   * The instance is not in the running state
   */
  errorMessage?: string;
  /**
   * @remarks
   * The identifier of the record.
   * 
   * @example
   * 1001
   */
  id?: number;
  /**
   * @remarks
   * The status of the data source detection switch. Valid values:
   * - Enable: Submitted for enabling.
   * - Enabling: Enabling.
   * - Enabled: Enabled.
   * - EnableFailed: Enabling failed.
   * - Disable: Submitted for disabling.
   * - Disabling: Disabling.
   * - Disabled: Disabled.
   * - DisableFailed: Disabling failed.
   * 
   * @example
   * Enabled
   */
  identifyStatus?: string;
  /**
   * @remarks
   * The database instance identity.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The identity of the member accounts to which the asset belongs.
   * 
   * @example
   * 123456789012****
   */
  memberAccount?: number;
  /**
   * @remarks
   * The port for the database connection.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The identifier of the cloud service type. 5: ApsaraDB RDS; 8: PolarDB; 27: PolarDB-X 2.0.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The ID of the region where the asset resides.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region where the asset resides.
   * 
   * @example
   * China (Zhangjiakou)
   */
  regionName?: string;
  /**
   * @remarks
   * The ID of the resource group to which the asset belongs.
   * 
   * @example
   * rg-acfmexample****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The identifier of the database tenant.
   * 
   * @example
   * tenant-example
   */
  tenantId?: string;
  /**
   * @remarks
   * The name of the database account used to connect to the data source.
   * 
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
   * @remarks
   * The page number of the returned data.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of records returned by the query.
   */
  items?: ListDataSourcesResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of records that can be returned for the current cursor-based pagination.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A compatible pagination cursor field. The ListDataSources operation uses page number-based pagination and does not rely on this field to determine whether more pages exist.
   * 
   * @example
   * token-example
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of records returned on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request identity, which is active when you invoke this API call.
   * 
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that meet the current statistics or query scope.
   * 
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

