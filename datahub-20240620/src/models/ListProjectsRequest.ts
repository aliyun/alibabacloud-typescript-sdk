// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter keyword for a paged query.
   * 
   * @example
   * dh
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of records to return in a paged query.
   * 
   * @example
   * 5
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. If NextToken is empty, paged query starts from the beginning. Otherwise, paged query starts from where the previous query ended based on the token.
   * 
   * @example
   * 9892074a2a89600ae4b0d5a34fb99a3f
   */
  nextToken?: string;
  /**
   * @remarks
   * Specifies whether to return only primary key information.
   * 
   * @example
   * false
   */
  pure?: boolean;
  /**
   * @remarks
   * The number of records to skip in a paged query.
   * 
   * @example
   * 1
   */
  skip?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pure: 'Pure',
      skip: 'Skip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pure: 'boolean',
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

