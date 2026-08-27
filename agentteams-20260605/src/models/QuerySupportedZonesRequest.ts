// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySupportedZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 2
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page.
   * 
   * @example
   * null
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

