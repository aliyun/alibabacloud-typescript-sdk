// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiDestinationsRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the API destination name.
   * 
   * @example
   * api-demo
   */
  apiDestinationNamePrefix?: string;
  /**
   * @remarks
   * The connection name.
   * 
   * @example
   * connection-name
   */
  connectionName?: string;
  /**
   * @remarks
   * The maximum number of entries to be returned in a call. You can use this parameter and NextToken to implement paging.
   * 
   * *   Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * If you set Limit and excess return values exist, this parameter is returned.
   * 
   * *   Default value: 0.
   * 
   * @example
   * 0
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      apiDestinationNamePrefix: 'ApiDestinationNamePrefix',
      connectionName: 'ConnectionName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDestinationNamePrefix: 'string',
      connectionName: 'string',
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

