// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectionsRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the connection configuration name. Supports fuzzy match by prefix.
   * 
   * @example
   * connection-name
   */
  connectionNamePrefix?: string;
  /**
   * @remarks
   * The maximum number of entries to return per request. You can use this parameter together with NextToken to implement paging.
   * 
   * - Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. If the number of results exceeds the value of MaxResults, a NextToken value is returned.
   * 
   * - The NextToken value starts from 0. Default value: 0.
   * 
   * @example
   * 0
   */
  nextToken?: string;
  /**
   * @remarks
   * Filters query results by connection type. Valid values: Http, MySQL, PostgreSQL, Elasticsearch, OSS_TABLES, SLS, OTS, MaxCompute, MongoDB, Redis, SQLServer, ClickHouse, Oracle, Hive, Iceberg, and lakehouse. If this parameter is not specified, all types are returned.
   * 
   * @example
   * Http
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      connectionNamePrefix: 'ConnectionNamePrefix',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionNamePrefix: 'string',
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

