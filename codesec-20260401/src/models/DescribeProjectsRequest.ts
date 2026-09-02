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
   * The pagination token. Do not specify this parameter or set it to an empty string for the first page. For subsequent pages, pass the nextToken value from the previous response without any modification. If the nextToken value in the response is empty, the last page has been reached.
   * 
   * @example
   * eyJ0IjoiMjAyNi0wNy0xNlQwNzo1MzozOC4wMjFaIiwiaSI6MTAwMDQ0OH0
   */
  nextToken?: string;
  /**
   * @remarks
   * The keyword for fuzzy match by project name or prompt.
   * 
   * @example
   * project
   */
  query?: string;
  /**
   * @remarks
   * The field by which to sort the results. Default value: last_scan_time.
   * 
   * Valid values:
   * 
   * *   last_scan_time: the time when a task was last created.
   * *   created_at: the time when the project was created.
   * *   updated_at: the time when the project was last modified.
   * 
   * @example
   * last_scan_time
   */
  sortBy?: string;
  /**
   * @remarks
   * The sort order. Default value: desc.
   * 
   * Valid values:
   * 
   * *   desc: descending order.
   * *   asc: ascending order.
   * 
   * @example
   * desc
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      query: 'query',
      sortBy: 'sortBy',
      sortOrder: 'sortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      query: 'string',
      sortBy: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

