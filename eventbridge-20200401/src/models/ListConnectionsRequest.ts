// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectionsRequest extends $dara.Model {
  /**
   * @remarks
   * The key word that you specify to query connections. Connections can be queried by prefixes.
   * 
   * @example
   * connection-name
   */
  connectionNamePrefix?: string;
  /**
   * @remarks
   * The maximum number of entries to be returned in a single call. You can use this parameter and the NextToken parameter to implement paging.
   * 
   * *   Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * If you set the Limit parameter and excess return values exist, this parameter is returned.
   * 
   * *   Default value: 0.
   * 
   * @example
   * 0
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      connectionNamePrefix: 'ConnectionNamePrefix',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionNamePrefix: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

