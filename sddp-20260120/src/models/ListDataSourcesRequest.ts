// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourcesRequest extends $dara.Model {
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
   * The current page number. Pages start from 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
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
   * The identifier of the data source in Data Security Center. You can obtain the value from the Items[].DataSourceId parameter in the response of the ListDataSources operation.
   * 
   * @example
   * ds-example-001
   */
  dataSourceId?: string;
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
   * The engine type. Valid values:
   * - **MySQL**
   * - **MariaDB**
   * - **Oracle**
   * - **PostgreSQL**
   * - **SQLServer**
   * 
   * @example
   * MySQL
   */
  engineType?: string;
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
   * The database instance identity. You can obtain the value from the Items[].InstanceId parameter in the response of the ListDataMaskingInstances operation.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * A reserved pagination parameter. The ListDataSources operation uses CurrentPage and PageSize for pagination. Omit this parameter when you call the operation.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A reserved pagination cursor parameter. The ListDataSources operation uses CurrentPage and PageSize for pagination. Omit this parameter when you call the operation.
   * 
   * @example
   * token-example
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Keep other filter conditions consistent when you query the next page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * The code of the cloud service. Column encryption supports ApsaraDB RDS, PolarDB, and PolarDB-X 2.0. If this parameter is specified together with ProductId, the values must match.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The identifier of the cloud service type. 5: ApsaraDB RDS; 8: PolarDB; 27: PolarDB-X 2.0. If this parameter is specified together with ProductCode, the values must match.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The source IP address of the call.
   * 
   * @example
   * 192.0.2.1
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      connectStatus: 'ConnectStatus',
      currentPage: 'CurrentPage',
      dataAssetId: 'DataAssetId',
      dataSourceId: 'DataSourceId',
      dbName: 'DbName',
      engineType: 'EngineType',
      identifyStatus: 'IdentifyStatus',
      instanceId: 'InstanceId',
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      port: 'Port',
      productCode: 'ProductCode',
      productId: 'ProductId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectStatus: 'string',
      currentPage: 'number',
      dataAssetId: 'string',
      dataSourceId: 'string',
      dbName: 'string',
      engineType: 'string',
      identifyStatus: 'string',
      instanceId: 'string',
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageSize: 'number',
      port: 'number',
      productCode: 'string',
      productId: 'number',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

