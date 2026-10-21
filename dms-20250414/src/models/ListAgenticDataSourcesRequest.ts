// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgenticDataSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Filters data sources by type. If you leave this parameter empty, no restriction is applied. Valid values: MYSQL, POSTGRESQL, ORACLE, SQLSERVER, MARIADB, POLARDB, POLARDB_POSTGRESQL, POLARDB_ORACLE, OCEANBASEX, DRDS, ADB_MYSQL, ADB_POSTGRESQL, CLICKHOUSE, SELECTDB, STARROCKS, HOLOGRES, MAXCOMPUTE, ES_REST, and TRINO.
   * 
   * @example
   * MYSQL
   */
  dbType?: string;
  /**
   * @remarks
   * Filters data sources by endpoint. If you leave this parameter empty, no restriction is applied.
   * 
   * @example
   * mysql.example.com
   */
  host?: string;
  /**
   * @remarks
   * Filters data sources by source. If you leave this parameter empty, no restriction is applied. Valid values:
   * - RDS: ApsaraDB instance
   * - PUBLIC_OWN: self-managed database on the public network
   * - ECS_OWN: self-managed database on an ECS instance
   * - GATEWAY: connected through Database Gateway
   * - VPC_IDC: connected over a VPC or IDC
   * 
   * @example
   * RDS
   */
  instanceSource?: string;
  /**
   * @remarks
   * The number of entries to return per page. Default value: 20. Maximum value: 200.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination cursor. Leave this parameter empty when you query the first page. When you query subsequent pages, pass the NextToken value returned from the previous request.
   * 
   * @example
   * page-2-token
   */
  nextToken?: string;
  /**
   * @remarks
   * Filters data sources by connection port. If you leave this parameter empty, no restriction is applied.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * Filters data sources by connection target name. The meaning of this parameter varies based on the data source type. If you leave this parameter empty, no restriction is applied.
   * 
   * @example
   * postgres
   */
  schema?: string;
  /**
   * @remarks
   * Performs a fuzzy search by data source name or endpoint. If you leave this parameter empty, no fuzzy search is performed.
   * 
   * @example
   * demo
   */
  searchKey?: string;
  /**
   * @remarks
   * Filters data sources by status. If you leave this parameter empty, no restriction is applied. Valid values:
   * - 0: normal
   * - -1: deleted
   * - -2: disabled
   * 
   * @example
   * 0
   */
  state?: number;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      host: 'Host',
      instanceSource: 'InstanceSource',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      port: 'Port',
      schema: 'Schema',
      searchKey: 'SearchKey',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      host: 'string',
      instanceSource: 'string',
      maxResults: 'number',
      nextToken: 'string',
      port: 'number',
      schema: 'string',
      searchKey: 'string',
      state: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

