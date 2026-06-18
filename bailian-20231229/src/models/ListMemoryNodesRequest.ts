// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemoryNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned from a previous request. If specified, the query results are paginated based on the previous request.
   * 
   * @example
   * dc270401186b433f975d7e1faaa34e0e
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

