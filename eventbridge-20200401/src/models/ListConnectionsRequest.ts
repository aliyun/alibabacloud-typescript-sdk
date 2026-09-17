// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectionsRequest extends $dara.Model {
  /**
   * @remarks
   * The connection configuration name prefix used to filter results. Supports prefix matching.
   * 
   * @example
   * connection-name
   */
  connectionNamePrefix?: string;
  /**
   * @remarks
   * Excludes a single connection type. Valid values are the same as those for Type. Specify a single type name. Arrays or comma-separated values are not supported. For example, specify Http to exclude HTTP connections. If this parameter is not specified or is set to an empty string, no types are excluded. If this parameter is set to the same value as Type, an empty list is returned. Pagination and total count are calculated after filtering.
   * 
   * @example
   * Http
   */
  excludeType?: string;
  /**
   * @remarks
   * The maximum number of entries to return per request. You can use this parameter together with NextToken to implement pagination.
   * 
   * - Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * If the number of entries exceeds the value of MaxResults, NextToken is returned in the response.
   * 
   * - The NextToken value starts from 0. Default value: 0.
   * 
   * @example
   * 0
   */
  nextToken?: string;
  /**
   * @remarks
   * Filters query results by connection type. Valid values: Http, MySQL, PostgreSQL, Elasticsearch, OSS_TABLES, SLS, OTS, MaxCompute, MongoDB, Redis, SQLServer, ClickHouse, Oracle, Hive, Iceberg, lakehouse. If this parameter is not specified, all types are returned.
   * 
   * @example
   * Http
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      connectionNamePrefix: 'ConnectionNamePrefix',
      excludeType: 'ExcludeType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionNamePrefix: 'string',
      excludeType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

