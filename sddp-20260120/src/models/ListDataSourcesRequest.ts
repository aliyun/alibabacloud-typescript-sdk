// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourcesRequest extends $dara.Model {
  /**
   * @example
   * Success
   */
  connectStatus?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
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
   * business_db
   */
  dbName?: string;
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
   * zh
   */
  lang?: string;
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
      identifyStatus: 'IdentifyStatus',
      instanceId: 'InstanceId',
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
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
      identifyStatus: 'string',
      instanceId: 'string',
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageSize: 'number',
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

