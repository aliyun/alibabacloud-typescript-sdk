// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * Valid values: 1 to 200. Default value: 30.
   * 
   * @example
   * 4
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which you want to start the query. If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * 4
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
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

