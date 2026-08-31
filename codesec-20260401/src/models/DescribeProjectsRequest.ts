// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Do not specify this parameter or set it to an empty string for the first page. For subsequent pages, pass the nextToken value from the previous response without any modification. If the nextToken in the response is empty, the last page has been reached.
   * 
   * @example
   * eyJ0IjoiMjAyNi0wNy0xNlQwNzo1MzozOC4wMjFaIiwiaSI6MTAwMDQ0OH0
   */
  nextToken?: string;
  /**
   * @remarks
   * Fuzzy matches projects by project name or prompt.
   * 
   * @example
   * project
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

