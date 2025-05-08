// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceTestTaskLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of items to return per page when paginating results. The maximum is 100, and the default is 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * AAAAAWns8w4MmhzeptXVRG0PUEU=
   */
  nextToken?: string;
  /**
   * @remarks
   * Sort Order. Possible values:
   * 
   * + Ascending: Ascending order
   * 
   * + Descending (default value): Descending order
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

