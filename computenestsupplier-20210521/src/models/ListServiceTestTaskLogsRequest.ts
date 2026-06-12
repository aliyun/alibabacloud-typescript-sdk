// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceTestTaskLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * AAAAAWns8w4MmhzeptXVRG0PUEU=
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - **Ascending**: sorts the results in ascending order.
   * 
   * - **Descending** (default): sorts the results in descending order.
   * 
   * @example
   * Ascending
   */
  sortOrder?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * stt-568c2c5a687a409b977e
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      sortOrder: 'SortOrder',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      sortOrder: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

