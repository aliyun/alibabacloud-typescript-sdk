// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationProcessDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paged query. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time of the query based on the task completion time. Unit: milliseconds.
   * 
   * @example
   * 1731555850000
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query based on the task creation time. Unit: milliseconds.
   * 
   * @example
   * 1731469330000
   */
  startTime?: number;
  /**
   * @remarks
   * The list of operation subtask status codes.
   */
  statusCodes?: number[];
  /**
   * @remarks
   * The list of operation task IDs. You can call the ListOperationProcess operation to obtain valid values. This parameter is required. If this parameter is not specified, the API returns 400 CspmParamIllegal.
   */
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      lang: 'Lang',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      statusCodes: 'StatusCodes',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      lang: 'string',
      pageSize: 'number',
      startTime: 'number',
      statusCodes: { 'type': 'array', 'itemType': 'number' },
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.statusCodes)) {
      $dara.Model.validateArray(this.statusCodes);
    }
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

