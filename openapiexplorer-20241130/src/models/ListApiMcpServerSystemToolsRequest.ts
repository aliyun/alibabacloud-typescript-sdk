// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiMcpServerSystemToolsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return on each page. The maximum value is 100. The default value is 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to start the next query. Set this parameter to the NextToken value returned by the last API call.
   * 
   * > Do not specify this parameter for the first query. If a query does not return all results, pass the NextToken value from the previous response to the next query to continue.
   * 
   * @example
   * AAAAAZjtYxxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries to skip.
   * 
   * @example
   * 5
   */
  skip?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      skip: 'skip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      skip: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

