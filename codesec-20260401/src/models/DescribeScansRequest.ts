// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScansRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 10
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
   * The task status. Valid values:
   * * running: Running.
   * * completed: Completed.
   * * failed: Failed.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * name
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      status: 'status',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

