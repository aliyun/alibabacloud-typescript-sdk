// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectionsRequest extends $dara.Model {
  /**
   * @remarks
   * The name prefix of the connection configurations to query. Supports prefix matching.
   * 
   * @example
   * connection-name
   */
  connectionNamePrefix?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Can be used together with NextToken to implement pagination.
   * 
   * - Default value: 10
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * When MaxResults is specified, NextToken is returned if there are more results to fetch.
   * 
   * - NextToken starts from 0 by default. Default value: 0.
   * 
   * @example
   * 0
   */
  nextToken?: string;
  /**
   * @remarks
   * Filters query results by connection type. Valid values: Http, MySQL, PostgreSQL, Elasticsearch. If left empty, connections of all types are returned.
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

